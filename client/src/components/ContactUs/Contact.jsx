import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center px-5 py-10">
      <h1 className="text-center text-3xl font-bold mb-6">Contact Us</h1>

      {/* Name Fields */}
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-md">
        <div className="flex flex-col w-full">
          <label htmlFor="firstName" className="font-medium">First Name</label>
          <input id="firstName" type="text" placeholder="Enter first name" className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastName" className="font-medium">Last Name</label>
          <input id="lastName" type="text" placeholder="Enter last name" className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500" />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col w-full max-w-md mt-5">
        <label htmlFor="email" className="font-medium">Email</label>
        <input id="email" type="email" placeholder="example@gmail.com" className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500 mt-1" />
      </div>

      {/* Message Box */}
      <div className="flex flex-col w-full max-w-md mt-5">
        <label htmlFor="message" className="font-medium">Message</label>
        <textarea id="message" placeholder="Write your message..." className="border-2 rounded-lg border-gray-500 p-2 outline-gray-500 mt-1 h-32 resize-none" />
      </div>

      {/* Submit Button */}
      <button className="text-xl mt-5 text-white bg-black px-6 py-2 rounded-lg hover:bg-gray-800 transition">
        Submit
      </button>
    </div>
  );
}
