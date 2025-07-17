import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGlobe, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Column 1: Logo + Social */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Leo9 Studio</h1>
          <div className="flex space-x-4 text-xl mb-4">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaGlobe />
            <FaXTwitter />
          </div>
          <p className="text-sm">© Leo9Studio.<br />All rights reserved 2023</p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Design</li>
            <li>Technology</li>
            <li>Neuromarketing</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Column 3: About */}
        <div>
          <h2 className="font-semibold text-lg mb-3">About</h2>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Team</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Work</li>
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