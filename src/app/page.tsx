import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyShelfin from "@/components/WhyShelfin";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shelfin | Consultoria de RH, Recrutamento e Seleção Inteligente',
  description: 'A Shelfin une tecnologia e inteligência humana para recrutamento estratégico, executive search e gestão de pessoas. Torne seu RH mais ágil e focado em performance.',
  keywords: [
    'Consultoria de RH', 
    'Recrutamento e Seleção', 
    'Executive Search', 
    'Gestão de Competências', 
    'Treinamento e Desenvolvimento', 
    'RH ágil', 
    'Implementação NR-1'
  ],
  authors: [{ name: 'Shelfin' }],
  openGraph: {
    title: 'Shelfin - Seu RH mais ágil e inteligente',
    description: 'Conectamos empresas aos melhores talentos com tecnologia e olhar humano. Conheça nossas soluções de recrutamento e gestão.',
    url: '[https://shelfin.com.br](https://shelfin.com.br)',
    siteName: 'Shelfin',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shelfin - Consultoria de RH',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
const jsonLd = {
    "@context": "[https://schema.org](https://schema.org)",
    "@type": "Service",
    "serviceType": "Consultoria de RH e Recrutamento",
    "provider": {
      "@type": "Organization",
      "name": "Shelfin",
      "url": "[https://shelfin.com.br](https://shelfin.com.br)"
    },
    "description": "Consultoria especializada em recrutamento, seleção e gestão de competências utilizando tecnologia e análise de perfil.",
    "areaServed": "BR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de RH",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Search" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Recrutamento & Seleção" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultoria de RH" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Treinamentos & Desenvolvimento" } }
      ]
    }
  };
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <HeroSection />
      <ClientLogos />

      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <WhyShelfin />

      <ContactSection />
      <Footer />
    </div>
  );
}
