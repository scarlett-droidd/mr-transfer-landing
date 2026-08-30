"use client"
import { useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    detalles: "",
  })

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectar a backend real (ej. Formspree o API local)
    console.log("Formulario enviado localmente (placeholder)", formData)
  }

  const handleWhatsAppClick = () => {
    const numeroWhatsApp = "TU_NUMERO_AQUI" // TODO: reemplazar por el número real

    const mensaje = `Hola, mi nombre es ${formData.nombre || "[nombre]"}${
      formData.empresa ? ` de ${formData.empresa}` : ""
    }. Me interesa distribuir MR. Transfer Lab.${
      formData.detalles ? `\n\nDetalles: ${formData.detalles}` : ""
    }${formData.email ? `\n\nCorreo: ${formData.email}` : ""}`

    const texto = encodeURIComponent(mensaje)
    window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank")
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-[#1C2740]/90">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="text-[25vw] font-bold text-white opacity-5 whitespace-nowrap">
          LAB
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-wide text-metal-gold mb-6">
            Conviértete en distribuidor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Completa el formulario para solicitar información sobre precios por volumen, catálogo y condiciones de distribución.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium text-foreground/80">Nombre completo</label>
              <input
                id="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange("nombre")}
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="empresa" className="text-sm font-medium text-foreground/80">Nombre de la empresa / Tienda</label>
              <input
                id="empresa"
                type="text"
                value={formData.empresa}
                onChange={handleChange("empresa")}
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder="Nombre de tu negocio"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">Correo electrónico</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder="tu@correo.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="telefono" className="text-sm font-medium text-foreground/80">Teléfono / WhatsApp</label>
              <input
                id="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange("telefono")}
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder="+56 9 1234 5678"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="detalles" className="text-sm font-medium text-foreground/80">Volumen estimado (Cajas/mes) o Detalles adicionales</label>
            <textarea
              id="detalles"
              value={formData.detalles}
              onChange={handleChange("detalles")}
              rows={4}
              className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors resize-none"
              placeholder="Cuéntanos un poco sobre tu operación..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 btn-gold text-[#1C2740] font-bold rounded-xl px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              Solicitar información <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="flex-1 relative flex items-center justify-center gap-2 bg-transparent border-2 border-[#C9A86A] text-[#C9A86A] font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:bg-[#C9A86A]/10 hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" /> Contactar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
