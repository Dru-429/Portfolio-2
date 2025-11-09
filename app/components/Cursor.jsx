"use client"

import { useEffect, useRef, useState } from "react"

export default function Cursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Check if device is desktop
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768 && !("ontouchstart" in window))
    }
 
    checkDevice()
    window.addEventListener("resize", checkDevice)

    if (!isDesktop) return

    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    const animate = () => {
      // Smooth cursor following with different speeds for glass effect
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      dotX += (mouseX - dotX) * 0.8
      dotY += (mouseY - dotY) * 0.8

      cursor.style.transform = `translate(${cursorX - 25}px, ${cursorY - 25}px)`
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`

      requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkDevice)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      {/* Main glass cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          background: `radial-gradient(circle, 
            hsla(213, 75%, 75%, 0.3) 0%, 
            hsla(211, 61%, 25%, 0.2) 40%, 
            hsla(212, 79%, 13%, 0.1) 70%, 
            transparent 100%)`,
          backdropFilter: "blur(8px) saturate(1.5)",
          WebkitBackdropFilter: "blur(8px) saturate(1.5)",
          border: "1px solid hsla(213, 75%, 75%, 0.3)",
          borderRadius: "50%",
          boxShadow: `
            0 0 20px hsla(213, 75%, 75%, 0.4),
            inset 0 1px 0 hsla(211, 58%, 92%, 0.3),
            inset 0 -1px 0 hsla(212, 79%, 13%, 0.2)
          `,
        }}
      >
        {/* Inner glow */}
        <div
          className="absolute inset-1 rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, 
              hsla(213, 75%, 75%, 0.4) 0%, 
              transparent 50%)`,
          }}
        />

        {/* Liquid ripple effect */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${isHovering ? "animate-pulse" : ""}`}
          style={{
            background: `conic-gradient(from 0deg, 
              hsla(213, 75%, 75%, 0.2), 
              hsla(211, 61%, 25%, 0.3), 
              hsla(212, 79%, 13%, 0.2), 
              hsla(213, 75%, 75%, 0.2))`,
            animation: isHovering ? "liquidRotate 2s linear infinite" : "none",
          }}
        />
      </div>

      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[10000] rounded-full transition-all duration-150"
        style={{
          background: `radial-gradient(circle, 
            hsl(213, 75%, 75%) 0%, 
            hsl(211, 61%, 25%) 100%)`,
          boxShadow: `0 0 10px hsla(213, 75%, 75%, 0.8)`,
        }}
      />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes liquidRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        body {
          cursor: none !important;
        }
        
        a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
