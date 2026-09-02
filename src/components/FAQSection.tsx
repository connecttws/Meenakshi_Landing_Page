"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this only a 3-month program?",
    answer:
      "No. It's a one-time investment. While most clients achieve great progress within three months, I continue supporting you until you reach your goal. There are no renewal charges or additional coaching fees.",
  },
  {
    question: "What if I need more than 3 months?",
    answer:
      "No problem. Your coaching continues until your desired results are achieved.",
  },
  {
    question: "Will I have to follow a strict diet?",
    answer:
      "No. You'll receive practical Indian meal plans tailored to your lifestyle, making them easy to follow consistently.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. Whether you're starting your weight-loss journey or have tried multiple diets before, your plan is customized to your current fitness level and health goals.",
  },
  {
    question: "Is this online?",
    answer:
      "Yes. You'll receive personalized coaching, consultations, progress tracking, and ongoing support remotely, allowing you to participate from anywhere.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-4">
            Very Important
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-black/10 rounded-2xl overflow-hidden bg-background"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-foreground/80 leading-relaxed pt-2 border-t border-black/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
