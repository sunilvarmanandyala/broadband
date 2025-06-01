// FeatureCard.jsx
import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 hover:shadow-lg transition duration-200">
      <div className="mb-4 flex items-center justify-center">
        {/* Icon (placeholder graphic) */}
        <div className="text-blue-500 w-8 h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
