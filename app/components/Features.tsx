import React from 'react'
import Image from 'next/image'
import FeatureCard from './FeatureCard'
import { PiChartLineUp } from 'react-icons/pi'
import { TbChartArcs } from 'react-icons/tb'
import { GoCodeSquare } from 'react-icons/go'


const Features = () => {
    return (
        <section className="lg:py-16 py-12 px-8 flex flex-col items-center justify-between gap-8">
            <div className='flex flex-col items-center mb-8 relative'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-base mb-6 max-w-96 text-center">
                    Features that work for your future
                </h2>
                <div className='text-lg font-base text-center max-w-lg'>
                    Check out our amazing features and experience the power of Vaultflow for yourself.
                </div>
                <Image src="/images/radial-gradient.png" alt="Hero" width={100} height={100}
                    className="absolute -top-35 left-0 right-0 object-cover w-full"
                />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full mb-4'>
                <FeatureCard
                    feature={{
                        title: "Analytics Dashboard",
                        description: "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.",
                        icon: <PiChartLineUp  className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />,
                        iconColor: "bg-gradient-to-br from-blue-500 to-blue-600",
                        buttonText: "View Dashboard"
                    }}
                />
                <FeatureCard
                    feature={{
                        title: "Digital Credit Tokens",
                        description: "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
                        icon: <TbChartArcs  className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />,
                        iconColor: "bg-gradient-to-br from-violet-500 to-violet-600",
                        buttonText: "View Tokens"
                    }}
                />
            </div>

            <div className="bg-gray-900/80 gap-8 grid grid-cols-1 lg:grid-cols-2 backdrop-blur-sm border border-fuchsia-600/20 rounded-2xl p-8 w-full shadow-2xl hover:shadow-3xl shadow-[#61597170] hover:bg-gray-900/90 hover:border-gray-600/70 hover:scale-105 transition-all duration-300 ease-out group">
                <div>
                    <div className="mb-2">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer bg-gradient-to-br from-pink-500 to-pink-600">
                            <GoCodeSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <h2 className="text-white text-2xl font-medium mb-4 leading-tight">
                            Code Collaboration
                        </h2>
                    </div>
                    <div className="mb-2">
                        <p className="text-gray-300 text-base leading-relaxed">
                            Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.
                        </p>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300/50 text-sm"
                        >
                            View code collaboration
                        </a>
                    </div>
                </div>
                <div className="border-fuchsia-600/50 rounded-2xl shadow-2xl hover:shadow-3xl shadow-[#61597170] hover:bg-gray-900/90 hover:border-gray-600/70 hover:scale-105 transition-all duration-300 ease-out">
                    <Image
                        src="/images/code-screenshot.png"
                        alt="Code collaboration screenshot"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default Features