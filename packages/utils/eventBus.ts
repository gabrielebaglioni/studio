/**
 * Event Bus - Communication between microfrontends
 * Optional enhancement for UX, not required for core functionality
 * Source of truth remains the URL (slug in path)
 */

import type { ProjectId } from '@qia/types';

/**
 * Event name for project change notifications
 */
export const PROJECT_CHANGED_EVENT = 'mfe:activeProjectChanged';

/**
 * Event payload for project change
 */
export interface ProjectChangedEventDetail {
  projectId: ProjectId;
  previousProjectId?: ProjectId;
  timestamp: number;
}

/**
 * Emit project changed event
 * @param projectId - New active project ID
 * @param previousProjectId - Previous project ID (optional)
 */
export function emitProjectChanged(projectId: ProjectId, previousProjectId?: ProjectId): void {
  const detail: ProjectChangedEventDetail = {
    projectId,
    previousProjectId,
    timestamp: Date.now(),
  };

  // CustomEvent for same-window communication
  const event = new CustomEvent(PROJECT_CHANGED_EVENT, { detail });
  window.dispatchEvent(event);

  // BroadcastChannel for cross-tab communication (fallback)
  try {
    const channel = new BroadcastChannel('mfe-project-channel');
    channel.postMessage({ type: PROJECT_CHANGED_EVENT, detail });
    channel.close();
  } catch (error) {
    // BroadcastChannel not supported, silently fail
    console.debug('BroadcastChannel not available:', error);
  }
}

/**
 * Listen for project changed events
 * @param callback - Callback function to handle project changes
 * @returns Cleanup function to remove event listener
 */
export function onProjectChanged(
  callback: (detail: ProjectChangedEventDetail) => void
): () => void {
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<ProjectChangedEventDetail>;
    if (customEvent.detail) {
      callback(customEvent.detail);
    }
  };

  window.addEventListener(PROJECT_CHANGED_EVENT, handler);

  // Also listen to BroadcastChannel
  let channel: BroadcastChannel | null = null;
  try {
    channel = new BroadcastChannel('mfe-project-channel');
    channel.onmessage = (event) => {
      if (event.data?.type === PROJECT_CHANGED_EVENT && event.data?.detail) {
        callback(event.data.detail);
      }
    };
  } catch (error) {
    console.debug('BroadcastChannel not available:', error);
  }

  // Return cleanup function
  return () => {
    window.removeEventListener(PROJECT_CHANGED_EVENT, handler);
    if (channel) {
      channel.close();
    }
  };
}

