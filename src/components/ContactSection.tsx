import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion";

const ContactSection = () => {


  return (
    <section id="contato-footer" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight">
              Vamos transformar a forma de{" "}
              <span className="text-cta">
                <Typewriter
                  component="span"
                  options={{
                    strings: [
                      'contratar sua equipe',
                      'estruturar seu RH',
                      'cuidar da sua equipe',
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "inline",
                    cursorClassName: "inline",
                  }}
                />
              </span>
              , juntos?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Conte com a Shelfin para construir times mais fortes, engajados e alinhados ao futuro da sua empresa. Fale com a gente agora mesmo.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-6 shadow-xl border border-border"
          >
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
                placeholder="Sua mensagem"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
