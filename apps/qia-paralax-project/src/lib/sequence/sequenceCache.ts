"use client";

import { LRUCache } from "lru-cache";
import type { Program } from "@/lib/data";
import { buildFrameUrl } from "@/lib/sequence/sequenceUrl";

export type Frame = HTMLImageElement;

type SequenceConfig = Program["sequence"];

type PreloadAllOptions = {
  concurrency: number;
  signal?: AbortSignal;
  onProgress?: (pct: number) => void;
};

/**
 * Best-practice caching (big-brand style):
 * - Pinned cache for "hot window" frames (never evicted, guarantees instant switch).
 * - LRU cache for everything else (adaptive size based on device capabilities).
 * - Deduplication for in-flight loads.
 * - Failed URL short TTL to avoid spam-retry loops on 404.
 *
 * NOTE:
 * - Preloading *decoded* frames for all programs is heavy on low-end devices.
 * - We still support it, but the cache is adaptive, and pinned frames always win.
 */
class SequenceCacheManager {
  /** programName -> precomputed urls */
  private programs = new Map<string, { sequence: SequenceConfig; urls: string[] }>();

  /** pinned frames (never evicted) */
  private pinned = new Map<string, Frame>();

  /** LRU for non-pinned frames */
  private lru = new LRUCache<string, Frame>({
    max: 360,
    ttl: 1000 * 60 * 10,
  });

  /** URLs that failed recently (avoid infinite retries) */
  private failed = new LRUCache<string, true>({
    max: 4000,
    ttl: 1000 * 30,
  });

  /** Deduplicate loads */
  private inFlight = new Map<string, Promise<Frame>>();

  /** Simple subscription for UI redraw when new frames arrive */
  private version = 0;
  private listeners = new Set<() => void>();

  /** Device-tuned options */
  private concurrencyLimit = 6;

  /**
   * Configure cache limits based on device.
   * Brands typically adapt using:
   * - navigator.deviceMemory
   * - network saveData / effectiveType
   * - mobile breakpoint
   */
  configureForDevice(isMobile: boolean) {
    const deviceMemory = (navigator as any).deviceMemory as number | undefined;
    const conn = (navigator as any).connection;
    const saveData: boolean | undefined = conn?.saveData;

    // LRU max entries: tuned for "decoded images in memory"
    // (Pinned frames are extra, and should be kept small.)
    let max = 480;

    if (isMobile) max = 260;
    if (deviceMemory && deviceMemory <= 2) max = isMobile ? 160 : 240;
    if (saveData) max = Math.min(max, 180);

    // Concurrency: avoid decode/GC spikes on low-end
    let conc = 6;
    const cores = navigator.hardwareConcurrency || 4;
    conc = Math.max(2, Math.min(10, Math.floor(cores / 2)));

    if (isMobile) conc = Math.min(conc, 4);
    if (deviceMemory && deviceMemory <= 2) conc = Math.min(conc, 3);
    if (saveData) conc = Math.min(conc, 2);

    this.lru = new LRUCache<string, Frame>({
      max,
      ttl: 1000 * 60 * 10,
    });

    this.concurrencyLimit = conc;

    // Keep pinned as-is (small hot windows)
    this.bump();
  }

  /**
   * Initialize programs registry and precompute URLs.
   * Must be called once at app start.
   */
  init(programList: Program[]) {
    this.programs.clear();

    for (const p of programList) {
      const urls: string[] = new Array(p.sequence.frameCount);
      for (let i = 0; i < p.sequence.frameCount; i++) {
        urls[i] = buildFrameUrl(p.sequence, i);
      }
      this.programs.set(p.name, { sequence: p.sequence, urls });
    }

    this.bump();
  }

  /**
   * Subscribe to cache updates (frames arriving).
   * Used by Hero to redraw even without scroll.
   */
  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  /**
   * Version counter for useSyncExternalStore.
   */
  getVersion = () => this.version;

  /**
   * Notify UI that cache changed.
   */
  private bump() {
    this.version++;
    for (const l of this.listeners) l();
  }

  /**
   * Get url for program/frame (0-based index).
   */
  private urlFor(programName: string, frameIndex0: number): string {
    const entry = this.programs.get(programName);
    if (!entry) throw new Error(`sequenceCache: program not initialized: ${programName}`);
    const idx = Math.max(0, Math.min(entry.urls.length - 1, frameIndex0));
    return entry.urls[idx];
  }

