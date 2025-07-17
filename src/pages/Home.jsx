import React from "react";
import ClientSection from "../components/ClientSection";
import HomePageSection2 from "../sections/HomePageSection2";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-white text-black ">
      
      <div className=" relative max-w-screen-xl mx-auto md:mx-32 flex flex-col md:flex-row items-center justify-between px-4 py-3 md:py-6 gap-10">
        <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #b4b4b4 1px, transparent 1px),
        linear-gradient(to bottom, #b4b4b4 1px, transparent 1px)
      `,
          backgroundSize: "50px 50px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
        {/* Left: Animation Placeholder */}
        <div
          id="animation"
          className="z-10 w-full md:w-1/2 h-[90vh] md:h-[500px] bg-yellow-100 flex items-center justify-center rounded-lg"
        >
          {/* Replace with your actual animation component like Lottie or SVG */}
          <span className="text-xl font-semibold text-gray-600">
            [ Animation Here ]
          </span>
        </div>

        {/* Right: Hero Content */}
        <div
          id="hero-content"
          className="w-full md:w-1/2 flex flex-col gap-3 md:text-left z-10"
        >
          <span className="text-5xl md:text-5xl font-bold">Design</span>
          <span className="text-5xl md:text-5xl font-bold">Transform</span>
          <span className="text-5xl md:text-5xl font-bold">Accelerate</span>
          <span className="text-lg md:text-xl mt-4">
            We Revolutionize User Experience
          </span>
          <span className="text-lg md:text-xl">Using Behavioural Science.</span>
        </div>
      </div>
      <ClientSection />
      <HomePageSection2 />
    </div>
  );
};

export default Home;
