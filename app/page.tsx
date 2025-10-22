import Header from '@/components/layout/Header'
import Hero from '@/components/sections/FirstScreen'
import Features from '@/components/sections/SecondScreen'
import Solutions from '@/components/sections/ThirdScreen'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Footer />
    </main>
  )
} 