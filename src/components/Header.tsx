'use client'

import Image from 'next/image';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const navItems = [
  {
    title: "Quem somos",
    href: "#quem-somos"
  },
  {
    title: "Beneficios",
    href: "#beneficios"
  },
  {
    title: "Soluções",
    href: "#solucoes"
  },
  {
    title: "Por que a Shelfin?",
    href: "#por-que"
  },
  {
    title: "Plataforma",
    href: "https://app.shelfin.com.br"
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent lg:p-4 lg:px-20">
      <div className="flex items-center justify-between py-4 px-4">
        <a href="/" className="flex justify-start items-start w-20">
          <Image src={logo} alt="Shelfin" className="" height={40}/>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* <div className="hidden md:flex items-center gap-3"> */}
        {/*   <a href="#" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground border border-primary-foreground/30 rounded-full px-5 py-2 transition-colors"> */}
        {/*     Entrar */}
        {/*   </a> */}
        {/*   <a href="#contato" className="text-sm font-bold bg-cta text-cta-foreground rounded-full px-5 py-2 hover:opacity-90 transition-opacity"> */}
        {/*     SOLICITAR CONTATO */}
        {/*   </a> */}
        {/* </div> */}

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-hero px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              {item.title}
            </a>
          ))}
          <a href="#contato" className="block text-sm font-bold bg-cta text-cta-foreground rounded-full px-5 py-2 text-center">
            SOLICITAR CONTATO
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
