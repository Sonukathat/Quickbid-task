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
                  <div className="absolute left-0 -translate-x-1/2 top-full mt-4 w-[1400px] max-w-7xl bg-[#1E1E1E] border-t-4 border-indigo-700 hidden group-hover:flex justify-between px-10 py-8 rounded-lg shadow-xl text-white z-50">
                    {/* Left Video Section */}
                    <div className="w-1/3 pr-6">
                      <h3 className="text-3xl font-semibold mb-3">
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
                        { icon: <FaInfoCircle />, title: "About Us", desc: "As industry leaders, we leverage cutting-edge technology to drive meaningful results" },
                        { icon: <FaUsers />, title: "Our Team", desc: "Discover the faces behind our success and the unique strengths they bring to the table." },
                        { icon: <FaDollarSign />, title: "Pricing Plan", desc: "Explore our flexible pricing plans designed to suit your budget and business needs." },
                        { icon: <FaRobot />, title: "AI Globe Features", desc: "Dive into our AI Features page to explore cutting-edge technologies driving innovation." },
                        { icon: <FaExclamationTriangle />, title: "404 Error", desc: "Lost? Don't worry, you've stumbled upon our playful 404 page. Let's navigate together." },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="text-pink-400 text-2xl mt-1">{item.icon}</div>
                          <div>
                            <p className="font-semibold text-2xl">{item.title}</p>
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
                        { icon: <FaList />, title: "Product Listing", desc: "Access our comprehensive product listing page to find exactly what you're looking for quickly and efficiently." },
                        { icon: <FaBoxOpen />, title: "Product Single", desc: "Experience our products up close with our interactive and informative single product page layout." },
                        { icon: <FaShoppingCart />, title: "Cart Page", desc: "Review and manage your selected items conveniently on our streamlined and user-friendly cart page." },
                        { icon: <FaCreditCard />, title: "Checkout Page", desc: "Safely and securely complete your transaction on our encrypted and reliable checkout page platform." },
                        { icon: <FaHeart />, title: "Wishlist Page", desc: "Keep track of items you love with our convenient and customizable wishlist page, designed for effortless browsing." },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="text-pink-400 text-2xl mt-1">{item.icon}</div>
                          <div>
                            <p className="font-semibold text-2xl">{item.title}</p>
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
    </header>
  );
}