  /**
   * Get a frame synchronously from cache (pinned first, then LRU).
   */
  getFrame(programName: string, frameIndex0: number): Frame | undefined {
    const url = this.urlFor(programName, frameIndex0);
    return this.pinned.get(url) ?? this.lru.get(url);
  }

  /**
   * Check if frame exists in cache (pinned or LRU).
   */
  hasFrame(programName: string, frameIndex0: number): boolean {
    const url = this.urlFor(programName, frameIndex0);
    return this.pinned.has(url) || this.lru.has(url);
  }

  /**
   * Pin a range of frames so they can NEVER be evicted.
   * This guarantees instant switching and "no flashing".
   *
   * Keep this window small (e.g. 0..24) per program.
   */
  pinRange(programName: string, from0: number, to0: number) {
    const entry = this.programs.get(programName);
    if (!entry) return;

    const from = Math.max(0, from0);
    const to = Math.min(entry.urls.length - 1, to0);

    for (let i = from; i <= to; i++) {
      const url = entry.urls[i];
      // If already in LRU, move it to pinned to protect it.
      const existing = this.lru.get(url);
      if (existing) {
        this.lru.delete(url);
        this.pinned.set(url, existing);
      }
    }

    this.bump();
  }

  /**
   * True if URL is being loaded.
   */
  isInFlightUrl(url: string) {
    return this.inFlight.has(url);
  }

  /**
   * Ensure a frame is loaded & cached.
   * If the frame belongs to a pinned range, it will be stored in pinned.
   */
  ensureFrame(programName: string, frameIndex0: number, signal?: AbortSignal): Promise<Frame> {
    const url = this.urlFor(programName, frameIndex0);

    const pinned = this.pinned.get(url);
    if (pinned) return Promise.resolve(pinned);

    const cached = this.lru.get(url);
    if (cached) return Promise.resolve(cached);

    if (this.failed.has(url)) {
      return Promise.reject(new Error(`sequenceCache: url previously failed: ${url}`));
    }

    const inflight = this.inFlight.get(url);
    if (inflight) return inflight;

    const p = this.loadImageElement(url, signal)
      .then((img) => {
        // Store in pinned if it is pinned OR if caller later pins it (we keep it simple:
        // if already pinned by URL, store pinned; else LRU)
        if (this.pinned.has(url)) this.pinned.set(url, img);
        else this.lru.set(url, img);

        this.inFlight.delete(url);
        this.bump();
        return img;
      })
      .catch((err) => {
        this.inFlight.delete(url);
        if (!(err instanceof DOMException && err.name === "AbortError")) this.failed.set(url, true);
        throw err;
      });

    this.inFlight.set(url, p);
    return p;
  }

  /**
   * Preload around a frame (useful while scrolling).
   */
  preloadAround(programName: string, center0: number, ahead: number, behind: number) {
    const entry = this.programs.get(programName);
    if (!entry) return;

    const from = Math.max(0, center0 - behind);
    const to = Math.min(entry.urls.length - 1, center0 + ahead);

    const urls: string[] = [];
    for (let i = from; i <= to; i++) {
      const url = entry.urls[i];
      if (this.pinned.has(url) || this.lru.has(url) || this.inFlight.has(url) || this.failed.has(url)) continue;
      urls.push(url);
    }

    if (!urls.length) return;
    void this.preloadUrls(urls);
  }

  /**
   * Preload ALL frames (decoded).
   * Use with adaptive limits — pinned windows ensure UX even if LRU evicts older frames.
   */
  async preloadAll(opts: PreloadAllOptions) {
    const { concurrency, signal, onProgress } = opts;

    // Respect device cap
    const conc = Math.max(1, Math.min(concurrency, this.concurrencyLimit));

    const urls: string[] = [];
    for (const [, entry] of this.programs) {
      for (const url of entry.urls) {
        if (this.pinned.has(url) || this.lru.has(url) || this.failed.has(url)) continue;
        urls.push(url);
      }
    }

    const total = urls.length;
    if (total === 0) {
      onProgress?.(100);
      return;
    }

    let done = 0;
    const bump = () => onProgress?.(Math.min(100, (done / total) * 100));

    await this.asyncPool(conc, urls, async (url) => {
      if (signal?.aborted) return;

      try {
        // We do not know programName here, but pinned is URL-based:
        // if URL exists in pinned set, it will be stored pinned.
        await this.ensureUrl(url, signal);
      } catch {
        // ignore per-url failures
      } finally {
        done++;
        bump();
      }
    });

    onProgress?.(100);
  }

