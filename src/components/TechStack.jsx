import { 
  Cpu, CircuitBoard, Radio, Terminal, Bot, Brain, Wifi, 
  Share2, Eye, Activity, Wrench, Zap, Palette, Plane, Map 
} from 'lucide-react'

const techItems = [
  { label: 'Arduino', icon: Cpu, color: '#00979C' },
  { label: 'Raspberry Pi', icon: CircuitBoard, color: '#C51A4A' },
  { label: 'ESP32', icon: Radio, color: '#E7352C' },
  { label: 'Python', icon: Terminal, color: '#3776AB' },
  { label: 'ROS', icon: Bot, color: '#22314E' },
  { label: 'TensorFlow', icon: Brain, color: '#FF6F00' },
  { label: 'MQTT', icon: Wifi, color: '#660066' },
  { label: 'Node-RED', icon: Share2, color: '#8F0000' },
  { label: 'OpenCV', icon: Eye, color: '#5C3EE8' },
  { label: 'MATLAB', icon: Activity, color: '#ED6B06' },
  { label: 'Fusion 360', icon: Wrench, color: '#EA212E' },
  { label: 'KiCad', icon: Zap, color: '#336699' },
  { label: 'Blender', icon: Palette, color: '#F5792A' },
  { label: 'Pixhawk', icon: Plane, color: '#EA212E' },
  { label: 'Mission Planner', icon: Map, color: '#22314E' },
]

const statsItems = [
  { num: '500+', label: 'Students Trained' },
  { num: '8+', label: 'Workshops' },
  { num: '7', label: 'Programs' },
  { num: '12', label: 'Years Combined Expertise' },
  { num: '2', label: 'Innovative Products' },
  { num: '1', label: 'Army R&D Engineer' },
]

import { useScrollAnimation } from '../hooks/useScrollAnimation'

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex gap-4 ${reverse ? 'animate-marquee2' : 'animate-marquee'} whitespace-nowrap`}
        style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold flex-shrink-0 transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <item.icon size={18} style={{ color: item.color }} strokeWidth={2.5} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="py-20 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div
        ref={ref}
        className="text-center mb-10 transition-all duration-700"
        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(20px)' }}
      >
        <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
          TECHNOLOGIES WE WORK WITH
        </p>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(90deg, var(--bg-secondary), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(-90deg, var(--bg-secondary), transparent)' }}
        />
        <MarqueeRow items={techItems} />
        <MarqueeRow items={[...techItems].reverse()} reverse />
      </div>

      {/* Stats row */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {statsItems.map((stat, i) => {
            const [sRef, sVisible] = useScrollAnimation()
            return (
              <div
                key={i}
                ref={sRef}
                className="text-center p-4 rounded-2xl transition-all duration-500"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: sVisible ? 1 : 0,
                  transform: sVisible ? 'scale(1)' : 'scale(0.8)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)'
                }}
              >
                <div className="font-display text-2xl font-bold text-gradient">{stat.num}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
