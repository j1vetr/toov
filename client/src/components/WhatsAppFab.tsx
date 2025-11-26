import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  const phoneNumber = "908503094769"; // 0850 309 47 69 -> WhatsApp format
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp ile iletişime geçin"
      data-testid="button-whatsapp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
    </a>
  );
}
