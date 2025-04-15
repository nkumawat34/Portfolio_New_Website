import React, { useState } from 'react';
import axios from 'axios'
import validator from "validator";
import Loader from '../Loaders/Loader';
export default function Contact() {

  const [firstname,setFirstName]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const [loading,setLoading]=useState(false)

  const validateEmail = () => {
   
    if (validator.isEmail(email)) {
        return 1;
    } else {
        return 0;
    }
};

  function onSubmit()
  {
  
   if(firstname=='' || lastname=='' || email=='' || message=='' )
      {
        alert("Please fill all the fields")
      }
      else
      {
        if(!validateEmail(email))
          alert("Please write valid email")
        else
        {
          setLoading(true)
          axios
    .post(process.env.REACT_APP_SERVER_URL+"/api/contact/submit", {
      firstName: firstname,
      lastName:lastname,
      email:email,
      message:message
    })
    .then((response) => {
      //console.log(response.data)
      setLoading(false)
      alert("Submitted")
      
      setFirstName("")
      setLastname("")
      setMessage("")
      setEmail("")
    })
    .catch((error)=>{
      alert(error.message)
    })
        }  
      }
    
    }  
    

  return (
    <div className="flex flex-col items-center px-5 py-10">
      <h1 className="text-center text-3xl font-bold mb-6">Contact Us</h1>

      
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-md">
        <div className="flex flex-col w-full">
          <label htmlFor="firstName" className="font-medium">First Name</label>
          <input id="firstName" type="text" value={firstname} placeholder="Enter first name" className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500" onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastName" className="font-medium">Last Name</label>
          <input id="lastName" type="text" value={lastname} placeholder="Enter last name" className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500" onChange={(e)=>setLastname(e.target.value)} />
        </div>
      </div>

      
      <div className="flex flex-col w-full max-w-md mt-5">
        <label htmlFor="email" className="font-medium">Email</label>
        <input id="email" type="email" value={email} placeholder="example@gmail.com" className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500 mt-1" onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className="flex flex-col w-full max-w-md mt-5">
        <label htmlFor="message" className="font-medium">Message</label>
        <textarea id="message" placeholder="Write your message..." value={message} className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500 mt-1 h-32 resize-none" onChange={(e)=>setMessage(e.target.value)}/>
      </div>

      <button className="text-xl mt-5 text-white bg-black px-6 py-2 rounded-lg hover:bg-gray-800 transition" onClick={onSubmit} disabled={loading}>
      {loading ? <Loader /> : "Submit"}
      </button>
    </div>
  );
}
