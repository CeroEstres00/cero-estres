import { About } from "@/components/about"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { GoogleMapSection } from "@/components/googleMapSection"
import { VideoSection } from "@/components/video-section"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { WelcomePopup } from "@/components/welcome-popup"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <GoogleMapSection />
        <VideoSection />
        <CTASection />
      </main>
      <Footer />
      <WelcomePopup />
    </>
  )
}
