import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  opacity: number
}

const DOT_AREA = 14_000 // one dot per this many px²
const LINK_DISTANCE = 130
const LINK_ALPHA_MAX = 0.06
const TEAL = '94,234,212'

/**
 * Full-viewport fixed canvas that renders an animated dot constellation.
 * Dots drift slowly and draw faint teal lines between nearby neighbours.
 */
export function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Capture in local vars so TypeScript and closures agree they're non-null
    const c = canvas
    const x = ctx

    let animId: number
    let dots: Dot[] = []
    let W = 0
    let H = 0

    function initDots(w: number, h: number) {
      const count = Math.floor((w * h) / DOT_AREA)
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.5 + 0.15,
      }))
    }

    function resize() {
      W = c.width = window.innerWidth
      H = c.height = window.innerHeight
      initDots(W, H)
    }

    function draw() {
      x.clearRect(0, 0, W, H)

      // Connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * LINK_ALPHA_MAX
            x.beginPath()
            x.moveTo(dots[i].x, dots[i].y)
            x.lineTo(dots[j].x, dots[j].y)
            x.strokeStyle = `rgba(${TEAL},${alpha})`
            x.lineWidth = 0.6
            x.stroke()
          }
        }
      }

      // Dots
      for (const d of dots) {
        x.beginPath()
        x.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        x.fillStyle = `rgba(255,255,255,${d.opacity})`
        x.fill()

        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > W) d.vx *= -1
        if (d.y < 0 || d.y > H) d.vy *= -1
      }

      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />
}
