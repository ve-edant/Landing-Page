import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownCard from "./DropdownCard";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const showDropdown = (section) => setActiveDropdown(section);
  const hideDropdown = () => setActiveDropdown(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isExpanded = activeDropdown !== null;

  return (
    <header
      className={`w-full fixed top-0 left-0 bg-white z-50 border-b border-black shadow-md transition-all duration-300 ${
        isExpanded ? "min-h-[180px]" : "h-16"
      }`}
      onMouseLeave={hideDropdown}
    >
      <div className="max-w-screen-xl mx-auto md:mx-32 h-full flex flex-col px-4 py-2">
        {/* Top Row: Logo + Nav */}
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg font-bold text-yellow-500">
            LOGO
          </Link>

          <nav className="hidden md:flex gap-10 text-md font-medium text-gray-800 items-center relative">
            <Link to="/work" className="hover:text-yellow-500">
              Work
            </Link>

            <div
              className="relative"
              onMouseEnter={() => showDropdown("services")}
            >
              <span className="cursor-pointer hover:text-yellow-500">
                Services
              </span>
            </div>

            <Link to="/clients" className="hover:text-yellow-500">
              Clients
            </Link>

            <div
              className="relative"
              onMouseEnter={() => showDropdown("about")}
            >
              <span className="cursor-pointer hover:text-yellow-500">
                About
              </span>
            </div>

            <Link to="/knowledge" className="hover:text-yellow-500">
              Knowledge
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-yellow-500 px-6 py-[10px] bg-black rounded-sm"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Services Dropdown */}
        {activeDropdown === "services" && (
          <div className="w-full mt-2 pb-2 transition-all duration-300">
            <div className="flex w-full gap-4">
              <DropdownCard
                to="/services/ui-ux"
                title="Design."
                description={`Handcraft the\nuser experience.`}
                bgColor="bg-yellow-100"
              />
              <DropdownCard
                to="/services/web"
                title="Technology."
                description={`Leverage the\npower of code.`}
                bgColor="bg-red-100"
              />
              <DropdownCard
                to="/services/mobile"
                title="Marketing."
                description={`Creative strategies\nfor brands.`}
                bgColor="bg-green-100"
              />
            </div>
          </div>
        )}

        {/* About Dropdown */}
        {activeDropdown === "about" && (
          <div className="w-full mt-2 pb-2 transition-all duration-300">
            <div className="flex w-full gap-4">
              <DropdownCard
                to="/about/company"
                title="About Us."
                description={`We are super-efficient\nyet humble to serve you.`}
                bgColor="bg-yellow-100"
              />
              <DropdownCard
                to="/about/team"
                title="Team."
                description={`We are proud of our\nexperienced and accomplished team.`}
                bgColor="bg-red-100"
              />
              <DropdownCard
                to="/about/careers"
                title="Careers."
                description={`Can you offer\nsuch experience?`}
                bgColor="bg-green-100"
              />
            </div>
          </div>
        )}

        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div
              className="absolute top-0 right-0 h-full w-3/4 bg-white p-6 shadow-lg flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                className="self-end mb-4"
                onClick={() => setIsSidebarOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Links */}
              <Link
                to="/work"
                className="hover:text-yellow-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/services"
                className="hover:text-yellow-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/clients"
                className="hover:text-yellow-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                Clients
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
              <Link
                to="/knowledge"
                className="hover:text-yellow-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                Knowledge
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-500 px-6 py-[10px] bg-black rounded-sm"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
