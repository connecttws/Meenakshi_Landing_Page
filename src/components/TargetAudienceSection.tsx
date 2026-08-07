"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "You're struggling to lose weight",
  "You've tried multiple diets without lasting results",
  "You want practical Indian meals instead of extreme restrictions",
  "You need someone to keep you accountable",
  "You're ready to build healthy habits that actually last",
];

export default function TargetAudienceSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Who Is This For?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            This program is perfectly designed for you if you're ready to break the cycle of temporary diets.
          </p>
        </div>

        <div className="mx-auto max-w-2xl bg-white rounded-3xl shadow-xl border border-black/5 p-8 sm:p-12">
          <ul className="space-y-6">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg font-medium text-foreground">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
