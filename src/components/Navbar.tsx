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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-secondary">
            Meenakshi
          </span>
        </div>
        
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#program" className="hover:text-primary transition-colors">Program</a>
          <a href="#transformations" className="hover:text-primary transition-colors">Results</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <div>
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/90 transition-colors"
          >
            Book Call
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
