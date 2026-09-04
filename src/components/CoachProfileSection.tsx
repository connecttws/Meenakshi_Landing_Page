"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Heart } from "lucide-react";
import Image from "next/image";

export default function CoachProfileSection() {
  return (
    <section className="py-10 md:py-16 bg-[#043326] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent opacity-80 z-0 pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Photo Placeholder Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] bg-emerald-900/40 border border-emerald-700/30 overflow-hidden shadow-2xl flex items-center justify-center group">
              {/* Photo Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
              
              <Image 
                src="/images/photo meenakshi.png" 
                alt="Meenakshi Kaushik" 
                fill 
                className="object-cover z-0" 
                priority
              />
            </div>
          </motion.div>

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Meet <span className="font-signature font-normal text-5xl sm:text-6xl text-white block mt-4 lg:inline lg:mt-0 lg:ml-2">Meenakshi Kaushik</span>
            </h2>
            
            <h3 className="text-[11px] min-[375px]:text-xs sm:text-xl font-medium text-emerald-300 tracking-wide uppercase mb-6 mt-4 lg:mt-6 whitespace-nowrap overflow-hidden text-ellipsis">
              Certified Nutritionist <span className="mx-1 sm:mx-2 opacity-50">|</span> Weight Loss Coach
            </h3>
            
            <div className="space-y-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Meenakshi Kaushik is a Certified Nutritionist and Weight Loss Coach with 5+ years of experience, helping individuals achieve sustainable weight loss through personalized nutrition and practical lifestyle changes. 
              </p>
              <p>
                Her approach focuses on creating realistic Indian meal plans, building healthy habits, and providing the right guidance and accountability to help clients stay consistent.
              </p>
              <p>
                She believes that weight loss should not be about extreme diets or temporary restrictions—it should be about making simple, sustainable changes that fit naturally into your everyday life.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-800/50">
              <p className="font-medium text-emerald-400 mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-sm sm:text-base">
                <span>Personalized Nutrition</span>
                <span className="hidden sm:inline text-emerald-600">•</span>
                <span>Sustainable Weight Loss</span>
                <span className="hidden sm:inline text-emerald-600">•</span>
                <span>Ongoing Support</span>
              </p>
              
              <a
                href="#book"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/20 transition-all hover:bg-emerald-500 hover:shadow-primary/40 hover:-translate-y-1"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Your Consultation
                <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-[#043326] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
