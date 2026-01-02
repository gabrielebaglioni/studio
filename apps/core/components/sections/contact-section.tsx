"use client"

import { Mail, MapPin } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      return
    }

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-3 pt-14 sm:px-6 sm:pt-16 md:px-6 md:pt-14 lg:px-12 lg:pt-24 xl:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:gap-6 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-3 transition-all duration-700 sm:mb-4 md:mb-3 lg:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-1 font-sans text-lg font-light leading-[1.05] tracking-tight text-foreground sm:mb-2 sm:text-xl md:text-xl lg:text-5xl xl:text-6xl">
                Join the
                <br />
                movement
              </h2>
              <p className="font-mono text-[8px] text-foreground/60 sm:text-[10px] md:text-[9px] lg:text-sm">
                / Get involved today
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3 md:space-y-2 lg:space-y-8">
              <a
                href="mailto:info@quickimpactagency.org"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-0.5 flex items-center gap-1.5 sm:gap-2">
                  <Mail className="h-2.5 w-2.5 text-foreground/60 sm:h-3 sm:w-3 md:h-2.5 md:w-2.5 lg:h-4 lg:w-4" />
                  <span className="font-mono text-[8px] text-foreground/60 sm:text-[10px] md:text-[8px] lg:text-sm">
                    Email
                  </span>
                </div>
                <p className="text-[10px] text-foreground transition-colors group-hover:text-foreground/70 sm:text-xs md:text-[10px] lg:text-lg xl:text-xl">
                  info@quickimpactagency.org
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-0.5 flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="h-2.5 w-2.5 text-foreground/60 sm:h-3 sm:w-3 md:h-2.5 md:w-2.5 lg:h-4 lg:w-4" />
                  <span className="font-mono text-[8px] text-foreground/60 sm:text-[10px] md:text-[8px] lg:text-sm">
                    Mission
                  </span>
                </div>
                <p className="text-[10px] text-foreground sm:text-xs md:text-[10px] lg:text-lg xl:text-xl">
                  Restoring ecosystems worldwide
                </p>
              </div>

              <div
                className={`pt-1 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <p className="mb-1 font-mono text-[8px] text-foreground/60 sm:mb-1.5 sm:text-[10px] md:text-[8px] lg:text-sm">
                  Core Values
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-1">
                  {["Inclusivity", "Innovation", "Collaboration", "Impact", "Accountability"].map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-foreground/20 bg-foreground/5 px-1.5 py-0.5 font-mono text-[7px] text-foreground/80 sm:px-2 sm:text-[8px] md:px-1.5 md:text-[7px] lg:px-3 lg:py-1 lg:text-xs"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-2 lg:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-0.5 block font-mono text-[7px] text-foreground/60 sm:mb-1 sm:text-[9px] md:text-[7px] lg:text-sm">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-[10px] text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 sm:text-xs md:py-1 md:text-[10px] lg:py-3 lg:text-base"
                  placeholder="Your name"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-0.5 block font-mono text-[7px] text-foreground/60 sm:mb-1 sm:text-[9px] md:text-[7px] lg:text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-[10px] text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 sm:text-xs md:py-1 md:text-[10px] lg:py-3 lg:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-0.5 block font-mono text-[7px] text-foreground/60 sm:mb-1 sm:text-[9px] md:text-[7px] lg:text-sm">
                  Message
                </label>
                <textarea
                  rows={1}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-[10px] text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 sm:text-xs md:py-1 md:text-[10px] lg:py-3 lg:text-base"
                  placeholder="How would you like to contribute?"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full py-2 text-[10px] disabled:opacity-50 sm:py-2.5 sm:text-xs md:py-2 md:text-[10px] lg:py-4 lg:text-base"
                  onClick={isSubmitting ? undefined : undefined}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-1.5 text-center font-mono text-[8px] text-foreground/80 sm:mt-2 sm:text-[10px] md:text-[8px] lg:text-sm">
                    Message sent successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
