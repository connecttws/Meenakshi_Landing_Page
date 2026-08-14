"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const transformationImages = [
  "6a1fd6caf39206.51631554_ChatGPTImageJun3202611_56_06AM.png",
  "6a1fd6ed625cc9.11774960_ChatGPTImageJun3202611_54_53AM.png",
  "6a1fd70f5accd6.72731245_ChatGPTImageJun3202611_53_34AM.png",
  "6a1fd729751b03.04906095_ChatGPTImageJun3202611_57_16AM.png",
  "6a1fd7477bdef2.73035410_ChatGPTImageJun3202611_58_36AM.png",
  "6a1fd75e7bb120.55703401_ChatGPTImageJun3202611_59_43AM.png",
  "6a1fd77b2c75a6.78016314_ChatGPTImageJun3202612_08_48PM.png",
  "6a1fd791c3ff30.50504735_ChatGPTImageJun3202612_10_40PM.png",
  "6a1fd7b9ebbed2.47685761_ChatGPTImageJun3202612_12_16PM.png",
  "6a1fd7d7316806.35439643_ChatGPTImageJun3202612_14_24PM.png",
  "6a1fd7f3d26836.31684785_ChatGPTImageJun3202612_16_10PM.png"
];

export default function TransformationSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth : 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Real People. Real Results.
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            See the transformations of clients who trusted the process and achieved lasting changes.
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons (Desktop mostly) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:text-secondary hover:scale-110 transition-all focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:text-secondary hover:scale-110 transition-all focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {transformationImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="relative flex-none w-[85vw] sm:w-[350px] md:w-[400px] snap-center rounded-3xl overflow-hidden shadow-xl border border-black/5 group aspect-[4/5] bg-gray-100"
              >
                <Image
                  src={`/images/transformation%20images/${img}`}
                  alt={`Client Transformation ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 350px, 400px"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Buttons */}
        <div className="flex justify-center gap-6 mt-4 md:hidden">
          <button 
            onClick={() => scroll("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 active:bg-gray-50 active:scale-95 transition-all focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 active:bg-gray-50 active:scale-95 transition-all focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
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
