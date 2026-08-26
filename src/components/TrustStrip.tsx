"use client";

import { motion } from "framer-motion";

export default function TrustStrip() {
  const points = [
    "5+ Years Experience",
    "Personalized Nutrition Plans",
    "One-Time Payment",
    "Support Until Results",
  ];

  // Duplicate items several times so the carousel has enough content to scroll seamlessly
  const repeatedPoints = [...points, ...points, ...points, ...points];

  return (
    <div className="bg-secondary text-white py-6 sm:py-8 overflow-hidden relative flex">
      {/* Fading Edges for an elegant look */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35, // Adjust speed (higher is slower)
        }}
      >
        {repeatedPoints.map((point, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl w-max mx-2 sm:mx-3 hover:bg-white/10 transition-colors cursor-default"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <span className="font-medium text-sm sm:text-base leading-tight">{point}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
