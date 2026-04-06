import { motion } from "framer-motion";
import { Search, UserCheck, Briefcase, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "HeadHunter",
    description:
      "Seleção estratégica de profissionais para cargos de liderança e alta performance, com abordagem ativa e assertiva.",
  },
  {
    icon: UserCheck,
    title: "Recrutamento & Seleção",
    description:
      "Conectamos sua empresa aos talentos ideais com agilidade, foco em competências e alinhamento cultural.",
  },
  {
    icon: Briefcase,
    title: "Consultoria de RH",
    description:
      "Diagnóstico e planejamento estratégico para otimizar processos de gestão de pessoas e fortalecer a cultura organizacional.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos & Desenvolvimento Humano",
    description:
      "Programas sob medida para capacitar equipes, desenvolver lideranças e potencializar resultados.",
  },
  {
    icon: GraduationCap,
    title: "Implementação da NR-1",
    description: "Aplicação dentro da empresa, com diagnóstico e treinamento, incluindo a entrega do plano de ação anual, de acordo com as exigências da norma.",
  },
];

const ServicesSection = () => {
  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-cta mb-2">
          Conheça Nossas Soluções
        </h2>
        <p className="text-muted-foreground mb-12">Tudo o que sua empresa precisa para crescer com as pessoas certas.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">                                              
          {services.map((s, i) => (                                                                                                            
            <motion.div                                                                                                                        
              key={s.title}                                                                                                                    
              initial={{ opacity: 0, y: 30 }}                                                                                                  
              whileInView={{ opacity: 1, y: 0 }}                                                                                               
              viewport={{ once: true }}                                                                                                        
              transition={{ delay: i * 0.1, duration: 0.5 }}   
              className={`bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}                                 
            >                                                                                                                                  
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">                             
                <s.icon className="w-7 h-7 text-primary" />                                                                                    
              </div>                                                                                                                           
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{s.title}</h3>                                               
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>                                            
            </motion.div>                                                                                                                      
          ))}                                                                                                                                  
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
