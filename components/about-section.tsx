"use client"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import LabFrame from "./LabFrame"
import { useLanguage } from "@/context/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <LabFrame className="absolute inset-4 md:inset-8 z-20" />
      <div className="max-w-7xl mx-auto w-full relative z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#1C2740]/80 rounded-2xl p-6 md:p-8">
            <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-wide text-metal-gold mb-6">{t.about.title}</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-bold">
              {t.about.paragraph2}
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {[
                t.about.check1,
                t.about.check2,
                t.about.check3,
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-br from-background to-card px-5 py-4 transition-all hover:border-accent/60 hover:shadow-[0_0_20px_rgba(143,217,196,0.15)]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {/* Laser line sweeping left to right */}
                  <motion.div
                    className="absolute top-0 h-full w-1 pointer-events-none"
                    style={{
                      background: "#8FD9C4",
                      filter: "drop-shadow(0 0 6px #8FD9C4) drop-shadow(0 0 14px rgba(143,217,196,0.7))",
                    }}
                    variants={{
                      hidden: { left: "-4px", opacity: 0 },
                      visible: {
                        left: ["0%", "100%", "100%"],
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 0.55,
                          delay: i * 0.3,
                          times: [0, 0.7, 1],
                          ease: "easeOut",
                        },
                      },
                    }}
                  />

                  {/* Card content fades in after laser */}
                  <motion.div
                    className="relative flex items-center gap-4"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 0.4, delay: i * 0.3 + 0.35 },
                      },
                    }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle2
                        className="w-5 h-5 text-accent"
                        style={{ filter: "drop-shadow(0 0 4px rgba(143, 217, 196, 0.6)) drop-shadow(0 0 8px rgba(143, 217, 196, 0.3))" }}
                      />
                    </span>
                    <span className="text-foreground text-base md:text-lg">{item}</span>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.paragraph3}
            </p>
          </div>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-float w-full">
              <Image
                src="/images/sobrenosotros.svg?v=2"
                alt={t.about.imageAlt}
                width={810}
                height={1012}
                className="w-full h-auto object-contain scale-[1.4] origin-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
