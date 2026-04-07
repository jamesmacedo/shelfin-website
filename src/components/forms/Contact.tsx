import { motion } from "framer-motion";

const ContactSection = () => {


  return (
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
  );
};

export default ContactSection;
