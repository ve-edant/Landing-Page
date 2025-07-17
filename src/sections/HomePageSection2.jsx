"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const containerRef = useRef(null);
  const designPointsRef = useRef(null);
  const techPointsRef = useRef(null);
  const marketingPointsRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalScroll = "200%"; // px scroll for 3 boxes (adjust if needed)

      // Animate Box 1 (bottom layer)
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
          markers: true,
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
          markers: true,
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
          markers: true,
        },
      });

      // Pin Right Side
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: rightRef.current,
        scrub: true,
        markers: true, // Optional: for debugging
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-[300vh] flex flex-col md:flex-row bg-white"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 sticky top-0">
        <div className="relative w-full flex flex-col gap-4 justify-start">
          {/* Box 1 */}
          <div id="designSection" className="h-[100vh] w-full flex flex-col gap-4 ml-40 justify-center items-center">
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
          <div className="h-[100vh] w-full flex flex-col gap-4 ml-40 justify-center items-center">
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
          <div className="h-[100vh] w-full flex flex-col gap-4 ml-40 justify-center items-center">
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
      </div>

      {/* Right Section */}
      <div
        ref={rightRef}
        className="w-full md:w-1/2 h-screen flex items-center justify-center bg-gray-100 text-2xl font-bold"
      >
        This stays fixed while left scrolls.
      </div>
    </section>
  );
};

export default Section3;
