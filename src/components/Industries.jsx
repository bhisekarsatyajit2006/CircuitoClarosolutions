import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Cpu, GraduationCap, Building2, Rocket, Stethoscope, Leaf } from 'lucide-react'

const industries = [
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Empowering schools, colleges, and universities with hands-on STEM labs, robotics kits, and structured training programs.',
    color: 'var(--neon-cyan)',
  },
  {
    icon: Building2,
    name: 'Government & Defence',
    description: 'Supporting government-led innovation initiatives, defence R&D projects, and smart infrastructure with embedded systems expertise.',
    color: 'var(--neon-purple)',
  },
  {
    icon: Rocket,
    name: 'Startups & R&D',
    description: 'Partnering with startups and research labs to prototype products quickly using IoT, AI, and automation technologies.',
    color: 'var(--neon-orange)',
  },
  {
    icon: Cpu,
    name: 'Manufacturing',
    description: 'Enabling smart manufacturing through automation, IoT-based monitoring, and embedded control systems.',
    color: 'var(--neon-green)',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'Developing assistive and diagnostic devices including bone conduction hearing aids and health monitoring systems.',
    color: 'var(--neon-cyan)',
  },
  {
    icon: Leaf,
    name: 'Agriculture & Smart Cities',
    description: 'Applying drone technology and IoT sensors for precision farming, crop monitoring, and smart city infrastructure.',
    color: 'var(--neon-green)',
  },
]

export default function Industries() {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section id="industries" className="py-32 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-orange), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'none' : 'translateY(30px)' }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-4"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--neon-orange)',
              color: 'var(--neon-orange)'
            }}
          >
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Making an Impact
            <br />
            <span className="text-gradient">Across Sectors</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Our technology solutions span a wide range of industries, delivering real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const [ref, isVisible] = useScrollAnimation()
            const Icon = industry.icon
            return (
              <div
                key={i}
                ref={ref}
                className="group p-4 rounded-2xl card-hover glow-border transition-all duration-700"
                style={{
                  background: 'var(--bg-card)',
                  transitionDelay: `${i * 80}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `${industry.color}15`, border: `1px solid ${industry.color}30` }}
                >
                  <Icon size={36} style={{ color: industry.color }} />
                </div>
                <h3 className="font-display font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  {industry.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
