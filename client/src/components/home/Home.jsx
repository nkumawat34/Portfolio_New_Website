import React, { useEffect, useState } from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import Image from "../../images/Neeraj_Kumawat_Passport_Size_Photo.jpg"
import Loader from '../Loaders/Loader';
export default function Home() {

  const [loading,setLoading]=useState(true)

  useEffect(()=>{

    setLoading(false);
  })
  return (

    !loading?
    <div>
      <h1 className='text-center font-mono text-3xl mt-5'> 
      <Typewriter
  options={{
    strings: ['My name is Neeraj Kumawat', 'I am Full stack developer'],
    autoStart: true,
    loop: true,
  }}
/></h1>
    <div className='flex flex-col md:flex-row justify-center mt-[50px]'>
      <div className='mx-auto md:mx-0 sm:mb-5 md:mb-0' >
    <img src={Image} width={"130px"} height={"130px"} className='rounded-xl '/>
      </div>
      <div className='ml-5 flex flex-col content-cetner justify-center'>
  <h3 className='font-sans'>I am a software developer with a passion for solving problems through <strong>web programming.</strong></h3>
  <h3 className='mt-5 font-sans'>I specialize in frontend development and work with <strong>ReactJS, Redux Toolkit, and TailwindCSS.</strong></h3>
  <h3 className='mt-5 font-sans'>I am also skilled in backend development, using <strong>NodeJS, ExpressJS, and MongoDB.</strong></h3>
</div>

    </div>
    </div>:<Loader/>
  )
}
