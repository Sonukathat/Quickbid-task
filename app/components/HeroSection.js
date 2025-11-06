"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#fff7f7] to-[#fffafc] py-24 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        {/* Label */}
        <button className="px-4 py-1.5 bg-indigo-500 text-white rounded-md text-sm font-medium mb-4 shadow-md">
          AI Content
        </button>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Innovating The World With <span className="text-indigo-600">AI.</span>
          <br />
          <span className="text-indigo-500">Content Generation</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Semper viverra nam libero justo laoreet sit amet. Nisi vitae suscipit
          tellus mauris diam maecenas sed enim. Rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant.
        </p>

        {/* Search Box */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full sm:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Enter Keyword"
              className="w-full py-4 pl-6 pr-12 rounded-full shadow-md border border-gray-100 focus:outline-none text-gray-700"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-600 text-xl">
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Footer Line */}
        <p className="mt-6 text-indigo-500 font-medium flex justify-center items-center gap-2 text-sm sm:text-base">
          ⚡ Free Trial – No Credit Level
        </p>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-16 left-1/4 w-4 h-4 bg-yellow-400 rounded-full"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-green-400 rounded-full"></div>
      <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-purple-600 rounded-full"></div>
    </section>
  );
}
