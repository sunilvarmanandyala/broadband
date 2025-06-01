import React from "react";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-4 flex justify-between items-center">
      <Link to="/">
        <img src="/midcomobile.png" alt="Midco Mobile" className="h-10" />
      </Link>
      <nav className="space-x-4 text-sm font-semibold uppercase">
        <Link to="/mobile">Plans</Link>
        <Link to="/mobile">Coverage</Link>
        <Link to="/mobile">Features</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </header>
  );
}
