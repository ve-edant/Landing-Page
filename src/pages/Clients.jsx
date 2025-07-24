import React from "react";
import { Link } from "react-router-dom";
import { logos } from "../assets/Logos";
import { icons } from "../assets/Icons";

const domainItems = [
  { icon: icons.carIcon, title: "Automobiles" },
  { icon: icons.capitalIcon, title: "Capital" },
  { icon: icons.realjstIcon, title: "Consulting" },
  { icon: icons.saasIcon, title: "E-Commerce" },
  { icon: icons.educIcon, title: "Education" },
  { icon: icons.hardwareIcon, title: "Energy" },
  { icon: icons.eventIcon, title: "Events" },
  { icon: icons.foodIcon, title: "Food" },
  { icon: icons.hardwareIcon, title: "Hardware" },
  { icon: icons.healthcareIcon, title: "Healthcare" },
  { icon: icons.hostpilIcon, title: "Hospitality" },
  { icon: icons.industrielcon, title: "Industries" },
  { icon: icons.moviesIcon, title: "Movies" },
  { icon: icons.publIcon, title: "Publishing" },
  { icon: icons.realjstIcon, title: "Real-Estate" },
  { icon: icons.saasIcon, title: "SAAS" },
  { icon: icons.shipIcon, title: "Ship" },
];

const clientLogos = [
  logos.bmwLogo,
  logos.tataLogo,
  logos.goodrejLogo,
  logos.huggiesLogo,
  logos.kalapaLogo,
  logos.kmelogo,
  logos.mahndraLogo,
  logos.pAndGLogo,
  logos.unileverLogo,
  logos.sonyLogo,
  logos.starLogo,
  logos.colgateLogo,
  logos.yesLogo,
  logos.capitalLog,
];

const Clients = () => {
  return (
    <section className="w-full min-h-[100vh] py-16 px-4 md:px-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-pink-600 font-bold text-lg mb-2">Clients</h2>

      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-6 flex justify-center gap-2 items-center">
        <Link to="/" className="hover:underline cursor-pointer">
          Home
        </Link>
        <span>•</span>
        <span className="text-gray-700">Clients</span>
      </nav>

      {/* Tagline */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-[#0a0a0a] max-w-3xl mx-auto leading-snug">
        We make happy clients by <br />
        interconnecting technology <br />
        with business & art.
      </h1>

      {/* Big Illustration Image */}
      <div className="grid grid-cols-1 gap-6 mt-16">
        <div className="bg-gray-100 p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto">
          <img
            src="/clients-illustration.jpeg"
            alt="Client Illustration"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Client Logos Section */}
      <h3 className="text-pink-600 font-semibold text-xl mt-20 mb-6">Clients</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="w-full h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      {/* Expertise Section */}
      <div className="text-center mt-20 mb-10 px-4">
        <h4 className="text-pink-600 font-bold text-lg mb-3">Expertise</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a]">
          Domains we have worked for.
        </h2>
      </div>

      {/* Domain Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-6xl mx-auto px-4">
        {domainItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-medium text-gray-700">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
