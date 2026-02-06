'use client'

import { useEffect, useRef } from 'react'

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle array
    const particles: Particle[] = []
    const particleCount = 50

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      life: number
      maxLife: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.5 + 0.3
        this.maxLife = Math.random() * 200 + 100
        this.life = this.maxLife
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life--

        if (this.x < 0) this.x = canvas?.width || 0
        if (this.x > (canvas?.width || 0)) this.x = 0
        if (this.y < 0) this.y = canvas?.height || 0
        if (this.y > (canvas?.height || 0)) this.y = 0
      }

      draw() {
        if (!ctx) return
        const alpha = (this.life / this.maxLife) * this.opacity
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      isDead() {
        return this.life <= 0
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].isDead()) {
          particles.splice(i, 1)
          particles.push(new Particle())
        }
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.2
            if (ctx) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
            }
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
