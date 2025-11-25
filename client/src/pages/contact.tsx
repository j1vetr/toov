import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import mapImage from "@assets/generated_images/minimalist_dark_technical_schematic_map_of_istanbul.png";

const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır."),
  email: z.string().email("Geçerli bir email adresi giriniz."),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır."),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mesajınız Gönderildi",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    form.reset();
  }

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              İletişime <br />Geçin
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Projenizi hayata geçirmek için ilk adımı atın.
              Size özel çözümlerimiz hakkında konuşalım.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Adres</h3>
                <p className="text-gray-400">Maslak Mah. Büyükdere Cad. No: 123<br />Sarıyer, İstanbul</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">İletişim</h3>
                <p className="text-gray-400">hello@toov.tech<br />+90 (212) 555 0123</p>
              </div>
            </div>

            {/* Map Image */}
            <div className="w-full h-64 bg-secondary/30 rounded-lg overflow-hidden border border-white/10 relative">
               <img 
                  src={mapImage} 
                  alt="Ofis Konumu" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">İsim Soyisim</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="ornek@sirket.com" {...field} className="bg-white/5 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Mesajınız</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Projenizden bahsedin..." {...field} className="bg-white/5 border-white/10 text-white min-h-[150px] focus:border-primary/50 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-background hover:bg-white hover:text-background transition-colors rounded-sm">
                  Gönder
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
