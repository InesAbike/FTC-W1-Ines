import React from 'react'
import Link from 'next/link'

const CTA = () => {
    return (
        <section className="lg:pt-16 pt-12 lg:pb-20 pb-14 md:mx-8 mx-0">
            <div className="bg-gray-900/80 mx-auto flex flex-col gap-8 items-center text-center backdrop-blur-sm border border-fuchsia-600/20 rounded-2xl px-8 py-12 w-full shadow-2xl hover:shadow-3xl shadow-[#61597170]">
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium mb-4 leading-tight max-w-3xl">
                    Our powerful analytics provides invaluable insights.
                </h1>
                <div className="mb-2 max-w-xl">
                    <p className="text-gray-300 text-base leading-relaxed">
                        Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.
                    </p>
                </div>
                <Link
                    href="#"
                    className="border border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm hover:border-indigo-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 relative overflow-hidden group"
                >
                    <span className="relative z-10">Download the app</span>
                </Link>
            </div>
        </section>
    )
}

export default CTA