  /**
   * Ensure URL directly (internal).
   * This is used by preloadAll which already has URLs.
   */
  private ensureUrl(url: string, signal?: AbortSignal): Promise<Frame> {
    const pinned = this.pinned.get(url);
    if (pinned) return Promise.resolve(pinned);

    const cached = this.lru.get(url);
    if (cached) return Promise.resolve(cached);

    if (this.failed.has(url)) {
      return Promise.reject(new Error(`sequenceCache: url previously failed: ${url}`));
    }

    const inflight = this.inFlight.get(url);
    if (inflight) return inflight;

    const p = this.loadImageElement(url, signal)
      .then((img) => {
        if (this.pinned.has(url)) this.pinned.set(url, img);
        else this.lru.set(url, img);

        this.inFlight.delete(url);
        this.bump();
        return img;
      })
      .catch((err) => {
        this.inFlight.delete(url);
        if (!(err instanceof DOMException && err.name === "AbortError")) this.failed.set(url, true);
        throw err;
      });

    this.inFlight.set(url, p);
    return p;
  }

  /**
   * Internal helper: preload a list of URLs with concurrency limit.
   */
  private async preloadUrls(urls: string[]) {
    const conc = Math.max(1, this.concurrencyLimit);
    await this.asyncPool(conc, urls, async (url) => {
      try {
        await this.ensureUrl(url);
      } catch {
        // ignore
      }
    });
  }

  /**
   * Concurrency pool.
   */
  private async asyncPool<T>(
    limit: number,
    items: T[],
    worker: (item: T) => Promise<void>
  ): Promise<void> {
    const executing = new Set<Promise<void>>();

    for (const item of items) {
      const p = worker(item);
      executing.add(p);

      const cleanup = () => executing.delete(p);
      p.then(cleanup).catch(cleanup);

      if (executing.size >= limit) {
        await Promise.race(executing);
      }
    }

    await Promise.allSettled([...executing]);
  }

  /**
   * Image loader using HTMLImageElement.
   * No forced crossOrigin to avoid hard failures with missing CORS headers.
   */
  private loadImageElement(url: string, signal?: AbortSignal): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();

      const onAbort = () => {
        img.src = "";
        reject(new DOMException("Aborted", "AbortError"));
      };

      if (signal) signal.addEventListener("abort", onAbort, { once: true });

      img.onload = () => {
        if (signal) signal.removeEventListener("abort", onAbort);
        resolve(img);
      };

      img.onerror = (e) => {
        if (signal) signal.removeEventListener("abort", onAbort);
        reject(e);
      };

      img.src = url;
    });
  }
}

export const sequenceCache = new SequenceCacheManager();

/**
 * DPR best practice:
 * - Desktop: cap at 2
 * - Mobile: cap tighter to reduce canvas fill + decode cost
 */
export function getAdaptiveDpr(isMobile: boolean): number {
  const dpr = window.devicePixelRatio || 1;
  if (!isMobile) return Math.min(2, dpr);

  const deviceMemory = (navigator as any).deviceMemory as number | undefined;
  if (deviceMemory && deviceMemory <= 2) return Math.min(1.25, dpr);

  return Math.min(1.5, dpr);
}

/**
 * Concurrency best practice:
 * - Desktop: higher
 * - Mobile: lower
 * - saveData / low memory: lowest
 */
export function getAdaptiveConcurrency(isMobile: boolean): number {
  const conn = (navigator as any).connection;
  const saveData: boolean | undefined = conn?.saveData;
  const effectiveType: string | undefined = conn?.effectiveType;

  const deviceMemory = (navigator as any).deviceMemory as number | undefined;
  const cores = navigator.hardwareConcurrency || 4;

  let base = Math.max(2, Math.min(10, Math.floor(cores / 2)));

  if (isMobile) base = Math.min(base, 4);
  if (deviceMemory && deviceMemory <= 2) base = Math.min(base, 3);
  if (saveData) base = Math.min(base, 2);
  if (effectiveType === "2g" || effectiveType === "slow-2g") base = 1;

  return Math.max(1, base);
}

export function initSequenceCache(programs: Program[]) {
  sequenceCache.init(programs);
}