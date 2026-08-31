"use client"

import { Target, TrendingUp, PackageCheck } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { SponsorCarousel, SponsorImage } from "./SponsorCarousel"
import type { LucideIcon } from "lucide-react"

const serviceIcons: LucideIcon[] = [Target, PackageCheck, TrendingUp]

interface ServicesSectionClientProps {
  sponsorImages: SponsorImage[]
}

export function ServicesSectionClient({ sponsorImages }: ServicesSectionClientProps) {
  const { t } = useLanguage()

  return (
    <section id="why-distribute" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0 opacity-5">
        <span className="font-serif font-bold text-center text-[18vw] leading-none tracking-tighter text-primary whitespace-nowrap">
          PARTNERSHIP
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-wide text-metal-gold mb-6 text-balance">
            {t.whyDistribute.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.whyDistribute.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="flex flex-col gap-6">
            {t.whyDistribute.services.map((service, index) => {
              const Icon = serviceIcons[index]
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden flex flex-1 gap-6 items-start p-6 rounded-2xl border border-border bg-card hover:border-[#9F69BD]/50 transition-colors duration-300"
                >
                  <div 
                    className="absolute -bottom-10 -right-10 z-0 opacity-[0.12] pointer-events-none animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <Icon className="w-48 h-48 text-[#9F69BD]" />
                  </div>
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-[#9F69BD]/20 group-hover:bg-[#9F69BD]/35 transition-colors">
                    <Icon className="w-7 h-7 text-[#c8a0e0]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-foreground font-sans">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col">
            <SponsorCarousel images={sponsorImages} />
          </div>
        </div>
      </div>
    </section>
  )
}
