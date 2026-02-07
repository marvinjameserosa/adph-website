'use client'
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import White_Shirt_Logo from "../../../public/images/White_Shirt_Logo.png"
import Black_Shirt_Logo from "../../../public/images/Black_Shirt_Logo.png"
import White_Shirt_Logo_Date from "../../../public/images/White_Shirt_Logo_Date.png"
import Black_Shirt_Logo_Date from "../../../public/images/Black_Shirt_Logo_Date.png"
import Maker_Mug from "../../../public/images/Maker_Mug.png"
import White_Tote_Bag from "../../../public/images/White_Tote_Bag.png"
import Black_Tote_Bag from "../../../public/images/Black_Tote_Bag.png"
import Bamboo_Pen from "../../../public/images/Bamboo_Pen.png"
import Link from "next/link"

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
        price: "264.00"
    },
    {
        src: Black_Shirt_Logo,
        alt: "Black Arduino Innovator Tee with Logo",
        title: "Innovator Tee",
        category: "Black / Logo",
        price: "264.00"
    },
    {
        src: White_Shirt_Logo_Date,
        alt: "White Arduino Day 2025 Innovator Tee",
        title: "Innovator Tee",
        category: "White / Date Edition",
        price: "264.00"
    },
    {
        src: Black_Shirt_Logo_Date,
        alt: "Black Arduino Day 2025 Innovator Tee",
        title: "Innovator Tee",
        category: "Black / Date Edition",
        price: "264.00"
    },
    {
        src: Maker_Mug,
        alt: "Arduino Maker's Mug",
        title: "Maker's Mug",
        category: "Ceramic / White",
        price: "85.00"
    },
    {
        src: White_Tote_Bag,
        alt: "White Arduino Tech-Tote Bag",
        title: "Tech-Tote",
        category: "Canvas / White",
        price: "159.50"
    },
    {
        src: Black_Tote_Bag,
        alt: "Black Arduino Tech-Tote Bag",
        title: "Tech-Tote",
        category: "Canvas / Black",
        price: "159.50"
    },
    {
        src: Bamboo_Pen,
        alt: "Arduino Inko Bamboo Pen",
        title: "Inko",
        category: "Bamboo / Natural",
        price: "40.00"
    },
]

function ProductCard({ product }: { product: Product }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link
            href="https://forms.gle/kiugDJvcyiid3NAb7"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden bg-[#0a0b14]/60 border border-white/[0.06] transition-all duration-500 hover:border-price/30">
                <div className="relative aspect-square overflow-hidden flex items-center justify-center p-6 md:p-10">
                    <Image
                        src={product.src}
                        alt={product.alt}
                        width={400}
                        height={400}
                        className={`object-contain w-full h-full transition-transform duration-700 ease-out ${
                            isHovered ? "scale-110" : "scale-100"
                        }`}
                        priority
                    />
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-price/[0.03] transition-opacity duration-500 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`} />
                </div>

                {/* Product info */}
                <div className="px-4 pb-5 pt-3 md:px-5 md:pb-6 md:pt-4 border-t border-white/[0.06]">
                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 mb-1">
                        {product.category}
                    </p>
                    <div className="flex items-end justify-between gap-2">
                        <h3 className="font-montserrat text-sm md:text-base font-medium tracking-[0.08em] text-white/90 leading-tight">
                            {product.title}
                        </h3>
                        <span className="font-montserrat text-sm md:text-base text-price/80 tracking-wide whitespace-nowrap">
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
            {/* Luxury header */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-20">
                <p className="font-montserrat text-[10px] md:text-xs tracking-[0.35em] uppercase text-price/60 mb-4">
                    Exclusive Arduino Day Philippines
                </p>
                <h2 className="font-morganite text-5xl md:text-[110px] lg:text-[130px] font-bold leading-[0.85] tracking-wide text-white/95">
                    THE COLLECTION
                </h2>
                <div className="w-16 md:w-24 h-px bg-price/40 mt-5 md:mt-7 mb-5 md:mb-7" />
                <p className="font-montserrat text-xs md:text-sm tracking-[0.12em] text-white/40 max-w-md leading-relaxed">
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
            <div className="flex flex-col items-center mt-12 md:mt-20">
                <div className="w-16 md:w-24 h-px bg-price/20 mb-8 md:mb-10" />
                <Link
                    href="https://forms.gle/kiugDJvcyiid3NAb7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 font-montserrat text-xs md:text-sm tracking-[0.25em] uppercase text-white/70 hover:text-price transition-colors duration-500"
                >
                    <span className="h-px w-8 md:w-12 bg-current transition-all duration-500 group-hover:w-16" />
                    Shop the Collection
                    <span className="h-px w-8 md:w-12 bg-current transition-all duration-500 group-hover:w-16" />
                </Link>
                <p className="font-montserrat text-[10px] tracking-[0.15em] text-white/25 mt-4 uppercase">
                    All prices in PHP
                </p>
            </div>
        </div>
    )
}
