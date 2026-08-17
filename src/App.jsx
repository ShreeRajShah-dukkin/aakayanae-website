import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Insights from './components/Insights.jsx'
import WebsiteTypes from './components/WebsiteTypes.jsx'
import Process from './components/Process.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Insights />
        <WebsiteTypes />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
