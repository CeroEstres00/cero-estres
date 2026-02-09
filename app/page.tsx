import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

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
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
