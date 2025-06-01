import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/broadband/videos/midco-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />

        {/* Centered Hero Text */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Blazing Fast Internet for the Midwest
          </h1>
          <button className="min-w-[44px] min-h-[44px] bg-[#00AEEF] hover:bg-[#008ecc] text-white px-6 py-3 rounded-full font-semibold shadow-md transition text-base md:text-lg">
            Check Availability
          </button>
        </div>
      </div>

      {/* Below Video Interactive Message */}
      <div className="w-full text-center bg-white py-6 px-4">
        <p
          className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 font-medium animate-fadeInUp hover:text-[#00AEEF] transition duration-300 ease-in-out border border-dashed border-[#00AEEF] rounded-lg p-4"
        >
          Experience Midco’s cutting-edge speed and reliability – now with unlimited data and 24/7 local support.
        </p>
      </div>
    </section>
  );
}
