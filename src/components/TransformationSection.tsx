"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function TransformationSection() {
  // Placeholder images
  const transformations = [
    { id: 1, before: "Before", after: "After" },
    { id: 2, before: "Before", after: "After" },
    { id: 3, before: "Before", after: "After" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Real People. Real Results.
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            See the transformations of clients who trusted the process and achieved lasting changes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-background rounded-3xl p-4 shadow-xl border border-black/5 overflow-hidden group"
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative flex flex-col">
                {/* Simulated Before/After split */}
                <div className="flex-1 bg-gray-200 flex items-center justify-center text-gray-400 font-medium">
                  {item.before} Image
                </div>
                <div className="h-1 bg-white w-full"></div>
                <div className="flex-1 bg-emerald-50 flex items-center justify-center text-emerald-400 font-medium">
                  {item.after} Image
                </div>
                
                {/* Placeholder Overlay */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold drop-shadow-md">View Story</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <CalendarCheck className="w-4 h-4" />
            Book My Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
