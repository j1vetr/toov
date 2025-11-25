import { motion } from "framer-motion";

const references = [
  { name: "Artemis Holding", category: "Kurumsal Web" },
  { name: "Vestra Finans", category: "Fintech Uygulama" },
  { name: "Lumina Studio", category: "E-Ticaret" },
  { name: "Novus Energy", category: "Sektörel Portal" }
];

export default function ReferencesStrip() {
  return (
    <section className="py-24 bg-background border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <h2 className="text-3xl font-display font-bold text-white">Seçkin Referanslar</h2>
          <a href="/referanslar" className="text-primary text-sm font-medium hover:underline mt-4 md:mt-0">
            Tümünü Gör
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="aspect-[4/3] bg-secondary/30 border border-white/5 flex flex-col justify-end p-6 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="relative z-10">
                <p className="text-xs text-primary mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {ref.category}
                </p>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {ref.name}
                </h3>
              </div>
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 font-display text-4xl font-bold text-white">
                {ref.name.charAt(0)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
