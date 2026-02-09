import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const features = [
  "Equipo de expertos financieros y legales",
  "Más de 15 años de experiencia",
  "Atención personalizada y confidencial",
  "Primera consulta gratuita sin compromiso",
  "Seguimiento continuo de tu caso",
  "Resultados garantizados",
]

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary/10 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">👥</span>
                  </div>
                  <p className="text-sm">Imagen del equipo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expertos en Eliminar tu <span className="text-secondary">Estrés Financiero</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              En Cero Es 3 entendemos que los problemas financieros pueden afectar todos los aspectos de tu vida. 
              Por eso, nuestro equipo de profesionales trabaja incansablemente para ofrecerte las mejores soluciones 
              y ayudarte a recuperar la tranquilidad que mereces.
            </p>
            <p className="text-muted-foreground mb-8">
              Nos especializamos en casos complejos y situaciones que otros consideran imposibles. 
              Con un enfoque humano y profesional, te acompañamos en cada paso del proceso.
            </p>

            {/* Features List */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Conoce a Nuestro Equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
