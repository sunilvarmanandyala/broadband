import React, { useState } from 'react';
import { FiEye, FiChevronDown, FiChevronRight } from 'react-icons/fi';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 w-full max-w-6xl gap-8">
        {/* Sign In Box */}
        <div className="bg-[#1e293b] p-8 rounded-md shadow-md w-full">
          <h1 className="text-3xl font-bold mb-6">SIGN IN</h1>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-[#0f172a] border border-gray-600 focus:outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 rounded bg-[#0f172a] border border-gray-600 focus:outline-none"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FiEye className="text-gray-400" />
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-sm font-semibold flex items-center cursor-pointer">
            Need Help? <FiChevronDown className="ml-2" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center space-y-6">
          {[
            {
              title: 'Activate Your Midco Kit',
              desc: 'Received a kit and ready to set it up',
            },
            {
              title: 'Order Midco Service',
              desc: '30 day trial with full refund if not satisfied',
            },
            {
              title: 'Visit our support center',
              desc: 'Get guidance from our support team',
            },
            {
              title: 'Check out our customer stories',
              desc: 'Learn more about our community',
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b border-gray-700 pb-4"
            >
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
              <FiChevronRight className="text-gray-400 text-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
