"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function HeroSection() {
    const floatTransition = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
    };

    return (
        <section
            className="relative w-full py-52 text-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/brush.png')" }} // 👈 apni bg image
        >
            {/* 🔹 Animated Circles */}
            <motion.span
                className="absolute top-[20%] left-[15%] w-10 h-10 bg-purple-400/30 rounded-full blur-sm"
                animate={{ y: [0, -25, 0] }}
                transition={floatTransition}
            />
            <motion.span
                className="absolute bottom-[25%] right-[10%] w-16 h-16 bg-pink-400/30 rounded-full blur-md"
                animate={{ y: [0, -30, 0] }}
                transition={{ ...floatTransition, duration: 6, delay: 1 }}
            />
            <motion.span
                className="absolute top-[40%] right-[30%] w-12 h-12 bg-blue-400/30 rounded-full blur-sm"
                animate={{ y: [0, -20, 0] }}
                transition={{ ...floatTransition, duration: 5 }}
            />
            <motion.span
                className="absolute bottom-[15%] left-[20%] w-8 h-8 bg-indigo-400/30 rounded-full blur-sm"
                animate={{ y: [0, -18, 0] }}
                transition={{ ...floatTransition, duration: 7, delay: 2 }}
            />

            {/* 🔹 Hero Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <button className="px-6 py-1.5 bg-linear-to-r from-indigo-600 to-blue-500 text-white rounded-md text-md font-medium mb-4 shadow-md">
                    AI Content
                </button>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-950 leading-tight lg:whitespace-nowrap">
                    Innovating The World With AI
                    <span className="block text-indigo-500">
                        Content Generation
                    </span>
                </h1>

                <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-md">
                    Semper viverra nam libero justo laoreet sit amet. Nisi vitae suscipit
                    tellus mauris diam maecenas sed enim. Rhoncus aenean vel elit
                    scelerisque mauris pellentesque pulvinar pellentesque habitant.
                </p>

                <div className="mt-10 flex justify-center">
                    <div className="relative w-full sm:w-2/3 lg:w-1/2">
                        <input
                            type="text"
                            placeholder="Enter Keyword"
                            className="w-full py-4 pl-6 pr-12 rounded-full shadow-md border border-gray-200 focus:outline-none text-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
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
