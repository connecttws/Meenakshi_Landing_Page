"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const instagramLinks = [
  "CuvzApZN3sH",
  "CoJiM0-jj40",
  "CoXMnXHOrNP",
  "C5Lo45mPtRG"
];

export default function TestimonialSection() {
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
    <section className="py-16 bg-[#fdfbf7] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6 mb-6"></div>
          <p className="mt-4 text-lg text-foreground/70">
            Hear directly from our clients about their journey, struggles, and ultimate success.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Scroll Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:text-secondary hover:scale-110 transition-all focus:outline-none"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:text-secondary hover:scale-110 transition-all focus:outline-none"
            aria-label="Next post"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {instagramLinks.map((id, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex-none w-[85vw] sm:w-[320px] md:w-[350px] snap-center bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                <iframe
                  src={`https://www.instagram.com/p/${id}/embed`}
                  width="100%"
                  height="480"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                  className="w-full bg-white"
                  title={`Instagram post ${index + 1}`}
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Buttons */}
        <div className="flex justify-center gap-6 mt-2 md:hidden">
          <button 
            onClick={() => scroll("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 active:bg-gray-50 active:scale-95 transition-all focus:outline-none"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 active:bg-gray-50 active:scale-95 transition-all focus:outline-none"
            aria-label="Next post"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
