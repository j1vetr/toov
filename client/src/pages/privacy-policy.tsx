import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <SEO 
        title="Gizlilik Politikası" 
        description="TOOV Gizlilik Politikası. Verilerinizin güvenliği ve gizliliği bizim için önemlidir." 
      />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
          Gizlilik <span className="text-primary">Politikası</span>
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <p className="lead">
            TOOV olarak, kişisel verilerinizin güvenliği ve gizliliği konusuna büyük önem vermekteyiz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.
          </p>

          <h3>1. Toplanan Veriler</h3>
          <p>
            Hizmetlerimizi sunarken aşağıdaki türde verileri toplayabiliriz:
          </p>
          <ul>
            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad gibi sizi tanımlayan bilgiler.</li>
            <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası ve adres bilgileri.</li>
            <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, işletim sistemi ve cihaz bilgileri.</li>
            <li><strong>Kullanım Verileri:</strong> Sitemizi nasıl kullandığınıza dair analiz verileri.</li>
          </ul>

          <h3>2. Verilerin Kullanım Amacı</h3>
          <p>
            Topladığımız verileri şu amaçlarla kullanırız:
          </p>
          <ul>
            <li>Hizmetlerimizi sağlamak ve geliştirmek.</li>
            <li>Müşteri desteği sunmak ve taleplerinizi yanıtlamak.</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
            <li>Size özel teklifler ve güncellemeler hakkında bilgilendirme yapmak (onayınız dahilinde).</li>
          </ul>

          <h3>3. Veri Güvenliği</h3>
          <p>
            Verilerinizi yetkisiz erişime, kayba veya ifşaya karşı korumak için endüstri standardı güvenlik önlemleri (SSL şifreleme, güvenli sunucular vb.) kullanmaktayız. Ancak, internet üzerinden yapılan hiçbir veri iletiminin %100 güvenli olduğunu garanti edemeyiz.
          </p>

          <h3>4. Çerezler (Cookies)</h3>
          <p>
            Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanmaktayız. Çerez tercihlerinizi tarayıcı ayarlarınızdan değiştirebilirsiniz.
          </p>

          <h3>5. İletişim</h3>
          <p>
            Gizlilik politikamızla ilgili sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
          </p>
          <p>
            <strong>E-posta:</strong> hello@toov.com.tr<br />
            <strong>Telefon:</strong> 0850 309 47 69<br />
            <strong>Adres:</strong> Kağıthane, İstanbul
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Son Güncelleme: 25 Kasım 2025
          </p>
        </div>
      </div>
    </div>
  );
}
