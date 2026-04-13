import { CheckCircle } from "lucide-react";
import Image from 'next/image';
// import heroBg from "@/assets/hero-bg.jpg";

import ContactForm from "@/components/forms/Contact"

const benefits = [
  "Gestão inteligente de pessoas",
  "Processos de RH otimizados",
  "Banco de talentos qualificados",
  "Saúde do time em dia",
];

const HeroSection = () => {
  return (
    <section className="relative bg-hero min-h-[700px] flex items-center overflow-hidden lg:px-32">
      {/* <Image src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover"></Image> */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/50" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="w-full h-full flex items-center justify-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-extrabold leading-tight text-hero-foreground">
                Seu <span className="text-benefit-green">RH</span> mais ágil e inteligente começa com a{" "}
                <span className="text-cta">Shelfin.</span>
              </h1>
              <p className="text-hero-foreground/70 text-lg max-w-lg">
                Pessoas, performance e propósito caminhando juntas, com processos que geram resultado e satisfação no foco em resultado.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-hero-foreground/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-benefit-green shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
