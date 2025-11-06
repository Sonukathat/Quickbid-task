"use client";

import React from "react";

export default function FutureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/future.png" // replace with your image path
            alt="Mobile Chatbot"
            className="w-full md:w-[500px] object-contain"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <button className="px-4 py-1 bg-indigo-100 text-indigo-700 font-semibold rounded-full mb-4">
            Our Future
          </button>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 mb-4">
            <span className="text-pink-500">Mobile Applications</span>{" "}
            For The <br />
            Intelligence Revolution
          </h2>

          <p className="text-gray-600 max-w-lg mb-8">
            Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque
            habitant. Sagittis vitae et leo duis ut diam. Erat imperdiet sed euismod nisi porta
            lorem. Faucibus et molestie ac feugiat sed.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <img
              src="/appstore.png" // replace with your App Store image
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="/googleplay.png" // replace with your Play Store image
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
