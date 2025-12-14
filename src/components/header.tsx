"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { agencyConfig, navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';
      for (const section of sections) {
        if (section && section.offsetTop <= window.scrollY + 100) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const Logo = () => (
    <Link href="/" className="font-headline text-3xl font-black tracking-tighter text-foreground">
      {agencyConfig.name}
    </Link>
  );

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-4', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
  
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg pb-4">
            <nav className="flex flex-col items-center gap-4 px-4">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground'
                    )}
                    >
                    {link.name}
                    </Link>
                ))}
                <div className="mt-4">
                    <ThemeToggle />
                </div>
            </nav>
        </div>
      )}
    </header>
  );
}
