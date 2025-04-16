import React, { useState } from "react";
import "./Navbar.css";
import NK from "../../images/NK_Logo_1.png";
import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Correct import
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center px-5 py-4 md:px-10">
        
        <div className="flex items-center">
          <img src={NK} width={"40px"} height={"40px"} className="rounded-sm" />
        </div>

        <div className="md:hidden">
          <GiHamburgerMenu
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        </div>

       
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          
          <Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/interests" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Interests</Link>
          <Link to="/wishlist" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Wishlist</Link>
          <Link to="/books" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Books</Link>
          <Link to="/blogs" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact Us</Link>

          
          <div className="flex md:hidden gap-5 mt-4">
            <a href="https://x.com/Neerajkumawat34">
              <FaSquareXTwitter size={25} className="hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/neeraj-kumawat-16a5837a/">
              <FaLinkedin size={25} className="hover:text-blue-500" />
            </a>
            <a href="https://github.com/nkumawat34">
              <FaGithub size={25} className="hover:text-blue-500" />
            </a>
          </div>
        </div>

      
        <div className="hidden md:flex gap-5">
          <a href="https://x.com/Neerajkumawat34">
            <FaSquareXTwitter size={25} className="hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-kumawat-16a5837a/">
            <FaLinkedin size={25} className="hover:text-blue-500" />
          </a>
          <a href="https://github.com/nkumawat34">
            <FaGithub size={25} className="hover:text-blue-500" />
          </a>
        </div>
      </div>
    </nav>
  );
}
