import { getProjectById } from '@qia/types';
import type { ProjectId } from '@qia/types';
import Image from 'next/image';
import { getSupportHref, CrossAppLink } from '@qia/utils';
import { Button } from '@qia/ui';

interface ProjectDetailsTemplateProps {
  projectId: ProjectId;
}

export function ProjectDetailsTemplate({ projectId }: ProjectDetailsTemplateProps) {
  const project = getProjectById(projectId);
  
  if (!project || !project.details) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="container mx-auto px-4 py-16">
          <p className="text-foreground/70">Project details not available.</p>
        </div>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section with Brand Colors */}
      {details.heroImage && (
        <div className="relative w-full h-[75vh] min-h-[600px] overflow-hidden">
          <Image
            src={details.heroImage}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay using brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-1000">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black uppercase tracking-tighter mb-6 text-foreground drop-shadow-2xl">
                {project.name}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-body font-light tracking-wide mb-12 text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                {project.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/50"
                >
                  <CrossAppLink href={getSupportHref(projectId)}>
                    Support This Project
                  </CrossAppLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Introduction */}
          <section className="text-center py-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/90 font-body font-light">
              {project.description}
            </p>
            </div>
          </section>

          {/* Detail Sections */}
          {details.sections.map((section, index) => (
            <section 
              key={index} 
              className={`space-y-12 ${index % 2 === 0 ? '' : 'md:flex md:flex-row-reverse md:items-center md:gap-16'}`}
            >
              <div className={index % 2 === 0 ? 'md:flex md:items-center md:gap-16' : ''}>
                  {/* Image/Video */}
                  {(section.image || section.video) && (
                  <div className={`mb-12 md:mb-0 ${index % 2 === 0 ? 'md:w-1/2' : 'md:w-1/2'}`}>
                      {section.image && (
                      <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group border-2 border-primary/20">
                          <Image
                            src={section.image}
                            alt={section.title}
                            fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 ring-2 ring-primary/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      )}
                      {section.video && (
                      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
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
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tight mb-6 text-foreground">
                      {section.title}
                    </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary mb-8 rounded-full" />
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80 font-body">
                      {section.content}
                    </p>
                </div>
              </div>
            </section>
          ))}

          {/* Impact Metrics */}
          {details.impact && (
            <section className="bg-gradient-to-br from-card via-card/90 to-card rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-primary/30 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tight mb-4 text-foreground">
                {details.impact.title}
              </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {details.impact.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="text-center p-8 rounded-2xl bg-background/60 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/40 backdrop-blur-sm group"
                  >
                    <div className="text-5xl md:text-6xl lg:text-7xl font-headline font-black mb-6 bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      {metric.value}
                    </div>
                    <div className="text-base md:text-lg lg:text-xl text-foreground/90 font-body font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-primary/40 shadow-2xl text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tight mb-6 text-foreground">
              Ready to Make a Difference?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed font-body">
              Your support helps us continue our mission to restore ecosystems and empower communities.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-primary/50"
            >
              <CrossAppLink href={getSupportHref(projectId)}>
                Support {project.name} Now
              </CrossAppLink>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
