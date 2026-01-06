"use client";

import type { Program } from "@/lib/data";

type SequenceConfig = Program["sequence"];

/** Pads a number with leading zeros. */
function pad(num: number, length: number): string {
  return num.toString().padStart(length, "0");
}

/**
 * Builds a frame URL for a 0-based app index.
 * Supabase filenames are 1-based: frame_000001.webp is the first frame.
 */
export function buildFrameUrl(sequence: SequenceConfig, frameIndex0: number): string {
  const actualFrameNumber = frameIndex0 + 1; // 1-based filenames
  return `${sequence.baseUrl}${pad(actualFrameNumber, sequence.padLength)}${sequence.fileExtension}`;
}