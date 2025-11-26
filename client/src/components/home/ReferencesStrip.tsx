import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

// Import select logos for homepage
import lacivertLogo from "@assets/logos/lacivert_logo.png";
import pslLogo from "@assets/logos/psl_logo.png";
import adeLogo from "@assets/logos/ade_logo.png";
import kurlarLogo from "@assets/logos/kurlar_logo.png";

const references = [
  { name: "Lacivert Teknoloji", category: "Bilişim", logo: lacivertLogo },
  { name: "PSL Mobil Enerji", category: "Enerji", logo: pslLogo },
  { name: "Ade Global Ads", category: "AdTech", logo: adeLogo },
  { name: "Kurlar", category: "Endüstriyel", logo: kurlarLogo }
];

export default function ReferencesStrip() {
  return (
    <section className="py-24 bg-background border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12">
          <h2 className="text-3xl font-display font-bold text-white text-center md:text-left">Seçkin Referanslar</h2>
          <Link href="/referanslar">
            <a className="text-primary text-sm font-medium hover:underline mt-4 md:mt-0">
              Tümünü Gör
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="aspect-[4/3] bg-secondary/20 border border-white/5 flex flex-col items-center justify-center p-8 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img 
                src={ref.logo} 
                alt={ref.name}
                loading="lazy"
                className="w-40 h-40 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute bottom-6 left-0 right-0 text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <h3 className="text-lg font-bold text-white mb-1">{ref.name}</h3>
                <p className="text-xs text-primary">{ref.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
