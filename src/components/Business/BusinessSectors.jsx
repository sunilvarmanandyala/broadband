// src/components/Business/BusinessSectors.jsx
import React, { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const sectors = [
  {
    title: "Small-to-Midsize Businesses",
    description:
      "Level up your small-to-midsize business with solutions crafted just for you. Whether it’s keeping in touch or staying connected, we’ve got what you need to shine.",
    image: "/broadband/smb.png",
    link: "Explore SMB Services and Solutions",
  },
  {
    title: "Enterprise",
    description:
      "Supercharge your enterprise with custom solutions built to propel your success. From seamless communication to robust connectivity, we’ve got tools to level up your business.",
    image: "/broadband/enterprise..png",
    link: "Explore Enterprise Services and Solutions",
  },
  {
    title: "Wholesale",
    description:
      "Grow your wholesale operations with tailored solutions crafted for your unique needs. From streamlined communication to scalable connectivity, we’ve got everything to keep your business thriving.",
    image: "/broadband/wholesale.png",
    link: "Explore Wholesale Services and Solutions",
  },
  {
    title: "Properties",
    description:
      "Elevate your properties with services designed to impress. From robust tv and phone options, to reliable connectivity, we’ve got everything you need to ensure your properties stand out.",
    image: "/broadband/properties.png",
    link: "Explore Property Service and Solutions",
  },
];

export default function BusinessSectors() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".sector-card"), {
      max: 10,
      speed: 300,
      glare: true,
      "max-glare": 0.1,
    });
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-16 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-cover opacity-10 pointer-events-none"
        style={{ backgroundAttachment: "fixed" }}
      />

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Tailored solutions for all. Explore service sector offerings.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 relative z-10">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelected(sector)}
            className="cursor-pointer sector-card bg-white text-black rounded-lg shadow-xl overflow-hidden transform transition duration-300"
          >
            <img
              src={sector.image}
              alt={sector.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
              <p className="text-gray-700 mb-4">{sector.description}</p>
              <span className="text-blue-600 font-semibold underline hover:text-blue-800">
                {sector.link}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black rounded-lg shadow-lg max-w-lg w-full p-6 relative"
          >
            <button
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover rounded mb-4"
            >
              <source src="/videos/sector-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-700 mb-4">{selected.description}</p>
            <a
              href="#"
              className="text-blue-600 hover:underline font-semibold"
            >
              {selected.link}
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
