import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { X, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, ShoppingCart, MessageCircle, Package, Zap, Award } from 'lucide-react'
import bonelinkImg from '../assets/bonelink.jpg'
import homekitImg from '../assets/homekit.jpg'
import agriDroneImg from '../assets/agridroneproduct.png'

const products = [
  {
    id: 'bonelink',
    name: 'BoneLink Hearing Aid',
    subtitle: 'Social Innovation - Bone Conduction',
    shortDesc: 'A revolutionary hearing assistance device using bone conduction technology.',
    fullDesc: 'BoneLink is our flagship social innovation project. It bypasses the outer and middle ear by sending sound vibrations directly to the inner ear through the skull. This makes it an ideal solution for people with conductive hearing loss or middle ear issues.',
    image: bonelinkImg,
    color: '#0ea5e9',
    tag: 'R&D Product',
    features: ['Bone Conduction Tech', 'Lightweight Design', 'USB Rechargeable', 'Custom Fitting'],
    highlights: [
      { text: 'Social Impact Project', icon: Award },
      { text: 'Advanced R&D Innovation', icon: Zap },
      { text: 'Cost-Effective Solution', icon: TrendingUp },
    ]
  },
  {
    id: 'homekit',
    name: 'Smart Home Kit',
    subtitle: 'IoT Ecosystem - ESP32 Based',
    shortDesc: 'Complete home automation kit for smart appliance control.',
    fullDesc: 'A production-grade IoT ecosystem designed for smart homes. This kit includes controllers for lights, fans, and sensors, all manageable via a centralized dashboard and mobile app. Built on the robust ESP32 platform.',
    image: homekitImg,
    color: '#10b981',
    tag: 'Available Now',
    features: ['WiFi/Bluetooth Connectivity', 'Mobile App Control', 'Voice Assist Support', 'Energy Monitoring'],
    highlights: [
      { text: 'Plug & Play Setup', icon: Zap },
      { text: 'Industrial Grade IoT', icon: ShieldCheck },
      { text: 'Customizable Dashboard', icon: Package },
    ]
  },
  {
    id: 'agri-drone',
    name: 'Agriculture Spray Drone',
    subtitle: 'Precision Farming - 10L Payload',
    shortDesc: 'Advanced spraying solution for modern crop management and monitoring.',
    fullDesc: 'Our heavy-duty agricultural drone is designed for precision spraying of pesticides and fertilizers. It features autonomous terrain following, fail-safe GPS navigation, and a dual-pump spray system to maximize coverage while minimizing chemical waste.',
    image: agriDroneImg,
    color: '#fbbf24',
    tag: 'New Hardware',
    features: ['10L Tank Capacity', 'GPS Autonomous Flight', 'Dual-Pump Spray System', 'Foldable Carbon Fiber Frame'],
    highlights: [
      { text: 'High Efficiency Spraying', icon: Zap },
      { text: 'Autonomous Navigation', icon: ShieldCheck },
      { text: 'Low Maintenance Design', icon: Package },
    ]
  }
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showInquiry, setShowInquiry] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', contact: '', email: '', college: '', branch: '', year: '', message: ''
  })
  const [ref, isVisible] = useScrollAnimation()

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = "919699861781"
    const text = `*New Product Inquiry*\n\n` +
                 `*Product:* ${selectedProduct.name}\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Contact:* ${formData.contact}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*Details:* ${formData.college}, ${formData.branch}, ${formData.year}\n` +
                 `*Message:* ${formData.message}`
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setShowInquiry(false)
      setSelectedProduct(null)
      setFormData({ name: '', contact: '', email: '', college: '', branch: '', year: '', message: '' })
    }, 4000)
  }

  const handleClose = () => {
    setSelectedProduct(null)
    setShowInquiry(false)
    setSubmitted(false)
  }

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] opacity-20 pointer-events-none" 
           style={{ background: 'radial-gradient(circle at 50% 0%, var(--neon-cyan)20, transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header 
          ref={ref}
          className="text-center mb-20 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(30px)' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-4"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--neon-cyan)', color: 'var(--neon-cyan)' }}>
            INNOVATION LAB
          </span>
          <h1 className="text-4xl md:text-7xl font-bold font-display mb-6">
            Our <span className="text-gradient">Innovations</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary" style={{ color: 'var(--text-secondary)' }}>
            Explore our line of R&D products designed to solve real-world challenges through technology and creativity.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <div 
              key={product.id}
              className="group p-8 rounded-[2.5rem] glass glow-border transition-all duration-500 hover:scale-[1.02]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white">
                    {product.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{product.name}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: product.color }}>{product.subtitle}</p>
              <p className="text-secondary mb-8 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                {product.shortDesc}
              </p>
              <button 
                onClick={() => setSelectedProduct(product)}
                className="group/btn flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-all"
                style={{ color: product.color }}
              >
                View Details
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose} />
          <div className="relative w-full max-w-2xl bg-[#0a0a0b] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
            >
              <X size={24} />
            </button>
            
            <div className="overflow-y-auto custom-scrollbar">
              {submitted ? (
                <div className="p-12 py-20 text-center animate-in zoom-in fade-in duration-500">
                  <div className="w-20 h-20 bg-[#10b981]20 border border-[#10b981]40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-[#10b981]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Inquiry Received</h2>
                  <p className="text-white/60 mb-8 max-w-md mx-auto">
                    Thanks for your interest in {selectedProduct.name}! We'll contact you shortly regarding pricing and availability.
                  </p>
                  <div className="h-1 w-64 bg-white/10 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-[#10b981] animate-progress" />
                  </div>
                </div>
              ) : showInquiry ? (
                <div className="p-8 md:p-12 animate-in slide-in-from-right duration-500">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Product Inquiry</h2>
                    <p className="text-white/50">Item: <span style={{ color: selectedProduct.color }}>{selectedProduct.name}</span></p>
                  </div>
                  
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required type="text" placeholder="Full Name"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] outline-none"
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <input 
                        required type="tel" placeholder="Contact Number"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] outline-none"
                        value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      />
                    </div>
                    <input 
                      required type="email" placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] outline-none"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required type="text" placeholder="College/Org"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] outline-none"
                        value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})}
                      />
                      <input 
                        required type="text" placeholder="Branch/Dept"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] outline-none"
                        value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})}
                      />
                    </div>
                    <textarea 
                      rows="3" placeholder="Additional details or specific requirements..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] outline-none resize-none"
                      value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>

                    <div className="flex gap-4 pt-4">
                      <button type="button" onClick={() => setShowInquiry(false)} className="flex-1 py-4 text-white font-bold bg-white/5 rounded-xl">Back</button>
                      <button type="submit" className="flex-[2] py-4 text-black font-bold rounded-xl" style={{ background: `linear-gradient(135deg, ${selectedProduct.color}, #fff)` }}>Send Inquiry</button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="animate-in fade-in duration-500">
                  <div className="h-64 overflow-hidden relative">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-8 md:p-12 -mt-16 relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                        <Package size={28} style={{ color: selectedProduct.color }} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white leading-tight">{selectedProduct.name}</h2>
                        <p className="text-sm font-medium" style={{ color: selectedProduct.color }}>{selectedProduct.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed mb-8 text-white/60">
                      {selectedProduct.fullDesc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                          <CheckCircle2 size={18} style={{ color: selectedProduct.color }} />
                          <span className="text-sm text-white/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <a href="#contact" onClick={handleClose} className="flex-1 py-4 rounded-2xl text-center font-bold text-black flex items-center justify-center gap-2 transition-all hover:scale-[1.02]" style={{ background: `linear-gradient(135deg, ${selectedProduct.color}, #fff)` }}>
                        <ShoppingCart size={20} /> Buy Now
                      </a>
                      <button onClick={() => setShowInquiry(true)} className="flex-1 py-4 rounded-2xl text-center font-bold text-white flex items-center justify-center gap-2 transition-all border border-white/10 glass hover:bg-white/5">
                        <MessageCircle size={20} /> Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
