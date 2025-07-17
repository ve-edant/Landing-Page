"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HomePageSection2 = () => {
  const designPointsRef = useRef(null);
  const techPointsRef = useRef(null);
  const marketingPointsRef = useRef(null);

  useGSAP(() => {
    // Design Animation
    gsap.from(designPointsRef.current.children, {
      x: -50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: designPointsRef.current,
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
      },
    });

    // Technology Animation
    gsap.from(techPointsRef.current.children, {
      x: -50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: techPointsRef.current,
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
      },
    });

    // Marketing Animation
    gsap.from(marketingPointsRef.current.children, {
      x: -50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: marketingPointsRef.current,
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="w-full px-4 md:px-32 min-h-screen flex flex-col md:flex-row gap-0 items-stretch">
      {/* Left Section */}
      <div className="w-full md:w-1/2 px-4 md:pl-[150px] py-12 bg-red-300 flex flex-col gap-12">
        {/* Design */}
        <div id="designSection" className="w-full flex flex-col gap-4">
          <div id="designTitle" className="text-5xl font-semibold">
            Design
          </div>
          <div ref={designPointsRef} className="flex flex-col gap-2">
            <div>UI Design</div>
            <div>UX Design</div>
            <div>UX Consultancy</div>
            <div>Design System</div>
            <div>Animation</div>
            <div>Illustrations</div>
          </div>
        </div>

        {/* Technology */}
        <div className=" flex flex-col gap-4">
          <div id="techTitle" className="text-5xl font-semibold">
            Technology
          </div>
          <div ref={techPointsRef} className="flex flex-col gap-2">
            <div>Web Development</div>
            <div>Softwares</div>
            <div>Mobile Apps</div>
            <div>Web Apps</div>
            <div>Front-end</div>
            <div>Back-end</div>
          </div>
        </div>

        {/* Marketing */}
        <div className=" flex flex-col gap-4">
          <div id="marketingTitle" className="text-5xl font-semibold">
            Marketing
          </div>
          <div ref={marketingPointsRef} className="flex flex-col gap-2">
            <div>Branding</div>
            <div>Brand Name</div>
            <div>Brand Guidelines</div>
            <div>Strategy</div>
            <div>Digital Marketing</div>
            <div>S.E.O.</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 min-h-[300px]">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="text-2xl font-bold text-center">
            Different animation for different titles
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSection2;
