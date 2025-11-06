"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StreamlineSection() {
  const features = [
    {
      title: "Pre Trained AI",
      description:
        "Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Sed risus pretium.",
      img: "/Group-141962.png",
      bg: "bg-teal-100",
    },
    {
      title: "Accurate Results",
      description:
        "Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Nisl rhoncus mattis.",
      img: "/Group-141961.png",
      bg: "bg-yellow-100",
    },
    {
      title: "Smart Service",
      description:
        "Massa tincidunt nunc dui nunc mattis. Imperdiet massa tincidunt nunc pulvinar sapien tristique.",
      img: "/Group-141963.png",
      bg: "bg-pink-100",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-indigo-50 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Button */}
        <button className="px-5 py-1.5 bg-indigo-100 text-indigo-600 rounded-full font-medium text-sm mb-4 shadow-sm">
          Streamline
        </button>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Increase Efficiency While Improving{" "}
          <span className="text-pink-500">The Client Experience</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Dis parturient montes nascetur ridiculus mus mauris. Sagittis aliquam
          malesuada bibendum arcu vitae elementum. Diam vulputate ut pharetra
          sit. Purus in massa tempor nec feugiat nisl pretium fusce ridiculus
          mus mauris.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Background Circle */}
              <div
                className={`relative ${item.bg} w-40 h-40 rounded-full shadow-md`}
              ></div>

              {/* Image Over Circle */}
              <div className="absolute -top-10 w-70 h-70">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-gray-900 mt-30">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
