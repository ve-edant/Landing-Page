import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownCard from "./DropdownCard";
import NewDropdownCard from "./NewDropDown";
// No GSAP import needed anymore!

const NewNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const showDropdown = (section) => setActiveDropdown(section);
  const hideDropdown = () => setActiveDropdown(null);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-black shadow-md">
      <div className="max-w-screen-xl mx-0 md:mx-10 lg:mx-32 flex flex-col px-4">
        {/* Top Nav Bar - Fixed Height */}
        <div className="h-16 flex justify-between items-center">
          <Link
            to="/"
            className="text-lg font-bold text-yellow-500 h-full w-full flex items-center cursor-pointer"
          >
            LOGO
          </Link>

          <nav className="hidden h-16 md:flex gap-10 text-md font-medium text-gray-800 items-center">
            <Link
              to="/work"
              className="relative h-full w-full flex items-center justify-center cursor-pointer hover:text-yellow-500"
            >
              Work
            </Link>

            <div
              className="relative h-full w-full flex items-center justify-center cursor-pointer hover:text-pink-700"
              onMouseEnter={() => showDropdown("services")}
              onMouseLeave={hideDropdown}
            >
              Services
            </div>

            <Link to="/clients" className="hover:text-yellow-500">
              Clients
            </Link>

            <div
              className="relative h-full w-full flex items-center justify-center cursor-pointer hover:text-yellow-500"
              onMouseEnter={() => showDropdown("about")}
              onMouseLeave={hideDropdown}
            >
              About
            </div>

            <Link to="/knowledge" className="hover:text-yellow-500">
              Knowledge
            </Link>

            <Link
              to="/contact"
              className="text-white bg-black hover:text-yellow-500 px-6 py-[10px] rounded-sm"
            >
              Contact
            </Link>
          </nav>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Animated Wrapper */}
        <div
          className={`
            overflow-hidden
            absolute top-16 left-0 right-0 // Position below the main navbar
            bg-white border-b border-black z-40
            transition-all duration-300 ease-in-out // Apply transitions
            ${activeDropdown ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          `}
          onMouseEnter={() => showDropdown(activeDropdown)}
          onMouseLeave={hideDropdown}
        >
          {/* Dropdown Inner Content */}
          <div className="w-[70vw] h-[90px] mx-auto py-6 px-4 flex flex-wrap justify-between bg-white rounded-xl shadow-lg">
  {activeDropdown === "services" && (
              <>
                <NewDropdownCard
                  to="#Blockchain_Development"
                  title="Blockchain Development"
                />
                <NewDropdownCard
                  to="#AI_Development"
                  title="AI Development Services"
                />
                <NewDropdownCard
                  to="#Game_Development"
                  title="Game Development"
                />
                <NewDropdownCard
                  to="#Crypto_Exchange"
                  title="Crypto Exchange Development"
                />
                <NewDropdownCard
                  to="#Web3_Development"
                  title="Web3 Development"
                />
                <NewDropdownCard
                  to="#Web_Design"
                  title="Web Design & Development"
                />
                <NewDropdownCard
                  to="#Mobile_App_Development"
                  title="iOS & Android App Development"
                />
              </>
            )}

            {activeDropdown === "about" && (
              <>
                <DropdownCard
                  to="/aboutus"
                  title="About Us."
                  description="We are super-efficient yet humble to serve you."
                  bgColor="bg-yellow-100"
                />
                <DropdownCard
                  to="/team"
                  title="Team."
                  description="We are proud of our experienced team."
                  bgColor="bg-red-100"
                />
                <DropdownCard
                  to="/career"
                  title="Careers."
                  description="Can you offer such experience?"
                  bgColor="bg-green-100"
                />
              </>
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <>
          {/* Overlay */}
          <div
            className={`fixed md:hidden inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          />
          {/* Sidebar Panel */}
          <div
            className={`
              fixed top-0 right-0 h-[100dvh] w-[80%] z-50 bg-white p-4 shadow-lg
              transform transition-transform duration-500 ease-out
              ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
            `}
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
                {/* Mobile Dropdown Content (Services) */}
                <div
                  className={`
                    pl-0 md:pl-4 mt-2 flex flex-col gap-2
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      mobileDropdown === "services"
                        ? "max-h-screen opacity-100 pt-2"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
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
              </div>

              <Link to="/clients" onClick={() => setIsSidebarOpen(false)}>
                Clients
              </Link>

              <div>
                <button
                  onClick={() =>
                    setMobileDropdown((prev) =>
                      prev === "about" ? null : "about"
                    )
                  }
                  className="w-full text-left hover:text-yellow-500"
                >
                  About
                </button>
                {/* Mobile Dropdown Content (About) */}
                <div
                  className={`
                    pl-0 md:pl-4 mt-2 flex flex-col gap-2
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      mobileDropdown === "about"
                        ? "max-h-screen opacity-100 pt-2"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
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
        </>
      </div>
    </header>
  );
};

export default NewNavbar;
