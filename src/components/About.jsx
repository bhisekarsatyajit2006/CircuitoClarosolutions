import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Target, Eye, Heart, Zap, School, Lightbulb, GraduationCap, Trophy } from 'lucide-react'

function AnimatedSection({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      {children}
    </div>
  )
}

const missionPoints = [
  'Make advanced technology learning accessible for every student',
  'Deliver industry-oriented, hands-on education',
  'Support institutions in establishing Innovation & STEM infrastructure',
  'Nurture problem-solvers, innovators, and future technocrats',
]

export default function About() {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{
            right: '-5%', top: '20%',
            background: 'radial-gradient(circle, var(--neon-green), transparent)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={titleRef}
          className="text-center mb-20 transition-all duration-700"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'none' : 'translateY(30px)' }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-4"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--neon-green)',
              color: 'var(--neon-green)'
            }}
          >
            WHO WE ARE
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Redefining How Students
            <br />
            <span className="text-gradient">Learn & Create</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A technology-driven education company dedicated to empowering the next generation of innovators.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Main description */}
          <div>
            <AnimatedSection delay={0}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                CircuitoClaro Solutions Pvt. Ltd. specializes in <strong style={{ color: 'var(--neon-cyan)' }}>Robotics, Automation, IoT, Drone Technology, AI-based Learning, and Embedded Systems</strong>, delivering hands-on experiences through workshops, innovation labs, and structured training programs.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Our solutions are designed in alignment with industry requirements and future workforce expectations — ensuring students are not just learning, but <em style={{ color: 'var(--neon-green)' }}>creating, exploring, and innovating</em>.
              </p>
            </AnimatedSection>

            {/* Vision card */}
            <AnimatedSection delay={200}>
              <div
                className="relative p-6 rounded-2xl card-hover overflow-hidden"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-green)]" />
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, var(--neon-cyan)22, var(--neon-green)22)' }}
                  >
                    <Eye size={20} style={{ color: 'var(--neon-cyan)' }} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                      Our Vision
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      To create a strong ecosystem of innovation and technical education where students gain confidence, creativity, and future-ready skills.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Mission points */}
          <div className="space-y-4">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <Target size={20} style={{ color: 'var(--neon-orange)' }} />
                <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Our Mission
                </h3>
              </div>
            </AnimatedSection>
            {missionPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className="flex items-start gap-4 p-5 rounded-xl glow-border card-hover"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-green))',
                      color: 'black'
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {point}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Municipality Focus banner */}
        <AnimatedSection>
          <div
            className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--neon-cyan)30',
              boxShadow: '0 0 60px var(--glow-cyan)'
            }}
          >
            {/* BG pattern */}
            <div className="absolute inset-0 dot-bg" />
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
              style={{ background: 'radial-gradient(circle, var(--neon-cyan), transparent)' }}
            />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={18} style={{ color: 'var(--neon-orange)' }} />
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: 'var(--neon-orange)' }}
                  >
                    SOCIAL IMPACT
                  </span>
                </div>
                <h3
                  className="font-display text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Focus on Municipality Schools
                </h3>
                <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                  Technology and innovation should be accessible to <strong style={{ color: 'var(--text-primary)' }}>all</strong> — not just a selected group. We're committed to uplifting government and municipality school students.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: School, text: 'Establishing STEM & Robotics Labs', color: 'var(--neon-cyan)' },
                  { icon: Lightbulb, text: 'Affordable structured courses', color: 'var(--neon-green)' },
                  { icon: GraduationCap, text: 'Teacher training programs', color: 'var(--neon-purple)' },
                  { icon: Trophy, text: 'Innovation competitions & camps', color: 'var(--neon-orange)' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl text-center group transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    <p className="text-xs font-semibold leading-snug" style={{ color: 'var(--text-secondary)' }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
