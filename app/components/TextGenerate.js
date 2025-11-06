"use client";

import React from "react";
import {
  AiOutlineFileText,
  AiOutlinePicture,
  AiOutlineCode,
  AiOutlineRobot,
  AiOutlineSound,
} from "react-icons/ai";

export default function TextGenerate() {
  const features = [
    {
      name: "Ai Text Generator",
      icon: <AiOutlineFileText className="text-green-500 w-10 h-10" />,
      description:
        "A arcu cursus vitae congue mauris rhoncus aenean. Nunc sed augue lacus viverra vitae.",
    },
    {
      name: "Ai Image Generator",
      icon: <AiOutlinePicture className="text-blue-500 w-10 h-10" />,
    },
    {
      name: "Ai Code Generator",
      icon: <AiOutlineCode className="text-red-500 w-10 h-10" />,
    },
    {
      name: "Ai Chat Bot",
      icon: <AiOutlineRobot className="text-purple-500 w-10 h-10" />,
    },
    {
      name: "Ai Speech To Text",
      icon: <AiOutlineSound className="text-yellow-500 w-10 h-10" />,
    },
  ];

  return (
    <section className="bg-[#faf7ff] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-white rounded-3xl shadow-lg p-10">
        {/* Left Section */}
        <div className="flex-1 space-y-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-center gap-4">
                <div>{feature.icon}</div>
                <h3
                  className={`text-2xl font-bold ${
                    i === 0 ? "text-gray-900" : "text-gray-900"
                  }`}
                >
                  {feature.name}
                </h3>
              </div>

              {/* Show description + button only for FIRST item */}
              {i === 0 && (
                <div className="pl-14 mt-2">
                  <p className="text-gray-600 text-sm max-w-sm">
                    {feature.description}
                  </p>
                  <button className="mt-4 px-5 py-2 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition">
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden w-[90%] md:w-[600px]">
            {/* Browser Header */}
            <div className="bg-gray-200 h-10 flex items-center justify-start px-4 gap-2 rounded-t-2xl">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>

            {/* Image */}
            <img
              src="/TG-1.png"
              alt="AI Text to Speech"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
