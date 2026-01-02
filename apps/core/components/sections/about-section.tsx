"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-3 pt-16 sm:px-4 sm:pt-18 md:px-6 md:pt-20 lg:px-12 lg:pt-24 xl:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
          <div>
            <div
              className={`mb-4 transition-all duration-700 sm:mb-6 md:mb-8 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-1.5 font-sans text-lg font-light leading-[1.1] tracking-tight text-foreground sm:mb-2 sm:text-xl md:mb-2 md:text-2xl lg:mb-3 lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Building a
                <br />
                community of
                <br />
                <span className="text-foreground/40">changemakers</span>
              </h2>
            </div>

            <div
              className={`space-y-1.5 transition-all duration-700 sm:space-y-2 md:space-y-2 lg:space-y-3 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-[10px] leading-relaxed text-foreground/90 sm:text-xs md:text-sm">
                Quick Impact Agency is a collective of passionate individuals dedicated to solving social and ecological
                problems through collective action.
              </p>
              <p className="max-w-md text-[10px] leading-relaxed text-foreground/90 sm:text-xs md:text-sm">
                Our vision is to grow a community of 13 million members who believe their actions can transform the
                world they live in.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            {[
              { value: "3", label: "Core Programs", sublabel: "Integrated approach", direction: "right" },
              { value: "5", label: "Core Values", sublabel: "Guiding principles", direction: "left" },
              { value: "13M", label: "Vision", sublabel: "Community members goal", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-2 border-l border-foreground/30 pl-3 transition-all duration-700 sm:gap-3 sm:pl-4 md:gap-4 md:pl-5 lg:gap-6 lg:pl-6 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-xl font-light text-foreground sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    {stat.value}
                  </div>
                  <div>
                    <div className="font-sans text-xs font-light text-foreground sm:text-sm md:text-base">
                      {stat.label}
                    </div>
                    <div className="font-mono text-[8px] text-foreground/60 sm:text-[9px] md:text-[10px]">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-4 flex flex-wrap gap-2 transition-all duration-700 sm:mt-6 sm:gap-2.5 md:mt-8 md:gap-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton
            size="default"
            variant="primary"
            onClick={() => scrollToSection?.(4)}
            className="text-xs sm:text-sm"
          >
            Join Our Community
          </MagneticButton>
          <MagneticButton
            size="default"
            variant="secondary"
            onClick={() => scrollToSection?.(1)}
            className="text-xs sm:text-sm"
          >
            Explore Programs
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
