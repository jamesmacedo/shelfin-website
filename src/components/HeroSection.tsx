import { CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = [
  "Gestão inteligente de pessoas",
  "Processos de RH otimizados",
  "Banco de talentos qualificados",
  "Saúde do time em dia",
];

const HeroSection = () => {
  return (
    <section className="relative bg-hero min-h-[700px] flex items-center overflow-hidden lg:px-32">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/50" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side */}
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

          {/* Right side - Contact Form */}
          <div id="contato" className="bg-card rounded-xl p-6 shadow-2xl max-w-md md:ml-auto w-full">
            <p className="text-center text-sm font-medium text-foreground mb-4">
              Solicite um orçamento em{" "}
              <span className="text-cta font-bold">até 10 segundos! ⏱</span>
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50"
              />
              <input
                type="email"
                placeholder="Seu e-mail corporativo"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50"
              />
              <input
                type="tel"
                placeholder="(XX) X XXXX-XXXX"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50"
              />
              <input
                type="text"
                placeholder="O quê mensagem?"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50"
              />
              <button
                type="submit"
                className="w-full bg-cta text-cta-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm tracking-wide"
              >
                SOLICITAR CONTATO!
              </button>
              <p className="text-xs text-muted-foreground text-center">
                *Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
