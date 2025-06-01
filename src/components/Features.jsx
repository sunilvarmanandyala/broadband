// Features.jsx
import React from 'react';
import FeatureCard from './FeatureCard';

export default function Features() {
  // Define the four features with icon, title, and description
  const featureList = [
    {
      // Lightning bolt icon for "Gigabit Speeds"
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z" />
        </svg>
      ),
      title: "Gigabit Speeds",
      description: "Experience lightning-fast downloads with Midco’s gigabit internet."
    },
    {
      // Infinity symbol icon for "Unlimited Data"
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.68 5.792L7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015ZM8.656 7.75l1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
        </svg>
      ),
      title: "Unlimited Data",
      description: "No caps or extra charges – enjoy truly unlimited data usage."
    },
    {
      // Headset icon for "24/7 Support"
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "We’re here for you – around the clock, every day of the year."
    },
    {
      // "No" symbol icon (circle with slash) for "No Contracts"
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
        </svg>
      ),
      title: "No Contracts",
      description: "Freedom and flexibility with month-to-month plans and no contracts."
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
