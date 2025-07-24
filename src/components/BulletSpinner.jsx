import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BulletSpinner({ circleColor }) {
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.to(borderRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%"
    });
  }, []);

  return (
    <div className="relative h-[50px] w-[50px] flex justify-center items-center">
      {/* Rotating dashed border */}
      <div
        ref={borderRef}
        className="absolute inset-0 rounded-full border-[1px] border-dashed border-black"
      ></div>

      {/* Inner circle */}
      <div className={`h-[30px] w-[30px] rounded-full ${circleColor}`}></div>
    </div>
  );
}
