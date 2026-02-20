import { ContactFormDialog } from "@/components/contact-form-dialog"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-[url('/padreehija.avif')] bg-cover bg-top overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-black/40 to-black/80">
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-20">
        <div className="grid gap-12 justify-center items-center w-full ">
          {/* Content */}
          <div className="text-center grid place-items-center max-w-full *:max-w-full">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              <span className="text-secondary">Recupere su estabilidad</span> financiera legalmente y detenga embargos, demandas y presión de cobranza.
            </h1> 
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 w-full">
              Te ayudamos a recuperar el control de tu economía con soluciones personalizadas y efectivas. Sin complicaciones, sin estrés.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center lg:justify-start">
              <ContactFormDialog className="text-lg max-w-full">
                <>
                  <ArrowRight className="h-5 w-5" />
                  Solicitar evaluación financiera gratuita
                </>
              </ContactFormDialog>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/573182406163" className="h-12 w-full inline-flex border rounded-lg justify-center items-center  duration-300 border-white text-white hover:bg-white/10 gap-2 bg-transparent text-lg">
                <MessageCircle className="h-5 w-5" />
                Escríbenos
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
