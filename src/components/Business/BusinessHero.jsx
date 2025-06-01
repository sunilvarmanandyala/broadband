import React from "react";

export default function BusinessHero() {
  return (
    <section className="relative bg-black text-white text-center py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
          Scalable Business Internet Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fadeIn delay-100">
          Power your business with fast, reliable connectivity backed by local support.
        </p>
        <button className="bg-[#00AEEF] hover:bg-[#008ECC] text-white px-8 py-3 rounded-full font-semibold transition animate-fadeIn delay-200">
          Explore Solutions
        </button>
      </div>
    </section>
  );
}