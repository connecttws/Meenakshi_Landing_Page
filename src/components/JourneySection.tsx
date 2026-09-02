"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const journeyImages = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png"
];

export default function JourneySection() {
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
            A Glimpse Into Their Journey
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6 mb-6"></div>
          <p className="mt-4 text-lg text-foreground/70">
            Real conversations, real struggles, and real wins. See what the day-to-day coaching experience looks like.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Scroll Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 text-gray-700 hover:text-primary hover:scale-110 transition-all focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 text-gray-700 hover:text-primary hover:scale-110 transition-all focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {journeyImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex-none w-[80vw] sm:w-[300px] md:w-[320px] snap-center rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-center aspect-[9/16] group"
              >
                <Image
                  src={`/images/real client conversation/${img}`}
                  alt={`Client Journey Conversation ${index + 1}`}
                  fill
                  priority={index < 3}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 300px, 320px"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Buttons */}
        <div className="flex justify-center gap-6 mt-6 md:hidden">
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
      </div>
    </section>
  );
}
