"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FutureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/hand-png-05.png"
            alt="Mobile Chatbot"
            className="w-full md:w-[500px] object-contain"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <motion.button
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-md mb-4"
          >
            Our Future
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 mb-4"
          >
            <span className="text-pink-500">Mobile Applications</span> For The{" "}
            <br />
            Intelligence Revolution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-lg mb-8 mx-auto md:mx-0"
          >
            Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
            pellentesque habitant. Sagittis vitae et leo duis ut diam. Erat
            imperdiet sed euismod nisi porta lorem. Faucibus et molestie ac
            feugiat sed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start items-center gap-4"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              src="/app-store.png"
              alt="App Store"
              className="h-12 cursor-pointer rounded-xl shadow-md"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              src="/play-store.png"
              alt="Google Play"
              className="h-12 cursor-pointer rounded-xl shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
