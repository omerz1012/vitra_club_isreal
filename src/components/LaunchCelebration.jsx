import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './LaunchCelebration.css'

const STORAGE_KEY = 'launch_celebration_seen_v1'
const COLORS = ['#43a047', '#66bb6a', '#ff6d00', '#ffca28', '#f1f1f1']

function runFireworks(canvas) {
  const ctx = canvas.getContext('2d')
  let particles = []
  let rafId
  let running = true

  function syncSize() {
    if (canvas.width !== window.innerWidth) canvas.width = window.innerWidth
    if (canvas.height !== window.innerHeight) canvas.height = window.innerHeight
  }
  syncSize()

  function spawnBurst() {
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height * 0.5 + 40
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    const count = 40 + Math.floor(Math.random() * 20)
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count
      const speed = 2 + Math.random() * 3
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color,
      })
    }
  }

  let lastBurst = 0
  function tick(time) {
    if (!running) return
    syncSize()
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (time - lastBurst > 600) {
      spawnBurst()
      lastBurst = time
    }

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.035
      p.life -= 0.012
    })
    particles = particles.filter((p) => p.life > 0)

    particles.forEach((p) => {
      ctx.globalAlpha = Math.max(p.life, 0)
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
      ctx.fill()
    })
    ctx.globalAlpha = 1

    rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)

  return () => {
    running = false
    cancelAnimationFrame(rafId)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

export default function LaunchCelebration() {
  const [visible, setVisible] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    setVisible(true)
    localStorage.setItem(STORAGE_KEY, 'true')
  }, [])

  useEffect(() => {
    if (!visible || !canvasRef.current) return
    const stop = runFireworks(canvasRef.current)
    const timeout = setTimeout(stop, 9000)
    return () => {
      stop()
      clearTimeout(timeout)
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prevOverflow }
  }, [visible])

  if (!visible) return null

  return createPortal(
    <>
      <canvas ref={canvasRef} className="launch-fireworks-canvas" />
      <div className="launch-modal-overlay">
        <div className="launch-modal" dir="rtl">
          <div className="launch-modal-emoji">🎉</div>
          <h2>האתר עלה לאוויר!</h2>
          <p>
            ברוכים הבאים לאתר החדש של קהילת גרנד ויטרה בישראל !
         </p>
          <button className="launch-modal-btn" onClick={() => setVisible(false)}>
              בואו נתחיל
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}
