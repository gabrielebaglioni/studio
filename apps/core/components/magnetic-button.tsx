"use client"

import type React from "react"
import { useRef, useState } from "react"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "lg" | "sm"
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  size = "default",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    positionRef.current = { x: x * 0.15, y: y * 0.15 }

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
      }
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    positionRef.current = { x: 0, y: 0 }
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = "translate3d(0px, 0px, 0)"
      }
    })
  }

  const variants = {
    primary:
      "bg-foreground/95 text-background hover:bg-foreground backdrop-blur-md hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]",
    secondary:
      "bg-foreground/5 text-foreground hover:bg-foreground/10 backdrop-blur-xl border border-foreground/10 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10",
    ghost: "bg-transparent text-foreground hover:bg-foreground/5 backdrop-blur-sm",
  }

  const sizes = {
    sm: "px-5 py-2 text-xs",
    default: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative overflow-hidden rounded-full font-medium
        transition-all duration-300 ease-out will-change-transform
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      style={{
        transform: "translate3d(0px, 0px, 0)",
        contain: "layout style paint",
      }}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
