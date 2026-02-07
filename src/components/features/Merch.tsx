'use client'

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import White_Shirt_Logo from "../../../public/images/White_Shirt_Logo.png"
import Black_Shirt_Logo from "../../../public/images/Black_Shirt_Logo.png"
import White_Shirt_Logo_Date from "../../../public/images/White_Shirt_Logo_Date.png"
import Black_Shirt_Logo_Date from "../../../public/images/Black_Shirt_Logo_Date.png"
import Maker_Mug from "../../../public/images/Maker_Mug.png"
import White_Tote_Bag from "../../../public/images/White_Tote_Bag.png"
import Black_Tote_Bag from "../../../public/images/Black_Tote_Bag.png"
import Bamboo_Pen from "../../../public/images/Bamboo_Pen.png"

interface Product {
    src: StaticImageData
    alt: string
    title: string
    category: string
    price: string
}

const products: Product[] = [
    {
        src: White_Shirt_Logo,
        alt: "White Arduino Innovator Tee with Logo",
        title: "Innovator Tee",
        category: "White / Logo",
        price: "264.00",
    },
    {
        src: Black_Shirt_Logo,
        alt: "Black Arduino Innovator Tee with Logo",
        title: "Innovator Tee",
        category: "Black / Logo",
        price: "264.00",
    },
    {
        src: White_Shirt_Logo_Date,
        alt: "White Arduino Day 2025 Innovator Tee",
        title: "Innovator Tee",
        category: "White / Date Edition",
        price: "264.00",
    },
    {
        src: Black_Shirt_Logo_Date,
        alt: "Black Arduino Day 2025 Innovator Tee",
        title: "Innovator Tee",
        category: "Black / Date Edition",
        price: "264.00",
    },
    {
        src: Maker_Mug,
        alt: "Arduino Maker's Mug",
        title: "Maker's Mug",
        category: "Ceramic / White",
        price: "85.00",
    },
    {
        src: White_Tote_Bag,
        alt: "White Arduino Tech-Tote Bag",
        title: "Tech-Tote",
        category: "Canvas / White",
        price: "159.50",
    },
    {
        src: Black_Tote_Bag,
        alt: "Black Arduino Tech-Tote Bag",
        title: "Tech-Tote",
        category: "Canvas / Black",
        price: "159.50",
    },
    {
        src: Bamboo_Pen,
        alt: "Arduino Inko Bamboo Pen",
        title: "Inko",
        category: "Bamboo / Natural",
        price: "40.00",
    },
]

function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href="https://forms.gle/kiugDJvcyiid3NAb7"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
        >
            <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(0,128,128,0.08)]">
                {/* Image area */}
                <div className="relative aspect-square overflow-hidden flex items-center justify-center p-6 md:p-8">
                    <Image
                        src={product.src}
                        alt={product.alt}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                        priority
                    />
                </div>

                {/* Product info */}
                <div className="px-4 pb-4 pt-3 md:px-5 md:pb-5 md:pt-3 border-t border-white/[0.06]">
                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.16em] uppercase text-white/40 mb-1.5">
                        {product.category}
                    </p>
                    <div className="flex items-end justify-between gap-2">
                        <h3 className="font-montserrat text-sm md:text-base font-medium tracking-wide text-white/90 leading-tight">
                            {product.title}
                        </h3>
                        <span className="font-montserrat text-sm md:text-base font-semibold text-price tracking-wide whitespace-nowrap">
                            {product.price}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function Merch() {
    return (
        <div className="w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
            {/* Section header - matching site pattern */}
            <div className="flex flex-col items-center text-center mb-10 md:mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70 backdrop-blur mb-5">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
                    <span>Merch</span>
                </div>
                <h2 className="font-morganite text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white/95 mb-4">
                    The <span className="text-secondary">Collection</span>
                </h2>
                <p className="font-montserrat text-xs md:text-sm text-white/50 max-w-md leading-relaxed">
                    Gear designed for daily wear, not just event day. Limited pieces, curated for makers.
                </p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col items-center mt-10 md:mt-16">
                <Link
                    href="https://forms.gle/kiugDJvcyiid3NAb7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary/90 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_0_20px_rgba(0,128,128,0.25)]"
                >
                    Shop the Collection
                </Link>
                <p className="font-montserrat text-[10px] tracking-[0.12em] text-white/30 mt-3 uppercase">
                    All prices in PHP
                </p>
            </div>
        </div>
    )
}
