import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="rounded-lg p-6 flex flex-col items-center border border-white">
            <h3 className="text-blue-500 font-semibold mb-2">
              CONNECT WITH US
            </h3>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" />
              <span>+91 9567843340</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>info@deepnetsoft.com</span>
            </div>
          </div>

          <div className="rounded-lg p-6 flex flex-col items-center border border-white">
            <img src="images/logo.jpeg" alt="Logo" className="w-10 h-10 mb-4" />
            <h3 className="text-blue-500 font-semibold text-xl mb-4">
              <span className="text-blue-500">DEEP</span>{" "}
              <span className="text-white">NET</span>{" "}
              <span className="text-gray-400">SOFT</span>
            </h3>
            <div className="flex gap-4">
              <FaFacebook className="text-white cursor-pointer hover:text-blue-500 text-lg" />
              <FaTwitter className="text-white cursor-pointer hover:text-blue-500 text-lg" />
              <FaLinkedin className="text-white cursor-pointer hover:text-blue-500 text-lg" />
              <FaYoutube className="text-white cursor-pointer hover:text-red-500 text-lg" />
              <FaInstagram className="text-white cursor-pointer hover:text-pink-500 text-lg" />
            </div>
          </div>

          <div className="rounded-lg p-6 flex flex-col items-center border border-white">
            <h3 className="text-blue-500 font-semibold mb-2">FIND US</h3>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span>First floor, Geo Infopark, Infopark EXPY, Kakkanad</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-10">
          <p className="text-sm sm:text-base mb-2 sm:mb-0">
            © 2024 Deepnetsoft Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm sm:text-base">
            <a href="/terms" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
