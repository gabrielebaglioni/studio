/**
 * Animation Utilities
 * Single Responsibility: Animation helper functions
 * Separation of Concerns: Isolated animation logic
 */

/**
 * Wait for next animation frame
 * Utility for async animation operations
 */
export function waitForAnimationFrame(): Promise<void> {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

/**
 * Hard reset scroll to page top
 * Ensures scroll position is reset even with layout timing issues
 */
export async function scrollToPageTop(): Promise<void> {
  // Immediate attempt
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Wait for paint/layout to settle
  await waitForAnimationFrame();
  await waitForAnimationFrame();

  // Final force
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

