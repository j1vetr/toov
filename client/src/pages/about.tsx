import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Target } from "lucide-react";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <SEO 
        title="Hakkımızda" 
        description="TOOV hikayesi, değerleri ve ekibi. Dijital deneyimleri hassasiyetle inşa ediyoruz." 
      />
      {/* Header */}
      <section className="py-20 container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
        >
          Dijital deneyimleri <br />
          <span className="text-primary">hassasiyetle</span> inşa ediyoruz.
        </motion.h1>
      </section>

      {/* Story */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-display font-bold text-white mb-12">Hikayemiz</h2>
            <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              2020 Ağustos ayında kurulduk, şuan buradayız. <br />
              <span className="text-gray-500 mt-4 block">Herhangi bir şey daha başarmadık çünkü daha yapılacak çok iş var.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Mükemmellik", desc: "İyi yeterli değil. Her pikselde en iyisini hedefleriz." },
              { icon: Users, title: "İnsan Odaklı", desc: "Teknoloji insanlar içindir. Kullanıcı deneyimi önceliğimizdir." },
              { icon: Lightbulb, title: "Yenilikçilik", desc: "Trendleri takip etmeyiz, onları yaratırız." },
              { icon: Target, title: "Sonuç Odaklı", desc: "Güzel görünen değil, işe yarayan ürünler yaparız." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-background border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <val.icon className="w-10 h-10 text-gray-500 group-hover:text-primary transition-colors mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
