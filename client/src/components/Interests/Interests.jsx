import React from 'react'
import { useState,useEffect } from 'react';
import Loader from '../Loaders/Loader';
export default function Interests() {

  
    const [loading,setLoading]=useState(true)
  
    useEffect(()=>{
  
      setLoading(false);
    })

    const songs=[
        "Admirin You - Karan Aujla",
        "Excuses - AP Dhillon | Gurinder Gill | Intense",
        "One Love - Shubh",
        "G.O.A.T. - Diljit Dosanjh",
        "Cheques - Shubh"
    ]
    const songList = songs.map((item, index) => (
        <li key={index} className='m-4'>{item}</li>
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
