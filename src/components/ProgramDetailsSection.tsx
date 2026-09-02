"use client";

import { motion } from "framer-motion";
import { 
  Utensils, 
  Video, 
  Heart, 
  BrainCircuit, 
  Leaf, 
  LineChart, 
  MessageCircle, 
  ShieldCheck, 
  Trophy 
} from "lucide-react";

const features = [
  { name: "Personalized nutrition plan", icon: Utensils },
  { name: "One-on-one consultations", icon: Video },
  { name: "Lifestyle coaching", icon: Heart },
  { name: "Stress management guidance", icon: BrainCircuit },
  { name: "Habit-building support", icon: Leaf },
  { name: "Regular progress reviews", icon: LineChart },
  { name: "WhatsApp guidance", icon: MessageCircle },
  { name: "Accountability throughout your journey", icon: ShieldCheck },
  { name: "Support until you achieve results", icon: Trophy },
];

export default function ProgramDetailsSection() {
  return (
    <section className="py-10 md:py-16 bg-secondary" id="program">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What You'll Get Inside Your Coaching Program
          </h2>
          <p className="mt-4 text-lg text-white/80">
            A comprehensive, all-inclusive approach to transforming your health and body.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#book"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/30 transition-all hover:bg-emerald-600 hover:shadow-primary/40 hover:-translate-y-1"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
