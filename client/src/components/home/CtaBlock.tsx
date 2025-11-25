import { Link } from "wouter";

export default function CtaBlock() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Dijital Geleceğinizi <br />
            <span className="text-primary">Birlikte İnşa Edelim</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Sıradanlığın ötesine geçmeye hazır mısınız? Projeniz için en doğru stratejiyi belirleyelim.
          </p>
          <Link href="/iletisim">
            <a className="inline-block bg-white text-background text-lg font-bold px-12 py-5 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]">
              Bizimle İletişime Geçin
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
