import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, PenTool } from "lucide-react";
import toovLogo from "@assets/toov_logo.png";

export default function WhyToov() {
  return (
    <section className="py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Modern Abstract Visual Layout */}
          <div className="relative h-[600px] hidden lg:block flex items-center justify-center">
             {/* Main Central Image */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="absolute inset-0 flex items-center justify-center z-10"
             >
               <div className="relative w-[250px] h-[250px] rounded-full border border-white/5 bg-background/30 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,255,200,0.1)] group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                 
                 {/* Logo Glow Effect */}
                 <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                 
                 <img 
                   src={toovLogo} 
                   alt="TOOV Logo" 
                   className="w-[200px] h-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,255,200,0.3)]"
                 />
               </div>
             </motion.div>

             {/* Atom Structure - Orbit 1 */}
             <motion.div 
               className="absolute w-[450px] h-[450px] rounded-full border border-white/10 z-0"
               style={{ 
                 top: '50%', 
                 left: '50%', 
                 x: '-50%', 
                 y: '-50%',
                 transformStyle: "preserve-3d", 
                 rotateX: "70deg", 
                 rotateY: "10deg" 
               }}
               animate={{ rotate: 360 }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#00FFC8]" />
             </motion.div>

             {/* Atom Structure - Orbit 2 */}
             <motion.div 
               className="absolute w-[450px] h-[450px] rounded-full border border-white/10 z-0"
               style={{ 
                 top: '50%', 
                 left: '50%', 
                 x: '-50%', 
                 y: '-50%',
                 transformStyle: "preserve-3d", 
                 rotateX: "70deg", 
                 rotateY: "130deg" 
               }}
               animate={{ rotate: 360 }}
               transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1 }}
             >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3B82F6]" />
             </motion.div>
             
             {/* Atom Structure - Orbit 3 */}
             <motion.div 
               className="absolute w-[450px] h-[450px] rounded-full border border-white/10 z-0"
               style={{ 
                 top: '50%', 
                 left: '50%', 
                 x: '-50%', 
                 y: '-50%',
                 transformStyle: "preserve-3d", 
                 rotateX: "70deg", 
                 rotateY: "250deg" 
               }}
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
             >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#A855F7]" />
             </motion.div>

          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Neden <span className="text-primary">TOOV?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Biz sadece web sitesi yapmıyoruz; markanız için yaşayan, büyüyen dijital ekosistemler inşa ediyoruz. 
              Yapay zeka destekli, insan odaklı ve butik bir yaklaşım.
            </p>

            <ul className="space-y-6">
              {[
                "Butik Ve Kişiye Özel Tasarım",
                "Yüksek Performanslı Kod Mimarisi",
                "Şeffaf Süreç Ve Sürekli İletişim",
                "Veri Odaklı Büyüme Stratejileri"
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
