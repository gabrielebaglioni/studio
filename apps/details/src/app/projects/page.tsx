import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@qia/types';
import { getSupportHref } from '@qia/utils/routes';
import { Button } from '@qia/ui';

/**
 * Projects listing page
 * Beautiful grid layout showcasing all projects
 */
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Discover how we're making a positive impact on climate, food security, and social balance
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              {project.details?.heroImage && (
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.details.heroImage}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                    {project.name}
                  </h2>
                  <p className="text-sm md:text-base font-light tracking-widest text-muted-foreground uppercase">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                {project.details?.impact && (
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="grid grid-cols-3 gap-4">
                      {project.details.impact.metrics.slice(0, 3).map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg md:text-xl font-bold mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href={`/projects/${project.id}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link href={getSupportHref(project.id)}>
                      Support Project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us in creating positive change. Every contribution matters.
          </p>
          <Button asChild size="lg">
            <Link href="/support/climate">
              Get Started
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
