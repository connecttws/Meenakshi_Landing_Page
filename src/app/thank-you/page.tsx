"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, CalendarHeart, Target, Salad, Activity, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fdfbf7]">
      <div className="flex-grow relative overflow-hidden py-12 sm:py-16 flex items-center justify-center">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-emerald-100/60 to-transparent opacity-80 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-xl shadow-emerald-900/5 border border-emerald-100/50 text-center"
          >
            {/* Header */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
            >
              <CheckCircle2 className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-secondary mb-4">
              Thank You!
            </h1>
            <p className="text-lg sm:text-xl text-primary font-semibold mb-2">
              Your consultation request has been received successfully.
            </p>
            <p className="text-foreground/70 mb-10 text-sm sm:text-base">
              Thank you for your interest in our personalized weight loss program.
            </p>

            {/* Next Steps */}
            <div className="bg-emerald-50/50 rounded-2xl p-6 sm:p-8 text-left mb-8 border border-emerald-100/50">
              <h2 className="text-xl font-bold text-secondary flex items-center gap-2 mb-3">
                <CalendarHeart className="w-5 h-5 text-primary" />
                We'll Be In Touch Shortly
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Our team will contact you on the details provided during registration to discuss your requirements and consultation.
              </p>

              <h3 className="font-semibold text-secondary mb-4">During the consultation, you can discuss your:</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Weight loss goals",
                  "Current diet and lifestyle",
                  "Previous weight loss experiences",
                  "Challenges you are facing",
                  "Expectations from the program"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 text-foreground/80 font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="text-secondary font-medium italic bg-white/50 p-4 rounded-xl border border-emerald-100/50">
                We'll help you understand how our personalized approach can fit into your lifestyle.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="mb-10">
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase mb-5">
                What Our Program Focuses On
              </h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-secondary">
                <span className="bg-white px-4 py-2.5 rounded-full shadow-sm border border-black/5 flex items-center gap-2">
                  <Salad className="w-4 h-4 text-primary" /> Personalized Nutrition
                </span>
                <span className="bg-white px-4 py-2.5 rounded-full shadow-sm border border-black/5 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" /> Practical Indian Meals
                </span>
                <span className="bg-white px-4 py-2.5 rounded-full shadow-sm border border-black/5 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" /> Lifestyle Guidance
                </span>
                <span className="bg-white px-4 py-2.5 rounded-full shadow-sm border border-black/5 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" /> Habit Building
                </span>
                <span className="bg-white px-4 py-2.5 rounded-full shadow-sm border border-black/5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Regular Support
                </span>
              </div>
              <p className="mt-6 text-foreground/70 font-medium">
                No crash diets. No extreme restrictions. No fixed program deadline.
              </p>
            </div>

            {/* Action */}
            <Link 
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-secondary/20 transition-all hover:bg-secondary/90 hover:-translate-y-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Website
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
