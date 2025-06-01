// src/components/PlanCard.jsx
import React from 'react';

export default function PlanCard({ plan, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(plan.id)}
      className={`
        cursor-pointer 
        border-2 rounded-xl p-6 
        transition-shadow transition-border 
        ${isSelected 
          ? 'border-green-500 shadow-lg' 
          : 'border-gray-300 hover:shadow-lg hover:border-green-300'}
        bg-white dark:bg-gray-800
      `}
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {plan.name}
      </h3>
      <p className="text-4xl font-extrabold mb-4 text-green-600">
        ${plan.price}/mo
      </p>
      <ul className="space-y-1 mb-4 text-gray-700 dark:text-gray-300">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`
          w-full py-2 rounded-lg font-semibold 
          ${isSelected 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-green-500 hover:text-white'} 
          transition
        `}
      >
        {isSelected ? 'Selected' : 'Choose Plan'}
      </button>
    </div>
  );
}
