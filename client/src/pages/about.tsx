import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 bg-background min-h-screen">
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

      {/* Story / Timeline */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-8">Hikayemiz</h2>
              <div className="space-y-12 border-l border-white/10 pl-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  <span className="text-primary font-mono text-sm mb-2 block">2020</span>
                  <h3 className="text-xl font-bold text-white mb-2">Kuruluş</h3>
                  <p className="text-gray-400">İstanbul'da küçük bir tasarım stüdyosu olarak, dijital dünyadaki standartları yükseltmek amacıyla yola çıktık.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-background" />
                  <span className="text-gray-500 font-mono text-sm mb-2 block">2022</span>
                  <h3 className="text-xl font-bold text-white mb-2">Büyüme & Teknoloji</h3>
                  <p className="text-gray-400">Ekibimizi mühendislik yetenekleriyle güçlendirdik. Sadece tasarım değil, derin teknoloji çözümleri sunmaya başladık.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-background" />
                  <span className="text-gray-500 font-mono text-sm mb-2 block">2024</span>
                  <h3 className="text-xl font-bold text-white mb-2">Global Vizyon</h3>
                  <p className="text-gray-400">TOOV artık uluslararası markalara hizmet veren, ödüllü bir teknoloji partneri.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract Team Visual */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative group">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-4 left-4">
                     <span className="block text-white font-bold">Tasarım Ekibi</span>
                     <span className="text-xs text-gray-400">Estetik & UX</span>
                   </div>
                </div>
                <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative group mt-12">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-4 left-4">
                     <span className="block text-white font-bold">Yazılım Ekibi</span>
                     <span className="text-xs text-gray-400">Mühendislik & Altyapı</span>
                   </div>
                </div>
              </div>
            </div>
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
