import React from 'react'
import "./Navbar.css"
import NK from "../../images/NK_Logo_1.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {

  function showmenu()
  {
    console.log(document.getElementById("menu").style.display.length)
      if(document.getElementById("menu").style.visibility=="hidden" || document.getElementById("menu").style.visibility=="")
          { 
            document.getElementById("menu").style.visibility="visible"
          }
          else
          {
           
             document.getElementById("menu").style.visibility="hidden"
          }
  }

  return (
    <div>
    <div className='flex justify-between gap-[30px] mt-5'>
        <div className='pl-5'>
            <img src={NK}  width={"40px"} height={"40px"} className='rounded-sm'/>
        </div>
        <div className=' md:hidden'><GiHamburgerMenu size={30} onClick={showmenu}/></div>
        <div className='flex gap-[30px] font-mono flex-col md:flex-row mt-[50px] md:mt-0 relative md:static right-[20%] md:right-0 invisible md:visible' id="menu">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div>Projects</div>
        <div><Link to="/interests">Interests</Link></div>
        <div><Link to="/wishlist">Wishlist</Link></div>
        <div><Link to="/contact">Contact Us</Link></div>
        </div>

        
        <div className='flex gap-[30px] font-mono pr-5'>
            <div><a href="https://x.com/Neerajkumawat34"><FaSquareXTwitter size={25}/></a></div>
            <div><a href="https://www.linkedin.com/in/neeraj-kumawat-16a5837a/"><FaLinkedin size={25}/></a></div>
            <div><a href="https://www.linkedin.com/in/neeraj-kumawat-16a5837a/"><FaGithub size={25}/></a></div>
          
        </div>
    </div>
    
    </div>
  )
}
