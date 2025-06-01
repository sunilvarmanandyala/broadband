// src/components/Mobile/MobileHero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MobileHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00AEEF] via-[#004B8D] to-black text-white px-6">
      {/* Animated Floating Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-64 h-64 bg-white/10 rounded-full top-10 left-10 animate-pulseSlow" />
        <div className="absolute w-80 h-80 bg-white/5 rounded-full bottom-10 right-10 animate-ping" />
      </div>

      {/* Coming Soon Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      Midco Mobile is Coming Soon
        </h1>
        <p className="text-lg md:text-xl font-light text-white/90 max-w-xl mx-auto">
          We’re building something exciting. Stay tuned for fast, reliable, and affordable mobile services tailored for you.
        </p>
      </motion.div>
    </section>
  );
}
