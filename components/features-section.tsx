import { CheckCircle2 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    "Transferencia clara y definida",
    "Excelente rendimiento en líneas finas",
    "Buena adherencia sobre la piel",
    "Menor manchado durante la aplicación",
    "Consistencia entre hojas",
    "Fácil de utilizar",
    "Compatible con los principales sistemas de transferencia del mercado",
  ]

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-metal-solid mb-6">Beneficios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diseñado para brindar el máximo rendimiento en la mesa de trabajo de cada artista.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-card/50 border border-border rounded-xl p-6 flex items-start gap-4 hover:border-accent transition-colors group">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <p className="text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
