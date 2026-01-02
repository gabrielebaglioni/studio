"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-3 pt-16 sm:px-4 sm:pt-18 md:px-6 md:pt-20 lg:px-12 lg:pt-24 xl:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-4 transition-all duration-700 sm:mb-6 md:mb-8 lg:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-xl font-light tracking-tight text-foreground sm:mb-1.5 sm:text-2xl md:mb-2 md:text-3xl lg:text-4xl xl:text-5xl">
            Our Mission
          </h2>
          <p className="font-mono text-[9px] text-foreground/60 sm:text-[10px] md:text-xs lg:text-sm">
            / How we make an impact
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-6 lg:gap-x-12 lg:gap-y-8 xl:gap-x-16">
          {[
            {
              title: "Land Restoration",
              description:
                "Identifying and legally acquiring mining-damaged lands to transform into forests, farms, and community centers",
              direction: "top",
            },
            {
              title: "Organic Agriculture",
              description:
                "Supporting local farmers with organic and nano-technological solutions for chemical-free food production",
              direction: "right",
            },
            {
              title: "Community Education",
              description: "Developing self-mastery curriculums that promote self-awareness, respect, and discipline",
              direction: "left",
            },
            {
              title: "Sustainable Development",
              description: "Creating eco-lodges, retreat centers, and facilities that serve community needs",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-1.5 flex items-center gap-1.5 sm:mb-2 sm:gap-2">
        <div className="h-px w-4 bg-foreground/30 transition-all duration-300 group-hover:w-6 group-hover:bg-foreground/50 sm:w-5 sm:group-hover:w-8 md:w-6 md:group-hover:w-10" />
        <span className="font-mono text-[8px] text-foreground/60 sm:text-[9px] md:text-[10px]">0{index + 1}</span>
      </div>
      <h3 className="mb-1 font-sans text-base font-light text-foreground sm:mb-1.5 sm:text-lg md:mb-2 md:text-xl lg:text-2xl">
        {service.title}
      </h3>
      <p className="max-w-sm text-[10px] leading-relaxed text-foreground/80 sm:text-xs md:text-sm">
        {service.description}
      </p>
    </div>
  )
}
