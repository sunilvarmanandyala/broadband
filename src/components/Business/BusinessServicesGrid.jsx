// src/components/Business/BusinessServicesGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaWifi, FaPhone, FaTv, FaNetworkWired, FaShieldAlt, FaBullhorn } from "react-icons/fa";

const services = [
  { title: "Internet", desc: "Fiber-fast blazing internet.", icon: <FaWifi />, link: "internet" },
  { title: "Phone", desc: "Crystal-clear business calls.", icon: <FaPhone />, link: "phone" },
  { title: "TV", desc: "Flexible customizable channels.", icon: <FaTv />, link: "tv" },
  { title: "Networking", desc: "Secure, scalable data network.", icon: <FaNetworkWired />, link: "networking" },
  { title: "Security", desc: "Top-tier protection.", icon: <FaShieldAlt />, link: "security" },
  { title: "Advertising", desc: "Reach more, impress better.", icon: <FaBullhorn />, link: "ads" },
];

export default function BusinessServicesGrid() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Unleash your business’s full potential</h2>
        <p className="mt-2 text-gray-600">with Midco’s tailored service lineup</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start gap-4 hover:shadow-blue-200 transition duration-300 border hover:border-[#004B8D]"
          >
            <div className="text-[#004B8D] text-3xl">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
            <a href="#" className="text-sm text-[#004B8D] font-semibold hover:underline">
              See {service.link} services →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
