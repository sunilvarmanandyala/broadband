import React from "react";

const plans = [
  {
    name: "Starter Plan",
    price: "$99/mo",
    benefits: ["300 Mbps Internet", "24/7 Support", "No Contracts"],
  },
  {
    name: "Pro Plan",
    price: "$199/mo",
    benefits: ["1 Gbps Internet", "Priority Support", "Static IP Options"],
  },
];

export default function BusinessPlans() {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Business Plans</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-xl transition duration-300 animate-fadeIn"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-lg text-[#00AEEF] font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-600 space-y-2">
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>✔ {benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
