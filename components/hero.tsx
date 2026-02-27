import { ContactFormDialog } from "@/components/contact-form-dialog"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-[url('/padreehija.avif')] bg-cover bg-top overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute bottom-8 opacity-80 right-8 z-20 flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
        <Mail className="h-5 w-5 text-white" />
        <span>ceroestresinsolvencia@gmail.com</span>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-black/40 to-black/80">
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-20">
        <div className="grid gap-12 justify-center items-center w-full ">
          {/* Content */}
          <div className="text-center grid place-items-center max-w-full *:max-w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              <span className="text-secondary">Recupera tu estabilidad financiera, </span>
                una <span className="text-secondary">VIDA CEROESTRÉS</span> en tus deudas, presión en llamadas, suspensión en demandas y embargos.
            </h1> 
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 w-full">
              Podemos ayudarte a superar tu situación financiera con soluciones personalizadas y efectivas, tu tranquilidad es nuestra prioridad.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center lg:justify-start">
              <ContactFormDialog className="text-lg max-w-full">
                <>
                  <ArrowRight className="h-5 w-5" />
                  Solicitar asesoría profesional gratuita
                </>
              </ContactFormDialog>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/573042675943" className="h-12 w-full inline-flex border rounded-lg justify-center items-center  duration-300 border-white text-white hover:bg-white/10 gap-2 bg-transparent text-lg">
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
