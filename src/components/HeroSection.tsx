"use client";

import { motion } from "framer-motion";
import { Play, CalendarCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] pt-24 pb-12 sm:pt-28 sm:pb-16">
      {/* Enhanced Background Decor */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Top Left Green Gradient */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent opacity-80 blur-3xl"></div>
        
        {/* Top Right Orange/Gold Gradient */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl"></div>

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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Accepting New Clients
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-6xl mb-6">
              This Isn't Just Another Diet Program.
              <span className="block text-primary mt-2">
                It's Your Last Weight Loss Journey.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 font-medium max-w-2xl mx-auto">
              Most Programs End When the Package Ends. Ours Ends Only When Your
              Transformation Begins.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-secondary"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-2.5 rounded-full shadow-sm border border-black/5">
              <span className="text-primary text-lg">✦</span> One-Time Investment
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-2.5 rounded-full shadow-sm border border-black/5">
              <span className="text-primary text-lg">✦</span> No Renewal Charges
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-2.5 rounded-full shadow-sm border border-black/5">
              <span className="text-primary text-lg">✦</span> No Time Limit
            </div>
          </motion.div>

          {/* VSL Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 relative w-full max-w-3xl mx-auto aspect-video bg-secondary rounded-2xl shadow-2xl overflow-hidden group cursor-pointer border-4 border-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-[#043326] flex items-center justify-center transition-colors">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white/90 font-medium flex items-center gap-2 justify-center drop-shadow-md bg-black/20 backdrop-blur-md py-2 rounded-lg mx-12">
              Watch: How we guarantee results without a time limit
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#book"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/30 transition-all hover:bg-emerald-600 hover:shadow-primary/40 hover:-translate-y-1"
            >
              <CalendarCheck className="w-5 h-5" />
              Book My Consultation
              <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <p className="text-sm text-foreground/60 font-medium">Limited spots available this month.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
