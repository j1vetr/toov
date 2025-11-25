import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Artemis Holding", category: "Kurumsal Web", image: "bg-gradient-to-br from-blue-900 to-slate-900" },
  { title: "Vestra Finans", category: "Mobil Uygulama", image: "bg-gradient-to-bl from-emerald-900 to-black" },
  { title: "Lumina Studio", category: "E-Ticaret", image: "bg-gradient-to-tr from-purple-900 to-slate-900" },
  { title: "Novus Energy", category: "Enerji Portalı", image: "bg-gradient-to-br from-orange-900 to-black" },
  { title: "Zenith Mimarlık", category: "Portfolio", image: "bg-gradient-to-tl from-gray-800 to-black" },
  { title: "Polaris Lojistik", category: "SaaS Platformu", image: "bg-gradient-to-r from-indigo-900 to-slate-900" },
];

export default function References() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <section className="py-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
          Seçkin <br />
          <span className="text-primary">İşlerimiz</span>
        </h1>
      </section>

      <section className="pb-32 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-sm ${project.image} border border-white/5`}
            >
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight />
                  </div>
                </div>
                
                <div>
                  <p className="text-primary text-sm font-medium mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
