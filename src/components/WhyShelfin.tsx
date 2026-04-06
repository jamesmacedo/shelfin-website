import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Users } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Agilidade", text: "Processos rápidos e eficientes para você não perder tempo nem talentos." },
  { icon: ShieldCheck, title: "Confiança", text: "Transparência total em cada etapa, do briefing à contratação." },
  { icon: TrendingUp, title: "Resultados", text: "Foco em performance e indicadores que fazem diferença no seu negócio." },
  { icon: Users, title: "Parceria", text: "Atuamos como extensão do seu time, entendendo sua cultura e necessidades." },
];

const WhyShelfin = () => {
  return (
    <section id="por-que" className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground text-center mb-12"
        >
          Por que escolher a <span className="text-cta">Shelfin</span>?
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="w-14 h-14 rounded-full bg-cta/15 flex items-center justify-center mx-auto">
                <r.icon className="w-7 h-7 text-cta" />
              </div>
              <h3 className="font-heading font-bold text-section-dark-foreground">{r.title}</h3>
              <p className="text-sm text-section-dark-foreground/70">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShelfin;
