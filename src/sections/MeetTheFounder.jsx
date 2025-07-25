import { FaLinkedin } from "react-icons/fa";

const MeetTheFounder = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 border border-slate-300 rounded-xl p-6 shadow-sm">
        {/* Left Text */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold text-black leading-tight mb-4">
            Meet <br /> The <br /> Founder
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-start">

          {/* Name and Description */}
          <h3 className="text-xl font-bold text-black mb-1">Prathamesh Patane</h3>
          <p className="text-gray-700 mb-2 text-sm">
            Founder of Daflitech Technologies.
            <br />
            Blockchain expert.
          </p>

          {/* LinkedIn Icon */}
          <a
            href="#"
            className="text-blue-600 mb-4 hover:text-blue-800"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Founder Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/founder-image.png"
            alt="prathamesh_pathane"
            className="w-48 h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
