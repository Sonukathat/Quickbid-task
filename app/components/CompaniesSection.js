"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompaniesSection() {
  const companies = [
    "Google",
    "Microsoft",
    "Netflix",
    "Amazon",
    "Facebook",
    "IBM",
    "Adobe",
    "Spotify",
    "Tesla",
    "OpenAI",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 5) % companies.length);
    }, 2000); // 2 seconds interval
    return () => clearInterval(interval);
  }, [companies.length]);

  const visibleCompanies =
    companies.slice(index, index + 5).length === 5
      ? companies.slice(index, index + 5)
      : [
          ...companies.slice(index),
          ...companies.slice(0, 5 - (companies.length - index)),
        ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-12">
          500+ Outstanding Companies{" "}
          <span className="text-indigo-600 font-bold">Trust Us Globally</span>
        </h2>

        {/* Companies list animation */}
        <div className="overflow-hidden h-12 mb-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center gap-8 absolute w-full"
            >
              {visibleCompanies.map((name, i) => (
                <span
                  key={i}
                  className="text-4xl text-gray-600 hover:text-indigo-600 transition"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Button */}
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition">
          Try Aibot Free
        </button>
      </div>
    </section>
  );
}
