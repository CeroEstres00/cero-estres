import { ContactFormDialog } from "@/components/contact-form-dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-[url('/padreehija.avif')] bg-cover bg-top overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-black/40 to-black/80">
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-20">
        <div className="grid gap-12 justify-center items-center">
          {/* Content */}
          <div className="text-center grid place-items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-secondary">Elimina</span> el Estrés de tus Finanzas
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 w-full">
              Te ayudamos a recuperar el control de tu economía con soluciones personalizadas y efectivas. Sin complicaciones, sin estrés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ContactFormDialog>
                <>
                  <ArrowRight className="h-5 w-5" />
                  Recupera tu Tranquilidad Hoy
                </>
              </ContactFormDialog>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10 gap-2 bg-transparent">
                <MessageCircle className="h-5 w-5" />
                Escríbenos
              </Button>
            </div>

            {/* Video CTA */}
            {/* <section className="absolute -bottom-10 mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <button type="button" className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 transition-colors">
                <Play className="h-6 w-6 text-secondary-foreground ml-1" />
              </button>
              <span className="text-white/80 font-medium">Mira cómo podemos ayudarte</span>
              
            </section> */}
          </div>
        </div>
      </div>
    </section>
  )
}
