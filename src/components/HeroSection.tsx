"use client";

import { motion } from "framer-motion";
import { Play, CalendarCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] pt-24 pb-8 sm:pt-28 sm:pb-16">
      {/* Enhanced Background Decor */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Top Left Green Gradient */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent opacity-80 blur-3xl"></div>
        
        {/* Top Right Orange/Gold Gradient */}
        <div className="absolute top-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-100/40 rounded-full blur-3xl"></div>

        {/* Floating Abstract Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%] w-24 h-24 rounded-full border-2 border-emerald-500/10 bg-gradient-to-br from-emerald-50 to-transparent"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[15%] w-32 h-32 rounded-3xl border border-amber-500/10 bg-gradient-to-bl from-amber-50 to-transparent transform rotate-12"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-6xl mb-3 sm:mb-5 flex flex-col sm:block leading-snug sm:leading-tight">
              <span>This Isn't Just Another{" "}</span>
              <span>Diet Program.</span>
              <span className="block text-primary mt-1 sm:mt-2">
                It's Your Last Weight Loss Journey.
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-lg leading-relaxed sm:leading-8 text-foreground/80 font-medium max-w-2xl mx-auto flex flex-col sm:block">
              <span>Most Programs End When the Package Ends.{" "}</span>
              <span>Ours Ends Only When Your Transformation Begins.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 sm:mt-6 flex flex-row items-stretch justify-center gap-2 sm:gap-4 text-[10px] sm:text-sm font-semibold text-secondary w-full"
          >
            <div className="relative flex flex-1 sm:flex-none overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 sm:flex-none flex-row items-center justify-center bg-white/95 backdrop-blur px-1 sm:px-5 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <span>One-Time<br className="sm:hidden" /> Investment</span>
              </div>
            </div>
            
            <div className="relative flex flex-1 sm:flex-none overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 sm:flex-none flex-row items-center justify-center bg-white/95 backdrop-blur px-1 sm:px-5 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <span>No Renewal<br className="sm:hidden" /> Charges</span>
              </div>
            </div>

            <div className="relative flex flex-1 sm:flex-none overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 sm:flex-none flex-row items-center justify-center bg-white/95 backdrop-blur px-1 sm:px-5 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <span>No Time<br className="sm:hidden" /> Limit</span>
              </div>
            </div>
          </motion.div>

          {/* VSL Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 sm:mt-10 relative w-full max-w-3xl mx-auto aspect-video bg-secondary rounded-2xl shadow-2xl overflow-hidden group border-4 border-white/50"
          >
            <iframe
              src="https://fast.wistia.net/embed/iframe/sppu5h7owc?seo=false&videoFoam=true"
              title="Hero Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#book"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/30 transition-all hover:bg-emerald-600 hover:shadow-primary/40 hover:-translate-y-1"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Your Consultation
              <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <p className="text-sm text-foreground/60 font-medium">Limited spots available this month.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
