import Link from 'next/link';
import { PROJECTS } from '@qia/types';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
          QIA
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={`/support/${project.id}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Support {project.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

