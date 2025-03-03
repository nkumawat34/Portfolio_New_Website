import React from 'react'
import "./Navbar.css"
import NK from "../../images/NK_Logo_1.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div>
    <div className='flex justify-between gap-[30px] mt-5'>
        <div className='pl-5'>
            <img src={NK}  width={40} height={40} className='rounded-sm'/>
        </div>
        <div className='flex gap-[30px] font-mono'>
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Interest</div>
        <div>Wishlist</div>
        <div>Contact Us</div>
        </div>
        <div className='flex gap-[30px] font-mono pr-5'>
            <div><FaSquareXTwitter size={25}/></div>
            <div><FaLinkedin size={25}/></div>
            <div><FaGithub size={25}/></div>
          
        </div>
    </div>
    
    </div>
  )
}
