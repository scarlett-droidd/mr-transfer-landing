"use client"
import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function ContactFormSection() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        const data = await res.json()
        throw new Error(data.error || "Error al enviar el formulario")
      }
    } catch (error: any) {
      setStatus("error")
      setErrorMessage(error.message || "Ocurrió un error inesperado al enviar")
    }
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
            {t.contactForm.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.contactForm.subtitle}
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-card/50 backdrop-blur-md border border-metal-gold/30 rounded-2xl p-12 shadow-2xl max-w-3xl mx-auto text-center animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-metal-gold/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-metal-gold" />
              </div>
            </div>
            <h3 className="text-3xl font-heading uppercase text-foreground mb-4">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo a la brevedad.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-gold text-[#1C2740] font-bold rounded-xl px-8 py-3 transition-all duration-300 hover:scale-[1.02]"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium text-foreground/80">{t.contactForm.labels.name}</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors disabled:opacity-50"
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
                  disabled={status === "loading"}
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors disabled:opacity-50"
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
                  disabled={status === "loading"}
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors disabled:opacity-50"
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
                  disabled={status === "loading"}
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors disabled:opacity-50"
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
                disabled={status === "loading"}
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-metal-gold transition-colors resize-none disabled:opacity-50"
                placeholder={t.contactForm.placeholders.details}
              />
            </div>

            {status === "error" && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold text-[#1C2740] font-bold rounded-xl px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] w-full md:w-auto md:min-w-[300px] disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    {t.contactForm.submitButton} <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
