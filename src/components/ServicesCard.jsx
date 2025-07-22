import React from "react";

const ServicesCard = ({ title, description, subpoints = [], imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full h-[80vh] max-w-5xl mx-auto">
      {/* Left side: Image */}
      <div className="md:w-1/2 h-64 md:h-auto p-10">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover bg-black"
        />
      </div>
      {/* Right side: Text */}
      <div className="flex flex-col justify-center p-6 md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="space-y-2">
          {subpoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2"></span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
