import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import generatedImage from "@assets/generated_images/abstract_digital_glitch_void_in_navy_and_turquoise_for_404_page.png";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={generatedImage} 
          alt="404 Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Sayfa Bulunamadı
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Aradığınız sayfa dijital boşlukta kaybolmuş olabilir veya taşınmış olabilir.
        </p>
        
        <Link href="/">
          <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-sm hover:bg-white transition-colors duration-300">
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </a>
        </Link>
      </div>
    </div>
  );
}
