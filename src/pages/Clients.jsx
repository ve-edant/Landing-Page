import React from 'react'

const Clients = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-pink-600 font-bold text-lg mb-2">Clients</h2>

      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-6 flex justify-center gap-2 items-center">
        <span className="hover:underline cursor-pointer">Home</span>
        <span>•</span>
        <span className="text-gray-700">Clients</span>
      </nav>

      {/* Tagline */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-[#0a0a0a] max-w-3xl mx-auto leading-snug">
        We make happy clients by <br />
        interconnecting technology <br />
        with business & art.
      </h1>

      {/* Big Grid Box */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-16">
        <div className="bg-gray-100 p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto">
          <img
            src="/clients-illustration.jpeg" // Replace with your actual image path
            alt="Client Illustration"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Clients Logo Grid */}
      <h3 className='text-pink-600 font-semibold text-xl mt-20 mb-6'>
        Client
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-16 max-w-6xl mx-auto">
        {[
          'bmw.png', 'tata.png', 'godrej.png', 'tikona.png',
          'travelxp.png', 'huggies.png', 'lakme.png', 'icici.png',
  
        ].map((logo, index) => (
          <img
            key={index}
            src={`/logos/${logo}`} // Make sure logos are in the /public/logos folder
            alt={logo.split('.')[0]}
            className="w-full h-16 object-contain grayscale hover:grayscale-0 transition duration-300"

          />
      

        )
      
        )}
        <h4 className='text-pink-600 font-semibold text-xl mt-20 mb-6 flex justify-center'> Expertise</h4>
        <p className='text-2xl md:text-4xl font'></p>
      </div>
    </section>
  )
}

export default Clients