'use client';

import { LRUCache } from 'lru-cache';

type Frame = ImageBitmap | HTMLImageElement;

// LRUCache options: Max 200 items, items expire after 5 minutes.
const options = {
  max: 200,
  ttl: 1000 * 60 * 5, 
};

/**
 * A singleton cache manager for animation frames.
 * - In-memory LRU cache for decoded frames.
 * - Deduplication of in-flight requests.
 * - Concurrency limiting for preloading.
 */
class SequenceCacheManager {
  private cache: LRUCache<string, Frame>;
  private inFlightRequests: Map<string, Promise<Frame>>;
  private preloadQueue: { url: string; resolve: (frame: Frame) => void; reject: (reason?: any) => void; }[] = [];
  private activePreloads = 0;
  private concurrencyLimit = 4;

  constructor() {
    this.cache = new LRUCache(options);
    this.inFlightRequests = new Map();
  }

  /**
   * Retrieves a frame from the cache. Returns undefined if not present.
   */
  get(url: string): Frame | undefined {
    return this.cache.get(url);
  }

  /**
   * Loads a single frame. This method deduplicates requests for the same URL.
   * If a request for a URL is already in flight, it returns the existing promise.
   */
  load(url: string, signal?: AbortSignal): Promise<Frame> {
    // Return from cache if available
    const cachedFrame = this.get(url);
    if (cachedFrame) {
      return Promise.resolve(cachedFrame);
    }

    // Return in-flight promise if available
    if (this.inFlightRequests.has(url)) {
      return this.inFlightRequests.get(url)!;
    }

    const promise = this._loadImage(url, signal).then((frame) => {
      this.cache.set(url, frame);
      this.inFlightRequests.delete(url);
      return frame;
    }).catch((err) => {
      this.inFlightRequests.delete(url);
      // Don't cache errors, just propagate them.
      throw err;
    });

    this.inFlightRequests.set(url, promise);
    return promise;
  }
  
  /**
   * Preloads a set of URLs with a concurrency limit.
   */
  preload(urls: string[]): void {
    for (const url of urls) {
      // Only queue for preloading if it's not already cached or in-flight
      if (!this.cache.has(url) && !this.inFlightRequests.has(url)) {
        this.enqueuePreload(url);
      }
    }
  }
  
  private enqueuePreload(url: string): void {
     // Avoid adding duplicates to the queue
    if (this.preloadQueue.some(item => item.url === url)) {
        return;
    }
    
    const promise = new Promise<Frame>((resolve, reject) => {
      this.preloadQueue.push({ url, resolve, reject });
    });

    this.inFlightRequests.set(url, promise);
    this.processPreloadQueue();
  }
  
  private processPreloadQueue(): void {
    while (this.activePreloads < this.concurrencyLimit && this.preloadQueue.length > 0) {
      const item = this.preloadQueue.shift();
      if (item) {
        this.activePreloads++;
        this._loadImage(item.url)
          .then(frame => {
            this.cache.set(item.url, frame);
            item.resolve(frame);
          })
          .catch(err => {
            item.reject(err);
          })
          .finally(() => {
            this.activePreloads--;
            // Since a slot is free, process next item
            this.processPreloadQueue(); 
          });
      }
    }
  }


  /**
   * Core image loading logic. Prefers createImageBitmap for performance.
   */
  private async _loadImage(url: string, signal?: AbortSignal): Promise<Frame> {
    if (typeof window.createImageBitmap === 'function') {
      try {
        const response = await fetch(url, { signal, mode: 'cors' });
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        const blob = await response.blob();
        return await createImageBitmap(blob);
      } catch (error) {
        console.error(`[SequenceCache] createImageBitmap failed for ${url}, falling back to HTMLImageElement.`, error);
        return this._loadImageElement(url, signal);
      }
    } else {
      return this._loadImageElement(url, signal);
    }
  }

  /**
   * Fallback loader using HTMLImageElement.
   */
  private _loadImageElement(url: string, signal?: AbortSignal): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      const onAbort = () => {
        img.src = ''; // Stop loading
        reject(new DOMException('Aborted', 'AbortError'));
      };

      if (signal) {
        signal.addEventListener('abort', onAbort, { once: true });
      }

      img.onload = () => {
        if (signal) signal.removeEventListener('abort', onAbort);
        resolve(img);
      };

      img.onerror = (err) => {
        if (signal) signal.removeEventListener('abort', onAbort);
        reject(err);
      };
      
      img.src = url;
    });
  }
}

// Export a singleton instance of the cache manager.
export const sequenceCache = new SequenceCacheManager();
