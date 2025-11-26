import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import toovLogo from "@assets/toov_logo.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/inovasyon", label: "İnovasyon" },
    { href: "/referanslar", label: "Referanslar" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="block hover:opacity-80 transition-opacity">
            <img src={toovLogo} alt="TOOV" className="h-10 w-auto" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium tracking-wide transition-all duration-300 relative group",
                  location === link.href ? "text-primary" : "text-gray-300 hover:text-white"
                )}
              >
                {link.label}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full",
                    location === link.href ? "w-full" : ""
                  )}
                />
              </a>
            </Link>
          ))}
          
          <Link href="/proje-baslat">
            <a className="ml-4 px-6 py-2.5 bg-primary text-background font-bold text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]">
              Projeye Başla
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-display font-medium",
                      location === link.href ? "text-primary" : "text-white/80"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              
              <Link href="/proje-baslat">
                <a
                  onClick={() => setIsOpen(false)} 
                  className="mt-4 w-full py-4 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/50 text-primary font-bold text-lg rounded-xl text-center hover:bg-primary/30 transition-all shadow-[0_0_15px_rgba(0,217,255,0.2)] flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Projeye Başla
                </a>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
