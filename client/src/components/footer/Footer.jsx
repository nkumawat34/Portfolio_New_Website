import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-black text-white py-6 mt-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold">Developed by Neeraj Kumawat</h1>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <a href="https://github.com/NeerajKumawat34" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-kumawat-16a5837a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://twitter.com/Neerajkumawat34" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-gray-400 transition duration-300" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
}
