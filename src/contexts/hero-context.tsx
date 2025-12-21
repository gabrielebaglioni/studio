"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type HeroName = 'CLIMATE' | 'FOOD' | 'SOCIAL';

interface HeroContextType {
  activeHero: HeroName;
  setActiveHero: (hero: HeroName) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export function HeroProvider({ children }: { children: ReactNode }) {
  const [activeHero, setActiveHero] = useState<HeroName>('CLIMATE');

  return (
    <HeroContext.Provider value={{ activeHero, setActiveHero }}>
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

