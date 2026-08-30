"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, X, Plus } from "lucide-react"
import LabFrameFixedCorners from "./LabFrameFixedCorners"

const benefits = [
  {
    id: 1,
    title: "Transferencia clara y precisa",
    description: "Líneas y detalles se transfieren con máxima nitidez, manteniendo la fidelidad del diseño original incluso en los trazos más finos.",
    x: 28,
    y: 18,
  },
  {
    id: 2,
    title: "Adherencia limpia, sin manchado",
    description: "El diseño se mantiene firme sobre la piel durante toda la sesión, con una transferencia pareja que reduce el riesgo de manchado o errores.",
    x: 68,
    y: 30,
  },
  {
    id: 3,
    title: "Consistencia entre hojas",
    description: "Cada hoja de la caja ofrece el mismo resultado, sin variaciones de calidad entre unidades.",
    x: 25,
    y: 50,
  },
  {
    id: 4,
    title: "Formato profesional, compatible con todo",
    description: "Formato Letter (8.5\" × 11\" — 21.6 × 27.9 cm), compatible con impresoras térmicas y transferencia manual. Listo para uso profesional de tatuaje, sin curva de aprendizaje.",
    x: 68,
    y: 68,
  },
  {
    id: 5,
    title: "Rendimiento pensado para tu estudio",
    description: "100 hojas por caja y 10 cajas por case (1.000 hojas en total) — el respaldo de stock que un estudio o distribuidor necesita para no quedarse corto.",
    x: 35,
    y: 88,
  },
]

export function BenefitsSection() {
  const [activeSpot, setActiveSpot] = useState<number | null>(0)
  const [viewMode, setViewMode] = useState<"hotspots" | "list">("hotspots")
  
  return (
    <section id="beneficios" className="py-24 lg:py-32 px-6 relative bg-gradient-to-b from-[#5B3A6E] via-[#3F3A5E] to-[#1C2740] min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none z-0 opacity-5">
        <span className="font-serif font-bold text-center text-[15vw] sm:text-[15vw] leading-none tracking-tighter text-primary whitespace-nowrap">
          EL PRODUCTO
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-12">
        {/* Header & Toggle */}
        <div className="relative flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-8 px-4 py-6">
          <LabFrameFixedCorners className="absolute inset-1 md:inset-2 z-0" color="#3B2A47" cornerSize={36} />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-wide text-metal-gold mb-4 text-balance">
              El Producto
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Explora por qué MR. Transfer Lab es la herramienta que tus artistas van a preferir usar.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
              onClick={() => setViewMode(viewMode === "hotspots" ? "list" : "hotspots")}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm shrink-0 transition-all hover:scale-105 btn-gold text-[#1C2740]"
            >
              {viewMode === "hotspots" ? (
                <>
                  <List className="w-4 h-4" />
                  Ver lista completa
                </>
              ) : (
                <>
                  <X className="w-4 h-4" />
                  Cerrar lista
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <AnimatePresence mode="wait">
          {viewMode === "hotspots" ? (
            <motion.div
              key="hotspots"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Desktop Info Panel (Stacking Cards Effect) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col justify-center relative h-[700px]">
                {activeSpot === null && (
                  <div className="absolute inset-0 flex items-center justify-center text-center opacity-50 z-0 transition-opacity duration-500">
                    <p className="text-xl">Haz clic en un punto para ver los detalles.</p>
                  </div>
                )}
                {benefits.map((spec, index) => {
                  const offset = activeSpot !== null ? (index - activeSpot + benefits.length) % benefits.length : 0;
                  const isActive = activeSpot === index;
                  const opacities = [1, 0.6, 0.45, 0.3, 0.18];
                  const currentOpacity = activeSpot !== null ? opacities[offset] : 0;
                  
                  return (
                    <div
                      key={spec.id}
                      className="absolute left-0 right-0 rounded-3xl p-[2px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] origin-top"
                      style={{
                        top: "20%",
                        zIndex: 10 - offset,
                        opacity: currentOpacity,
                        transform: `translateY(${offset * 24}px) scale(${1 - offset * 0.04})`,
                        filter: `blur(${offset * 2}px)`,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: "conic-gradient(from 0deg, transparent 0%, #8FD9C4 15%, transparent 30%, transparent 100%)",
                          animation: "spin-border 3s linear infinite",
                        }}
                      />
                      <div className="relative rounded-3xl p-10 backdrop-blur-xl shadow-2xl bg-card/95 border border-white/10 h-full">
                        <div className="text-primary font-bold text-6xl opacity-20 mb-4 font-serif">0{spec.id}</div>
                        <h3 className="text-3xl font-bold mb-4 text-foreground font-sans">
                          {spec.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Right Side: Image and Mobile Sticky Panel */}
              <div className="lg:col-span-7 relative flex flex-col items-center">
                {/* Mobile Info Panel */}
                <div className="lg:hidden w-full flex flex-col justify-center min-h-[200px] sticky top-24 z-30 mb-8 rounded-2xl p-[2px] overflow-hidden shadow-xl">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 0%, #8FD9C4 15%, transparent 30%, transparent 100%)",
                      animation: "spin-border 3s linear infinite",
                    }}
                  />
                  <div className="relative w-full h-full bg-card/95 backdrop-blur-md rounded-2xl border border-border/50">
                    <AnimatePresence mode="wait">
                      {activeSpot !== null ? (
                        <motion.div
                          key={activeSpot}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="p-6 w-full"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="text-primary font-bold text-2xl font-serif">0{benefits[activeSpot].id}</div>
                            <h3 className="text-xl font-bold text-foreground font-sans leading-tight">
                              {benefits[activeSpot].title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {benefits[activeSpot].description}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center p-6 opacity-50"
                        >
                          <p className="text-sm">Toca un punto para ver los detalles.</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Interactive Image Container */}
                <div className="relative w-full max-w-[560px] aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/beneficios.svg" 
                    alt="Mr. Transfer Lab - Beneficios" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(143,217,196,0.25)]"
                  />
                  {/* Hotspots */}
                  {benefits.map((spec, index) => {
                    const isActive = activeSpot === index
                    return (
                      <div
                        key={spec.id}
                        className="absolute"
                        style={{ top: `${spec.y}%`, left: `${spec.x}%`, transform: 'translate(-50%, -50%)' }}
                      >
                        {!isActive && (
                          <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                        )}
                        <button
                          onClick={() => setActiveSpot(isActive ? null : index)}
                          className={`relative z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? "bg-accent text-card scale-110 shadow-[0_0_15px_rgba(143,217,196,0.6)]" 
                              : "bg-card border-2 border-primary text-primary hover:bg-primary/20"
                          }`}
                        >
                          <Plus className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-45" : ""}`} />
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 md:grid-cols-2"
            >
              {benefits.map((spec) => (
                <div key={spec.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold font-serif">
                    0{spec.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground font-sans">{spec.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
