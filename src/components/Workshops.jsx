import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MapPin, Calendar, Users, Award, Star } from 'lucide-react'

const workshops = [
  {
    title: '2-Day Training',
    location: 'Ambala Cantonment',
    type: 'Technical Training',
    color: 'var(--neon-cyan)',
    highlight: false,
  },
  {
    title: 'IIT Kanpur Boeing Aeromodelling Workshop',
    location: 'IIT Kanpur',
    type: 'Elite Mentorship',
    color: 'var(--neon-orange)',
    highlight: true,
    badge: 'IIT Kanpur × Boeing',
  },
  {
    title: '2-Day Workshop',
    location: 'Chandigarh University',
    type: 'University Program',
    color: 'var(--neon-green)',
    highlight: false,
  },
  {
    title: '6-Day Intensive Workshop',
    location: 'Gurukul School, Digras',
    type: 'School Program',
    color: 'var(--neon-purple)',
    highlight: false,
  },
  {
    title: 'Project Development Workshop',
    location: 'Vimlabai Deshmukh Mahavidyalay, Amravati',
    type: '2-Day Workshop',
    color: 'var(--neon-cyan)',
    highlight: false,
  },
  {
    title: 'Guest Lecture',
    location: 'Bhavarilal Samra High School, Amravati',
    type: 'Awareness Session',
    color: 'var(--neon-green)',
    highlight: false,
  },
  {
    title: '2-Day Robotics Workshop',
    location: 'Shri Ramkrishna Kridavidyalay',
    type: 'Robotics Training',
    color: 'var(--neon-orange)',
    highlight: false,
  },
  // {
  //   title: 'MOU Signed',
  //   location: 'SGBAU Research Incubation & Foundation Center, Amravati',
  //   type: 'Partnership',
  //   color: 'var(--neon-purple)',
  //   highlight: true,
  //   badge: 'Official MOU',
  // },
]

function WorkshopCard({ workshop, index }) {
  const [ref, isVisible] = useScrollAnimation()
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex gap-4 md:gap-8 items-start transition-all duration-700`}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${isLeft ? '-30px' : '30px'})`
      }}
    >
      {/* Timeline node */}
      <div className="flex flex-col items-center flex-shrink-0 mt-1">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 z-10"
          style={{
            background: workshop.highlight ? workshop.color : 'var(--bg-card)',
            borderColor: workshop.color,
            color: workshop.highlight ? 'black' : workshop.color,
            boxShadow: workshop.highlight ? `0 0 20px ${workshop.color}60` : 'none'
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        {index < workshops.length - 1 && (
          <div
            className="w-px flex-1 min-h-8 mt-2"
            style={{ background: `linear-gradient(to bottom, ${workshop.color}60, transparent)` }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 p-5 rounded-2xl mb-6 card-hover glow-border group"
        style={{ background: 'var(--bg-card)' }}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1">
            {workshop.badge && (
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold font-mono mb-2"
                  style={{
                    background: `${workshop.color}18`,
                    color: workshop.color,
                    border: `1px solid ${workshop.color}40`
                  }}
                >
                  <Star size={10} fill="currentColor" /> {workshop.badge}
                </span>
            )}
            <h4 className="font-display font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
              {workshop.title}
            </h4>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} style={{ color: workshop.color }} />
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {workshop.location}
              </span>
            </div>
          </div>
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              background: `${workshop.color}10`,
              color: workshop.color,
              border: `1px solid ${workshop.color}30`
            }}
          >
            {workshop.type}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Workshops() {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section id="workshops" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={titleRef}
          className="text-center mb-20 transition-all duration-700"
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
            OUR WORKSHOPS
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Impact Across
            <br />
            <span className="text-gradient">India & Beyond</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            From IIT Kanpur to local municipality schools — our workshops span the nation.
          </p>
        </div>

        <div className="relative">
          {workshops.map((w, i) => (
            <WorkshopCard key={i} workshop={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
