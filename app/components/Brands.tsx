"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Brands = () => {
    const brands = [
        { src: "/logos/brand-1.svg", alt: "Brand 1" },
        { src: "/logos/brand-2.svg", alt: "Brand 2" },
        { src: "/logos/brand-3.svg", alt: "Brand 3" },
        { src: "/logos/brand-4.svg", alt: "Brand 4" },
        { src: "/logos/brand-5.svg", alt: "Brand 5" },
        { src: "/logos/brand-6.svg", alt: "Brand 6" },
        { src: "/logos/brand-7.svg", alt: "Brand 7" }
    ];
    return (
        <section 
            className='flex flex-col gap-4 items-center justify-center py-8 overflow-hidden'
        >
            <h2 
                className='text-md font-base text-center mb-4 text-light-gray/80'
            >
                Trusted by teams at over 1,000 of the world's leading organizations
            </h2>
            
            <div 
                className='flex items-center justify-center md:gap-4 gap-2 flex-wrap relative'
            >
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer md:p-4 p-2 md:w-[150px] w-[90px]"
                    >
                        <Image 
                            src={brand.src} 
                            alt={brand.alt} 
                            width={120} 
                            height={120}
                            className="transition-all duration-100 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:scale-110"
                        />
                        
                        {/* Effet de glow au hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 -z-10 scale-110"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brands;