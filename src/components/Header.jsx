import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white uppercase tracking-wide font-semibold text-sm">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
        <Link to="/">
          <img src="/broadband/midco-logo1.png" alt="Midco Logo" className="h-6 w-auto" />
        </Link>
        </div>

        {/* Right: Mode Switch + Burger */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="underline">Personal</a>
            <span className="text-gray-500">|</span>
            <Link to="/business" className="hover:underline">Business</Link>
            <span className="text-gray-500">|</span>
            <Link to="/mobile" className="hover:underline">Mobile</Link>

              </div>

          {/* Burger icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide-in Side Menu from right */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-80 z-40 bg-gray-900 text-white flex flex-col px-6 py-8 text-sm uppercase font-semibold tracking-wide transition-all duration-300 shadow-lg">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end mb-8 text-white text-3xl focus:outline-none"
          >
            &times;
          </button>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <a href="#" className="underline">Personal</a>
              <span className="text-gray-500">|</span>
              <Link to="/business" className="hover:underline">Business</Link>
              <span className="text-gray-500">|</span>
              <Link to="/mobile" className="hover:underline">Mobile</Link>
          
            </div>

            <hr className="border-gray-700" />
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <span>US</span>
              <Globe className="w-4 h-4" />
            </a>
            <hr className="border-gray-700" />
            <Link to="/" className="hover:underline">Home</Link>
            <hr className="border-gray-700" />
            <Link to="/signin" className="hover:underline">Sign In</Link>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Help Center</a>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Availability Map</a>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Specifications</a>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Service Plans</a>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Video Guides</a>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Technology</a>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Updates</a>
            <hr className="border-gray-700" />
            <a href="#" className="hover:underline">Customer Stories</a>
          </div>
        </div>
      )}
    </header>
  );
}
