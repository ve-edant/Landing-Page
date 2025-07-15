import React from "react";

const ClientSection = () => {
  const clients = [
    "Netflix",
    "Google",
    "Adobe",
    "Spotify",
    "Airbnb",
    "Amazon",
  ];

  return (
    <section className="w-full pt-0 pb-6 bg-white text-black">
      <div className="max-w-screen-xl mx-auto md:mx-42 px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-center text-lg font-medium border border-gray-200 p-4 rounded"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
