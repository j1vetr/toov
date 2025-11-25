import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyToov from "@/components/home/WhyToov";
import InnovationTeaser from "@/components/home/InnovationTeaser";
import ReferencesStrip from "@/components/home/ReferencesStrip";
import CtaBlock from "@/components/home/CtaBlock";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">
      <SEO 
        title="Dijital Geleceğinizi İnşa Edin" 
        description="Hassasiyet, yaratıcılık ve mühendislik derinliği ile güçlü dijital ürünler üretiyoruz. Web Tasarım, Yazılım, Mobil Uygulama ve SEO." 
      />
      <Hero />
      <Services />
      <WhyToov />
      <InnovationTeaser />
      <ReferencesStrip />
      <CtaBlock />
    </div>
  );
}
