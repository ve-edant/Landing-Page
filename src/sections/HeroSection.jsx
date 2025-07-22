import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeroTitle from "../components/HeroTile";
import HeroImg from "../assets/images/image.png"

const HeroSection = () => {
  return (
    <section className="relative bg-[#f8faff] h-[90vh] w-full ">
      
      {/* Left side content */}
      <div className="h-full w-full py-5 px-6 md:px-16 flex flex-col md:flex-row justify-between z-10">
        <div className="md:w-2/3 space-y-4 md:space-y-4 md:pr-12 mt-0 md:mt-[10%] z-20">
          <p className="text-indigo-600 font-semibold text-base md:text-lg tracking-wide">
            Engineering Excellence & Strategic Consulting
          </p>
          <div className="flex flex-col gap-4">
            <HeroTitle />
            <p className="text-gray-600 text-md md:text-lg max-w-xl">
              Dafil Tech delivers next-gen blockchain solutions, AI-powered
              applications, and immersive digital experiences that help
              businesses scale with security and innovation.
            </p>
          </div>
          <div className="flex flex-row sm:flex-row gap-4 pt-2">
            <button className="bg-blue-600 text-white px-2 md:px-8 py-1 md:py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 font-semibold text-base">
              Start Your Project
            </button>
            {/* <button className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-200 font-semibold text-base">
            Explore Our Services
          </button> */}
          </div>
        </div>
        {/* Right side visuals */}
        <div className="md:w-1/3 flex items-center justify-center relative p-2 z-20">
        <img className="object-contain" src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
