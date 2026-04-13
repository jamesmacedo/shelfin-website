'use client'

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl md:text-2xl font-heading text-section-dark-foreground leading-relaxed mb-8">
            "A parceria com a Shelfin{" "}
            <strong>transformou completamente nosso processo de recrutamento.</strong>{" "}
            Conseguimos{" "}
            <strong>reduzir o tempo de contratação e atrair profissionais</strong>{" "}
            muito mais alinhados com a nossa cultura.{" "}
            <strong>Agilidade, qualidade e um atendimento impecável!</strong>"
          </blockquote>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-benefit-yellow text-benefit-yellow" />
            ))}
          </div>

          <p className="text-benefit-yellow font-heading font-bold">
            João Martins, Gerente de RH
          </p>
          <p className="text-section-dark-foreground/60 text-sm">Curitiba/PR</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
