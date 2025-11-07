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
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-24 bg-linear-to-b from-white to-indigo-50 text-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 py-1.5 bg-linear-to-r from-indigo-600 to-blue-500 text-white rounded-md font-medium text-md mb-4 shadow-sm"
        >
          Streamline
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Increase Efficiency While Improving{" "}
          <span className="text-pink-500">The Client Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Dis parturient montes nascetur ridiculus mus mauris. Sagittis aliquam
          malesuada bibendum arcu vitae elementum. Diam vulputate ut pharetra
          sit. Purus in massa tempor nec feugiat nisl pretium fusce ridiculus
          mus mauris.
        </motion.p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                className={`relative ${item.bg} w-40 h-40 rounded-full shadow-md`}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.3 }}
                className="absolute -top-10 w-70 h-70"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                className="text-xl font-semibold text-gray-900 mt-30"
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.2 }}
                className="text-gray-600 mt-3 text-sm max-w-xs"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
