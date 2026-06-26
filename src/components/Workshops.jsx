import ambalaImg from '../assets/ambalacantworkshop.jpg'
import iitkImg from '../assets/iitkanpurworkshop1.jpg'
import chandigarhImg from '../assets/Chadigarhworkshop.jpg'
import digrasImg from '../assets/Digrasworkshop.jpg'
import vimlabaiImg from '../assets/Vimlabaiworkshop.jpg'
import samraImg from '../assets/Samraworkshop.jpg'
import ramkrishnaImg from '../assets/ramkrishnaworkshop.jpg'

const workshops = [
  {
    title: '2-Day Training',
    location: 'Ambala Cantonment',
    type: 'Technical Training',
    color: 'var(--neon-cyan)',
    highlight: false,
    image: ambalaImg,
  },
  {
    title: 'IIT Kanpur Boeing Aeromodelling',
    location: 'IIT Kanpur',
    type: 'Elite Mentorship',
    color: 'var(--neon-orange)',
    highlight: true,
    badge: 'IIT Kanpur × Boeing',
    image: iitkImg,
  },
  {
    title: '2-Day Workshop',
    location: 'Chandigarh University',
    type: 'University Program',
    color: 'var(--neon-green)',
    highlight: false,
    image: chandigarhImg,
  },
  {
    title: '6-Day Intensive Workshop',
    location: 'Gurukul School, Digras',
    type: 'School Program',
    color: 'var(--neon-purple)',
    highlight: false,
    image: digrasImg,
  },
  {
    title: 'Project Development',
    location: 'Vimlabai Deshmukh Mahavidyalay',
    type: '2-Day Workshop',
    color: 'var(--neon-cyan)',
    highlight: false,
    image: vimlabaiImg,
  },
  {
    title: 'Guest Lecture',
    location: 'Bhavarilal Samra High School',
    type: 'Awareness Session',
    color: 'var(--neon-green)',
    highlight: false,
    image: samraImg,
  },
  {
    title: '2-Day Robotics Workshop',
    location: 'Shri Ramkrishna Kridavidyalay',
    type: 'Robotics Training',
    color: 'var(--neon-orange)',
    highlight: false,
    image: ramkrishnaImg,
  },
]

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MapPin, Star } from 'lucide-react'

function WorkshopCard({ workshop, index }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl overflow-hidden glass transition-all duration-700 hover:scale-[1.02]`}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        background: 'var(--bg-card)',
        border: `1px solid ${workshop.highlight ? workshop.color : 'var(--border)'}`,
        boxShadow: workshop.highlight ? `0 10px 40px ${workshop.color}15` : 'var(--shadow-card)'
      }}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={workshop.image} 
          alt={workshop.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: 'white',
              color: 'black'
            }}
          >
            {workshop.type}
          </span>
        </div>

        {/* Highlight Badge */}
        {workshop.badge && (
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
              style={{
                background: workshop.color,
                color: 'black'
              }}
            >
              <Star size={10} fill="currentColor" /> {workshop.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
          {workshop.title}
        </h4>
        <div className="flex items-center gap-2">
          <MapPin size={14} style={{ color: workshop.color }} />
          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            {workshop.location}
          </span>
        </div>
      </div>

      {/* Hover accent */}
      <div
        className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: workshop.color }}
      />
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

      <div className="max-w-7xl mx-auto px-6">
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
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            From elite technical mentorship at IIT Kanpur to inspiring innovation in local municipality schools across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((w, i) => (
            <WorkshopCard key={i} workshop={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
