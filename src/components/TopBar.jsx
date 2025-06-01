// src/components/TopBar.jsx
import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex justify-end space-x-6">
      <a href="#" className="hover:underline">Residential</a>
      <a href="#" className="hover:underline">Business</a>
    </div>
  );
}
