"use client";

import { motion } from "framer-motion";
import { Utensils, TrendingDown, Leaf, Brain, MessageCircle, Target } from "lucide-react";

const focusAreas = [
  { name: "Personalized Indian Nutrition", icon: Utensils },
  { name: "Sustainable Weight Loss", icon: TrendingDown },
  { name: "Healthy Habit Building", icon: Leaf },
  { name: "Lifestyle & Mindset Support", icon: Brain },
  { name: "Accountability & Regular Guidance", icon: MessageCircle },
  { name: "Long-Term Results", icon: Target },
];

export default function AboutSection() {
  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-emerald-50/40 rounded-l-[100px] -z-10 transform translate-x-1/4 lg:translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10 opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-secondary mb-4 leading-tight">
              Sustainable Weight Loss with <span className="text-primary block mt-2 sm:mt-3">Meenakshi Kaushik</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-6 leading-relaxed">
              Personalized Nutrition. Sustainable Weight Loss. Lasting Transformation.
            </h3>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              At <strong className="text-secondary font-semibold">Meenakshi Weight Loss Coaching</strong>, we believe that successful weight loss is not about following another temporary diet or completely changing the way you live. It is about understanding your body, building healthier habits, and creating a nutrition plan that works realistically with your lifestyle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl shadow-primary/5 border border-gray-100 relative"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20 z-0"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <Target className="w-6 h-6" />
                </span>
                What We Focus On:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary shadow-sm border border-gray-100 group-hover:border-primary group-hover:shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-foreground/80 text-sm mt-1 sm:mt-1.5 leading-snug group-hover:text-secondary transition-colors">
                        {area.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
