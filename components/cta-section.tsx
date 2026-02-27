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
            Tú situación financiera puede mejorar si <span className="text-secondary">actúas a tiempo.</span>
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Cada caso es diferente. Nuestro equipo puede evaluar tu situación y explicarte las opciones legales con claridad.
          </p>

          <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 justify-center">
            <ContactFormDialog className="text-lg">
                <ArrowRight className="h-5 w-5" />
                Solicitar asesoría profesional gratuita
            </ContactFormDialog>
            <a target="_blank" rel="noreferrer noopener" href="https://wa.me/573042675943" className="size-full flex gap-2 px-4 border-2 rounded-lg justify-center items-center border-white text-white hover:bg-white/10  bg-transparent">
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Confidencialidad en la información.
          </p>
        </div>
      </div>
    </section>
  )
}
