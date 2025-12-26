'use client';

import { memo, useMemo, useContext, createContext } from 'react';
import Image from 'next/image';
import { getShellHref } from '@qia/utils/routes';
import { CrossAppLink } from '@qia/utils';

/**
 * Logo mapping for each hero section
 * Each hero has a different colored logo
 */
const LOGO_MAP = {
  CLIMATE: '/Whisk_f3725ea2aa626e8a15545e2000cf3014dr_preview_rev_1.svg',
  FOOD: '/Whisk_cb0dfa88022716bbd5641ed762889bd0dr_preview_rev_1.svg',
  SOCIAL: '/Whisk_796ac715016ef35a10040fe533c014b2dr_preview_rev_1.svg',
} as const;

/**
 * Color variants for each hero section
 * Based on the 5 brand colors
 */
const HERO_COLORS = {
  CLIMATE: {
    primary: '#10B2D7', // Pacific Cyan
    accent: '#175F8F',   // Crayola
    text: '#10B2D7',    // Pacific Cyan
  },
  FOOD: {
    primary: '#BFD380', // Mindaro
    accent: '#9DEE00',  // Spring Bud
    text: '#BFD380',    // Mindaro
  },
  SOCIAL: {
    primary: '#9DEE00', // Spring Bud
    accent: '#10B2D7',  // Pacific Cyan
    text: '#9DEE00',    // Spring Bud
  },
} as const;

type HeroName = 'CLIMATE' | 'FOOD' | 'SOCIAL';

/**
 * Optional Hero Context Interface
 * This allows shell app to provide hero context via a provider
 */
interface HeroContextValue {
  activeHero: HeroName;
}

const HeroContext = createContext<HeroContextValue | null>(null);

/**
 * Provider for hero context (used in shell app)
 * This allows the header to access hero state without direct dependency
 */
export const HeaderHeroProvider = HeroContext.Provider;

/**
 * Hook to use hero context (returns null if not available)
 */
function useHeroContext(): HeroContextValue | null {
  return useContext(HeroContext);
}

/**
 * Shared Header Component
 * Used across all apps (shell, details, checkout)
 * 
 * Features:
 * - Logo/brand link to home
 * - Dynamic colors and logo in shell app (based on hero context)
 * - Static design in details/checkout apps
 * - Responsive design
 * - Cross-app navigation support
 * 
 * Usage in shell app:
 * ```tsx
 * import { Header, HeaderHeroProvider } from '@qia/ui';
 * import { useHero } from '@/contexts/hero-context';
 * 
 * function ShellLayout() {
 *   const { activeHero } = useHero();
 *   return (
 *     <HeaderHeroProvider value={{ activeHero }}>
 *       <Header />
 *     </HeaderHeroProvider>
 *   );
 * }
 * ```
 */
export const Header = memo(function Header() {
  // Try to get hero context (only available in shell app via HeaderHeroProvider)
  const heroContext = useHeroContext();
  const activeHero = heroContext?.activeHero || 'CLIMATE';
  
  // Memoize colors and logo path
  const colors = useMemo(() => HERO_COLORS[activeHero] || HERO_COLORS.CLIMATE, [activeHero]);
  const logoPath = useMemo(() => LOGO_MAP[activeHero] || LOGO_MAP.CLIMATE, [activeHero]);
  
  // Check if we're in shell app (has hero context)
  const isShellApp = heroContext !== null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="w-full flex h-20 items-center justify-center px-4 md:px-6 lg:px-8">
        {/* Logo and Brand Name - Centered */}
        <CrossAppLink 
          href={getShellHref()}
          className="flex items-center gap-4 group transition-opacity hover:opacity-80"
        >
          {/* Logo - always visible, dynamic in shell, default in other apps */}
          <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 overflow-hidden flex items-center justify-center">
            <div
              className="relative w-full h-full"
              style={{
                transform: 'scale(1.2)',
                transformOrigin: 'center center',
              }}
            >
              <Image
                src={logoPath}
                alt="Quick Impact Agency Logo"
                fill
                className="object-contain transition-opacity duration-500"
                priority
                unoptimized
              />
            </div>
          </div>
          <span 
            className="font-headline text-xl font-black tracking-tight md:text-2xl transition-colors duration-500"
            style={isShellApp ? { color: colors.text } : undefined}
          >
            Quick Impact Agency
          </span>
        </CrossAppLink>
      </div>
    </header>
  );
});

