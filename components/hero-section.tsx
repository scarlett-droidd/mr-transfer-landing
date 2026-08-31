"use client"
import { useEffect, useState } from "react"
import { AnimatedText } from "./animated-text"
import LabCircuitBackground from "./LabCircuitBackground"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
export function HeroSection() {
  const { language, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number
    let currentProgress = 0

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)

      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1

        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }

      cancelAnimationFrame(rafId)
      smoothUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 top-0">
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            height: `${heightVh}vh`,
          }}
        >
          <div className="absolute inset-0">
            <LabCircuitBackground className="absolute inset-0 -z-10" />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-[5] flex items-end justify-center"
        style={{
          transform: `translateY(${scrollProgress * 150}px)`,
          opacity: 1 - scrollProgress * 0.8,
          height: "100%",
        }}
      >
        <span
          className="block text-primary/20 font-serif font-bold text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] tracking-tighter select-none text-center leading-none"
          style={{ marginBottom: "0", textShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
        >
          MR TRANSFER LAB
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="text-metal-gold text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] leading-tight mb-4 w-full px-4 max-w-6xl mx-auto text-balance">
              <AnimatedText text="The Origin of Every Tattoo" delay={0.3} />
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl mt-4 font-light max-w-3xl mx-auto mb-8">
              {t.hero.taglineEn}{language === "es" && t.hero.taglineEs && (<><br /><span className="text-lg opacity-80 mt-2 block">{t.hero.taglineEs}</span></>)}
            </p>
            <a href="#contact" className="px-8 py-4 btn-gold font-semibold rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer relative z-20">
              {t.hero.cta} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative pointer-events-none">
            <div
              className={`relative w-[320px] md:w-[420px] lg:w-[550px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
              }`}
            >
              <img src="/images/hero.svg" alt="Mr Transfer Lab Cartridges Placeholder" className="w-full h-auto relative z-10" style={{ filter: "drop-shadow(0 0 15px rgba(143,217,196,0.8)) drop-shadow(0 0 45px rgba(143,217,196,0.4))" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
