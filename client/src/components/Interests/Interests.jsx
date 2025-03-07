import React from 'react'
import { useState,useEffect } from 'react';
import Loader from '../Loaders/Loader';
import { FaYoutube } from "react-icons/fa";
export default function Interests() {

  
    const [loading,setLoading]=useState(true)
  
    useEffect(()=>{
  
      setLoading(false);
    })

    const songs = [
      {
          name: "Admirin' You - Karan Aujla",
          link: "https://www.youtube.com/watch?v=k85UB5b6pJU"
      },
      {
          name: "Excuses - AP Dhillon | Gurinder Gill | Intense",
          link: "https://www.youtube.com/watch?v=vX2cDW8LUWk"
      },
      {
          name: "One Love - Shubh",
          link: "https://www.youtube.com/watch?v=0pWsCiBvLOk"
      },
      {
          name: "G.O.A.T. - Diljit Dosanjh",
          link: "https://www.youtube.com/watch?v=cl0a3i2wFcc"
      },
      {
          name: "Cheques - Shubh",
          link: "https://www.youtube.com/watch?v=4tywp83zkmk"
      }
  ];
  
    const songList = songs.map((item, index) => (
        <li key={index} className='m-4 flex'>{item.name}<a href={item.link} target="_blank" >
        <FaYoutube color="red" size={30} className="mx-4 cursor-pointer" />
    </a>
</li>
      ));

    const interests=[
        "Exercise",
        "Journalling",
        "Reading books",
        "Dancing",
        "Listening Music",
        "Watching Documentaries",
        "Reading technical blogs",
        "Watching Kid shows"
    ]  

    const interestlist=interests.map((item, index) => (
        <li key={index} className='m-4'>{item}</li>
      ));
  return (

    !loading?
    <div className='font-sans h-[100%]'>
        <div className='mt-5'>
    
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-mono mt-5 text-center font-bold'>Songs</h1>
            <ul className='text-1xl'>{songList}</ul>
      </div>
      </div>
      <div className=' mt-5'>
      
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-mono mt-5 text-center font-bold'>Things which I love to do</h1>
            <ul className='text-1xl'>{interestlist}</ul>
      </div>
      </div>
    </div>:<Loader/>
  )
}
