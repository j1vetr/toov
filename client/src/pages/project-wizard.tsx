import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, Smartphone, Search, Code, 
  ArrowRight, ArrowLeft, Check, Calendar, 
  CreditCard, User, Mail, Phone, Building 
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

// Step 1: Project Type
const projectTypes = [
  { id: "web", label: "Web Tasarım", icon: Monitor, desc: "Kurumsal web sitesi, landing page veya e-ticaret." },
  { id: "mobile", label: "Mobil Uygulama", icon: Smartphone, desc: "iOS ve Android için native veya hybrid uygulamalar." },
  { id: "seo", label: "SEO & Pazarlama", icon: Search, desc: "Arama motoru optimizasyonu ve dijital görünürlük." },
  { id: "custom", label: "Özel Yazılım", icon: Code, desc: "İş süreçlerinize özel CRM, ERP veya SaaS çözümleri." },
];

// Step 2: Budget Ranges
const budgetRanges = [
  { id: "low", label: "50.000₺ - 150.000₺" },
  { id: "medium", label: "150.000₺ - 300.000₺" },
  { id: "high", label: "300.000₺ - 500.000₺" },
  { id: "premium", label: "500.000₺ +" },
];

// Step 2: Timeline
const timelines = [
  { id: "urgent", label: "Çok Acil (< 1 Ay)" },
  { id: "normal", label: "Standart (1-3 Ay)" },
  { id: "relaxed", label: "Esnek (> 3 Ay)" },
];

