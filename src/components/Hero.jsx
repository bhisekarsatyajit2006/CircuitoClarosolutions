import { useEffect, useRef, useState } from 'react'
import { useSpotlight } from '../hooks/useScrollAnimation'
import { ArrowRight, ArrowUpRight, ChevronDown, Cpu, Wifi, Bot, Plane } from 'lucide-react'

const WORDS = ['Robotics', 'IoT Systems', 'Drone Tech', 'AI Learning', 'Innovation', 'Automation']

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const color = '14, 165, 233' // Light theme blue

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${color}, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

function TypingText() {
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < word.length) setCharIdx(c => c + 1)
        else setTimeout(() => setDeleting(true), 1400)
      } else {
        if (charIdx > 0) setCharIdx(c => c - 1)
        else {
          setDeleting(false)
          setWordIdx(i => (i + 1) % WORDS.length)
        }
      }
    }, deleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx])

  return (
    <span className="text-gradient typing-cursor font-display">
      {WORDS[wordIdx].slice(0, charIdx)}
    </span>
  )
}

const floatingIcons = [
  { Icon: Cpu, delay: '0s', x: '10%', y: '20%', color: 'var(--neon-cyan)' },
  { Icon: Wifi, delay: '1.5s', x: '85%', y: '15%', color: 'var(--neon-green)' },
  { Icon: Bot, delay: '3s', x: '75%', y: '70%', color: 'var(--neon-purple)' },
  { Icon: Plane, delay: '2s', x: '8%', y: '70%', color: 'var(--neon-orange)' },
]

export default function Hero() {
  const spotlightRef = useSpotlight()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  return (
    <section
      ref={spotlightRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden spotlight noise-overlay"
      style={{ background: 'var(--gradient-hero)' }}
      id="hero"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            top: '10%', left: '15%',
            background: 'radial-gradient(circle, var(--neon-cyan), transparent)'
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            bottom: '10%', right: '10%',
            background: 'radial-gradient(circle, var(--neon-purple), transparent)',
            animationDelay: '1s'
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            top: '40%', right: '25%',
            background: 'radial-gradient(circle, var(--neon-green), transparent)',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, x, y, color }, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl glass animate-float"
          style={{
            left: x, top: y,
            animationDelay: delay,
            border: `1px solid ${color}40`,
            boxShadow: `0 0 20px ${color}30`
          }}
        >
          <Icon size={24} style={{ color }} />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">

        {/* Main headline */}
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ color: 'var(--text-primary)' }}
        >
          <span className="block mb-2">Future of</span>
          <span className="block mb-2">
            <TypingText />
          </span>
          <span className="block" style={{ color: 'var(--text-secondary)', fontSize: '0.65em' }}>
            Education
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          CircuitoClaro Solutions empowers students with hands-on STEM education — from Robotics and IoT to Drone Technology and AI — making innovation accessible to everyone.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="#services"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-black transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-green))',
              boxShadow: '0 10px 30px var(--glow-cyan)'
            }}
          >
            Explore Programs
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#workshops"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-black transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-green))',
              boxShadow: '0 10px 30px var(--glow-cyan)'
            }}
          >
            Explore Courses
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {[
            { num: '10+', label: 'Workshops Conducted' },
            { num: '7', label: 'Programs Offered' },
            { num: '2', label: 'Innovative Products' },
            { num: '3', label: 'MOU with SGBAU' },
          ].map((s, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-4 card-hover"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="font-display text-3xl font-bold text-gradient">{s.num}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-12">
          <a href="#about" className="flex flex-col items-center gap-2 group">
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>scroll down</span>
            <ChevronDown
              size={20}
              className="animate-bounce"
              style={{ color: 'var(--neon-cyan)' }}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
