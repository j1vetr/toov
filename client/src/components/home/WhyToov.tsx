import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyToov() {
  return (
    <section className="py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Asymmetric Grid Layout */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute top-0 left-10 w-64 h-80 bg-background border border-white/10 p-8 z-20 shadow-2xl hover:-translate-y-2 transition-transform duration-500">
              <span className="text-6xl font-display font-bold text-white/10 absolute top-4 right-4">01</span>
              <h3 className="text-xl font-bold text-white mt-auto pt-40">Stratejik Yaklaşım</h3>
            </div>
            
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary p-8 z-10 shadow-xl flex flex-col justify-end">
              <span className="text-6xl font-display font-bold text-black/10 absolute top-4 right-4">02</span>
              <h3 className="text-xl font-bold text-background">Teknik Mükemmellik</h3>
              <p className="text-background/80 text-sm mt-2">Her satır kodda performans ve güvenlik.</p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-white/20 rounded-full animate-spin-slow" />
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Neden <span className="text-primary">TOOV?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Biz sadece web sitesi yapmıyoruz; markanız için yaşayan, büyüyen dijital ekosistemler inşa ediyoruz. 
              Yapay zeka klişelerinden uzak, insan odaklı ve butik bir yaklaşım.
            </p>

            <ul className="space-y-6">
              {[
                "Butik ve kişiye özel tasarım anlayışı",
                "Yüksek performanslı, temiz kod mimarisi",
                "Şeffaf süreç ve sürekli iletişim",
                "Veri odaklı büyüme stratejileri"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-white/90 text-lg"
                >
                  <CheckCircle2 className="text-primary shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
