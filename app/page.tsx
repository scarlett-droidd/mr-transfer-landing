import { Header } from "@/components/header"
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
      <Header />
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
