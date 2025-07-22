"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaProjectDiagram,
  FaLock,
  FaAward,
  FaLightbulb,
  FaSyncAlt,
  FaHeadset,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  const points = [
    { icon: <FaProjectDiagram size={32} />, title: "End-to-End Expertise" },
    { icon: <FaLock size={32} />, title: "Security-First Approach" },
    { icon: <FaAward size={32} />, title: "Proven Track Record" },
    { icon: <FaLightbulb size={32} />, title: "Cutting-Edge Innovation" },
    { icon: <FaSyncAlt size={32} />, title: "Agile & Transparent" },
    { icon: <FaHeadset size={32} />, title: "Dedicated Support" },
  ];

  useEffect(() => {
    const boxes = sectionRef.current.querySelectorAll(".choose-box");

    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="choose-box flex flex-col items-center text-center p-6 bg-white border border-black rounded-xl hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[4px_4px_0_1px_#000] transition-shadow duration-200"
            >
              <div className="text-indigo-600 mb-4">{point.icon}</div>
              <h3 className="text-lg text-black font-semibold">{point.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
