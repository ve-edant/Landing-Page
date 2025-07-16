import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DropdownCard from "./DropdownCard";
import gsap from "gsap";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownWrapperRef = useRef(null);
  const dropdownInnerRef = useRef(null);

  const showDropdown = (section) => setActiveDropdown(section);
  const hideDropdown = () => setActiveDropdown(null);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const wrapper = dropdownWrapperRef.current;
    const inner = dropdownInnerRef.current;

    if (activeDropdown && wrapper && inner) {
      wrapper.style.display = "block";

      gsap.fromTo(
        wrapper,
        { height: 0 },
        {
          height: inner.offsetHeight,
          duration: 0.3,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        inner,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else if (!activeDropdown && wrapper) {
      gsap.to(wrapper, {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          wrapper.style.display = "none";
        },
      });
    }
  }, [activeDropdown]);

  const sidebarRef = useRef(null);

  useEffect(() => {
    if (isSidebarOpen) {
      gsap.set(sidebarRef.current, { x: "100%" });

      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 2,
        ease: "sine.in",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 2,
        ease: "sine.in",
      });
    }
  }, [isSidebarOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-black shadow-md">
      <div className="max-w-screen-xl mx-auto md:mx-32 flex flex-col px-4">
        {/* Top Nav Bar - Fixed Height */}
        <div className="h-16 flex justify-between items-center">
          <Link
            to="/"
            className="text-lg font-bold text-yellow-500 h-full w-full flex items-center justify-center cursor-pointer"
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

        {/* Dropdown Animated Wrapper */}
        <div
          ref={dropdownWrapperRef}
          className="overflow-hidden hidden"
          style={{ height: 0 }}
          onMouseLeave={hideDropdown}
        >
          <div
            ref={dropdownInnerRef}
            className="w-full h-[120px] pb-4 flex gap-4"
          >
            {activeDropdown === "services" && (
              <>
                <DropdownCard
                  to="/design"
                  title="Design."
                  description="Handcraft the user experience."
                  bgColor="bg-yellow-100"
                />
                <DropdownCard
                  to="/technology"
                  title="Technology."
                  description="Leverage the power of code."
                  bgColor="bg-red-100"
                />
                <DropdownCard
                  to="/marketing"
                  title="Marketing."
                  description="Creative strategies for brands."
                  bgColor="bg-green-100"
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
      {isSidebarOpen && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-40`}
            onClick={() => setIsSidebarOpen(false)}
          />
          <div
          ref={sidebarRef}
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
        </>
      )}
      </div>
    </header>
  );
};

export default Navbar;
