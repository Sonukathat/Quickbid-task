"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function NewsSection() {
  const leftBlogs = [
    {
      img: "/blog-6.jpg",
      title: "How Is AI Applied In The Medical Industry?",
      desc: "Maecenas accumsan lacus vel facilisis volutpat est. Leo in vitae turpis massa sed elementum tempus egestas. Aliquam eleifend...",
    },
    {
      img: "/blg-1.jpg",
      title: "Application of AI in Car Manufacturing",
      desc: "Pellentesque adipiscing commodo elit at imperdiet. Euismod nisi porta lorem mollis. Sed sed risus pretium quam vulputate...",
    },
  ];

  const rightBlogs = [
    {
      img: "/blog-4.jpg",
      title: "Make Your Ocean Journey Easier With Artificial",
      desc: "Rutrum quisque non tellus orci ac. Donec massa sapien faucibus et...",
    },
    {
      img: "/blog-8.jpg",
      title: "Make Your Machines Smarter With Artificial Intelligence",
      desc: "Lacus viverra vitae congue eu consequat ac felis donec et. Lacinia...",
    },
    {
      img: "/blog-12.jpg",
      title: "How Will AI Make A Better Gas Station?",
      desc: "Urna duis convallis convallis tellus id interdum velit laoreet. Turpis massa...",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-14">
          <button className="px-5 py-1 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-md mb-4">
            Creative Approach
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Latest <span className="text-indigo-700">News</span>{" "}
            <span className="text-pink-500">& Blogs</span>
          </h2>
        </div>

        {/* Unified Container */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200">
            {leftBlogs.map((blog, i) => (
              <div
                key={i}
                className={`p-5 sm:p-6 transition hover:bg-gray-50 ${
                  i === 1 ? "border-t border-gray-200" : ""
                }`}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {blog.desc}
                </p>
                <div className="flex items-center text-indigo-600 font-semibold text-sm cursor-pointer hover:text-indigo-800">
                  <span>Read More</span>
                  <FiArrowRight className="ml-2" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            {rightBlogs.map((blog, i) => (
              <div
                key={i}
                className={`p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition hover:bg-gray-50 ${
                  i !== 0 ? "border-t border-gray-200" : ""
                }`}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full sm:w-40 h-48 sm:h-28 object-cover rounded-xl"
                />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900 mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-2">
                    {blog.desc}
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold text-sm cursor-pointer hover:text-indigo-800">
                    <span>Read More</span>
                    <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
