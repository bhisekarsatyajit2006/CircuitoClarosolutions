import { useScrollAnimation } from '../hooks/useScrollAnimation'
import dpiitImg from '../assets/dpiit.png'
import msmeImg from '../assets/msme_logo.png'
import digitalIndiaImg from '../assets/digital_india.png'
import medhavatika from '../assets/medhavatika_pvtltd.png'
import marathiParishad from '../assets/marathiparishad.png'
import sgbauImg from '../assets/sgbau.png'
import avishkarImg from '../assets/avishkar.png'

const certifications = [
  { img: dpiitImg, alt: 'DPIIT', label: 'Startup India' },
  { img: msmeImg, alt: 'MSME', label: 'MSME Certified' },
  { img: digitalIndiaImg, alt: 'Digital India', label: 'Digital India' },
]

const partners = [
  { img: medhavatika, alt: 'Medhavatika EdLabs', label: 'Medhavatika EdLabs Pvt. Ltd.' },
  { img: marathiParishad, alt: 'Marathi Vidnyan Parishad', label: 'Marathi Vidnyan Parishad (NGO)' },
  { img: sgbauImg, alt: 'SGBAU', label: 'Sant Gadgebaba Amravati University' },
  { img: avishkarImg, alt: 'Avishkar Foundation', label: 'Avishkar Foundation' },
]

export default function TrustedBy() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="trusted-by"
      className="py-20 relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)' }}
      />

      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 transition-all duration-700"
        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(30px)' }}
      >
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-4"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--neon-cyan)',
              color: 'var(--neon-cyan)'
            }}
          >
            RECOGNIZED &amp; CERTIFIED BY
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Trusted by <span className="text-gradient">Government Bodies</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Our credibility is backed by official government recognitions, affirming our commitment to quality and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90">
          {certifications.map((cert, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="h-20 md:h-24 flex items-center">
                <img src={cert.img} alt={cert.alt} className="h-full w-auto object-contain" />
              </div>
              <span
                className="text-xs font-mono tracking-wide uppercase text-center"
                style={{ color: 'var(--text-secondary)' }}
              >
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div
        className="max-w-5xl mx-auto px-6 mt-16 pt-14 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-4"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--neon-green)',
              color: 'var(--neon-green)'
            }}
          >
            OUR PARTNERS
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Partnered With <span className="text-gradient">Leading Institutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-10 md:gap-16 opacity-90">
          {partners.map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="h-16 md:h-24 flex items-center">
                <img src={partner.img} alt={partner.alt} className="h-full w-auto object-contain" />
              </div>
              <span
                className="text-[10px] md:text-xs font-mono tracking-wide uppercase text-center max-w-[140px]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px mt-16"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-green), transparent)' }}
      />
    </section>
  )
}
