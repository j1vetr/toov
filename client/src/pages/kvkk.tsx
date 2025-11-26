import { motion } from "framer-motion";
import { Scale, ShieldCheck, FileText, Users, Mail, Phone, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

export default function KVKK() {
  const sections = [
    {
      icon: ShieldCheck,
      title: "1. Veri Sorumlusu",
      content: (
        <p>
          KVKK uyarınca, kişisel verileriniz; veri sorumlusu olarak TOOV tarafından aşağıda açıklanan kapsamda işlenebilecektir.
        </p>
      )
    },
    {
      icon: FileText,
      title: "2. Kişisel Verilerin İşlenme Amacı",
      content: (
        <p>
          Toplanan kişisel verileriniz, şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması amaçlarıyla KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir.
        </p>
      )
    },
    {
      icon: Users,
      title: "3. Verilerin Aktarımı",
      content: (
        <p>
          Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere, KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
        </p>
      )
    },
    {
      icon: Scale,
      title: "4. Veri Sahibinin Hakları",
      content: (
        <>
          <p className="mb-4">KVKK'nın 11. maddesi uyarınca kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:</p>
          <ul className="space-y-2 ml-4 list-disc text-gray-400 marker:text-primary">
            <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
            <li>Kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      <SEO 
        title="KVKK Aydınlatma Metni" 
        description="6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni." 
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
              KVKK <span className="text-primary">Aydınlatma Metni</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında 
              veri sorumlusu sıfatıyla TOOV tarafından hazırlanmıştır.
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
              İletişim & Başvuru
            </h3>
            <p className="text-gray-400 mb-8">
              KVKK kapsamındaki haklarınızı kullanmak için taleplerinizi aşağıdaki iletişim kanalları üzerinden bize iletebilirsiniz.
            </p>
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
        </div>
      </div>
    </div>
  );
}
