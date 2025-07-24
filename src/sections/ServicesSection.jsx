import React, { useRef } from "react";
import { servicesData } from "../assets/services";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const serviceRef = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    serviceRef.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "circ.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black rounded-t-4xl mx-auto px-4">
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRef.current[index] = el)}
          key={index}
          className="sticky px-10 top-0 pt-6 pb-12 md:mb-[2rem] text-white border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}rem)`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.subpoints.map((item, itemIndex) => (
                  <div key={`item-${item}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item}
                    </h3>
                    {itemIndex < service.subpoints.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;

// Old Services Section
{/* <section className="py-12 bg-gray-50">
        
      <div className="container mx-auto px-4 space-y-12">
        {servicesData.map((service, index) => (
          <ServicesCard
            id={service.id}
            key={index}
            title={service.title}
            description={service.description}
            subpoints={service.subpoints}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section> */}