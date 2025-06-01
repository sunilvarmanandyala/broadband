import React from "react";
import { Link } from "react-router-dom";

export default function BusinessHeader() {
  return (
    <header className="bg-black text-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo aligned left */}
      <Link to="/">
        <img
          src="/broadband/MidcoBusinessLogo.svg"
          alt="Midco Business Logo"
          className="h-10 md:h-12 w-auto"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex space-x-6 text-sm uppercase font-semibold">
        <Link to="/business" className="hover:text-[#00AEEF] transition">Solutions</Link>
        <Link to="/business" className="hover:text-[#00AEEF] transition">Support</Link>
        <Link to="/business" className="hover:text-[#00AEEF] transition">Plans</Link>
        <Link to="/signin" className="hover:text-[#00AEEF] transition">Sign In</Link>
      </nav>
    </header>
  );
}