export default function ProjectWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleNext = () => {
    if (step === 1 && !formData.projectType) {
      toast({ title: "Lütfen bir proje türü seçin", variant: "destructive" });
      return;
    }
    if (step === 2 && (!formData.budget || !formData.timeline)) {
      toast({ title: "Lütfen bütçe ve zaman çizelgesi seçin", variant: "destructive" });
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to backend
    console.log("Form Data:", formData);
    setStep(4); // Success step
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-24 min-h-screen bg-background flex flex-col">
      <SEO 
        title="Proje Sihirbazı | TOOV" 
        description="Yeni projenizi başlatmak için sihirbazımızı kullanın. Web tasarım, yazılım ve SEO ihtiyaçlarınız için hızlı teklif alın." 
      />
      
      <div className="container mx-auto px-6 py-12 flex-grow flex flex-col items-center">
        {/* Progress Indicator */}
        <div className="w-full max-w-3xl mb-12">
          <div className="flex justify-between mb-4 px-2">
            <span className={cn("text-sm font-medium transition-colors", step >= 1 ? "text-primary" : "text-gray-600")}>1. Proje Türü</span>
            <span className={cn("text-sm font-medium transition-colors", step >= 2 ? "text-primary" : "text-gray-600")}>2. Detaylar</span>
            <span className={cn("text-sm font-medium transition-colors", step >= 3 ? "text-primary" : "text-gray-600")}>3. İletişim</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: step === 4 ? "100%" : `${((step - 1) / 2) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="w-full max-w-4xl bg-secondary/10 border border-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Project Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center space-y-4 mb-8">
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
                    Ne tür bir projeye <span className="text-primary">ihtiyacınız var?</span>
                  </h1>
                  <p className="text-gray-400">Size en uygun çözümü sunabilmemiz için bir kategori seçin.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => updateField("projectType", type.id)}
                      className={cn(
                        "flex items-start p-6 rounded-xl border transition-all duration-300 text-left group hover:shadow-lg hover:shadow-primary/5",
                        formData.projectType === type.id 
                          ? "bg-primary/10 border-primary ring-1 ring-primary" 
                          : "bg-white/[0.03] border-white/10 hover:border-primary/50 hover:bg-white/[0.05]"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0 transition-colors",
                        formData.projectType === type.id ? "bg-primary text-background" : "bg-white/10 text-gray-400 group-hover:text-primary group-hover:bg-primary/10"
                      )}>
                        <type.icon size={24} />
                      </div>
                      <div>
                        <h3 className={cn("text-lg font-bold mb-1", formData.projectType === type.id ? "text-primary" : "text-white")}>
                          {type.label}
                        </h3>
                        <p className="text-sm text-gray-400">{type.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-8">
                  <Button 
                    onClick={handleNext} 
                    size="lg" 
                    className="bg-primary text-background hover:bg-primary/90 text-lg px-8 group"
                    disabled={!formData.projectType}
                  >
                    Devam Et <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-display font-bold text-white">
                    Proje <span className="text-primary">Detayları</span>
                  </h2>
                  <p className="text-gray-400">Bütçe ve zaman çizelgenizi belirleyin.</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <Label className="text-lg text-white mb-4 block flex items-center gap-2">
                      <CreditCard size={18} className="text-primary" /> Tahmini Bütçe Aralığı
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {budgetRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => updateField("budget", range.id)}
                          className={cn(
                            "py-4 px-2 rounded-lg border text-sm font-medium transition-all text-center",
                            formData.budget === range.id
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-white/[0.03] border-white/10 text-gray-400 hover:border-primary/50 hover:text-white"
                          )}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg text-white mb-4 block flex items-center gap-2">
                      <Calendar size={18} className="text-primary" /> Zaman Çizelgesi
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {timelines.map((time) => (
                        <button
                          key={time.id}
                          onClick={() => updateField("timeline", time.id)}
                          className={cn(
                            "py-4 px-4 rounded-lg border text-sm font-medium transition-all text-center",
                            formData.timeline === time.id
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-white/[0.03] border-white/10 text-gray-400 hover:border-primary/50 hover:text-white"
                          )}
                        >
                          {time.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <Button 
                    variant="outline" 
                    onClick={handleBack}
                    size="lg"
                    className="border-white/10 text-white hover:bg-white/5"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Geri
                  </Button>
                  <Button 
                    onClick={handleNext} 
                    size="lg" 
                    className="bg-primary text-background hover:bg-primary/90 text-lg px-8 group"
                  >
                    Devam Et <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Contact Info */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-display font-bold text-white">
                    Son <span className="text-primary">Adım</span>
                  </h2>
                  <p className="text-gray-400">Size ulaşabilmemiz için iletişim bilgilerinizi girin.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Ad Soyad</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <Input 
                          id="name" 
                          placeholder="Adınız Soyadınız" 
                          className="pl-10 bg-white/[0.03] border-white/10 text-white focus:border-primary/50"
                          required
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Şirket (Opsiyonel)</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <Input 
                          id="company" 
                          placeholder="Şirket Adı" 
                          className="pl-10 bg-white/[0.03] border-white/10 text-white focus:border-primary/50"
                          value={formData.company}
                          onChange={(e) => updateField("company", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">E-posta Adresi</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="ornek@sirket.com" 
                          className="pl-10 bg-white/[0.03] border-white/10 text-white focus:border-primary/50"
                          required
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Telefon Numarası</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="0555 555 55 55" 
                          className="pl-10 bg-white/[0.03] border-white/10 text-white focus:border-primary/50"
                          required
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Proje Hakkında Ek Notlar</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Projenizden kısaca bahsedin..." 
                      className="min-h-[120px] bg-white/[0.03] border-white/10 text-white focus:border-primary/50"
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={handleBack}
                      size="lg"
                      className="border-white/10 text-white hover:bg-white/5"
                    >
                      <ArrowLeft className="mr-2 w-5 h-5" /> Geri
                    </Button>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary text-background hover:bg-primary/90 text-lg px-8 min-w-[180px]"
                    >
                      Gönder <Check className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 4: Success */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border border-primary/20">
                  <Check size={48} />
                </div>
                <h2 className="text-4xl font-display font-bold text-white">
                  Talebiniz <span className="text-primary">Alındı!</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
                  Proje detaylarınız bize ulaştı. Ekibimiz en kısa sürede (genellikle 24 saat içinde) inceleyip sizinle iletişime geçecek.
                </p>
                <div className="pt-8">
                  <Link href="/">
                    <Button size="lg" className="bg-white text-background hover:bg-gray-200">
                      Ana Sayfaya Dön
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
