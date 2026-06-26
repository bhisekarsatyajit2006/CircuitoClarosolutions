import { ArrowUp, Linkedin } from 'lucide-react'
import logoImg from '../assets/company_logo.png'

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-52 overflow-hidden">
                <img src={logoImg} alt="CircuitoClaro Logo" className="h-full w-full object-contain" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              Technology-driven education company empowering the next generation of innovators through hands-on STEM programs.
            </p>
            <p className="text-xs font-mono mb-6" style={{ color: 'var(--text-muted)' }}>
              CircuitoClaro Solutions Pvt. Ltd. · Amravati, Maharashtra
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/5 hover:bg-white/10 hover:scale-110 text-white/50 hover:text-[#0077b5] border border-white/10"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-display font-bold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>
              Programs
            </h5>
            <ul className="space-y-2">
              {['Robotics Training', 'Drone Technology', 'IoT & Embedded', 'AI Curriculum', 'ATL Lab Setup', 'Faculty Training'].map(item => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm animated-underline transition-colors hover:text-[var(--neon-cyan)]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display font-bold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>
              Company
            </h5>
            <ul className="space-y-2">
              {['About Us', 'Our Team', 'Workshops', 'Products', 'NGO Partner', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href="#about"
                    className="text-sm animated-underline transition-colors hover:text-[var(--neon-cyan)]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} CircuitoClaro Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'var(--neon-cyan)20',
                border: '1px solid var(--neon-cyan)40',
                color: 'var(--neon-cyan)'
              }}
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
