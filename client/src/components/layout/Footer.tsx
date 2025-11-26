import { Link } from "wouter";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import toovLogo from "@assets/toov_logo.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link href="/">
              <a className="block mb-6 hover:opacity-80 transition-opacity inline-block">
                <img src={toovLogo} alt="TOOV" className="h-12 w-auto" />
              </a>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              Mühendislik derinliği ve sanatsal hassasiyetle dijital geleceği inşa ediyoruz. 
              Sıradanlığa meydan okuyan markalar için özel çözümler.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/toovtr/" },
                { icon: Instagram, href: "https://www.instagram.com/toov.tr/" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
              <a 
                href="https://wa.me/908503094769"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-display font-bold mb-6">Hizmetler</h4>
            <ul className="space-y-4">
              {["Web Tasarım", "Web Geliştirme", "Mobil Uygulama", "SEO & Büyüme", "Kurumsal Kimlik"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-display font-bold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block text-xs text-primary uppercase tracking-wider mb-1">Adres</span>
                Gürsel Mah. İmrahor Cad. Premier Kampüs Ofis No: 29/b Kat:3 Ofis: 322<br />Kağıthane / İstanbul
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-primary uppercase tracking-wider mb-1">Email</span>
                hello@toov.com.tr
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-primary uppercase tracking-wider mb-1">Telefon</span>
                0850 309 47 69
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 TOOV Internet Solutions. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/gizlilik-politikasi">
              <a className="hover:text-white transition-colors">Gizlilik Politikası</a>
            </Link>
            <Link href="/kvkk">
              <a className="hover:text-white transition-colors">KVKK</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
