import { Header } from "@/components/header"
import { LanguageSwitch } from "@/components/language-switch"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ServicesSection } from "@/components/services-section"

import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import DistributorsTicker from "@/components/DistributorsTicker"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-0 z-50 w-full flex flex-col items-center pointer-events-none">
        <div className="w-full pointer-events-auto">
          <Header />
        </div>
        <div className="flex justify-center mt-2 pointer-events-auto">
          <LanguageSwitch />
        </div>
      </div>

      <HeroSection />
      
      <div className="relative z-0">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lab-background.jpg?v=2"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <AboutSection />
      </div>
      <BenefitsSection />
      <ServicesSection />


      <ContactFormSection />
      <DistributorsTicker />
      <Footer />
    </main>
  )
}
