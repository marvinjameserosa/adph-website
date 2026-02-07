'use client';
import React from 'react'
import Image from 'next/image'
import { sponsors } from '@/data/index'
import GlowingTextOrange from '@/components/ui/glow-text-orange'

const Partners = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 font-morganite">
          Special Thanks To Our{' '}
          <GlowingTextOrange className="font-bold">
            Sponsors And Partners
          </GlowingTextOrange>
        </h1>

        {/* Responsive grid for logos */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="relative flex justify-center items-center p-3 transition-transform duration-300 transform group hover:scale-105"
            >
              {/* Gradient border on hover */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-b from-green-300 to-orange-500
                  p-[2px]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                "
              >
                <div className="w-full h-full bg-[#0f0f0f] rounded-2xl" />
              </div>

              <div className="relative z-10 h-16 w-full sm:h-20 md:h-24 group-hover:hidden transition-opacity duration-300">
                <Image
                  src={sponsor.path_to_image}
                  alt={sponsor.name}
                  fill
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 16vw"
                  className={`object-contain ${
                    sponsor.radius ? 'rounded-full' : ''
                  }`}
                />
              </div>

              <div
                className="z-10 hidden group-hover:flex h-16 sm:h-20 md:h-24 text-white text-xl font-semibold text-center items-center justify-center font-morganite"
              >
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners
