import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { ContactFormDialog } from "./contact-form-dialog"

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
          <div className="order-2 lg:order-1 overflow-hidden rounded-lg">
            <Image src={"/equipo.avif"} alt="Imagen de personas con traje elegante" width={600} height={400} className="size-full object-contain"/>
          </div> 

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Profesionales especializados en <span className="text-secondary">soluciones legales para crisis financieras personales.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              CEROESTRÉS FINANCIERO es un grupo de profesionales en busca de soluciones, nace en el año 2021, con el propósito de ofrecer una solución clara y efectiva para las personas naturales que enfrentan ESTRES financiero por sus deudas. Ayudamos por medio de los beneficios de la ley 2445 del 2025 Insolvencia Persona Natural (antes ley 1564 del 2012) a obtener soluciones que permitan recuperar su estabilidad económica
            </p>
            <p className="text-muted-foreground mb-8">
              Nos especializamos en casos complejos y situaciones que otros consideran imposibles. 
              Con un enfoque humano y profesional, te acompañamos en cada paso del proceso.
            </p>

            {/* Features List */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <ContactFormDialog size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <>
              <ArrowRight className="h-5 w-5" />
              Agenda una reunión
            </>
            </ContactFormDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
