import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CreditCard,
  FileText,
  Scale
} from "lucide-react"
import { ContactFormDialog } from "./contact-form-dialog"

const services = [
  {
    icon: Scale,
    title: "Asesoramos en procesos de reorganización",
    description: "Asesoramos a personas naturales para que se acojan a la ley de insolvencia, permitiéndoles reorganizar y pagar sus deudas de acuerdo con su capacidad económica actual.",
  },
  {
    icon: CreditCard,
    title: "Normaliza tus deudas",
    description: "Llega a acuerdos de pago con tus acreedores que sí puedas cumplir. Te acompañamos en el proceso de descargue de tus deudas.",
  },
  {
    icon: FileText,
    title: "Conciliamos embargos y procesos jurídicos",
    description: "Llega a etapas de conciliación y evita que los procesos avancen y afecten o pierdas tu patrimonio.",
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
            En CEROESTRÉS FINANCIERO transformamos tu angustia, en soluciones; ayudamos a los colombianos a reconstruir, Ver la vida con esperanza y nuevas oportunidades, respaldados legal y jurídicamente, y acompañado de la experiencia de nuestros profesionales. Una vida CEROESTRES
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group justify-between hover:shadow-lg transition-all duration-300 border-border hover:border-secondary/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <ContactFormDialog variant="link" className="p-0 h-auto bg-transparent text-secondary hover:bg-transparent duration-300">
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
