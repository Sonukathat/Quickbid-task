"use client";

import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter Plan",
      price: 39.99,
      features: [
        "Think smarter with AI.",
        "The future is now with.",
        "Making life easier.",
        "Innovating the world with.",
        "The power to transform.",
        "Experience the power.",
      ],
      color: "bg-cyan-50",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
    },
    {
      name: "Standard Plan",
      price: 59.99,
      features: [
        "Think smarter with AI.",
        "The future is now with.",
        "Making life easier.",
        "Innovating the world with.",
        "The power to transform.",
        "Experience the power.",
      ],
      color: "bg-white border-2 border-blue-500 shadow-lg",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Premium Plan",
      price: 89.99,
      features: [
        "Think smarter with AI.",
        "The future is now with.",
        "Making life easier.",
        "Innovating the world with.",
        "The power to transform.",
        "Experience the power.",
      ],
      color: "bg-cyan-50",
      buttonColor: "bg-teal-700 hover:bg-teal-800",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Top Section */}
        <button className="px-5 py-1 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-md mb-4">
          Creative Approach
        </button>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
          World’s <span className="text-pink-500">Best Affordable</span>{" "}
          <span className="text-indigo-700">Pricing Plan</span>
        </h2>

        {/* Toggle Section */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className={`font-medium ${!isYearly ? "text-indigo-700" : "text-gray-600"}`}>
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
          <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
          <span className={`font-medium ${isYearly ? "text-indigo-700" : "text-gray-600"}`}>
            Yearly
          </span>
          <button className="px-3 py-1 text-xs bg-indigo-600 text-white rounded-md font-semibold">
            10% Discount
          </button>
        </div>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Nibh sit amet commodo nulla. Dui id ornare arcu odio ut sem nulla. Quam quisque id diam
          vel quam elementum pulvinar. Sit amet nulla facilisi morbi. Massa tincidunt dui ut
          ornare lectus.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition ${plan.color}`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-1">
                ${isYearly ? (plan.price * 12 * 0.9).toFixed(2) : plan.price.toFixed(2)}
                <span className="text-lg text-gray-600 font-normal"> /Month</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                For Small Projects Upto 10 Users
              </p>

              <hr className="mb-6 border-gray-300" />

              <ul className="text-left space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <BsCheck2 className="text-pink-500 mt-1 w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-2 text-white font-medium rounded-full transition ${plan.buttonColor}`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
