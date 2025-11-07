"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function HeroSection() {
  const totalCircles = 6;
  const circles = Array.from({ length: totalCircles });

  return (
    <section
      className="relative w-full py-52 text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/brush.png')" }}
    >
      {circles.map((_, i) => (
        <FloatingCircle key={i} index={i} />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 py-1.5 bg-linear-to-r from-indigo-600 to-blue-500 text-white rounded-md text-md font-medium mb-4 shadow-md"
        >
          AI Content
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-950 leading-tight lg:whitespace-nowrap"
        >
          Innovating The World With AI
          <span className="block text-indigo-500">Content Generation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-6 text-gray-700 max-w-2xl mx-auto text-md"
        >
          Semper viverra nam libero justo laoreet sit amet. Nisi vitae suscipit
          tellus mauris diam maecenas sed enim. Rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant.
        </motion.p>

        <div className="mt-10 flex justify-center">
          <div className="relative w-[90%] max-w-lg">
            <input
              type="text"
              placeholder="Enter Keyword"
              className="w-full py-4 pl-6 pr-12 rounded-full bg-white text-gray-700 shadow-md"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-600 text-xl hover:text-indigo-700 transition">
              <FiSearch />
            </button>
          </div>
        </div>

        <p className="mt-6 text-indigo-500 flex justify-center items-center gap-2 text-xl">
          ⚡ Free Trial – No Credit Level
        </p>
      </div>
    </section>
  );
}

function FloatingCircle({ index }) {
  const controls = useAnimation();

  React.useEffect(() => {
    const animate = async () => {
      while (true) {
        const x = Math.random() * 800 - 400;
        const y = Math.random() * 400 - 200;
        await controls.start({
          x,
          y,
          transition: {
            duration: 6 + Math.random() * 5,
            ease: "easeInOut",
          },
        });
      }
    };
    animate();
  }, [controls]);

  const colors = [
    "bg-purple-500",
    "bg-pink-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-cyan-500",
    "bg-green-500",
  ];

  const sizes = ["w-8 h-8", "w-10 h-10", "w-12 h-12", "w-14 h-14"];

  return (
    <motion.span
      className={`absolute rounded-full opacity-70 ${
        colors[index % colors.length]
      } ${sizes[index % sizes.length]}`}
      style={{
        top: `${Math.random() * 80 + 5}%`,
        left: `${Math.random() * 80 + 5}%`,
      }}
      animate={controls}
    />
  );
}
