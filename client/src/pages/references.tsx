import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import logos
import pslLogo from "@assets/generated_images/minimalist_logo_for_psl_mobil_enerji.png";
import gokalafLogo from "@assets/generated_images/minimalist_logo_for_gokalaf.png";
import lacivertLogo from "@assets/generated_images/minimalist_logo_for_lacivert_teknoloji.png";
import hankLogo from "@assets/generated_images/minimalist_logo_for_hank.png";
import kurlarLogo from "@assets/generated_images/minimalist_logo_for_kurlar.png";
import adeLogo from "@assets/generated_images/minimalist_logo_for_ade_global_ads.png";
import yardimSeliLogo from "@assets/generated_images/minimalist_logo_for_yardım_seli.png";
import nasilOlduLogo from "@assets/generated_images/minimalist_logo_for_nasıl_oldu.png";
import postaLogo from "@assets/generated_images/minimalist_logo_for_posta_kod_rehberi.png";
import besinLogo from "@assets/generated_images/minimalist_logo_for_besin_değerim.png";

const references = [
  {
    name: "PSL Mobil Enerji",
    url: "https://pslmobilenerji.com/",
    logo: pslLogo,
    description: "Taşınabilir güç istasyonları ve mobil enerji çözümleri alanında öncü teknoloji şirketi.",
    category: "Enerji Teknolojileri"
  },
  {
    name: "Gökalaf",
    url: "https://www.gokalaf.com/",
    logo: gokalafLogo,
    description: "Türkiye'nin önde gelen online fitness koçluğu ve uzaktan eğitim platformu.",
    category: "Spor & Sağlık (+SEO)"
  },
  {
    name: "Lacivert Teknoloji",
    url: "https://lacivertteknoloji.com/",
    logo: lacivertLogo,
    description: "Kurumsal IT destek, donanım kiralama ve sistem altyapı çözümleri.",
    category: "Bilişim Teknolojileri"
  },
  {
    name: "Hank Gayrimenkul",
    url: "https://hank.com.tr/",
    logo: hankLogo,
    description: "Yeni nesil gayrimenkul danışmanlığı ve mülk yönetimi platformu.",
    category: "Gayrimenkul (+SEO)"
  },
  {
    name: "Kurlar",
    url: "https://kurlar.com.tr/",
    logo: kurlarLogo,
    description: "Endüstriyel dalgıç pompa ve motor üretiminde 40 yıllık tecrübe.",
    category: "Endüstriyel Üretim"
  },
  {
    name: "Ade Global Ads",
    url: "https://ads.adegloba.space/",
    logo: adeLogo,
    description: "Yüksek performanslı dijital reklamcılık ve özel yazılım çözümleri.",
    category: "AdTech & Yazılım"
  },
  {
    name: "Yardım Seli Derneği",
    url: "https://yardimselidernegi.com/",
    logo: yardimSeliLogo,
    description: "Su kuyuları ve insani yardım projeleriyle dünyanın dört bir yanına ulaşan sivil toplum kuruluşu.",
    category: "Sivil Toplum"
  },
  {
    name: "Nasıl Oldu",
    url: "https://nasiloldu.net/",
    logo: nasilOlduLogo,
    description: "Ünlü isimlerin biyografileri ve hayat hikayelerini derleyen dijital medya platformu.",
    category: "Dijital Medya"
  },
  {
    name: "Posta Kod Rehberi",
    url: "https://postakodrehberi.com/",
    logo: postaLogo,
    description: "Türkiye'nin en kapsamlı ve güncel posta kodu sorgulama servisi.",
    category: "Veri Servisleri"
  },
  {
    name: "Besin Değerim",
    url: "https://besindegerim.com/",
    logo: besinLogo,
    description: "Sağlıklı yaşam için detaylı besin değerleri ve kalori analiz platformu.",
    category: "Sağlık & Veri"
  }
];

export default function References() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <section className="py-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
          Değerli <br />
          <span className="text-primary">Referanslarımız</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Sektör liderleriyle çalışmaktan gurur duyuyoruz. İşte dijital dönüşüm yolculuklarına eşlik ettiğimiz bazı markalar.
        </p>
      </section>

      <section className="pb-32 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <motion.a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-sm hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Top Section - Logo Area */}
              <div className="h-48 bg-secondary/20 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
                <img 
                  src={ref.logo} 
                  alt={`${ref.name} Logo`} 
                  className="h-24 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 drop-shadow-xl"
                />
              </div>

              {/* Bottom Section - Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">
                      {ref.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {ref.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {ref.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="text-white/40 text-xs font-mono group-hover:text-white/80 transition-colors">
                    {ref.url.replace('https://', '').replace('www.', '').replace(/\/$/, '')}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
