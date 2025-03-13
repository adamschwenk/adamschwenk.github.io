"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        // Using non-null assertion with default values to fix TypeScript errors
        this.x = Math.random() * (canvas?.width ?? 0)
        this.y = Math.random() * (canvas?.height ?? 0)
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Using non-null assertion since we've already checked canvas above
        if (this.x > canvas!.width) {
          this.x = 0
        } else if (this.x < 0) {
          this.x = canvas!.width
        }

        if (this.y > canvas!.height) {
          this.y = 0
        } else if (this.y < 0) {
          this.y = canvas!.height
        }
      }

      draw() {
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    // Create particles
    const particleCount = 100
    let particles: Particle[] = []

    // Set canvas dimensions to match window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Recreate particles when resizing
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initialize size

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

