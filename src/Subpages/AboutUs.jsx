import React from 'react';
import LeftImage from '../assets/left-desk.png.jpg';    // replace with your actual image name
import RightImage from '../assets/right-desk.png.jpg';

function AboutUs() {
  return (
    <div className="relative bg-white py-16 overflow-hidden">
      {/* Background Images */}
      <img
        height={500} width={300}
        src={RightImage}
        alt="Right Design"
        className="absolute bottom-0 right-0 w-32 sm:w-48 lg:w-64 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-gray-800">
        {/* First Heading */}
        <h2 className="text-center text-pink-600 font-semibold text-lg mb-2">About Us</h2>

        {/* Bold Statement */}
        <p className="text-center text-3xl sm:text-4xl font-bold leading-snug text-black mb-12">
          We, at <span className="text-black">Daflitech</span>, apply neuromarketing <br className="hidden sm:block" />
          and behavioral science to design, digitize <br className="hidden sm:block" />
          and grow your business.
        </p>

        {/* Second Heading */}
        <h2 className="text-center text-pink-600 font-semibold text-lg mb-2">About Us</h2>

        {/* Paragraphs */}
        <div className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            At the intersection of art, technology and business, we create design
            solutions geared toward business success.
          </p>

          <p className="mb-6">
            Since 2012, we have been global leaders in design and technology.
            Our services range from experience designing, identity development, product strategy, branding, user experience design,
            user interface design, technology development to digital marketing and SEO.
          </p>

          <a href="#" className="text-pink-500 font-semibold underline hover:text-pink-700 transition">More</a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;