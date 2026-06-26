import { ThemeProvider, useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Industries from './components/Industries'
import Products from './components/Products'
import Workshops from './components/Workshops'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const { isDark } = useTheme()
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Navbar />
      <main>
        <Hero isDark={isDark} />
        <TrustedBy />
        <About />
        <Services />
        <TechStack />
        <Industries />
        <Products />
        <Workshops />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
