import React from 'react'

export default function Contact() {
  return (
    <div>
      
      <h1 className='text-center text-3xl font-bold'>Contact Us</h1>
      <div className='flex flex-col justify-center items-center '>
       
        <div className='flex mt-5'>
            <div className='flex flex-col'>
            <input className='border-2 rounded-lg border-gray-500 outline-gray-500'/>
            <h3>First Name</h3>
            </div>
            <div className='flex flex-col ml-[40px]'>
            <input className='border-2 rounded-lg border-gray-500 outline-gray-500'/>
            <h3>Last Name</h3>
                </div>

        </div>
        <div className='flex flex-col  w-[410px] mt-[30px]'>
            <h1 className=''>Email</h1>
            <input className='border-2 mt-2 w-64 rounded-lg border-gray-500 outline-gray-500' />
            <h3 className='mt-2'> Ex-nkumawat34@gmail.com</h3>
        </div>
        <div className='flex flex-col  w-[410px] mt-[30px]'>
            <h1 className=''>Message</h1>
            <textarea className='border-2 mt-2 w-[500px] h-32 rounded-xl border-gray-500 outline-gray-500'/>
           
        </div>
        <button className='text-2xl mt-5 text-white bg-black px-8 py-2 rounded-lg'>Submit</button>
      </div>
    </div>
  )
}
