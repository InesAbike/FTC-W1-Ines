"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline principale
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Animation du badge (fade in + slide up)
            tl.fromTo(badgeRef.current, 
                { 
                    opacity: 0, 
                    y: 30,
                    scale: 0.9
                },
                { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: 0.2
                }
            );

            // Animation du titre (effet de typing/reveal avec clip-path)
            tl.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: 50,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: "power2.out"
                },
                "-=0.3"
            );

            // Animation du gradient du titre
            tl.fromTo(titleRef.current,
                {
                    backgroundPosition: "200% center"
                },
                {
                    backgroundPosition: "0% center",
                    duration: 1.5,
                    ease: "power2.inOut"
                },
                "-=0.8"
            );

            // Animation du sous-titre (fade in + slide up)
            tl.fromTo(subtitleRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                },
                "-=0.5"
            );

            // Animation des boutons (scale + stagger)
            tl.fromTo(buttonsRef.current?.children || [],
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1
                },
                "-=0.4"
            );

            // Effet de parallax/tilt au hover de l'image
            const imageElement = imageRef.current;
            if (imageElement) {
                const handleMouseMove = (e: MouseEvent) => {
                    const rect = imageElement.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    
                    const deltaX = (e.clientX - centerX) / rect.width;
                    const deltaY = (e.clientY - centerY) / rect.height;
                    
                    gsap.to(imageElement, {
                        rotationY: deltaX * 10, // Rotation horizontale
                        rotationX: -deltaY * 10, // Rotation verticale
                        transformPerspective: 1000,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(imageElement, {
                        rotationY: 0,
                        rotationX: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                };

                imageElement.addEventListener('mousemove', handleMouseMove);
                imageElement.addEventListener('mouseleave', handleMouseLeave);
                
                // Cleanup
                return () => {
                    imageElement.removeEventListener('mousemove', handleMouseMove);
                    imageElement.removeEventListener('mouseleave', handleMouseLeave);
                };
            }

            // Animations de hover pour les boutons
            const buttons = buttonsRef.current?.querySelectorAll('a');
            buttons?.forEach((button, index) => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, {
                        scale: 1.05,
                        y: -2,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                button.addEventListener('mouseleave', () => {
                    gsap.to(button, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative z-10 md:pb-10 pb-0 pt-10 overflow-hidden">
            <div className="lg:py-16 py-12 flex flex-col items-center justify-between gap-8">
                <div className="text-center sm:max-w-4xl max-w-full mx-auto flex flex-col gap-6 items-center justify-between">
                    <div className="max-w-96 mx-auto">
                        <div 
                            ref={badgeRef}
                            className="border border-white/20 rounded-full py-2 px-4 backdrop-blur-sm"
                        >
                            <span className="text-white/90 text-sm font-medium">
                                We just raised $20M in Series B. Learn more
                            </span>
                        </div>
                    </div>
                    
                    <h1 
                        ref={titleRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-medium bg-gradient-to-r from-[#dedde2] via-[#a49bc2] to-[#80739e] bg-clip-text text-transparent"
                        style={{
                            backgroundSize: "200% auto",
                        }}
                    >
                        Modern analytics
                        <br />
                        for the modern world
                    </h1>
                    
                    <p 
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-light-gray font-light max-w-2xl mx-auto"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    
                    <div 
                        ref={buttonsRef}
                        className="flex items-center space-x-4"
                    >
                        <Link
                            href="#"
                            className="bg-white hover:bg-transparent text-black hover:text-white shadow-lg hover:shadow-xl hover:border hover:border-white/30 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Download the app</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <Link
                            href="#"
                            className="border hidden md:flex border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm hover:border-indigo-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Talk to an expert</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>
                </div>
                
                <div 
                    ref={imageRef}
                    className="relative cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <Image
                        src="/images/hero-img.png"
                        alt="Hero"
                        width={1000}
                        height={1000}
                        className="relative z-10 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;