const stats = [
  { value: "10,000+", label: "Clientes Ayudados" },
  { value: "15+", label: "Años de Experiencia" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "50M€", label: "Deuda Gestionada" },
]

export function Stats() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
