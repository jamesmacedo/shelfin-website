import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion";

import ContactForm from "@/components/forms/Contact"

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
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
