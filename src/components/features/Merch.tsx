"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import White_Shirt_Logo from "../../../public/images/White_Shirt_Logo.png";
import White_Shirt_Logo_Date from "../../../public/images/White_Shirt_Logo_Date.png";
import Black_Shirt_Logo from "../../../public/images/Black_Shirt_Logo.png";
import Black_Shirt_Logo_Date from "../../../public/images/Black_Shirt_Logo_Date.png";
import Black_Tote_Bag from "../../../public/images/Black_Tote_Bag.png";
import White_Tote_Bag from "../../../public/images/White_Tote_Bag.png";
import Maker_Mug from "../../../public/images/Maker_Mug.png";
import Bamboo_Pen from "../../../public/images/Bamboo_Pen.png";

interface MerchItem {
  image: StaticImageData;
  alt: string;
  name: string;
  category: string;
  price: string;
  href: string;
}

const merchItems: MerchItem[] = [
  {
    image: White_Shirt_Logo,
    alt: "White Tee with ADPH Logo",
    name: "Innovator Tee",
    category: "Apparel",
    price: "₱350",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: White_Shirt_Logo_Date,
    alt: "White Tee with ADPH Logo and Date",
    name: "Launch Day Tee",
    category: "Apparel",
    price: "₱350",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: Black_Shirt_Logo,
    alt: "Black Tee with ADPH Logo",
    name: "Stealth Tee",
    category: "Apparel",
    price: "₱350",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: Black_Shirt_Logo_Date,
    alt: "Black Tee with ADPH Logo and Date",
    name: "Signature Tee",
    category: "Apparel",
    price: "₱350",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: Black_Tote_Bag,
    alt: "Black Tech-Tote Bag",
    name: "Tech-Tote Black",
    category: "Accessories",
    price: "₱150",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: White_Tote_Bag,
    alt: "White Tech-Tote Bag",
    name: "Tech-Tote White",
    category: "Accessories",
    price: "₱150",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: Maker_Mug,
    alt: "Maker Mug - Ceramic White",
    name: "Maker Mug",
    category: "Drinkware",
    price: "₱200",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: Bamboo_Pen,
    alt: "Bamboo Pen with ADPH Branding",
    name: "Bamboo Pen",
    category: "Accessories",
    price: "₱75",
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
];

export default function Merch() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = merchItems.length;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + total) % total);
    },
    [isAnimating, total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [current]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) goTo(current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, isAnimating, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const getPosition = (index: number) => {
    const diff = (index - current + total) % total;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(total - 1)) return "right";
    if (diff === total - 1 || diff === -1) return "left";
    return "hidden";
  };

  const item = merchItems[current];

  return (
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70 backdrop-blur mb-5">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
          <span className="font-montserrat">Merch</span>
        </div>
        <h2 className="font-morganite text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white/95 mb-4">
          The <span className="text-secondary">Collection</span>
        </h2>
        <p className="font-montserrat text-xs md:text-sm text-white/50 max-w-md leading-relaxed">
          Gear designed for daily wear, not just event day. Swipe to explore every piece.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel viewport */}
        <div className="relative h-[340px] sm:h-[400px] md:h-[460px] overflow-hidden">
          {/* Color blurs behind carousel */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="orange-blur h-[160px] w-[140px] absolute rounded-full top-4 left-[15%] md:h-[220px] md:w-[200px] md:left-[30%]" />
            <div className="yellow-blur h-[160px] w-[140px] absolute rounded-full top-12 right-[15%] md:h-[220px] md:w-[200px] md:right-[32%] md:top-20" />
            <div className="blue-blur h-[160px] w-[140px] absolute rounded-full bottom-0 right-[20%] md:h-[220px] md:w-[200px] md:right-[34%] md:-bottom-4" />
          </div>

          {/* Items */}
          <div className="absolute inset-0 flex items-center justify-center">
            {merchItems.map((merchItem, index) => {
              const pos = getPosition(index);
              if (pos === "hidden") return null;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-out ${
                    pos === "center"
                      ? "z-20 scale-100 opacity-100"
                      : pos === "left"
                        ? "z-10 -translate-x-[60%] md:-translate-x-[75%] scale-[0.7] opacity-40 hidden sm:block"
                        : "z-10 translate-x-[60%] md:translate-x-[75%] scale-[0.7] opacity-40 hidden sm:block"
                  }`}
                >
                  <div className="relative rounded-2xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm p-6 md:p-8">
                    <Image
                      src={merchItem.image}
                      alt={merchItem.alt}
                      width={400}
                      height={400}
                      className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] object-contain"
                      priority={index <= 2}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={isAnimating}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-2 md:p-3 text-white/60 transition-all hover:border-primary/40 hover:text-primary hover:bg-white/[0.08] disabled:opacity-30"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={next}
          disabled={isAnimating}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-2 md:p-3 text-white/60 transition-all hover:border-primary/40 hover:text-primary hover:bg-white/[0.08] disabled:opacity-30"
          aria-label="Next item"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Product info */}
      <div className="flex flex-col items-center text-center mt-8 md:mt-10">
        <span className="font-montserrat text-[10px] md:text-xs tracking-[0.16em] uppercase text-primary/80 mb-1">
          {item.category}
        </span>
        <h3 className="font-morganite text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white/95 leading-none mb-2">
          {item.name}
        </h3>
        <span className="font-montserrat text-lg md:text-xl font-semibold text-price tracking-wide">
          {item.price}
        </span>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {merchItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center mt-8 md:mt-12">
        <Link
          href="https://forms.gle/kiugDJvcyiid3NAb7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary/90 px-8 py-3 text-sm font-montserrat font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_0_20px_rgba(0,128,128,0.25)]"
        >
          Shop All Merch
        </Link>
        <p className="font-montserrat text-[10px] tracking-[0.12em] text-white/30 mt-3 uppercase">
          All prices in PHP
        </p>
      </div>
    </div>
  );
}
