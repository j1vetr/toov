import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
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
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
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
                Maslak Mah. Büyükdere Cad.<br />No: 123, Sarıyer/İstanbul
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-primary uppercase tracking-wider mb-1">Email</span>
                hello@toov.tech
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-primary uppercase tracking-wider mb-1">Telefon</span>
                +90 (212) 555 0123
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 TOOV Technology. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
