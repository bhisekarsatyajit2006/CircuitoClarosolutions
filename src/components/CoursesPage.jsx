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
  const [ref, isVisible] = useScrollAnimation()

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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSelectedCourse(null)} />
          <div className="relative w-full max-w-2xl bg-[#0a0a0b] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
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

              <a 
                href="#contact"
                onClick={() => setSelectedCourse(null)}
                className="block w-full py-4 rounded-2xl text-center font-bold text-black transition-all hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, ${selectedCourse.color}, #fff)` }}
              >
                Enroll or Inquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
