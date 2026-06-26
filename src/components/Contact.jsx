import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [formRef, formVisible] = useScrollAnimation()
  const [infoRef, infoVisible] = useScrollAnimation()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, var(--neon-cyan)0a, transparent)' }}
      />

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
              border: '1px solid var(--neon-orange)',
              color: 'var(--neon-orange)'
            }}
          >
            GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Let's Build the
            <br />
            <span className="text-gradient">Future Together</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Ready to bring innovation to your institution? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <div
            ref={formRef}
            className="lg:col-span-3 p-8 rounded-3xl transition-all duration-700"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateX(0)' : 'translateX(-40px)'
            }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={48} className="mb-4" style={{ color: 'var(--neon-green)' }} />
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                    { key: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--neon-cyan)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Workshop inquiry, Lab setup, etc."
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--neon-cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your institution and what you're looking for..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--neon-cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-black transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-green))',
                    boxShadow: '0 0 30px var(--glow-cyan)'
                  }}
                >
                  Send Message
                  <Send size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Info — 2 cols */}
          <div
            ref={infoRef}
            className="lg:col-span-2 space-y-5 transition-all duration-700"
            style={{
              opacity: infoVisible ? 1 : 0,
              transform: infoVisible ? 'translateX(0)' : 'translateX(40px)'
            }}
          >
            {[
              { icon: MapPin, label: 'Location', value: 'Amravati, Maharashtra, India', color: 'var(--neon-cyan)' },
              { icon: Mail, label: 'Email', value: 'info@circuitoclaro.com', color: 'var(--neon-green)' },
              { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', color: 'var(--neon-orange)' },
            ].map(({ icon: Icon, label, value, color }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl glow-border"
                style={{ background: 'var(--bg-card)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-mono font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
