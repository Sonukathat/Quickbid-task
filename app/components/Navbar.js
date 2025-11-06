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
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TbArrowUpRight } from "react-icons/tb";
import { PiShoppingCartBold } from "react-icons/pi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "BLOG", href: "/blog" },
    { name: "PAGES", href: "/pages" },    
    { name: "CONTACT US", href: "/contactus" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <div className="w-35 h-30 relative">
                <Image
                  src="/ai-logo.svg"
                  alt="Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          {/* Center: Nav Links (Desktop Only) */}
          <div className="hidden md:flex md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 px-2 py-1 rounded-md text-lg"
              >
                {link.name}
                <IoMdArrowDropdown className="text-lg" />
              </a>
            ))}
          </div>

          {/* Right: Shop, Get Started, Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/shop"
              className="p-2 rounded-md hover:bg-gray-100"
            >
            <PiShoppingCartBold className="text-4xl font-light text-gray-800" />
            </a>

            <a
              href="/get-started"
              className="hidden sm:inline-flex items-center px-6 py-2 border border-transparent text-md rounded-full shadow-sm text-white bg-indigo-900 hover:bg-indigo-700"
            >
              Get Started
            </a>

            {/* Hamburger for Info Drawer */}
            <button
              onClick={() => setInfoOpen(true)}
              className="text-2xl text-gray-800"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Background Overlay */}
      {(menuOpen || infoOpen) && (
        <div
          onClick={() => {
            setMenuOpen(false);
            setInfoOpen(false);
          }}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Info Drawer (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-[#1e1e1e] text-white z-50 shadow-xl transform transition-transform duration-300 ${
          infoOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              <span className="text-indigo-400">AI</span> GLOBE
            </span>
          </div>
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
            feugiat placerat eget quis metus. Morbi rutrum quis orci eget
            dictum. Nunc sit amet felis vulputate, consectetur metus non.
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
            <a
              href="#"
              className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500"
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500"
            >
              <FiYoutube />
            </a>
            <a
              href="#"
              className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}