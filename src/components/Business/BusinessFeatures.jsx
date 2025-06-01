import React from "react";

const features = [
  {
    title: "Fiber Internet",
    description: "High-speed, low-latency fiber solutions for growing enterprises.",
  },
  {
    title: "24/7 Business Support",
    description: "Dedicated support from our local team when you need it most.",
  },
  {
    title: "Custom Plans",
    description: "Tailored internet solutions to fit your organization’s unique needs.",
  },
];

export default function BusinessFeatures() {
    return (
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose Midco Business?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }