import { motion } from "framer-motion";
import { Monitor, Code, Smartphone, BarChart, ShoppingCart, Globe, Database, Layers, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import CtaBlock from "@/components/home/CtaBlock";

export default function Services() {
  const services = [
    {
      id: "web-design",
      icon: Monitor,
      title: "Web Tasarım & UI/UX",
      description: "Kullanıcı deneyimini merkeze alan, markanızın kimliğini yansıtan estetik ve fonksiyonel arayüz tasarımları.",
      features: ["Kullanıcı Araştırması (UX Research)", "Arayüz Tasarımı (UI Design)", "Prototipleme & Wireframing", "Design System Oluşturma"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "software",
      icon: Code,
      title: "Özel Yazılım Geliştirme",
      description: "İş süreçlerinizi dijitalleştiren, yüksek performanslı ve ölçeklenebilir özel yazılım çözümleri.",
      features: ["Web Tabanlı Uygulamalar", "SaaS Geliştirme", "API Entegrasyonları", "CRM & ERP Çözümleri"],
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobil Uygulama",
      description: "iOS ve Android platformlarında sorunsuz çalışan, native performansında hibrit mobil uygulamalar.",
      features: ["React Native Geliştirme", "iOS & Android Uygulamaları", "App Store Optimizasyonu", "Mobil UI/UX Tasarımı"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: "E-Ticaret Çözümleri",
      description: "Satışlarınızı artıran, güvenli ve yönetimi kolay modern e-ticaret altyapıları.",
      features: ["Özel E-Ticaret Yazılımları", "Ödeme Sistemi Entegrasyonları", "Paryeri Entegrasyonları", "Sepet Optimizasyonu"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "seo",
      icon: BarChart,
      title: "SEO & Dijital Büyüme",
      description: "Arama motorlarında görünürlüğünüzü artıran, veri odaklı büyüme ve optimizasyon stratejileri.",
      features: ["Teknik SEO Analizi", "İçerik Stratejisi", "Performans Optimizasyonu", "Dönüşüm Oranı Optimizasyonu (CRO)"],
      gradient: "from-indigo-500/20 to-violet-500/20"
    },
    {
      id: "consultancy",
      icon: Layers,
      title: "Teknoloji Danışmanlığı",
      description: "Dijital dönüşüm sürecinizde doğru teknolojileri seçmeniz ve uygulamanız için stratejik rehberlik.",
      features: ["Dijital Dönüşüm Stratejisi", "Teknoloji Stack Seçimi", "Altyapı Analizi", "Proje Yönetimi"],
      gradient: "from-gray-500/20 to-slate-500/20"
    }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      <SEO 
        title="Hizmetlerimiz" 
        description="Web Tasarım, Özel Yazılım, Mobil Uygulama, SEO ve E-Ticaret çözümlerimizle dijital dönüşümünüze güç katıyoruz." 
      />

      {/* Hero Section */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Dijital Potansiyelinizi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Açığa Çıkarın</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Her proje benzersizdir. İhtiyaçlarınıza özel, en son teknolojilerle donatılmış, 
            sürdürülebilir ve ölçeklenebilir dijital çözümler üretiyoruz.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-background/50 border border-white/5 p-8 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8 min-h-[80px]">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/iletisim">
                    <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                      Detaylı Bilgi Al <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Çalışma Sürecimiz</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fikirden ürüne giden yolda, şeffaf ve metodik bir yaklaşım izliyoruz.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {[
              { step: "01", title: "Keşif & Analiz", desc: "İhtiyaçlarınızı dinliyor, hedeflerinizi belirliyoruz." },
              { step: "02", title: "Tasarım", desc: "Kullanıcı odaklı, modern arayüzler tasarlıyoruz." },
              { step: "03", title: "Geliştirme", desc: "En yeni teknolojilerle kodluyor ve test ediyoruz." },
              { step: "04", title: "Yayın & Destek", desc: "Projeyi canlıya alıyor ve sürekli destekliyoruz." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-background border border-white/10 p-8 text-center rounded-xl relative group hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary text-primary font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-6 border-4 border-background relative z-10 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
