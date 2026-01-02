"use client"

import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-3 pt-16 sm:px-4 sm:pt-18 md:px-6 md:pt-20 lg:px-12 lg:pt-24 xl:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-4 transition-all duration-700 sm:mb-6 md:mb-8 lg:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-xl font-light tracking-tight text-foreground sm:mb-1.5 sm:text-2xl md:mb-2 md:text-3xl lg:text-4xl xl:text-5xl">
            Our Programs
          </h2>
          <p className="font-mono text-[9px] text-foreground/60 sm:text-[10px] md:text-xs lg:text-sm">
            / Three pathways to change
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
          {[
            {
              number: "01",
              title: "Climate Action",
              category: "Land Revive and Thrive",
              year: "Active",
              direction: "left",
            },
            {
              number: "02",
              title: "Food Security",
              category: "Healthy Food for All",
              year: "Active",
              direction: "right",
            },
            {
              number: "03",
              title: "Social Imbalance",
              category: "Self-Mastery Education",
              year: "Active",
              direction: "left",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-2 transition-all duration-700 hover:border-foreground/20 sm:py-3 md:py-4 lg:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        <span className="font-mono text-[9px] text-foreground/30 transition-colors group-hover:text-foreground/50 sm:text-[10px] md:text-xs lg:text-sm">
          {project.number}
        </span>
        <div>
          <h3 className="mb-0.5 font-sans text-sm font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-base md:mb-1 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {project.title}
          </h3>
          <p className="font-mono text-[8px] text-foreground/50 sm:text-[9px] md:text-[10px] lg:text-xs">
            {project.category}
          </p>
        </div>
      </div>
      <span className="font-mono text-[8px] text-foreground/30 sm:text-[9px] md:text-[10px] lg:text-xs">
        {project.year}
      </span>
    </div>
  )
}
