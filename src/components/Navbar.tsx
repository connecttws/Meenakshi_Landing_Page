"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col flex-shrink items-center justify-center">
            <span className="font-signature font-normal text-xl sm:text-3xl text-secondary leading-none truncate pt-1 sm:pt-2">
              Meenakshi Kaushik
            </span>
            <span className="text-[6px] sm:text-[8px] md:text-[10px] text-black tracking-[0.15em] sm:tracking-[0.2em] font-medium uppercase mt-0 sm:mt-0.5 truncate text-center">
              Certified Nutritionist
            </span>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#program" className="hover:text-primary transition-colors">Program</a>
          <a href="#transformations" className="hover:text-primary transition-colors">Results</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="flex-shrink-0 ml-2 sm:ml-0 mr-2 sm:mr-4">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-sm hover:bg-secondary/90 transition-colors whitespace-nowrap"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
