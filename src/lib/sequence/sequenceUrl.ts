'use client';

import type { Program } from '@/lib/data';

type SequenceConfig = Program['sequence'];

const startIndexCache = new Map<string, number>();

/**
 * Pads a number with leading zeros to a specified length.
 */
function pad(num: number, length: number): string {
  return num.toString().padStart(length, '0');
}

/**
 * Probes to determine if the sequence starts at frame 0 or 1.
 * Caches the result to avoid re-testing for the same sequence.
 */
async function getStartIndex(
  sequence: SequenceConfig,
  signal?: AbortSignal
): Promise<number> {
  const { baseUrl } = sequence;
  if (startIndexCache.has(baseUrl)) {
    return startIndexCache.get(baseUrl)!;
  }

  // URLs for frame 0 and 1
  const url0 = `${baseUrl}${pad(0, sequence.padLength)}${sequence.fileExtension}`;
  const url1 = `${baseUrl}${pad(1, sequence.padLength)}${sequence.fileExtension}`;

  try {
    const res = await fetch(url0, { method: 'HEAD', signal });
    if (res.ok) {
      startIndexCache.set(baseUrl, 0);
      return 0;
    }
  } catch (e) {
    // A network error or abort, we can't be sure, so don't assume 1.
    // Let's try 1 just in case, but don't cache on network error.
  }

  // Fallback to trying frame 1 or assuming 1 if frame 0 fails.
  try {
    const res = await fetch(url1, { method: 'HEAD', signal });
    if (res.ok) {
      startIndexCache.set(baseUrl, 1);
      return 1;
    }
  } catch (e) {
    // If both fail, we have a problem. Let's default to 1 as per the original hook's logic.
  }

  // Default assumption based on original implementation.
  startIndexCache.set(baseUrl, 1);
  return 1;
}

/**
 * Builds the full URL for a specific frame index, accounting for the detected start index.
 */
export async function buildFrameUrl(
  sequence: SequenceConfig,
  frameIndex: number, // 0-based index from our logic
  signal?: AbortSignal
): Promise<string> {
  const startIndex = await getStartIndex(sequence, signal);
  const actualFrameNumber = frameIndex + startIndex;
  return `${sequence.baseUrl}${pad(actualFrameNumber, sequence.padLength)}${sequence.fileExtension}`;
}
