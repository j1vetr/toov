import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "1. Toplanan Veriler",
      content: (
        <>
          <p className="mb-4">Hizmetlerimizi sunarken aşağıdaki türde verileri toplayabiliriz:</p>
          <ul className="space-y-2 ml-4 list-disc text-gray-400 marker:text-primary">
            <li><strong className="text-white">Kimlik Bilgileri:</strong> Ad, soyad gibi sizi tanımlayan bilgiler.</li>
            <li><strong className="text-white">İletişim Bilgileri:</strong> E-posta adresi, telefon numarası ve adres bilgileri.</li>
            <li><strong className="text-white">Teknik Veriler:</strong> IP adresi, tarayıcı türü, işletim sistemi ve cihaz bilgileri.</li>
            <li><strong className="text-white">Kullanım Verileri:</strong> Sitemizi nasıl kullandığınıza dair analiz verileri.</li>
          </ul>
        </>
      )
    },
    {
      icon: FileText,
      title: "2. Verilerin Kullanım Amacı",
      content: (
        <>
          <p className="mb-4">Topladığımız verileri şu amaçlarla kullanırız:</p>
          <ul className="space-y-2 ml-4 list-disc text-gray-400 marker:text-primary">
            <li>Hizmetlerimizi sağlamak ve geliştirmek.</li>
            <li>Müşteri desteği sunmak ve taleplerinizi yanıtlamak.</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
            <li>Size özel teklifler ve güncellemeler hakkında bilgilendirme yapmak (onayınız dahilinde).</li>
          </ul>
        </>
      )
    },
    {
      icon: Lock,
      title: "3. Veri Güvenliği",
      content: (
        <p>
          Verilerinizi yetkisiz erişime, kayba veya ifşaya karşı korumak için endüstri standardı güvenlik önlemleri (SSL şifreleme, güvenli sunucular vb.) kullanmaktayız. Ancak, internet üzerinden yapılan hiçbir veri iletiminin %100 güvenli olduğunu garanti edemeyiz.
        </p>
      )
    },
    {
      icon: Shield,
      title: "4. Çerezler (Cookies)",
      content: (
        <p>
          Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanmaktayız. Çerez tercihlerinizi tarayıcı ayarlarınızdan değiştirebilirsiniz.
        </p>
      )
    }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      <SEO 
        title="Gizlilik Politikası" 
        description="TOOV Gizlilik Politikası. Verilerinizin güvenliği ve gizliliği bizim için önemlidir." 
      />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Gizlilik <span className="text-primary">Politikası</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              TOOV olarak, kişisel verilerinizin güvenliği ve gizliliği konusuna büyük önem vermekteyiz. 
              Bu politika, verilerinizin nasıl korunduğunu şeffaf bir şekilde açıklar.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {section.title}
                  </h3>
                  <div className="text-gray-400 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary/20 to-background border border-white/10 rounded-2xl p-8 mt-8"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Mail className="text-primary" />
              İletişim
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">E-posta</p>
                  <a href="mailto:hello@toov.com.tr" className="text-white hover:text-primary transition-colors">hello@toov.com.tr</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:08503094769" className="text-white hover:text-primary transition-colors">0850 309 47 69</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Adres</p>
                  <p className="text-white">Kağıthane, İstanbul</p>
                </div>
              </div>
            </div>
          </motion.div>

          <p className="text-sm text-gray-600 text-center mt-12">
            Son Güncelleme: 25 Kasım 2025
          </p>
        </div>
      </div>
    </div>
  );
}
