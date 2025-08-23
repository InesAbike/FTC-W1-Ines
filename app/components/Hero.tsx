import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative z-10 py-10">
            <div className="lg:py-16 py-8 flex flex-col items-center justify-between gap-8">
                <div className="text-center sm:max-w-4xl max-w-full mx-auto flex flex-col gap-6 items-center justify-between">
                    <div className="mb-12 max-w-96 mx-auto">
                        <div className="border border-white/20 rounded-full px-6 py-3">
                            <span className="text-white/90 text-sm font-medium">We just raised $20M in Series B. Learn more</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-base mb-6 bg-gradient-to-r from-[#dedde2] to-[#80739e] bg-clip-text text-transparent">
                        Modern analytics
                        <br />
                        for the modern world
                    </h1>
                    <p className="text-lg md:text-xl text-light-gray font-base mb-8 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="#"
                            className="bg-white hover:bg-transparent text-black hover:text-white shadow-lg hover:shadow-xl hover:border hover:border-white/30 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Download the app
                        </Link>
                        <Link
                            href="#"
                            className=" border border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm hover:border-indigo-black px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Talk to an expert
                        </Link>
                    </div>
                </div>
                <Image
                    src="/images/hero-img.png"
                    alt="Hero"
                    width={1000}
                    height={500}
                />
            </div>
        </section>
    )
}

export default Hero