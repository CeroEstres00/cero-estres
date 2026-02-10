import { ContactFormDialog } from "@/components/contact-form-dialog"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-secondary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Da el Primer Paso Hacia tu <span className="text-secondary">Libertad Financiera</span>
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Consulta gratuita y sin compromiso. Nuestros expertos analizarán tu situación 
            y te propondrán las mejores soluciones disponibles.
          </p>

          <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 justify-center">
            <ContactFormDialog>
                <ArrowRight className="h-5 w-5" />
                Solicita tu Consulta Gratuita
            </ContactFormDialog>
            <a className="size-full flex gap-2 px-4 border-2 rounded-lg justify-center items-center border-white text-white hover:bg-white/10  bg-transparent">
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Horario de atención: Lunes a Viernes de 9:00 a 20:00
          </p>
        </div>
      </div>
    </section>
  )
}
