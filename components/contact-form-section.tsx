"use client"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function ContactFormSection() {
  const { t } = useLanguage()


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
            {t.contactForm.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.contactForm.subtitle}
          </p>
        </div>

        <form action="https://formspree.io/f/TU_ENDPOINT_AQUI" method="POST" className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium text-foreground/80">{t.contactForm.labels.name}</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder={t.contactForm.placeholders.name}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="empresa" className="text-sm font-medium text-foreground/80">{t.contactForm.labels.company}</label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder={t.contactForm.placeholders.company}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">{t.contactForm.labels.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder={t.contactForm.placeholders.email}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="telefono" className="text-sm font-medium text-foreground/80">{t.contactForm.labels.phone}</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors"
                placeholder={t.contactForm.placeholders.phone}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="detalles" className="text-sm font-medium text-foreground/80">{t.contactForm.labels.details}</label>
            <textarea
              id="detalles"
              name="detalles"
              rows={4}
              className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors resize-none"
              placeholder={t.contactForm.placeholders.details}
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="btn-gold text-[#1C2740] font-bold rounded-xl px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] w-full md:w-auto md:min-w-[300px]"
            >
              {t.contactForm.submitButton} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
