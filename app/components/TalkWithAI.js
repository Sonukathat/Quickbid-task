"use client";

import React from "react";
import { FiInfo } from "react-icons/fi";

export default function TalkWithAI() {
    const features = [
        "Working in 30+ languages",
        "2 minute signup",
        "Rated 4.8/5 stars in 10k+ reviews",
    ];

    return (
        <section className="relative py-32 bg-linear-to-b from-[#fff5f7] to-[#f3b8c4] text-center overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    All Set To Talk With <span className="text-indigo-700">AI Globe</span>
                </h2>

                <p className="text-gray-700 text-lg mb-8">
                    Find out all the incredible ideas you can generate with AI.
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-700 font-medium">
                    {features.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm md:text-base">
                            <FiInfo className="text-indigo-700 w-5 h-5" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center items-center gap-4 mb-12">
                    <button className="px-6 py-3 bg-indigo-900 text-white font-semibold rounded-full hover:bg-indigo-800 transition">
                        Start Free Trial
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                        Get A Demo
                    </button>
                </div>
            </div>

            {/* Large Gradient Text at Bottom */}
            <h1
                className="
    absolute bottom-5 left-1/2 
    -translate-x-1/2 
    text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] 
    font-extrabold leading-none 
    text-transparent bg-clip-text 
    bg-linear-to-r from-[#c85a9a] via-[#8e5ed9] to-[#5a8dfc] 
    opacity-25 select-none pointer-events-none
  "
            >
                AI Globe
            </h1>
        </section>
    );
}
