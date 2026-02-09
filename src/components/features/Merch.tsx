"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import White_Shirt_Logo from "../../../public/images/White_Shirt_Logo.png";
import Black_Tote_Bag from "../../../public/images/Black_Tote_Bag.png";
import Maker_Mug from "../../../public/images/Maker_Mug.png";

interface Collection {
  image: StaticImageData;
  alt: string;
  name: string;
  tagline: string;
  itemCount: number;
  href: string;
}

const collections: Collection[] = [
  {
    image: White_Shirt_Logo,
    alt: "Arduino Day PH Innovator Tee - White with logo",
    name: "Apparel",
    tagline: "Tees built for makers",
    itemCount: 4,
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: Black_Tote_Bag,
    alt: "Arduino Day PH Tech-Tote Bag - Black",
    name: "Accessories",
    tagline: "Carry the craft",
    itemCount: 3,
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
  {
    image: Maker_Mug,
    alt: "Arduino Day PH Maker Mug - Ceramic White",
    name: "Drinkware",
    tagline: "Fuel the build",
    itemCount: 1,
    href: "https://forms.gle/kiugDJvcyiid3NAb7",
  },
];

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={collection.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.06]">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden flex items-center justify-center p-8 md:p-10">
          <Image
            src={collection.image}
            alt={collection.alt}
            width={400}
            height={500}
            className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />

          {/* Item count badge */}
          <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-white/[0.08] border border-white/[0.08] px-3 py-1 text-[10px] font-montserrat uppercase tracking-[0.14em] text-white/60 backdrop-blur-sm">
            {collection.itemCount} {collection.itemCount === 1 ? "piece" : "pieces"}
          </span>
        </div>

        {/* Info */}
        <div className="px-5 pb-5 pt-4 border-t border-white/[0.06]">
          <p className="font-montserrat text-[10px] md:text-xs tracking-[0.16em] uppercase text-white/40 mb-1">
            {collection.tagline}
          </p>
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-morganite text-3xl md:text-4xl font-bold tracking-wide text-white/95 leading-none">
              {collection.name}
            </h3>
            <span className="inline-flex items-center gap-1.5 font-montserrat text-xs font-medium text-primary tracking-wide transition-all duration-300 group-hover:gap-2.5">
              Shop
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Merch() {
  return (
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70 backdrop-blur mb-5">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
          <span className="font-montserrat">Merch</span>
        </div>
        <h2 className="font-morganite text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white/95 mb-4">
          The <span className="text-secondary">Collection</span>
        </h2>
        <p className="font-montserrat text-xs md:text-sm text-white/50 max-w-md leading-relaxed">
          Gear designed for daily wear, not just event day. Limited pieces, curated for makers.
        </p>
      </div>

      {/* Collection grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {collections.map((collection, index) => (
          <CollectionCard key={index} collection={collection} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center mt-10 md:mt-16">
        <Link
          href="https://forms.gle/kiugDJvcyiid3NAb7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary/90 px-8 py-3 text-sm font-montserrat font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_0_20px_rgba(0,128,128,0.25)]"
        >
          Visit the Store
        </Link>
        <p className="font-montserrat text-[10px] tracking-[0.12em] text-white/30 mt-3 uppercase">
          All prices in PHP
        </p>
      </div>
    </div>
  );
}
