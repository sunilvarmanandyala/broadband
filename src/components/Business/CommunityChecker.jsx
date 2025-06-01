// src/components/Business/CommunityChecker.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CommunityChecker() {
  return (
    <section className="relative bg-[#002b5c] text-white py-24 overflow-hidden">
      {/* Decorative animated blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-900 to-blue-600 rounded-full opacity-20 blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-400 to-blue-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse-slower"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Is Midco in your community?
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-blue-100 mb-10">
          Ready to experience the benefits of Midco in your area? Enter your business address and see what services we have available.
        </p>

        <form className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <input
            type="text"
            placeholder="1234 S Main St, Sioux Falls, SD"
            className="w-full md:w-[400px] px-6 py-3 rounded-full text-black bg-white focus:outline-none shadow-md"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#00AEEF] text-white font-bold rounded-full hover:bg-[#008ecc] transition duration-300 shadow-lg"
          >
            Search Address
          </button>
        </form>
      </motion.div>
    </section>
  );
}
