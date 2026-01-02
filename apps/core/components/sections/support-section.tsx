"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import { CreditCard, Wallet, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const membershipTiers = [
  {
    name: "Bronze",
    price: "Basic",
    features: [
      "Member recognition on website and materials",
      "Access to retreat center facilities",
      "Bi-annual produce sharing from restoration farms",
      "Intellectual property access",
    ],
    cta: "Join Bronze",
  },
  {
    name: "Silver",
    price: "Premium",
    features: [
      "All Bronze membership benefits",
      "50% discount on retreat center stays",
      "Quarterly produce sharing from restoration farms",
      "Priority support and direct communication",
    ],
    cta: "Join Silver",
    highlighted: true,
  },
  {
    name: "Gold",
    price: "Elite",
    features: [
      "All Silver membership benefits",
      "Free access to retreat center year-round",
      "Monthly produce sharing from restoration farms",
      "Direct access to leadership and advisory board",
    ],
    cta: "Join Gold",
  },
]

const paymentMethods = [
  { name: "Cards", icon: CreditCard },
  { name: "Google Pay", icon: Wallet },
  { name: "PayPal", icon: Wallet },
  { name: "MetaMask", icon: Wallet },
]

export function SupportSection() {
  const { ref: sectionRef, isVisible } = useReveal()
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const nextPlan = () => {
    setDirection("right")
    setCurrentPlanIndex((prev) => (prev + 1) % membershipTiers.length)
  }

  const prevPlan = () => {
    setDirection("left")
    setCurrentPlanIndex((prev) => (prev - 1 + membershipTiers.length) % membershipTiers.length)
  }

  return (
    <section
      ref={sectionRef}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-3 pt-16 sm:px-6 sm:pt-20 md:px-8 md:pt-24 lg:px-12 xl:px-16"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center py-4">
        <div
          className={`mb-4 flex items-center justify-between transition-all duration-700 md:mb-10 md:justify-start lg:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <div>
            <h2 className="mb-0.5 font-sans text-base font-light tracking-tight text-foreground sm:text-xl md:mb-2 md:text-2xl lg:text-3xl xl:text-4xl">
              Support Our Mission
            </h2>
            <p className="font-mono text-[9px] text-foreground/60 sm:text-xs md:text-sm">
              / Membership tiers and benefits
            </p>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={prevPlan}
              className="rounded-full border border-foreground/30 p-1.5 transition-colors hover:border-foreground/50 hover:bg-foreground/5"
              aria-label="Previous plan"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>
            <button
              onClick={nextPlan}
              className="rounded-full border border-foreground/30 p-1.5 transition-colors hover:border-foreground/50 hover:bg-foreground/5"
              aria-label="Next plan"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </div>

        <div className="mb-3 md:mb-8 md:grid md:grid-cols-3 md:gap-5 lg:gap-6">
          {/* Mobile view with slider */}
          <div className="relative h-64 overflow-hidden md:hidden">
            {membershipTiers.map((tier, i) => {
              const isActive = i === currentPlanIndex
              const isPrev = i === (currentPlanIndex - 1 + membershipTiers.length) % membershipTiers.length
              const isNext = i === (currentPlanIndex + 1) % membershipTiers.length

              let translateClass = "translate-x-full"
              if (isActive) translateClass = "translate-x-0"
              else if (isPrev) translateClass = "-translate-x-full"
              else if (isNext && direction === "right") translateClass = "translate-x-full"
              else translateClass = direction === "right" ? "translate-x-full" : "-translate-x-full"

              return (
                <div
                  key={tier.name}
                  className={`group absolute inset-0 flex h-full w-full flex-col border-l-2 pl-3 transition-all duration-500 ease-in-out sm:pl-4 ${
                    tier.highlighted ? "border-primary/60" : "border-foreground/30"
                  } ${isActive ? "z-10 opacity-100" : "z-0 opacity-0"} ${translateClass}`}
                >
                  <div className="mb-1.5 flex items-center gap-1.5 sm:mb-3 sm:gap-2">
                    <div className="h-px w-4 bg-foreground/30 transition-all duration-300 group-hover:w-6 group-hover:bg-foreground/50 sm:w-6 sm:group-hover:w-10" />
                    <span className="font-mono text-[8px] text-foreground/60 sm:text-xs">0{i + 1}</span>
                  </div>

                  <h3 className="mb-0.5 font-sans text-base font-light text-foreground sm:mb-1 sm:text-xl">
                    {tier.name}
                  </h3>
                  <p className="mb-2 font-mono text-[10px] text-foreground/60 sm:mb-3 sm:text-xs">{tier.price}</p>

                  <ul className="mb-2.5 flex-1 space-y-1 sm:mb-4 sm:space-y-1.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5">
                        <div className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary sm:h-1.5 sm:w-1.5" />
                        <span className="text-[10px] leading-tight text-foreground/80 sm:text-xs sm:leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    variant={tier.highlighted ? "primary" : "secondary"}
                    size="default"
                    className="w-full py-2 text-[11px] sm:py-3 sm:text-sm"
                    onClick={() => console.log(`Joining ${tier.name}`)}
                  >
                    {tier.cta}
                  </MagneticButton>
                </div>
              )
            })}
          </div>

          {/* Desktop/Tablet view */}
          {membershipTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`group hidden flex-col border-l-2 pl-5 transition-all duration-700 md:flex lg:pl-6 ${
                tier.highlighted ? "border-primary/60" : "border-foreground/30"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
              </div>

              <h3 className="mb-1 font-sans text-xl font-light text-foreground lg:text-2xl">{tier.name}</h3>
              <p className="mb-4 font-mono text-xs text-foreground/60 md:text-sm">{tier.price}</p>

              <ul className="mb-5 flex-1 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-1.5">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                variant={tier.highlighted ? "primary" : "secondary"}
                size="default"
                className="w-full py-4 text-base"
                onClick={() => console.log(`Joining ${tier.name}`)}
              >
                {tier.cta}
              </MagneticButton>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <h3 className="mb-2 font-mono text-[9px] text-foreground/60 sm:mb-4 sm:text-xs md:text-sm">
            / Payment methods accepted
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.name}
                className="group flex items-center gap-1.5 border-b border-foreground/20 pb-1.5 transition-all duration-300 hover:border-foreground/40 sm:gap-2 sm:pb-2"
              >
                <method.icon className="h-3 w-3 text-foreground/60 transition-colors group-hover:text-foreground sm:h-5 sm:w-5" />
                <span className="text-[10px] font-light text-foreground/80 sm:text-sm">{method.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
