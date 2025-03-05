import React from 'react'
import ProjectCard from '../Project_Card/ProjectCard'
import Foodlie from "../../Projects_Images/Food.jpg"
import BudgetTracker from "../../Projects_Images/ExpenseTracker.png"
import MentalHealth from "../../Projects_Images/mental_health.jpg"
import Youtube from "../../Projects_Images/Youtube.jpg"
import ApnaSamaan from "../../Projects_Images/ecart.png"
import MovieSearchEngine from "../../Projects_Images/Movie_Search_Engine.png"
import CryptoTracker from "../../Projects_Images/CryptoCurrency.png"
export default function Projects() {


    const projects=[
        {
            image:Foodlie,
            name:"Foodlie",
            description:"Foodlie is an online food ordering website where users can browse menus, add items to their cart, save favorite items to their wishlist, and place orders",
            github:"https://github.com/nkumawat34/Foodlie",
            demo:"https://foodlie.onrender.com//"

        },
        {
            
            image:BudgetTracker,
            name: "Budget Tracker",
            description: "A budgeting app that helps users track expenses and income with charts.",
            github: "https://github.com/nkumawat34/Budget_Tracking_Application",
            demo: "https://budget-tracking-application-7kps.onrender.com/"
          },
          {
            image:MentalHealth,
            name: "Mental Health Stories",
            description: "A platform to share mental health experiences and find support.",
            github: "https://github.com/nkumawat34/Mental_Health_Stories",
            demo: "https://mental-health-frontend.onrender.com/"
          },
          {
            image:Youtube,
            name: "YouTube to MP3 Converter",
            description: "A web-based tool to convert YouTube videos into MP3 format.",
            github: "https://github.com/nkumawat34/Youtube_MP3_Download",
            demo: "https://youtube-mp3-download-frontend.onrender.com/"
          },
        {
            image:ApnaSamaan,
            name:"Apna Samaan",
            description:"This is a fully functional eCommerce website that uses React.js + Bootsrap and CSS in the front end and Firebase in backend for authentication and database.",
            github:"https://github.com/nkumawat34/ApnaSamaan",
            demo:"https://nkumawat34.github.io/ApnaSamaan/"
        } 
        ,
        {
            image:MovieSearchEngine,
            name:"MovieSearchEngine",
            description:"It is Movie search engine where you can search the movies by name. It is built with omdb api, HTML, CSS, Javascript, BootStrap and ReactJS",
            github:"https://github.com/nkumawat34/MovieSearchEngine",
            demo:"https://nkumawat34.github.io/MovieSearchEngine/"

        },
        {
          image:CryptoTracker,  
          name: "Crypto Tracker",
          description: "A real-time cryptocurrency tracking app that displays live data and charts.",
          github: "https://github.com/NeerajKumawat34/crypto-tracker",
          demo: "https://crypto-tracker-demo.com"
        },
        
        
      ]
      
     

  return (
    <div>
      <h1 className='text-4xl text-center font-bold mt-[30px]'>My Recent Works</h1>
      <div className="flex flex-wrap justify-center gap-6 p-5">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>

    </div>
  )
}
