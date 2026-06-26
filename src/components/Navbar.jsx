import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { HashLink as Link } from 'react-router-hash-link'
import logoImg from '../assets/company_logo.png'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/products' },
  { label: 'Workshops', href: '/#workshops' },
  { label: 'Team', href: '/#team' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 glass shadow-lg'
          : 'py-5 bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid var(--border)' : 'none' }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center relative h-full">
        {/* Logo - Centered on Mobile, Left on Desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-0 flex items-center">
          <Link to="/" className="flex items-center group">
            <div className="relative h-14 w-64 md:h-11 md:w-52 flex items-center justify-center overflow-hidden">
              <img src={logoImg} alt="CircuitoClaro Logo" className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
          </Link>
        </div>

        {/* Desktop Links (Pushed to center-right on desktop) */}
        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                smooth
                to={link.href}
                className="animated-underline px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:text-[var(--neon-cyan)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions - Pushed to the right */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          {/* CTA Button */}
          <Link
            smooth
            to="/#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-green))',
              boxShadow: '0 0 20px var(--glow-cyan)'
            }}
          >
            Get Started
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg relative z-20"
            style={{ color: 'var(--text-primary)' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mx-4 mt-2 rounded-2xl p-4" style={{ borderColor: 'var(--border)' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              smooth
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium transition-all hover:text-[var(--neon-cyan)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            smooth
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block text-center px-5 py-3 rounded-xl text-sm font-bold text-black"
            style={{ background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-green))' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
