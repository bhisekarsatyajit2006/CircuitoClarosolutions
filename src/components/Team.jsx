import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Linkedin, Twitter, Star } from 'lucide-react'
import founderImg from '../assets/founder.jpg'
import cofounderImg from '../assets/cofounder.jpg'
import ctoImg from '../assets/cto.jpg'
import cmoImg from '../assets/cmo.jpg'
import softwareDevImg from '../assets/software_devloper.jpg'
import designerImg from '../assets/designer.jpg'
import mentorImg from '../assets/company_mentor.jpg'

const teamMembers = [
  {
    name: 'Mr. Vedant Bhendkar',
    role: 'Founder & Director',
    initials: 'VB',
    color: 'var(--neon-cyan)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    image: founderImg,
    linkedin: 'https://linkedin.com',
    featured: true,
  },
  {
    name: 'Mr. Abhishek Modak',
    role: 'Co-Founder & Director',
    initials: 'AM',
    color: 'var(--neon-green)',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    image: cofounderImg,
    linkedin: 'https://linkedin.com',
    featured: true,
  },
  {
    name: 'Mr. Akshay Kawale',
    role: 'CTO',
    bio: '12 Years in Tech & Electronics · R&D Engineer, Indian Army',
    initials: 'AK',
    color: 'var(--neon-orange)',
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
    image: ctoImg,
    linkedin: 'https://linkedin.com',
    badge: '🇮🇳 Army R&D',
  },
  {
    name: 'Mr. Akshad Gulhane',
    role: 'CMO',
    initials: 'AG',
    color: 'var(--neon-purple)',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    image: cmoImg,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Mr. Nikhil Golait',
    role: 'Software Developer',
    initials: 'NG',
    color: 'var(--neon-cyan)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
    image: softwareDevImg,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Miss. Ishwari Kalbande',
    role: 'Designer',
    initials: 'IK',
    color: 'var(--neon-green)',
    gradient: 'linear-gradient(135deg, #10b981, #6ee7b7)',
    image: designerImg,
    linkedin: 'https://linkedin.com',
  },
]

function TeamCard({ member, delay }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="group relative p-5 rounded-[2.5rem] glass glow-border overflow-hidden transition-all duration-700"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {/* Image Container */}
      <div 
        className="w-full aspect-square rounded-[2rem] overflow-hidden mb-6 relative group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl"
        style={{ background: member.gradient }}
      >
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold opacity-30">
            {member.initials}
          </div>
        )}
        
        {/* LinkedIn Overlay Badge */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-[#0077b5] hover:bg-[#00a0dc] text-white shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} fill="white" />
          </a>
        )}

        {/* Subtle overlay glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${member.color}, transparent)` }}
        />
      </div>

      {/* Info */}
      <div className="text-left px-1">
        <h4 className="font-display font-bold text-xl mb-0.5" style={{ color: 'var(--text-primary)' }}>
          {member.name}
        </h4>
        <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {member.role}
        </p>
      </div>

      {member.badge && (
        <div
          className="inline-flex items-center gap-1 mt-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: `${member.color}15`,
            border: `1px solid ${member.color}40`,
            color: member.color
          }}
        >
          <Star size={10} />
          {member.badge}
        </div>
      )}
    </div>
  )
}

export default function Team() {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section id="team" className="py-32 relative overflow-hidden">
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
              border: '1px solid var(--neon-cyan)',
              color: 'var(--neon-cyan)'
            }}
          >
            OUR TEAM
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The Minds Behind
            <br />
            <span className="text-gradient">CircuitoClaro</span>
          </h2>
        </div>

        {/* Mentor section */}
        <MentorCard />

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-24">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} member={member} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MentorCard() {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="relative p-8 md:p-12 rounded-3xl mb-6 overflow-hidden transition-all duration-700"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--neon-purple)40',
        boxShadow: isVisible ? '0 0 40px var(--neon-purple)15' : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-purple), transparent)' }}
      />
      <div
        className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, var(--neon-purple), transparent)' }}
      />

      <div className="relative flex flex-col md:flex-row gap-8 items-start">
        <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
          <img src={mentorImg} alt="Dr. Deepak Dhote" className="w-full h-full object-cover" />
        </div>
        <div>
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3"
            style={{
              background: 'var(--neon-purple)18',
              color: 'var(--neon-purple)',
              border: '1px solid var(--neon-purple)40'
            }}
          >
            ⭐ Company Mentor
          </div>
          <h3 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            Dr. Deepak Dhote
          </h3>
          <p className="text-sm mb-3" style={{ color: 'var(--neon-purple)' }}>
            Principal, Brijlal Biyani Science College, Amravati
            <br />
            <span style={{ color: 'var(--text-muted)' }}>Associated with Sant Gadge Baba Amravati University</span>
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Dr. Dhote is a valued mentor and guiding strength for CircuitoClaro. His belief in innovation, disciplined growth, and purpose-driven technology has shaped our journey. With his visionary mindset, he encourages us to think beyond boundaries and transform ideas into meaningful solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

