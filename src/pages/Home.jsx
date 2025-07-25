import React from "react";
import ClientSection from "../components/ClientSection";
import Section3 from "../sections/Section3";
import MeetTheFounder from "../sections/MeetTheFounder";
import HeroAnimation from "../components/HeroAnimation";
import homeBottom from "../assets/images/home-bottom.png";

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
          className="z-10 w-full md:w-1/2 h-[50vh] md:h-[500px] flex items-center justify-center rounded-lg"
        >
          <HeroAnimation />
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
      <Section3 />
      <MeetTheFounder />
      <div className="relative w-full h-[30vh] md:h-[30vh] lg:h-[35vh]">
        <img
          src={homeBottom}
          className="absolute bottom-0 right-0 sm:w-[100%] md:w-[30%] lg:w-[30%] object-contain"
          alt="Decorative"
        />
      </div>
    </div>
  );
};

export default Home;
