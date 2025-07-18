import React from "react";
import HoverBullet from "../components/HoverBullet";

const TechnologyPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Section One */}
      <section className="relative bg-gradient-to-r from-indigo-50 via-white to-indigo-100 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h6 className="text-indigo-600 text-sm uppercase font-semibold tracking-wider mb-3">
              Technology
            </h6>

            <nav className="flex items-center text-sm text-gray-500 mb-6 space-x-2">
              <a href="/" className="hover:text-indigo-500 transition-colors">
                Home
              </a>
              <span>/</span>
              <a
                href="/technology"
                className="hover:text-indigo-500 transition-colors"
              >
                Service
              </a>
              <span>/</span>
              <span className="text-gray-700 font-medium">Technology</span>
            </nav>


            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Decoding the power of
              <br />
              coding
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We design to empower human experiences by combining innovative
              technology with user-centered design.
            </p>

            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>

          {/* Right Content - Placeholder for Animation */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="w-64 h-64 bg-indigo-100 rounded-2xl shadow-inner flex items-center justify-center text-gray-600 text-lg">
              Main Box
            </div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-200 rounded-xl shadow-inner flex items-center justify-center text-gray-500">
              Box
            </div>
          </div>
        </div>
      </section>

      {/* What do we serve */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-indigo-600 text-lg font-semibold mb-4">
            What do we serve?
          </h2>
          <h4 className="text-xl text-gray-700 mb-6">
            Comprehensive technology services that integrate{" "}
            <a href="../design/" className="text-indigo-500 underline">
              digital craftsmanship
            </a>{" "}
            and{" "}
            <a href="../marketing/" className="text-indigo-500 underline">
              business goals
            </a>
            .
          </h4>

          <h6 className="text-lg font-semibold mb-2">Web.</h6>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {[
              "Web Design",
              "Development",
              "Front-end",
              "Back-end",
              "Javascript",
              "Css 3",
              "Animations",
              "CRM",
              "Angular",
              "React",
              "ERP",
              "Wordpress",
              "PHP",
              "Laravel",
              "E-commerce",
            ].map((item, i) => (
              <HoverBullet title={item} key={i} />
            ))}
          </ul>

          <h6 className="text-lg font-semibold mb-2">Mobile Apps.</h6>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["IOS", "Native", "Hybrid", "Ionic", "Android"].map((item, i) => (
              <li
                key={i}
                className="text-gray-700 hover:text-indigo-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-indigo-600 text-lg font-semibold mb-4">
            HOW WE DO IT?
          </h2>
          <h4 className="text-xl text-gray-700 mb-8">
            Going the extra mile with an extra bit of effort at every step.
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Understand Objectives",
              "Choose Right Technology",
              "Documented Coding",
              "Careful Testing",
              "Successful Deployment",
              "AMC Support",
            ].map((title, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="bg-gray-300 h-40 w-full mb-4 flex items-center justify-center rounded">
                  Box
                </div>
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-600">
                  Placeholder description for {title}.
                </p>
              </div>
            ))}
          </div>
          <p className="text-indigo-600 mt-6">
            To know more read{" "}
            <a
              href="https://www.leo9studio.com/blog"
              target="_blank"
              className="underline"
            >
              our blog
            </a>
          </p>
        </div>
      </section>

      {/* Tools we use */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-indigo-600 text-lg font-semibold mb-8">
            Tools we use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-300 h-24 w-full rounded flex items-center justify-center"
              >
                Box
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <a
            href="../our-work/payzli.html"
            className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h6 className="text-indigo-600 text-sm mb-2">Tech.</h6>
            <div className="bg-gray-300 h-40 w-full rounded mb-4 flex items-center justify-center">
              Box
            </div>
            <h4 className="text-lg font-semibold mb-2">Payzli</h4>
            <p className="text-gray-600 mb-2">
              Increased active users by a staggering 73%
            </p>
            <ul className="flex gap-2 text-sm text-gray-500">
              <li>UX-UI</li>
              <li>Web</li>
            </ul>
          </a>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-red-500 text-lg font-semibold mb-8">
            Other services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="../design/"
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex items-center justify-between"
            >
              <div>
                <h6 className="text-lg font-semibold mb-2">Design.</h6>
                <p className="text-gray-600">Handcraft the user experience.</p>
              </div>
              <span className="text-xl">→</span>
            </a>
            <a
              href="../marketing/"
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex items-center justify-between"
            >
              <div>
                <h6 className="text-lg font-semibold mb-2">Marketing.</h6>
                <p className="text-gray-600">Creative strategies for brands.</p>
              </div>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
