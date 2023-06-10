import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Feedbacks from '@/components/Feedbacks'
import Hero from '@/components/Hero'
import Tech from '@/components/Tech'
import Works from '@/components/Works'
import Footer from '@/components/Footer'
import NowsRoom from '@/components/NowsRoom'

export default function Home() {
  return (
    <div className="bg-white backdrop-blur-sm transition-colors bg-app-transparent">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <NowsRoom />
      <Contact />
      <Footer />
    </div>
  )
}
