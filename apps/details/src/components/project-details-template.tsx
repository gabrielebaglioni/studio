import { getProjectById } from '@qia/types';
import type { ProjectId } from '@qia/types';
import Image from 'next/image';
import Link from 'next/link';
import { getSupportHref } from '@qia/utils/routes';
import { Button } from '@qia/ui';

interface ProjectDetailsTemplateProps {
  projectId: ProjectId;
}

export function ProjectDetailsTemplate({ projectId }: ProjectDetailsTemplateProps) {
  const project = getProjectById(projectId);
  
  if (!project || !project.details) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          <p>Project details not available.</p>
        </div>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      {details.heroImage && (
        <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src={details.heroImage}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto animate-in fade-in duration-700">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 drop-shadow-2xl">
                {project.name}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest mb-8 text-white/90 drop-shadow-lg">
                {project.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Link href={getSupportHref(projectId)}>
                    Support This Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Introduction */}
          <section className="text-center py-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
                {project.description}
              </p>
            </div>
          </section>

          {/* Detail Sections */}
          {details.sections.map((section, index) => (
            <section key={index} className="space-y-8">
              <div className={index % 2 === 0 ? '' : 'md:flex md:flex-row-reverse md:items-center md:gap-12'}>
                <div className={index % 2 === 0 ? 'md:flex md:items-center md:gap-12' : ''}>
                  {/* Image/Video */}
                  {(section.image || section.video) && (
                    <div className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:w-1/2' : 'md:w-1/2'}`}>
                      {section.image && (
                        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                          <Image
                            src={section.image}
                            alt={section.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}
                      {section.video && (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                          <video
                            src={section.video}
                            controls
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className={section.image || section.video ? (index % 2 === 0 ? 'md:w-1/2' : 'md:w-1/2') : ''}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {section.title}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Impact Metrics */}
          {details.impact && (
            <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-muted/20 rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/20 shadow-2xl backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-12 text-center bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                {details.impact.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {details.impact.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="text-center p-8 rounded-2xl bg-background/80 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/40 backdrop-blur-sm"
                  >
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-br from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-base md:text-lg text-foreground/80 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/30 shadow-2xl text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your support helps us continue our mission to restore ecosystems and empower communities.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href={getSupportHref(projectId)}>
                Support {project.name} Now
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}

