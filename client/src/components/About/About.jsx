import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import Loader from '../Loaders/Loader';
import { useState,useEffect } from 'react';
export default function About() {

  const [loading,setLoading]=useState(true)
  
    useEffect(()=>{
  
      setLoading(false);
    })

  return (
    !loading?
    <div>
      <h1 className='text-center font-bold text-3xl mt-5'>Who I'M</h1>
      <div className="flex justify-center flex-col items-center mt-5 shadow-xl p-8 max-w-xl mx-auto">
        <div>Hi Everyone, I am Neeraj Kumawat from <strong>Jaipur</strong>, Rajasthan, India. </div>
        <div className='mt-3'>I am a computer science post graduate from <strong>National Insitute of Technology ,Karnataka</strong> and a passionate programmer.</div>
        <div className='mt-3'> I am working in <strong>Tata Consultancy Service</strong> as a System Engineer.</div></div>
        <h1 className='text-center font-bold text-3xl mt-[50px]'> Skills</h1>
        <div className="flex  justify-center mt-5 shadow-xl p-8 w-128 mx-auto">
        <div>
            <ul>
                <li className='flex'><FaHtml5  size={50}/> HTML</li>
                <li className='flex'><FaCss3Alt size={50}/>CSS</li>
                <li className='flex'><IoLogoJavascript size={50}/>Javascript</li>
                <li  className='flex'><RiReactjsFill size={50}/>ReactJS</li>
                <li  className='flex'><RiTailwindCssFill size={50}/>TailwindCSS</li>
                <li  className='flex'><SiRedux size={50}/>Redux Toolkit</li>
                <li  className='flex'><FaNodeJs size={50}/>NodeJS</li>
                <li  className='flex'>< SiExpress size={50}/>ExpressJS</li>
                <li  className='flex'><DiMongodb size={50}/>MongoDB</li>
                <li  className='flex'><FaAws size={50}/> AWS</li>
            </ul>
        </div>
        </div>
    </div>:<Loader/>
  )
}
