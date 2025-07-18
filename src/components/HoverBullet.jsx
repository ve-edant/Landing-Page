import React from "react";

const HoverBullet = ({ title }) => {
  return (
    <div className="group inline-block cursor-pointer w-fit">
      <span className="text-gray-800 font-medium">{title}</span>
      <div className="relative w-full h-0.5 mt-1 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#4f46e5_1px,_transparent_1px)] bg-[length:10px_100%] transition-transform duration-150 group-hover:animate-dots"></div>
      </div>
    </div>
  );
};

export default HoverBullet;
