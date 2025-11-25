import { motion } from "framer-motion";
import { Monitor, Code, Smartphone, BarChart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Tasarım",
    description: "Markanızın ruhunu yansıtan, estetik ve kullanıcı dostu arayüzler.",
    color: "text-primary"
  },
  {
    icon: Code,
    title: "Web Geliştirme",
    description: "Hızlı, güvenli ve ölçeklenebilir modern web teknolojileri.",
    color: "text-white"
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android için kusursuz, performanslı native ve hibrit çözümler.",
    color: "text-primary"
  },
  {
    icon: BarChart,
    title: "SEO & Büyüme",
    description: "Arama motorlarında zirveye çıkaran stratejik optimizasyonlar.",
    color: "text-white"
  }
];

export default function Services() {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Uzmanlık Alanlarımız
          </h2>
          <div className="h-1 w-20 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all" />
              
              <service.icon className={`w-12 h-12 ${service.color} mb-8`} strokeWidth={1.5} />
              
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
