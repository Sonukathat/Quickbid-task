"use client";

import React from "react";
import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-extrabold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Ai
            </span>
            <span className="text-2xl font-bold text-white">GLOBE</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            Tincidunt id aliquet risus feugiat in ante metus dictum at. 
            Orci ac auctor augue mauris augue. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor.
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-3">
            <img
              src="/play-store.png" // replace with your path
              alt="Google Play"
              className="h-12 cursor-pointer border border-gray-600 rounded-md"
            />
            <img
              src="/app-store.png" // replace with your path
              alt="App Store"
              className="h-12 cursor-pointer border border-gray-600 rounded-md"
            />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">
            <strong>Address:</strong> No: 58 A, East Madison Street,
            <br /> Baltimore, MD, USA 4508
          </p>
          <p className="text-sm mb-1">
            <strong>Mail:</strong> info@example1.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> 00 – 123 – 456789
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <p className="text-sm mb-4">
            Arcu cursus euismod quis viverra nibh cras pulvinar. 
            Ac turpis egestas maecenas pharetra convallis posuere.
          </p>

          {/* Email Input */}
          <div className="relative mb-3">
            <input
              type="email"
              placeholder="Enter mail ID"
              className="w-full py-3 pl-4 pr-12 bg-gray-900 text-gray-300 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-indigo-800 hover:bg-indigo-700 text-white p-3 rounded-md">
              <FiSend size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-5">
            By subscribing, you accept privacy policy
          </p>

          {/* Payment Icons */}
          <div className="flex flex-wrap gap-2 items-center">
            <img src="/visa.png" alt="Visa" className="h-5" />
            <img src="/mastercard.png" alt="Mastercard" className="h-5" />
            <img src="/paypal.png" alt="PayPal" className="h-5" />
            <img src="/skrill.png" alt="Skrill" className="h-5" />
            <img src="/payoneer.png" alt="Payoneer" className="h-5" />
            <img src="/amazonpay.png" alt="Amazon Pay" className="h-5" />
            <img src="/gpay.png" alt="Google Pay" className="h-5" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2023 Wedesigntech. All rights reserved</p>

        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <span className="text-gray-400">Follow us:</span>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-700 transition">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
