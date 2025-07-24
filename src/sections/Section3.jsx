"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SpinnerComponent from "../components/SpinnerComponent";
import BulletSpinner from "../components/BulletSpinner";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const containerRef = useRef(null);
  const designPointsRef = useRef(null);
  const designBulletsRef = useRef(null);
  const copiesRef = useRef(null);
  const techPointsRef = useRef(null);
  const techBulletsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline 1: Intro — reveals bullets and pins
      const tlIntro = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          toggleActions: "play none none reverse",
          pin: true,
        },
      });

      tlIntro
        .to(copiesRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        })
        .set(copiesRef.current, { display: "none" })
        .set("#bullet", { display: "flex" })
        .from(designBulletsRef.current.children, {
          opacity: 0,
          x: -50,
          stagger: 0.05,
          duration: 0.2,
          ease: "power1.out",
          onComplete: () => {
            gsap.to("#box2", {
              y: 0,
              ease: "power2.out",
              delay: 0.45,
              scrollTrigger: {
                trigger: "#box1",
                start: "top top",
                end: "+=100%",
                scrub: true,
              },
            });
          },
        });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#box2",
          start: "top top",
          toggleActions: "play none none reverse",
        },
      });

      tl2
        .set("#bullet2", { display: "flex" })
        .from(techBulletsRef.current.children, {
          opacity: 0,
          x: -50,
          stagger: 0.05,
          duration: 0.2,
          ease: "power1.out",
        });

      // Timeline 2: Box 2 scroll motion
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="section3"
      className="flex h-[100vh] px-4 md:px-12 lg:px-22 overflow-y-hidden"
    >
      {/* Left Side: 3 Boxes */}
      <div className="relative w-full md:w-1/2 justify-center gap-6 flex-1">
        <div
          ref={designPointsRef}
          id="box1"
          className="flex flex-col md:ml-20 absolute pt-4 lg:pt-[64px] top-[64px] left-0"
        >
          <div className="flex flex-row h-full gap-2">
            <BulletSpinner circleColor="bg-[#FF0000]" />
            <h2 className="text-4xl font-bold mb-4"> Design</h2>
          </div>
          <div
            ref={designBulletsRef}
            id="bullet"
            className="hidden flex-col gap-2 pl-[55px]"
          >
            <div>UI Design</div>
            <div>UX Design</div>
            <div>UX Consultancy</div>
            <div>Design System</div>
            <div>Animation</div>
            <div>Illustrations</div>
            <div className="flex-1 flex md:hidden items-start justify-center relative pt-2">
              <SpinnerComponent />
            </div>
          </div>

          <div ref={copiesRef} id="boxCopies" className="">
            <div id="box2Copy" className="text-4xl font-bold mb-4">
              <div className="flex flex-row h-full gap-2">
                <BulletSpinner circleColor="bg-[#0000FF]" />
                <h2 className="text-4xl font-bold mb-4"> Technology</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={techPointsRef}
          id="box2"
          className="flex flex-col md:ml-20 absolute bg-white pt-4 lg:pt-[64px] top-[64px] left-0 h-full w-full md:w-[500px] translate-y-[100vh]"
        >
          <div className="flex flex-row gap-2">
            <BulletSpinner circleColor="bg-[#0000FF]" />
            <h2 className="text-4xl font-bold mb-4"> Technology</h2>
          </div>
          <div
            ref={techBulletsRef}
            id="bullet2"
            className="hidden flex-col gap-2 pl-[55px]"
          >
            <div>Web Developments</div>
            <div>Softwares</div>
            <div>Mobile Apps</div>
            <div>Web Apps</div>
            <div>Front-end</div>
            <div>Back-end</div>
            <div className="md:hidden">
              <SpinnerComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex-1 md:flex items-start justify-center relative pt-10">
        <div className="mt-10 w-4/5 h-[400px] bg-[#e0f7fa] rounded-2xl shadow-lg flex items-center justify-center">
          {/* Example animation: spinning circle */}
          <div className="w-[100px] h-[100px] border-8 border-[#00bcd4] border-t-white rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
