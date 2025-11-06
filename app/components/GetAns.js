"use client";

import React, { useState } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

export default function GetAns() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How Secure Is My Information When Using AI?",
      answer:
        "Morbi tempus iaculis urna id volutpat lacus laoreet. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea.",
      bg: "bg-rose-50",
      active: true,
    },
    {
      question: "Can AI Help Improve Learning Over Time?",
      answer: "",
    },
    {
      question: "Can I Customize AI App For My Business?",
      answer: "",
    },
  ];

  return (
    <section className="py-20 bg-[#f4f7ff]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Left Side - Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="/faq-img-01.png" // replace with your image path
            alt="FAQ Illustration"
            className="w-full md:w-[450px] object-contain"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1">
          <button className="px-4 py-1 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-md mb-4">
            Frequently Asked
          </button>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 mb-4">
            Get The <span className="text-indigo-700">Answers</span>{" "}
            <span className="text-pink-500">You Need</span>
          </h2>

          <p className="text-gray-600 max-w-lg mb-8">
            A pellentesque sit amet porttitor eget. Fringilla phasellus faucibus
            scelerisque eleifend. Sit amet volutpat consequat mauris. Mattis
            pellentesque id nibh.
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl p-5 cursor-pointer transition ${
                  openIndex === i ? "bg-rose-50" : "bg-white"
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {faq.question}
                  </h3>
                  {openIndex === i ? (
                    <FiArrowUpRight className="text-indigo-700 w-6 h-6" />
                  ) : (
                    <FiChevronDown className="text-indigo-700 w-6 h-6" />
                  )}
                </div>

                {openIndex === i && faq.answer && (
                  <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}

            {/* Last Card - Contact */}
            <div className="bg-white rounded-xl p-5 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  Still Have Question
                </h4>
                <p className="text-sm text-gray-600">
                  Kindly converse with our team.
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-indigo-900 text-white rounded-full font-medium hover:bg-indigo-800 transition">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
