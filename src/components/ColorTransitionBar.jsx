import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ColorTransitionBar() {
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    const textEl = textRef.current;

    // Initial state
    gsap.set(el, {
      background: "radial-gradient(circle at 50% 0%, #4B0082, #800080)",
      clipPath: "circle(0% at 50% 0%)",
    });
    gsap.set(textEl, { color: "#000" });

    // Animate background and text color
    gsap.to(el, {
      clipPath: "circle(150% at 50% 0%)",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        toggleActions: "play none none reverse",
        onEnter: () => gsap.to(textEl, { color: "#fff", duration: 0.5 }),
        onLeave: () => gsap.to(textEl, { color: "#000", duration: 0.5 }),
      },
    });
  }, []);

  return (
    <div
      ref={barRef}
      className="h-[40vh] md:h-[50vh] lg:h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
    >
      <h2
        ref={textRef}
        className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center px-4 mb-6"
      >
        Let’s create a measurable<br/>impact on your business.
      </h2>
      <button className="px-6 py-3 bg-white text-black rounded-[8px] text-2xl font-semibold hover:bg-black hover:text-white transition">
        Design a Quote
      </button>
    </div>
  );
}
