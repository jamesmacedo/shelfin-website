'use client'

import { motion } from "framer-motion";
import { Target, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Missão", text: "Conectar empresas aos melhores talentos com agilidade, tecnologia e um olhar humano para cada processo." },
  { icon: Heart, title: "Valores", text: "Ética, transparência, compromisso com resultados e respeito às pessoas em todas as etapas." },
  { icon: Users, title: "Propósito", text: "Transformar a gestão de pessoas em um diferencial estratégico para empresas que desejam crescer." },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight">
            Quem <span className="text-cta">Somos</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Shelfin é uma consultoria de RH especializada em recrutamento, seleção e gestão de competências. Combinamos tecnologia e inteligência humana para encontrar e desenvolver os melhores talentos, ajudando empresas a construir equipes de alta performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
