import { useState } from "react";
import { Link } from "react-router-dom";
import NewDropdownCard from "./NewDropDown";
import Logo from "../assets/images/Logo.png";
// No GSAP import needed anymore!

const NewNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-black shadow-md">
      <div className="max-w-screen-xl mx-0 md:mx-10 lg:mx-32 flex flex-col px-4">
        {/* Top Nav Bar - Fixed Height */}
        <div className="h-full flex justify-between items-center">
          <Link
            to="/"
            className="h-full w-full flex items-center cursor-pointer"
          >
            <img
              src={Logo}
              alt="Dafli Tech"
              className="object-contain h-17" // ensures proper scaling
            />
          </Link>

          <nav className="hidden h-16 md:flex gap-10 text-md font-medium text-gray-800 items-center">
            <Link
              className="relative h-full w-full flex items-center justify-center cursor-pointer hover:text-pink-700"
              to="/services"
            >
              Services
            </Link>

            <Link to="/clients" className="hover:text-yellow-500">
              Clients
            </Link>

            <Link
              to="/aboutus"
              className="relative h-full w-full flex items-center justify-center cursor-pointer hover:text-yellow-500"
            >
              About
            </Link>

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
              <Link
                to="/services"
                onClick={() => setIsSidebarOpen(false)}
                className="w-full text-left hover:text-yellow-500"
              >
                Services
              </Link>

              <Link to="/clients" onClick={() => setIsSidebarOpen(false)}>
                Clients
              </Link>

              <Link to="/aboutus" onClick={() => setIsSidebarOpen(false)}>
                About
              </Link>

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
