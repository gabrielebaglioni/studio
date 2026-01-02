"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { WorkSection } from "@/components/sections/work-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { SupportSection } from "@/components/sections/support-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const scrollThrottleRef = useRef<number>()

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const deltaY = touchStartY.current - touchEndY
      const deltaX = touchStartX.current - touchEndX

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 5) {
          scrollToSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        if (!scrollContainerRef.current) return

        scrollContainerRef.current.scrollBy({
          left: e.deltaY,
          behavior: "instant",
        })

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 5) {
          setCurrentSection(newSection)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined
          return
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 5) {
          setCurrentSection(newSection)
        }

        scrollThrottleRef.current = undefined
      })
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current)
      }
    }
  }, [currentSection])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#2d5016"
            colorB="#8b6914"
            speed={0.6}
            detail={0.75}
            blend={45}
            coarseX={35}
            coarseY={35}
            mediumX={38}
            mediumY={38}
            fineX={42}
            fineY={42}
          />
          <ChromaFlow
            baseColor="#3a6b35"
            upColor="#4a7c45"
            downColor="#5c4a2f"
            leftColor="#8b6914"
            rightColor="#6b8e23"
            intensity={0.85}
            radius={1.6}
            momentum={22}
            maskType="alpha"
            opacity={0.95}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-3 py-2 transition-opacity duration-700 sm:px-4 sm:py-3 md:px-6 md:py-4 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection(0)}
          className="flex items-center gap-1.5 transition-transform hover:scale-105 sm:gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25 sm:h-10 sm:w-10 md:h-12 md:w-12">
            <span className="font-sans text-base font-bold text-foreground sm:text-lg md:text-xl">Q</span>
          </div>
          <span className="font-sans text-xs font-semibold tracking-tight text-foreground sm:text-sm md:text-base lg:text-lg">
            Quick Impact
          </span>
        </button>

        <div className="hidden items-center gap-3 sm:gap-4 md:flex md:gap-5 lg:gap-6">
          {["Home", "Programs", "Mission", "About", "Support", "Contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`group relative font-sans text-xs font-medium transition-colors sm:text-sm ${
                currentSection === index ? "text-foreground" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <MagneticButton variant="secondary" size="sm" onClick={() => scrollToSection(5)} className="text-xs sm:text-sm">
          Join Us
        </MagneticButton>
      </nav>

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className={`relative z-10 flex h-screen overflow-x-auto overflow-y-hidden transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-3 py-12 sm:px-4 sm:py-16 md:px-6 md:py-20 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-2 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/15 px-2 py-1 backdrop-blur-md duration-700 sm:mb-3 sm:px-3 sm:py-1.5 md:mb-4 md:px-4 md:py-2">
              <p className="font-mono text-[9px] leading-none text-foreground/90 sm:text-[10px] md:text-xs">
                Restoring Ecosystems, Building Communities
              </p>
            </div>
            <h1 className="mb-2 animate-in fade-in slide-in-from-bottom-8 font-sans text-2xl font-light leading-[1.1] tracking-tight text-foreground duration-1000 sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              <span className="text-balance">
                Reviving damaged
                <br />
                lands for a
                <br />
                thriving future
              </span>
            </h1>
            <p className="mb-3 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-[10px] leading-relaxed text-foreground/90 duration-1000 delay-200 sm:mb-4 sm:text-xs md:mb-6 md:text-sm lg:text-base">
              Transforming lands destroyed by illegal mining into flourishing ecosystems. We restore nature, empower
              communities, and create sustainable solutions for climate action and food security.
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-2 duration-1000 delay-300 sm:flex-row sm:items-center sm:gap-2.5 md:gap-3">
              <MagneticButton
                size="default"
                variant="primary"
                onClick={() => scrollToSection(1)}
                className="text-xs sm:text-sm"
              >
                Our Programs
              </MagneticButton>
              <MagneticButton
                size="default"
                variant="secondary"
                onClick={() => scrollToSection(4)}
                className="text-xs sm:text-sm"
              >
                Get Involved
              </MagneticButton>
            </div>
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500 sm:bottom-4 md:bottom-6">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <p className="font-mono text-[9px] text-foreground/80 sm:text-[10px] md:text-xs">Scroll to explore</p>
              <div className="flex h-4 w-8 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md sm:h-5 sm:w-10">
                <div className="h-1 w-1 animate-pulse rounded-full bg-foreground/80 sm:h-1.5 sm:w-1.5" />
              </div>
            </div>
          </div>
        </section>

        <WorkSection />
        <ServicesSection />
        <AboutSection scrollToSection={scrollToSection} />
        <SupportSection />
        <ContactSection />
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
