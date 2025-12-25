import Link from 'next/link';
import { getSupportHref, CrossAppLink } from '@qia/utils';
import { PROJECTS } from '@qia/types';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About QIA</h3>
            <p className="text-sm text-muted-foreground">
              Quick Impact Agency - Restoring damaged ecosystems and empowering humanity.
            </p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-bold mb-4">Projects</h3>
            <ul className="space-y-2">
              {PROJECTS.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/${project.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {PROJECTS.map((project) => (
                <li key={project.id}>
                  <CrossAppLink
                    href={getSupportHref(project.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support {project.name}
                  </CrossAppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} QIA. All rights reserved.</p>
          <p className="mt-2">QIA is not affiliated to any Cult, Religious groups, Governmental or Non-Governmental Organization whatsoever.</p>
        </div>
      </div>
    </footer>
  );
}

