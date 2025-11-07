"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="px-5 py-1 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-md mb-4"
          >
            Why Choose Us
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gray-900 leading-snug"
          >
            Automatically Cover Every <br />
            <span className="text-indigo-700">Touchpoint In The</span>{" "}
            <span className="text-pink-500">Client Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.
            Cras semper auctor neque vitae tempus quam pellentesque. Nunc
            scelerisque viverra mauris in aliquam sem fringilla.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
                className={`p-4 ${card.color} rounded-full mb-4`}
              >
                {card.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                {card.title}
              </motion.h3>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                transition={{
                  staggerChildren: 0.1,
                  delayChildren: 0.5 + index * 0.3,
                }}
                viewport={{ once: true }}
                className="text-left space-y-3"
              >
                {listItems.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <BsCheckCircleFill className="text-indigo-600 mt-1 w-4 h-4" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`mt-8 px-6 py-2 text-white font-medium rounded-full transition ${card.buttonColor}`}
              >
                {card.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
