import { Link } from "wouter";
import { ArrowRight, Cpu } from "lucide-react";

export default function InnovationTeaser() {
  return (
    <section className="py-32 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-8">
          <Cpu size={16} />
          <span className="text-sm font-medium uppercase tracking-wider">Teknoloji Stack</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
          Sınırları Zorlayan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Teknolojiler</span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Next.js, React, Python ve en son bulut altyapılarını kullanarak, 
          geleceğe hazır, ultra hızlı sistemler kuruyoruz.
        </p>

        <Link href="/inovasyon">
          <a className="inline-flex items-center gap-3 text-white text-lg font-bold hover:text-primary transition-colors group border-b border-transparent hover:border-primary pb-1">
            İnovasyon Sayfasını Keşfet
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </Link>
      </div>
    </section>
  );
}
