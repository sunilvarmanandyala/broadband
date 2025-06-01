import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Primary Grid Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-10">
        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Internet</li>
            <li>MidcoTV</li>
            <li>Home Phone</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Account & Billing</li>
            <li>Internet</li>
            <li>Cable TV</li>
            <li>Home Phone</li>
            <li>Email</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-bold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li>Pay Bill</li>
            <li>Register My Account</li>
            <li>Vacation Plan</li>
            <li>Directory Assistance</li>
            <li>New Customer</li>
            <li>Moving</li>
          </ul>
        </div>

        {/* About Midco */}
        <div>
          <h3 className="font-bold mb-4">About Midco</h3>
          <ul className="space-y-2">
            <li>News and Events</li>
            <li>Service Areas</li>
            <li>Midco Foundation</li>
            <li>Social Responsibility</li>
            <li>Broadband Development</li>
            <li>Belonging</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Online Ordering + Contact */}
        <div>
          <h3 className="font-bold mb-4">Online Ordering</h3>
          <button className="bg-[#0087c1] hover:bg-[#0070a3] px-6 py-2 rounded-full font-semibold text-white mb-2">
            🛒 Shop Online
          </button>
          <div>Text 64326</div>
          <div className="mb-6">1.800.888.1300</div>

          <h3 className="font-bold mb-4">Contact</h3>
          <div>Live Chat</div>
          <div>Text 64326</div>
          <div>1.800.888.1300</div>
          <div>Customer Experience Centers</div>
        </div>
      </div>

      {/* Social + Newsletter */}
      <div className="border-t border-gray-700 px-6 py-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-start md:justify-start text-sm">
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Satellite Operators</a>
          <a href="#" className="hover:underline">Authorized Reseller</a>
          <a href="#" className="hover:underline">Privacy & Legal</a>
          <a href="#" className="hover:underline">Privacy Preferences</a>
        </div>

        <div className="flex flex-col md:items-end">
          <label className="mb-2 text-sm">Interested in staying up to date with Midco?</label>
          <div className="flex items-center w-full md:w-auto border-b border-gray-500">
            <input
              type="email"
              placeholder="Email"
              className="bg-black placeholder-gray-400 text-white px-2 py-1 w-full md:w-64 focus:outline-none"
            />
            <button className="text-white font-semibold pl-4 hover:underline">SIGN UP →</button>
          </div>
          <p className="text-xs mt-2 text-gray-400">
            By clicking Sign Up, you agree to our <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1e1e1e] py-6 px-6 text-center text-xs text-gray-400">
        <p className="mb-2">
          Privacy Policy | FCC Public Files | Visitor Agreement | Legal | Site Map | Assistance Programs
        </p>
        <p className="mb-4">© 2025 Midcontinent Communications - All Rights Reserved.</p>
        <div className="max-w-3xl mx-auto text-gray-500">
          It looks like you're on the move! We’ve confirmed your scheduled account service transfer. In addition to transferring your services, we’re also moving any payment methods and/or auto pay settings to your new account number. Billing access will be available four days after your services are activated at your new address. If you need to make an immediate payment, please call us at 1.800.888.1300.
        </div>
        <div className="flex justify-center space-x-4 mt-6 text-white">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}