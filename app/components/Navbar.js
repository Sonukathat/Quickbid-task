"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiMenu,
  FiX,
  FiChevronRight,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiInstagram,
} from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { TbArrowUpRight } from "react-icons/tb";
import { PiShoppingCartBold } from "react-icons/pi";
import {
  FaInfoCircle,
  FaUsers,
  FaDollarSign,
  FaRobot,
  FaExclamationTriangle,
  FaList,
  FaBoxOpen,
  FaShoppingCart,
  FaCreditCard,
  FaHeart,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const navLinks = [
    { name: "Home" },
    { name: "Services" },
    { name: "Blog" },
    { name: "Pages" },
    { name: "Contact Us" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-30">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-36 h-10">
              <Image
                src="/ai-logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Center Nav Links */}
          <div className="hidden xl:flex xl:space-x-6 relative">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 px-2 py-1 rounded-md text-lg">
                  {link.name.toUpperCase()}
                  <IoMdArrowDropdown className="text-lg" />
                </button>

                {/* === HOME DROPDOWN === */}
                {link.name === "Home" && (
                  <div className="absolute left-86 -translate-x-1/2 top-full mt-4 w-screen bg-[#f4f4f6] border-t-4 border-indigo-700 hidden group-hover:flex justify-center z-40">
                    <div className="max-w-[1600px] w-full px-10 py-10">
                      <div className="grid grid-cols-6 gap-6 justify-items-center">
                        {[
                          { title: "IMAGE GENERATOR", img: "/aiglobe-RTL-demo-home1.jpg" },
                          { title: "CHAT BOT", img: "/aI-TECHNOLOGY.jpg" },
                          { title: "AI TECHNOLOGY", img: "/chatbot.jpg" },
                          { title: "CONTENT GENERATOR", img: "/CONTENT-Generator.jpg" },
                          { title: "BUSINESS - AI", img: "/Buisness-AI.jpg" },
                          { title: "RTL - DEMOS", img: "/aiglobe-RTL-demo-home1.jpg" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="w-56 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                          >
                            <div className="relative w-full h-44 overflow-hidden">
                              <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="bg-[#4B29CF] text-white text-center py-3 font-semibold text-sm uppercase tracking-wide">
                              {item.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* === SERVICES DROPDOWN === */}
                {link.name === "Services" && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg hidden group-hover:block z-50">
                    <ul className="flex flex-col text-gray-800">
                      {["Service Listing", "Service Detail"].map((item, i) => (
                        <li
                          key={i}
                          className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-sm font-semibold tracking-wide"
                        >
                          {item.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* === BLOG DROPDOWN === */}
                {link.name === "Blog" && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg hidden group-hover:block z-50">
                    <ul className="flex flex-col text-gray-800">
                      {["Blog Listing", "Blog Single"].map((item, i) => (
                        <li
                          key={i}
                          className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-sm font-semibold tracking-wide"
                        >
                          {item.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* === PAGES DROPDOWN (MEGA MENU) === */}
                {link.name === "Pages" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1000px] bg-[#1E1E1E] border-t-4 border-indigo-700 hidden group-hover:flex justify-between px-10 py-8 rounded-lg shadow-xl text-white z-50">
                    {/* Left Video Section */}
                    <div className="w-1/3 pr-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Watch a demo walk-through
                      </h3>
                      <p className="text-sm text-gray-300 mb-4">
                        Enter the AI realm: Experience innovation, expert
                        insights, and transformative interfaces. Discover the
                        future now!
                      </p>
                      <div className="w-full h-48 bg-black rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/7Pq-S557XQU"
                          title="AI Demo Video"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Center: Inner Pages */}
                    <div className="w-1/3 space-y-4">
                      <h4 className="text-lg font-semibold mb-3">
                        AI Globe Inner Pages
                      </h4>
                      {[
                        { icon: <FaInfoCircle />, title: "About Us", desc: "We leverage cutting-edge AI to drive results." },
                        { icon: <FaUsers />, title: "Our Team", desc: "Meet the creative and expert team behind AI Globe." },
                        { icon: <FaDollarSign />, title: "Pricing Plan", desc: "Flexible plans tailored for every business." },
                        { icon: <FaRobot />, title: "AI Globe Features", desc: "Explore innovative AI-driven functionalities." },
                        { icon: <FaExclamationTriangle />, title: "404 Error", desc: "Oops! Lost your way? We’ll guide you back." },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="text-pink-400 text-xl mt-1">{item.icon}</div>
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Shop Pages */}
                    <div className="w-1/3 space-y-4">
                      <h4 className="text-lg font-semibold mb-3">
                        AI Globe Shop Pages
                      </h4>
                      {[
                        { icon: <FaList />, title: "Product Listing", desc: "Browse and discover all our products efficiently." },
                        { icon: <FaBoxOpen />, title: "Product Single", desc: "Dive deep into product details and insights." },
                        { icon: <FaShoppingCart />, title: "Cart Page", desc: "Manage your selected products easily." },
                        { icon: <FaCreditCard />, title: "Checkout Page", desc: "Securely complete your transactions online." },
                        { icon: <FaHeart />, title: "Wishlist Page", desc: "Save your favorite products for later." },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="text-pink-400 text-xl mt-1">{item.icon}</div>
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* === CONTACT US DROPDOWN === */}
                {link.name === "Contact Us" && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg hidden group-hover:block z-50">
                    <ul className="flex flex-col text-gray-800">
                      {[
                        "Enquiry Now",
                        "Login or Register",
                        "Privacy Policy",
                        "FAQ",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-sm font-semibold tracking-wide"
                        >
                          {item.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <PiShoppingCartBold className="text-3xl text-gray-800" />
            </button>

            <button className="hidden sm:inline-flex items-center px-6 py-2 border border-transparent text-md rounded-full shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 lg:inline-flex">
              Get Started
            </button>

            {/* Hamburger button */}
            <button
              onClick={() =>
                window.innerWidth < 1024
                  ? setMenuOpen(true)
                  : setInfoOpen(true)
              }
              className="text-2xl text-gray-800"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {(menuOpen || infoOpen) && (
        <div
          onClick={() => {
            setMenuOpen(false);
            setInfoOpen(false);
          }}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* === MOBILE MENU === */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5 border-b border-gray-300">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 hover:text-indigo-700"
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col divide-y divide-gray-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-gray-50 hover:text-indigo-700 w-full text-left"
            >
              {link.name}
              <FiChevronRight />
            </button>
          ))}
        </div>
      </div>

      {/* === DESKTOP INFO DRAWER === */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-[#1e1e1e] text-white z-50 shadow-xl transform transition-transform duration-300 ${
          infoOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <span className="text-2xl font-bold text-white">
            <span className="text-indigo-400">AI</span> GLOBE
          </span>
          <button
            onClick={() => setInfoOpen(false)}
            className="text-xl bg-indigo-600 p-1.5 rounded-full hover:bg-indigo-500"
          >
            <FiX />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto h-full">
          <p className="text-gray-300 text-sm leading-relaxed">
            In hac habitasse platea dictumst. Maecenas ut enim sed massa
            feugiat placerat eget quis metus.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-xl text-indigo-400 mt-1" />
              <p>76 Mill Road, Penfield, NY 26.</p>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlinePhone className="text-xl text-indigo-400 mt-1" />
              <p>+32 894 659 12</p>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineMail className="text-xl text-indigo-400 mt-1" />
              <p>support@example.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Get News & Updates</h3>
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 text-black focus:outline-none"
              />
              <button className="bg-indigo-600 p-3 text-white">
                <TbArrowUpRight className="text-xl" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            {[FiFacebook, FiTwitter, FiYoutube, FiInstagram].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
  