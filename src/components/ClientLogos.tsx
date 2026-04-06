import Image from 'next/image';

import anbFarma from "@/assets/clients/anb-farma.png";
import imediatoNexway from "@/assets/clients/imediato-nexway.png";
import tic from "@/assets/clients/tic.webp";
import timePlanning from "@/assets/clients/time-planning.png";
import kaizen from "@/assets/clients/kaizen.png";
import estrela from "@/assets/clients/estrela.png";

const logos = [
  { src: anbFarma, alt: "ANB Farma" },
  { src: imediatoNexway, alt: "Imediato Nexway" },
  { src: tic, alt: "TIC Telecom" },
  { src: timePlanning, alt: "Time Planning" },
  { src: kaizen, alt: "Kaizen Service" },
  { src: estrela, alt: "Estrela do Oriente Transportes" },
];

const ClientLogos = () => {
  return (
    <section className="py-8 bg-background border-b border-border overflow-hidden">
      <div className="flex animate-slide-logos whitespace-nowrap items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center w-[200px] h-[70px] px-6 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="max-h-[45px] max-w-[150px] w-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
