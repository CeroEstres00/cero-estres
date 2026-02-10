import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Building2,
  CreditCard,
  FileText,
  PiggyBank,
  Scale,
  Shield,
  TrendingUp,
  Users
} from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Reunificación de Deudas",
    description: "Unifica todas tus deudas en una sola cuota mensual más cómoda y manejable.",
  },
  {
    icon: FileText,
    title: "Ley de Segunda Oportunidad",
    description: "Te ayudamos a cancelar tus deudas legalmente y empezar de nuevo sin cargas financieras.",
  },
  {
    icon: Building2,
    title: "Negociación con Bancos",
    description: "Negociamos en tu nombre con las entidades financieras para obtener mejores condiciones.",
  },
  {
    icon: PiggyBank,
    title: "Ahorro Financiero",
    description: "Diseñamos estrategias de ahorro adaptadas a tu situación económica actual.",
  },
  {
    icon: Scale,
    title: "Asesoría Legal",
    description: "Equipo de abogados especializados en derecho financiero a tu disposición.",
  },
  {
    icon: TrendingUp,
    title: "Planificación Financiera",
    description: "Creamos un plan financiero personalizado para alcanzar tus objetivos.",
  },
  {
    icon: Shield,
    title: "Protección Patrimonial",
    description: "Protegemos tus bienes y patrimonio de posibles embargos o reclamaciones.",
  },
  {
    icon: Users,
    title: "Mediación Familiar",
    description: "Resolvemos conflictos económicos familiares de forma amistosa y efectiva.",
  },
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
            Ofrecemos soluciones integrales para recuperar tu tranquilidad financiera. 
            Cada caso es único y lo tratamos con la dedicación que merece.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-secondary/50"
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
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80 gap-1">
                  Saber más <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  )
}
