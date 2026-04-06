import Image from 'next/image';
import logo from "@/assets/logo.svg";

const Instagram = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// 2. Criamos o ícone do LinkedIn em formato SVG (Estilo Lucide)
const Linkedin = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-footer py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="/" className="inline-block mb-4">
              <Image src={logo} alt="Shelfin" className="h-8" />
            </a>
            <p className="text-footer-foreground text-sm leading-relaxed">
              A Shelfin é uma empresa especializada em recrutamento, seleção e gestão de competências. Combinamos tecnologia e inteligência humana para encontrar e desenvolver os melhores talentos.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">SOLUÇÕES</h4>
            <ul className="space-y-2 text-sm text-footer-foreground">
              <li><a href="#solucoes" className="hover:text-primary-foreground transition-colors">Recrutamento & Seleção</a></li>
              <li><a href="#solucoes" className="hover:text-primary-foreground transition-colors">HeadHunter</a></li>
              <li><a href="#solucoes" className="hover:text-primary-foreground transition-colors">Consultoria de RH</a></li>
              <li><a href="#solucoes" className="hover:text-primary-foreground transition-colors">Treinamentos & Desenvolvimento Humano</a></li>
            </ul>
          </div>

          {/* <div> */}
          {/*   <h4 className="font-heading font-bold text-primary-foreground mb-4">CONTEÚDOS</h4> */}
          {/*   <ul className="space-y-2 text-sm text-footer-foreground"> */}
          {/*     <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog Shelfin</a></li> */}
          {/*     <li><a href="#" className="hover:text-primary-foreground transition-colors">E-books</a></li> */}
          {/*   </ul> */}
          {/* </div> */}
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-footer-foreground text-xs">
            © {new Date().getFullYear()} Shelfin. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/shelfinbr" className="text-footer-foreground hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/shelfinbr" className="text-footer-foreground hover:text-primary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
