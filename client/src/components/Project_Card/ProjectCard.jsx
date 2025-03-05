import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard({ image, name, description, github, demo }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 max-w-sm hover:scale-110 transition-all duration-500">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-3">{name}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black flex items-center gap-2">
          <FaGithub size={20} /> GitHub
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center gap-2">
          <BiLinkExternal size={20} /> Demo
        </a>
      </div>
    </div>
  );
}
