"use client";

import React from "react";
import { FaHeadset, FaBullhorn, FaClock } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

export default function ClientSection() {
  const cards = [
    {
      title: "Support",
      icon: <FaHeadset className="w-10 h-10 text-teal-600" />,
      color: "bg-teal-100",
      buttonText: "Chatbot as Support Agent",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
    },
    {
      title: "Marketing",
      icon: <FaBullhorn className="w-10 h-10 text-pink-500" />,
      color: "bg-pink-100",
      buttonText: "Chatbot as Marketer",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
    },
    {
      title: "Sales",
      icon: <FaClock className="w-10 h-10 text-purple-600" />,
      color: "bg-purple-100",
      buttonText: "Chatbot as Sales Rep",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const listItems = [
    "Morbi pulvinar tempor lectus venenatis in feugiat",
    "Quisque ullamcorper dapibus eros, venenatis sit amet",
    "Congue mi laoreet id. Maecenas venenatis pulvinar",
    "Diam justo, id eleifend nulla at.",
    "Vestibulum euismod lacinia.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Top Section */}
        <div className="mb-14">
          <button className="px-5 py-1 bg-indigo-100 text-indigo-700 font-medium rounded-full mb-4">
            Why Choose Us
          </button>
          <h2 className="text-5xl font-bold text-gray-900 leading-snug">
            Automatically Cover Every <br />
            <span className="text-indigo-700">Touchpoint In The</span>{" "}
            <span className="text-pink-500">Client Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.
            Cras semper auctor neque vitae tempus quam pellentesque. Nunc
            scelerisque viverra mauris in aliquam sem fringilla.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100"
            >
              <div className={`p-4 ${card.color} rounded-full mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {card.title}
              </h3>

              <ul className="text-left space-y-3">
                {listItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <BsCheckCircleFill className="text-indigo-600 mt-1 w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 px-6 py-2 text-white font-medium rounded-full transition ${card.buttonColor}`}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
