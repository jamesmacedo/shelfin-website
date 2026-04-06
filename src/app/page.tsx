'use client'

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyShelfin from "@/components/WhyShelfin";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientLogos />

      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <WhyShelfin />

      <ContactSection />
      <Footer />
    </div>
  );
}
