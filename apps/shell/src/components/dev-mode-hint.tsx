'use client';

import { useEffect, useState } from 'react';

/**
 * Dev Mode Hint Component
 * Shows the current development mode (gateway/standalone) in development
 * Only visible in development mode
 */
export function DevModeHint() {
  const [devMode, setDevMode] = useState<'gateway' | 'standalone' | 'auto' | 'production'>('production');
  const [currentPort, setCurrentPort] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const port = window.location.port || '';
      setCurrentPort(port);

      // Detect mode based on env var and current port
      const envMode = process.env.NEXT_PUBLIC_DEV_MODE;
      if (envMode === 'gateway') {
        setDevMode('gateway');
      } else if (envMode === 'standalone') {
        setDevMode('standalone');
      } else if (port === '3024') {
        setDevMode('auto'); // Gateway mode (auto-detected)
      } else if (['3000', '3001', '3002'].includes(port)) {
        setDevMode('auto'); // Standalone mode (auto-detected)
      } else {
        setDevMode('production');
      }
    }
  }, []);

  // Don't render until mounted (avoid hydration mismatch)
  if (!mounted) {
    return null;
  }

  // Don't show in production
  if (devMode === 'production') {
    return null;
  }

  const getModeLabel = () => {
    const envMode = process.env.NEXT_PUBLIC_DEV_MODE;
    if (envMode === 'gateway') return 'Gateway Mode';
    if (envMode === 'standalone') return 'Standalone Mode';
    if (currentPort === '3024') return 'Gateway Mode (auto)';
    if (['3000', '3001', '3002'].includes(currentPort)) return 'Standalone Mode (auto)';
    return 'Development Mode';
  };

  const getModeDescription = () => {
    if (currentPort === '3024' || process.env.NEXT_PUBLIC_DEV_MODE === 'gateway') {
      return 'Links are relative. Use http://localhost:3024 for all apps.';
    }
    if (['3000', '3001', '3002'].includes(currentPort) || process.env.NEXT_PUBLIC_DEV_MODE === 'standalone') {
      return `Links cross-app change port (3000/3001/3002). Current: ${currentPort || 'unknown'}`;
    }
    return '';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs rounded-lg border-2 border-blue-500/50 bg-blue-950/90 p-3 text-xs text-white shadow-lg backdrop-blur-sm">
      <div className="font-semibold text-blue-300">{getModeLabel()}</div>
      <div className="mt-1 text-blue-200/80">{getModeDescription()}</div>
      {currentPort && (
        <div className="mt-1 text-xs text-blue-400/60">Port: {currentPort}</div>
      )}
    </div>
  );
}

