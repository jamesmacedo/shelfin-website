'use client'

import { motion } from "framer-motion";
import { Brain, Zap, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Processo Inteligente",
    description: "Utilizamos tecnologia e análise de perfil para encontrar o candidato certo com mais agilidade e precisão.",
    color: "bg-benefit-green",
  },
  {
    icon: Zap,
    title: "Agilidade na Contratação",
    description: "Reduza o tempo do seu processo seletivo com nossa agilidade e expertise e um banco de talentos ativo.",
    color: "bg-benefit-blue",
  },
  {
    icon: Users,
    title: "Seleção Personalizada",
    description: "Cada vaga é única — por isso, adaptamos nosso processo à sua empresa e cultura organizacional.",
    color: "bg-benefit-pink",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description: "Apresentamos os melhores candidatos com uma triagem técnica, comportamental e culturalmente alinhada.",
    color: "bg-benefit-yellow",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center text-foreground mb-12">
          Nossos Benefícios
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${b.color} rounded-xl p-6 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
