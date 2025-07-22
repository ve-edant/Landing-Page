import React from "react";
import ServicesCard from "../components/ServicesCard";
import { servicesData } from "../assets/services"

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
        
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
    </section>
  );
};

export default ServicesSection;
