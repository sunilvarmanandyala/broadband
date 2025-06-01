// src/components/Mobile/MobileLogoCard.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MobileLogoCard() {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0)', duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div
        ref={cardRef}
        className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 max-w-md w-full text-center transform hover:scale-105 transition-all duration-500"
      >
        <img
          src="/broadband/midcomobile.png"
          alt="Midco Mobile Logo"
          className="w-52 md:w-64 mx-auto mb-6 drop-shadow-lg"
        />
        <h2 className="text-white text-xl font-semibold tracking-wide">Midco Mobile</h2>
        <p className="text-gray-300 mt-2 text-sm">
          Launching soon with powerful plans and reliable coverage.
        </p>
      </div>
    </section>
  );
}
