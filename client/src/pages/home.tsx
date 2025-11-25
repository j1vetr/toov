import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyToov from "@/components/home/WhyToov";
import InnovationTeaser from "@/components/home/InnovationTeaser";
import ReferencesStrip from "@/components/home/ReferencesStrip";
import CtaBlock from "@/components/home/CtaBlock";

export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Hero />
      <Services />
      <WhyToov />
      <InnovationTeaser />
      <ReferencesStrip />
      <CtaBlock />
    </div>
  );
}
