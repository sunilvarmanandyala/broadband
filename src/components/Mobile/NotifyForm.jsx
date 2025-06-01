import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function NotifyForm() {
  const inputRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
    }, { threshold: 0.7 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-[#004B8D] py-16 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📬 Be the First to Know</h2>
        <p className="mb-6 text-gray-600">Enter your email to get updates when Midco Mobile launches.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            ref={inputRef}
            type="email"
            placeholder="you@example.com"
            className="px-5 py-3 rounded-full border border-gray-300 w-full sm:w-auto flex-1 shadow-md"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-[#00AEEF] text-white rounded-full font-semibold shadow-md transition"
          >
            Notify Me
          </motion.button>
        </form>
      </div>
    </section>
  );
}
