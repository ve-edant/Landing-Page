import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Column 1: Logo + Social */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Daflitech Technologies</h1>
          <div className="flex space-x-4 text-xl mb-4">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaGlobe />
            <FaXTwitter />
          </div>
          <p className="text-sm">
            © daflitechtechnologies.
            <br />
            All rights reserved 2025
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-900 hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer"><Link to={"/services"}>Services</Link></h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              <Link to={"/services#Blockchain_Development"}>
                Blockchain Development
              </Link>
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              <Link to={"/services#AI_Development"}>
                AI Development Services
              </Link>
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              <Link to={"/services#AI_Development"}>Game Development</Link>
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              <Link to={"/services#AI_Development"}>
                Crypto Exchange Development
              </Link>
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              <Link to={"/services#AI_Development"}>Web3 Development</Link>
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              <Link to={"/services#AI_Development"}>
                Web Design & Development
              </Link>
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              <Link to={"/services#AI_Development"}>
                iOS & Android App Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: About */}
        <div>
          <h2 className="font-semibold text-lg mb-3">About</h2>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Clients</li>
            <li>Knowledge</li>
            <li>Reach Us</li>
          </ul>
        </div>

        {/* Column 5: Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Site Map</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
