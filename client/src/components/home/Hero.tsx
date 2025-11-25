import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_dark_architectural_tech_background_with_turquoise_accents.png";
import heroVideo from "@assets/generated_videos/hero_optimized.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8">
                Yaratıcı <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Web &</span><br />
                <span className="text-primary">Yazılım</span> Gücü.
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mb-10 font-light">
                Dijital dünyada fark yaratan, performans odaklı web siteleri ve özel yazılım çözümleri geliştiriyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link href="/iletisim">
                  <a className="group relative px-8 py-4 bg-white text-background font-bold text-lg rounded-sm overflow-hidden inline-flex items-center gap-3 translate-y-0 sm:-translate-y-2">
                    <span className="relative z-10">Projenizi Başlatalım</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Abstract Decorative Elements - Asymmetry */}
          <div className="hidden lg:block lg:col-span-4 relative h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-10 right-0 w-64 h-80 border border-primary/20 rounded-lg backdrop-blur-md bg-white/5 z-10 hidden"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-40 -left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
            />
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="absolute bottom-20 right-10 w-56 h-64 border border-white/10 bg-background/80 backdrop-blur-xl p-6 flex flex-col justify-between z-20 hover:border-primary/50 transition-colors group hidden"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-background font-bold">
                <ArrowRight className="group-hover:-rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-white font-display text-xl font-bold mb-2">Büyüme Odaklı</h3>
                <p className="text-gray-400 text-sm">Veri odaklı stratejilerle işinizi ölçeklendiriyoruz.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
