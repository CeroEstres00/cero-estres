import { ContactFormDialog } from "./contact-form-dialog";

const steps = [
  {
    number: "01",
    title: "¿Tus deudas afectan tu calidad de vida?",
    description: "Analizamos cómo el sobreendeudamiento está impactando tu bienestar personal y familiar para recuperar tu tranquilidad.",
  },
  {
    number: "02",
    title: "¿Tus ingresos no te alcanzan para pagar tus deudas?",
    description: "Evaluamos tu flujo de caja real para encontrar un equilibrio donde tus necesidades básicas sean la prioridad.",
  },
  {
    number: "03",
    title: "¿Estás a punto de perder tu patrimonio por las deudas?",
    description: "Identificamos riesgos legales sobre tus bienes para implementar medidas de protección patrimonial inmediatas.",
  },
  {
    number: "04",
    title: "¿Tienes embargos que no te permiten manejar tus recursos?",
    description: "Buscamos soluciones legales para liberar tus cuentas y salarios, permitiéndote retomar el control de tu dinero.",
  },
  {
    number: "05",
    title: "¿Recibes llamadas constantes de cobro que te roban tu paz?",
    description: "Intervenimos en la comunicación con tus acreedores para detener el acoso y canalizar las negociaciones de forma profesional.",
  },
  {
    number: "06",
    title: "¿Presentas incumplimiento en pagos a bancos y terceros?",
    description: "Regularizamos tu situación frente a los reportes negativos mediante acuerdos de pago sostenibles a largo plazo.",
  },
  {
    number: "07",
    title: "¿Quieres comenzar una nueva vida crediticia?",
    description: "Trazamos una ruta de rehabilitación financiera para que vuelvas a ser sujeto de crédito en el menor tiempo posible.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Si a estas preguntas contestas que sí <span className="text-secondary">¡necesitas CERO ESTRÉS!.</span>
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
                <div className="text-6xl font-bold text-secondary/40 mb-4">
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
        <div className="text-center mt-12 w-2/4 grid mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
            <ContactFormDialog size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Ver los Siguientes Pasos
            </ContactFormDialog>
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/573182406163" className="size-full flex gap-2 px-4 border-2 rounded-lg justify-center items-center border-primary hover:bg-white/10  bg-transparent">
              Contacta con Nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
