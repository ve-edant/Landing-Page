import React from 'react';

export const Career = () => {
  return (
    <div className="bg-white py-16 px-6 mx-8 md:mx-32 max-w-screen flex flex-col gap-16">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        <div>
          <h1 className="text-6xl font-bold my-8 text-black">
            Want To Join <br />
            The Team?
          </h1>
          <p className="text-4xl font-bold text-black">
            Be our next human <br />
            experience designer
          </p>
        </div>

        <div className="w-[400px] h-[50vh] bg-red-500 rounded-lg"></div>
      </div>

      {/* Openings Section */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold text-black mb-12">OPENINGS</h2>
         
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-gray-100 rounded-xl shadow-md p-8 text-center 
                          hover:shadow-xl hover:scale-105 transform 
                          transition duration-300 cursor-pointer">
            <h3 className="text-2xl font-semibold text-black mb-2">UX Designer</h3>
            <p className="text-gray-600">Experience: 2 years</p>
          </div>

         
          <div className="bg-gray-100 rounded-xl shadow-md p-8 text-center 
                          hover:shadow-xl hover:scale-105 transform 
                          transition duration-300 cursor-pointer">
            <h3 className="text-2xl font-semibold text-black mb-2">UI Designer</h3>
            <p className="text-gray-600">Experience: 2 years</p>
          </div>

         
          <div className="bg-gray-100 rounded-xl shadow-md p-8 text-center 
                          hover:shadow-xl hover:scale-105 transform 
                          transition duration-300 cursor-pointer">
            <h3 className="text-2xl font-semibold text-black mb-2">Front-end Developer</h3>
            <p className="text-gray-600">Experience: 2 years</p>
          
          </div>
        </div>
        <div className="text-center mt-24">
              <h4 className="text-4xl font-bold text-pink-600 mb-12">MORE ABOUT US</h4>
            </div>

      </div>
    </div>
  );
};


