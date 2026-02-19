import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Análisis y Diagnóstico",
    description: "Estudiamos tu situación financiera actual en detalle para entender completamente tu caso y las opciones disponibles.",
  },
  {
    number: "02",
    title: "Plan Personalizado",
    description: "Diseñamos una estrategia a medida basada en tus necesidades específicas y objetivos financieros.",
  },
  {
    number: "03",
    title: "Negociación y Gestión",
    description: "Nos encargamos de todas las negociaciones con bancos y acreedores. Tú solo tienes que seguir el plan.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo <span className="text-secondary">Trabajamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y transparente diseñado para liberarte del estrés financiero paso a paso.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-muted rounded-2xl p-8 h-full">
                {/* Step Number */}
                <div className="text-6xl font-bold text-secondary/20 mb-4">
                  {step.number}
                </div>
                

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-secondary/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Ver los Siguientes Pasos
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              Contacta con Nosotros
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
