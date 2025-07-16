import React from "react";

const MobileSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  mobileDropdown,
  setMobileDropdown,
}) => {
  return (
    <div>
      <div
        className={`fixed transition-all duration-300 ${
          isSidebarOpen ? "bg-black/50" : "bg-black/0"
        } bg-black/50`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[80%] z-50 bg-white p-4 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 text-lg font-medium text-gray-800">
          <Link to="/work" onClick={() => setIsSidebarOpen(false)}>
            Work
          </Link>

          <div>
            <button
              onClick={() =>
                setMobileDropdown((prev) =>
                  prev === "services" ? null : "services"
                )
              }
              className="w-full text-left hover:text-yellow-500"
            >
              Services
            </button>
            {mobileDropdown === "services" && (
              <div className="pl-0 md:pl-4 mt-2 flex flex-col gap-2 transition-all duration-300 ease-in-out transform scale-100 opacity-100">
                <DropdownCard
                  to="/design"
                  setIsSidebarOpen={setIsSidebarOpen}
                  title="Design."
                  description="Handcraft the user experience."
                  bgColor="bg-yellow-100"
                />
                <DropdownCard
                  to="/technology"
                  setIsSidebarOpen={setIsSidebarOpen}
                  title="Technology."
                  description="Leverage the power of code."
                  bgColor="bg-red-100"
                />
                <DropdownCard
                  to="/marketing"
                  setIsSidebarOpen={setIsSidebarOpen}
                  title="Marketing."
                  description="Creative strategies for brands."
                  bgColor="bg-green-100"
                />
              </div>
            )}
          </div>

          <Link to="/clients" onClick={() => setIsSidebarOpen(false)}>
            Clients
          </Link>

          <div>
            <button
              onClick={() =>
                setMobileDropdown((prev) => (prev === "about" ? null : "about"))
              }
              className="w-full text-left hover:text-yellow-500"
            >
              About
            </button>
            {mobileDropdown === "about" && (
              <div className="pl-0 md:pl-4 mt-2 flex flex-col gap-2 transition-all duration-300 ease-in-out transform scale-100 opacity-100">
                <DropdownCard
                  to="/aboutus"
                  setIsSidebarOpen={setIsSidebarOpen}
                  title="About Us."
                  description="We are super-efficient yet humble to serve you."
                  bgColor="bg-yellow-100"
                />
                <DropdownCard
                  to="/team"
                  setIsSidebarOpen={setIsSidebarOpen}
                  title="Team."
                  description="We are proud of our experienced team."
                  bgColor="bg-red-100"
                />
                <DropdownCard
                  to="/career"
                  setIsSidebarOpen={setIsSidebarOpen}
                  title="Careers."
                  description="Can you offer such experience?"
                  bgColor="bg-green-100"
                />
              </div>
            )}
          </div>

          <Link to="/knowledge" onClick={() => setIsSidebarOpen(false)}>
            Knowledge
          </Link>

          <Link
            to="/contact"
            className="text-white bg-black px-6 py-[10px] rounded-sm"
            onClick={() => setIsSidebarOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;
