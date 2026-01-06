import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

type HeroName = 'CLIMATE' | 'FOOD' | 'SOCIAL';

interface HeroContextType {
  activeHero: HeroName;
  setActiveHero: (hero: HeroName) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

/**
 * HeroProvider with optimized context value
 * Best practice: Memoize context value to prevent unnecessary re-renders
 */
export function HeroProvider({ children }: { children: ReactNode }) {
  const [activeHero, setActiveHeroState] = useState<HeroName>('CLIMATE');

  // Memoize setActiveHero to prevent context value recreation
  const setActiveHero = useCallback((hero: HeroName) => {
    setActiveHeroState(hero);
  }, []);

  // Memoize context value to prevent unnecessary re-renders of consumers
  const contextValue = useMemo(
    () => ({
      activeHero,
      setActiveHero,
    }),
    [activeHero, setActiveHero]
  );

  return (
    <HeroContext.Provider value={contextValue}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = useContext(HeroContext);
  if (context === undefined) {
    throw new Error('useHero must be used within a HeroProvider');
  }
  return context;
}

