import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Cpu, Globe, Brain, Layout, Box, Plane, Rocket, X, ArrowRight, CheckCircle2, TrendingUp, GraduationCap, Lightbulb, UserCheck, ShieldCheck, Award } from 'lucide-react'

const courses = [
  {
    id: 'robotics',
    title: 'Robotics & Embedded Systems',
    shortDesc: 'Master the art of building intelligent machines from scratch.',
    fullDesc: 'Dive deep into the world of microcontrollers, sensors, and actuators. Learn to program Arduino, ESP32, and STM32 to create autonomous systems and industrial grade robots.',
    icon: Cpu,
    color: '#0ea5e9',
    features: ['Microcontroller Programming', 'Sensor Integration', 'Motor Control Systems', 'Autonomous Navigation']
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT)',
    shortDesc: 'Connect the world with smart, data-driven IoT solutions.',
    fullDesc: 'Learn how to bridge the gap between physical hardware and the cloud. Study MQTT protocols, cloud integration (AWS/Azure), and build real-time monitoring systems.',
    icon: Globe,
    color: '#10b981',
    features: ['Wireless Communication', 'Cloud Dashboarding', 'Data Security in IoT', 'Smart Home Project']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    shortDesc: 'Implement intelligence using Computer Vision and Neural Networks.',
    fullDesc: 'Explore the fundamentals of AI on the edge. Learn to use Raspberry Pi and Jetson Nano for real-time object detection, face recognition, and predictive analysis.',
    icon: Brain,
    color: '#a855f7',
    features: ['Python for AI', 'OpenCV Basics', 'TensorFlow Lite', 'Edge Computing']
  },
  {
    id: 'pcb',
    title: 'PCB Design & Basic Electronics',
    shortDesc: 'Design professional circuits and production-ready hardware.',
    fullDesc: 'From schematic capture to multi-layer PCB layout. Learn industry-standard tools like KiCad and Altium to transform your breadboard projects into professional products.',
    icon: Layout,
    color: '#f97316',
    features: ['Schematic Design', 'PCB Routing Basics', 'SMD Component Handling', 'Manufacturing Exports']
  },
  
  {
    id: 'drones',
    title: 'Drone Technology',
    shortDesc: 'Engineer the future of aerial robotics and flight systems.',
    fullDesc: 'Understand flight dynamics, ESC calibration, and flight controller setup. Build and pilot your own quadcopters while learning about FPV and GPS navigation.',
    icon: Plane,
    color: '#14b8a6',
    features: ['Flight Dynamics', 'Flight Controller Logic', 'Telemetry Systems', 'Safe Piloting Skills']
  },
  
]

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showInquiry, setShowInquiry] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', contact: '', email: '', college: '', branch: '', year: '', message: ''
  })
  const [ref, isVisible] = useScrollAnimation()

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    
    const whatsappNumber = "919699861781"
    const text = `*New Course Inquiry*\n\n` +
                 `*Course:* ${selectedCourse.title}\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Contact:* ${formData.contact}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*College:* ${formData.college}\n` +
                 `*Branch:* ${formData.branch}\n` +
                 `*Year of Study:* ${formData.year}\n` +
                 `*Message:* ${formData.message}`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    
    // Show success state
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setShowInquiry(false)
      setSelectedCourse(null)
      setFormData({ name: '', contact: '', email: '', college: '', branch: '', year: '', message: '' })
    }, 4000)
  }

  const handleClose = () => {
    setSelectedCourse(null)
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
            OUR CURRICULUM
          </span>
          <h1 className="text-4xl md:text-7xl font-bold font-display mb-6">
            Explore Our <span className="text-gradient">Programs</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary" style={{ color: 'var(--text-secondary)' }}>
            Industry-vetted courses designed to bridge the gap between academic theory and real-world professional innovation.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div 
              key={course.id}
              className="group p-8 rounded-[2.5rem] glass glow-border transition-all duration-500 hover:scale-[1.02]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12"
                style={{ background: `${course.color}15`, border: `1px solid ${course.color}30` }}
              >
                <course.icon size={32} style={{ color: course.color }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
              <p className="text-secondary mb-8 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                {course.shortDesc}
              </p>
              <button 
                onClick={() => setSelectedCourse(course)}
                className="group/btn flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-all"
                style={{ color: course.color }}
              >
                View Details
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose} />
          <div className="relative w-full max-w-2xl bg-[#0a0a0b] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              {submitted ? (
                <div className="py-20 text-center animate-in zoom-in fade-in duration-500">
                  <div className="w-20 h-20 bg-[#10b981]20 border border-[#10b981]40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-[#10b981]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Inquiry Sent!</h2>
                  <p className="text-white/60 mb-8 max-w-md mx-auto">
                    Thank you for your interest in {selectedCourse.title}. We'll process your inquiry and get back to you shortly.
                  </p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#10b981] animate-progress" />
                  </div>
                </div>
              ) : showInquiry ? (
                <div className="animate-in slide-in-from-right duration-500">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Course Inquiry</h2>
                    <p className="text-white/50">Details for: <span style={{ color: selectedCourse.color }}>{selectedCourse.title}</span></p>
                  </div>
                  
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Full Name</label>
                        <input 
                          required type="text" placeholder="e.g. John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] transition-colors outline-none"
                          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Contact No.</label>
                        <input 
                          required type="tel" placeholder="e.g. +91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] transition-colors outline-none"
                          value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Email Address</label>
                      <input 
                        required type="email" placeholder="e.g. john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] transition-colors outline-none"
                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">College/University</label>
                      <input 
                        required type="text" placeholder="e.g. MIT Pune"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] transition-colors outline-none"
                        value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Branch</label>
                        <input 
                          required type="text" placeholder="e.g. Mechanical"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] transition-colors outline-none"
                          value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Year of Study</label>
                        <select 
                          required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] transition-colors outline-none appearance-none"
                          value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})}
                        >
                          <option value="" className="bg-[#0a0a0b]">Select Year</option>
                          <option value="1st Year" className="bg-[#0a0a0b]">1st Year</option>
                          <option value="2nd Year" className="bg-[#0a0a0b]">2nd Year</option>
                          <option value="3rd Year" className="bg-[#0a0a0b]">3rd Year</option>
                          <option value="Final Year" className="bg-[#0a0a0b]">Final Year</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Your Message</label>
                      <textarea 
                        rows="3" placeholder="Tell us about your requirements..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--neon-cyan)] transition-colors outline-none resize-none"
                        value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button 
                        type="button" onClick={() => setShowInquiry(false)}
                        className="flex-1 py-4 rounded-xl text-center font-bold text-white transition-all bg-white/5 hover:bg-white/10 border border-white/10"
                      >
                        Back
                      </button>
                      <button 
                        type="submit"
                        className="flex-[2] py-4 rounded-xl text-center font-bold text-black transition-all hover:scale-[1.02]"
                        style={{ background: `linear-gradient(135deg, ${selectedCourse.color}, #fff)` }}
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                         style={{ background: `${selectedCourse.color}15`, border: `1px solid ${selectedCourse.color}30` }}>
                      <selectedCourse.icon size={28} style={{ color: selectedCourse.color }} />
                    </div>
                    <h2 className="text-3xl font-bold" style={{ color: 'white' }}>{selectedCourse.title}</h2>
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
                    {selectedCourse.fullDesc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {selectedCourse.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} style={{ color: selectedCourse.color }} />
                        <span className="text-sm font-medium" style={{ color: 'white' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Universal Highlights */}
                  <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2" style={{ color: selectedCourse.color }}>
                      <TrendingUp size={16} /> Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { text: 'Practical & Industry-Oriented Learning', icon: GraduationCap },
                        { text: 'Real-World Project Experience', icon: Rocket },
                        { text: 'Latest Technology Exposure', icon: Lightbulb },
                        { text: 'Career & Placement Advantages', icon: TrendingUp },
                        { text: 'Better Future Preparation', icon: UserCheck },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                          <item.icon size={18} style={{ color: selectedCourse.color }} />
                          <span className="text-xs font-medium text-white/80">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expert Info & Certificate */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#10b981' }}>
                        <ShieldCheck size={18} /> Trainer Expertise
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Training by Industry Professionals with <strong>4-5 Years</strong> of industrial experience in {selectedCourse.title}.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#f59e0b' }}>
                        <Award size={18} /> Certification
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Official <strong>Company Certificate</strong> provided upon successful completion of the course/internship.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-2">
                    <a 
                      href="#contact"
                      onClick={() => handleClose()}
                      className="flex-1 py-4 rounded-2xl text-center font-bold text-black transition-all hover:scale-[1.02] shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${selectedCourse.color}, #fff)` }}
                    >
                      Enroll Now
                    </a>
                    <button 
                      onClick={() => setShowInquiry(true)}
                      className="flex-1 py-4 rounded-2xl text-center font-bold text-white transition-all hover:scale-[1.02] border border-white/20 glass hover:bg-white/5 shadow-lg"
                    >
                      Inquire Now
                    </button>
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
