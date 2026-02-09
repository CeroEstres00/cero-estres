import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Play, Phone } from "lucide-react"
import { ContactFormDialog } from "@/components/contact-form-dialog"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-secondary">Elimina</span> el Estrés de tus Finanzas
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Te ayudamos a recuperar el control de tu economía con soluciones personalizadas y efectivas. Sin complicaciones, sin estrés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ContactFormDialog>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Recupera tu Tranquilidad Hoy
                </Button>
              </ContactFormDialog>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2 bg-transparent">
                <MessageCircle className="h-5 w-5" />
                Escríbenos
              </Button>
            </div>

            {/* Video CTA */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <button type="button" className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 transition-colors">
                <Play className="h-6 w-6 text-secondary-foreground ml-1" />
              </button>
              <span className="text-white/80 font-medium">Mira cómo podemos ayudarte</span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 border border-white/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-4xl">📊</span>
                  </div>
                  <p className="text-sm">Tu imagen aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
