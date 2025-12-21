"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { agencyConfig } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-accent/10" 
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo and Brand Name */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group transition-opacity hover:opacity-80"
        >
          <Logo />
          <span className="font-headline text-xl font-black tracking-tight text-[#10B2D7] md:text-2xl">
            {agencyConfig.fullName}
          </span>
        </Link>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
