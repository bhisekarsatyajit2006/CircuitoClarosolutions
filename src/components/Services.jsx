import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Bot, Wifi, Plane, Brain, Beaker, GraduationCap, Code, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Robotics & Smart Automation',
    desc: 'Hands-on robotics training with real hardware, programming, and automation workflows aligned with industry standards.',
    color: 'var(--neon-cyan)',
    large: true,
    emoji: '🤖',
  },
  {
    icon: Plane,
    title: 'Drone Technology & Aeromodelling',
    desc: 'End-to-end drone programs covering design, programming, and aerial operations.',
    color: 'var(--neon-orange)',
    emoji: '🚁',
  },
  {
    icon: Wifi,
    title: 'IoT & Embedded Systems',
    desc: 'IoT, Embedded Systems, and ESP-based learning with real-world project development.',
    color: 'var(--neon-green)',
    emoji: '📡',
  },
  {
    icon: Brain,
    title: 'AI & Coding Curriculum',
    desc: 'Structured AI and coding programs designed for students at all levels.',
    color: 'var(--neon-purple)',
    large: true,
    emoji: '🧠',
  },
  {
    icon: Beaker,
    title: 'ATL & Innovation Lab Setup',
    desc: 'Complete end-to-end setup and support for Atal Tinkering Labs and school innovation centers.',
    color: 'var(--neon-cyan)',
    emoji: '🔬',
  },
  {
    icon: GraduationCap,
    title: 'Faculty Development',
    desc: 'Teacher certification programs with future-ready teaching methodologies.',
    color: 'var(--neon-green)',
    emoji: '🎓',
  },
  {
    icon: Code,
    title: 'Engineering Project Mentorship',
    desc: 'Guidance and mentorship for final-year engineering projects and competitive challenges.',
    color: 'var(--neon-orange)',
    emoji: '💻',
  },
]

function ServiceCard({ service, delay }) {
  const [ref, isVisible] = useScrollAnimation()
  const { icon: Icon, title, desc, color, large, emoji } = service

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl card-hover glow-border overflow-hidden ${large ? 'md:col-span-1 md:row-span-1' : ''}`}
      style={{
        background: 'var(--bg-card)',
        transition: `all 0.6s ease ${delay}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        '--hover-color': color,
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      {/* Icon bg */}
      <div
        className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 select-none"
      >
        <Icon size={120} strokeWidth={1} style={{ color }} />
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <Icon size={22} style={{ color }} />
      </div>

      <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {desc}
      </p>

      <div
        className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        style={{ color }}
      >
        Learn more <ArrowUpRight size={12} />
      </div>
    </div>
  )
}

export default function Services() {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section id="services" className="py-32 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--neon-cyan), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'none' : 'translateY(30px)' }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-4"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--neon-purple)',
              color: 'var(--neon-purple)'
            }}
          >
            WHAT WE OFFER
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Empowering the Next
            <br />
            <span className="text-gradient-purple">Generation of Innovators</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            7 specialized programs designed to bridge the gap between classroom theory and real-world technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
