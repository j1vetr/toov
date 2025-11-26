import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WizardFab() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip / Label */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur border border-primary/30 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap hidden md:block"
              >
                <p className="text-white font-medium text-sm">Projeye Başla</p>
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-background/90 border-t border-r border-primary/30 rotate-45 transform" />
              </motion.div>
            )}
          </AnimatePresence>

          <Link href="/proje-baslat">
            <a className="relative group">
              {/* Pulse Effect */}
              <span className="absolute inset-0 rounded-full bg-primary/60 animate-ping opacity-75 group-hover:opacity-100 duration-1000" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-md group-hover:blur-lg transition-all duration-300" />

              {/* Button */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,217,255,0.6)] transition-all duration-300 transform group-hover:scale-110">
                <Wand2 className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </a>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
