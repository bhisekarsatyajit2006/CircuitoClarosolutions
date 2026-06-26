import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowUpRight } from 'lucide-react'
import bonelinkImg from '../assets/bonelink.jpg'
import homekitImg from '../assets/homekit.jpg'

function Tilt3DCard({ children, color }) {
  const cardRef = useRef(null)

  const handleMouse = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    card.style.boxShadow = `0 20px 60px ${color}30`
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    card.style.boxShadow = 'var(--shadow-card)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="cursor-pointer"
      style={{ transition: 'transform 0.15s ease, box-shadow 0.3s ease' }}
    >
      {children}
    </div>
  )
}

const products = [
  {
    id: 'bonelink',
    name: 'BoneLink',
    image: bonelinkImg,
    subtitle: 'Hearing Aid for Deaf People',
    description: 'Our flagship innovation — BoneLink is a bone conduction hearing aid designed to provide hearing assistance to people with hearing impairment. A meaningful solution built at the intersection of technology and social impact.',
    features: ['Bone Conduction Technology', 'Designed for accessibility', 'Innovative R&D product'],
    color: 'var(--neon-cyan)',
    tag: 'Social Innovation',
  },
  {
    id: 'homekit',
    name: 'Home Automation Kit',
    image: homekitImg,
    subtitle: 'Smart Home Control System',
    description: 'A comprehensive home automation kit enabling smart control of household appliances and systems. Built on IoT and embedded systems, it demonstrates real-world application of CircuitoClaro\'s training programs.',
    features: ['IoT-Based Control', 'ESP Microcontroller', 'Hands-on Learning Kit'],
    color: 'var(--neon-green)',
    tag: 'IoT Product',
  },
]

export default function Products() {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section id="products" className="py-32 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 left-0 top-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, var(--neon-cyan), transparent)' }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-8 right-0 top-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, var(--neon-green), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
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
            OUR PRODUCTS
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Innovation That
            <br />
            <span className="text-gradient">Makes an Impact</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-world products born from our R&D and built to solve real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => {
            const [ref, isVisible] = useScrollAnimation()
            return (
              <div
                key={product.id}
                ref={ref}
                className="transition-all duration-700"
                style={{
                  transitionDelay: `${i * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
                }}
              >
                <Tilt3DCard color={product.color}>
                  <div
                    className="relative rounded-3xl overflow-hidden glass border border-white/10 group"
                    style={{ background: 'var(--bg-card)' }}
                  >
                    {/* Image Header */}
                    <div className="w-full aspect-video overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent opacity-60" />
                      
                      {/* Tag Overlay */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg"
                          style={{
                            background: `${product.color}DD`,
                            color: 'black',
                            border: `1px solid ${product.color}`
                          }}
                        >
                          {product.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="font-display font-bold text-3xl mb-1" style={{ color: 'var(--text-primary)' }}>
                          {product.name}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: product.color }}>
                          {product.subtitle}
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-8">
                        {product.features.map((feat, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                            <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: product.color }}
                            />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <button
                        className="w-full flex items-center justify-between px-6 py-3 rounded-xl text-sm font-semibold transition-all group/btn bg-white/5 border border-white/10 hover:bg-white/10"
                        style={{ color: product.color }}
                      >
                        Explore Innovation <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </button>
                    </div>
                  </div>
                </Tilt3DCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
