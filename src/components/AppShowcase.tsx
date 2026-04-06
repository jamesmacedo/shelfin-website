import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const features = [
  "Plano de Desenvolvimento Individual",
  "Trilha de Carreira",
  "Feedbacks e muito mais!",
];

const AppShowcase = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mock App UI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl shadow-xl p-6 space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-cta" />
              <div className="w-3 h-3 rounded-full bg-benefit-yellow" />
              <div className="w-3 h-3 rounded-full bg-benefit-green" />
            </div>
            <div className="space-y-3">
              {["Operação I", "Operação II", "Operação III", "Operação IV"].map((op, i) => (
                <div key={op} className="flex items-center justify-between bg-muted rounded-lg p-3">
                  <span className="text-sm font-medium text-foreground">{op}</span>
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className={`w-7 h-7 rounded-full border-2 border-card ${
                          j === 0 ? "bg-benefit-blue" : j === 1 ? "bg-benefit-pink" : "bg-benefit-green"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded bg-benefit-green/20" />
                    <div className="w-5 h-5 rounded bg-benefit-blue/20" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight">
              POTENCIALIZE SUA GESTÃO DE PESSOAS COM{" "}
              <span className="text-cta">INTELIGÊNCIA</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Com o app da Shelfin, a gestão por competências se torna mais ágil e inteligente, integrando desempenho, desenvolvimento e estratégia em uma plataforma prática e eficiente.
            </p>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckSquare className="w-5 h-5 text-benefit-green shrink-0" />
                  <span className="font-medium text-foreground">{f}</span>
                </div>
              ))}
            </div>
            <a
              href="#contato"
              className="inline-block bg-cta text-cta-foreground font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity tracking-wide"
            >
              SOLICITAR CONTATO!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
