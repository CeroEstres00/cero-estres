import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight
} from "lucide-react"
import Image from "next/image"
import { ContactFormDialog } from "./contact-form-dialog"

const services = [
  {
    icon: "/iconBalance.avif",
    title: "Asesoramos en procesos de reorganización",
    description: "Asesoramos a personas naturales para que se acojan a la ley de insolvencia, permitiéndoles reorganizar y pagar sus deudas de acuerdo con su capacidad económica actual.",
  },
  {
    icon: "/creditCardIcon.avif",
    title: "Normaliza tus deudas",
    description: "Llegamos a acuerdos de pago con tus acreedores que sí puedas cumplir. Te acompañamos en el proceso de descargue de tus deudas.",
  },
  {
    icon: "/noteBookIcon.avif",
    title: "Conciliamos embargos y procesos jurídicos",
    description: "Llegamos a etapas de conciliación y evita que los procesos avancen y afecten o pierdas tu patrimonio.",
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros <span className="text-secondary">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En <span className="text-primary font-bold">CEROESTRÉS FINANCIERO</span> transformamos tu angustia, en soluciones; ayudamos a los colombianos a reconstruir, Ver la vida con esperanza y nuevas oportunidades, respaldados legal y jurídicamente, y acompañado de la experiencia de nuestros profesionales. Una vida <span className="text-primary font-bold">CEROESTRÉS</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group  hover:shadow-lg transition-all duration-300 border-border hover:border-secondary/50"
            >
              <CardHeader>
                <div className="size-18 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <Image src={service.icon} alt={service.title} width={24} height={24} className="size-12" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between gap-4">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
                <ContactFormDialog variant="link" className="p-0 self-end place-self-end justify-self-end h-auto bg-transparent text-secondary hover:bg-transparent duration-300">
                  Saber más <ArrowRight className="h-4 w-4" />
                </ContactFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
