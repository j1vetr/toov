import { motion } from "framer-motion";
import { Database, Globe, Layout, Server, Shield, Zap, Code2, Cpu } from "lucide-react";

export default function Innovation() {
  const technologies = [
    { name: "React & Next.js", icon: Globe, desc: "Ultra hızlı modern frontend mimarisi." },
    { name: "Python & Django", icon: Code2, desc: "Güçlü ve ölçeklenebilir backend çözümleri." },
    { name: "PostgreSQL", icon: Database, desc: "Güvenilir ve kompleks veri yapıları." },
    { name: "Docker & K8s", icon: Server, desc: "Container tabanlı esnek altyapı." },
  ];

  const principles = [
    { title: "Performans Öncelikli", desc: "Her milisaniye önemlidir. Core Web Vitals skorlarını maksimize eden optimizasyonlar yapıyoruz." },
    { title: "UX Mühendisliği", desc: "Tasarım ve yazılım arasındaki boşluğu kapatan, kullanıcı odaklı mühendislik yaklaşımı." },
    { title: "Güvenlik & Ölçeklenebilirlik", desc: "İlk günden itibaren büyümeye hazır, siber tehditlere karşı korumalı mimariler." },
    { title: "Şeffaf Analitik", desc: "Veri odaklı kararlar için kapsamlı takip ve raporlama sistemleri." }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      <section className="py-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
          İnovasyon & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Teknoloji</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          TOOV olarak sadece kod yazmıyoruz; geleceğin dijital altyapılarını kurguluyoruz. 
          En son teknolojileri, kanıtlanmış mühendislik prensipleriyle birleştiriyoruz.
        </p>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Teknoloji Yığınımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-primary/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-primary transition-colors mb-6 relative z-10" />
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{tech.name}</h3>
                <p className="text-sm text-gray-500 relative z-10">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Principles - Vertical Layout */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div>
               <h2 className="text-4xl font-display font-bold text-white mb-8 sticky top-32">
                 İnovasyon <br />Prensiplerimiz
               </h2>
             </div>
             <div className="space-y-8">
               {principles.map((p, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white font-bold group-hover:border-primary group-hover:bg-primary group-hover:text-background transition-all">
                       {i + 1}
                     </div>
                     {i !== principles.length - 1 && <div className="w-[1px] h-full bg-white/10 my-2 group-hover:bg-primary/30 transition-colors" />}
                   </div>
                   <div className="pb-12">
                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                     <p className="text-gray-400 leading-relaxed text-lg">{p.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
