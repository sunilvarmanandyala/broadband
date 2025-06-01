import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function BusinessShowcase() {
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".tilt-effect");
    VanillaTilt.init(tiltElements, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <section className="relative py-16 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Parallax & Particles */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "scrollBg 20s linear infinite",
        }}
      />

      <div className="flex-1 text-white tilt-effect">
        <h2 className="text-4xl font-bold mb-4 leading-snug">
          Reliability. Security. Speed.
        </h2>
        <p className="mb-6 text-lg">
          Take your business further, faster and beyond with Midco Business by your side.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold transition">
            Explore Internet
          </button>
          <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-md font-semibold transition">
            Request a Consultation
          </button>
        </div>
      </div>
      <div className="flex-1 tilt-effect">
        <img
          src="/broadband/midco3.png"
          alt="Midco Business Hero"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
}
