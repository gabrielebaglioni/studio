import Link from 'next/link';
import { PROJECTS } from '@qia/types';
import { getShellHref, getDetailsHref } from '@qia/utils/routes';
import { CrossAppLink } from '@qia/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <CrossAppLink href={getShellHref()} className="text-2xl font-black uppercase tracking-tighter">
          QIA
        </CrossAppLink>
        <nav className="hidden md:flex items-center gap-6">
          {PROJECTS.map((project) => (
            <CrossAppLink
              key={project.id}
              href={getDetailsHref(project.id)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {project.name}
            </CrossAppLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

