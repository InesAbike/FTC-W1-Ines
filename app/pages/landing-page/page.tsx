import Brands from "../../components/Brands";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Image from "next/image";
import CTA from "../../components/CTA";
export default function LandingHome() {
  return (
    <div className="bg-indigo-black">
      <Image src="/images/decoration-img.png" alt="Hero" width={1000} height={500}
        className="absolute top-16 left-0 right-0 object-cover w-full"
      />
      <main className="max-w-7xl mx-auto px-5 relative z-10">
        <Hero />
        <Brands />
        <Features />
        <CTA />
      </main>
    </div>
  );
}
