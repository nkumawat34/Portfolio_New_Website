import React from 'react'
import { useState,useEffect } from 'react';
import Loader from '../Loaders/Loader';
export default function Book() {

  const [loading,setLoading]=useState(true)
  
    useEffect(()=>{
  
      setLoading(false);
    })


    const books=[
        {
          "title": "The Almanack of Naval Ravikant",
          "author": "Eric Jorgenson"
        },
        {
          "title": "Atomic Habits",
          "author": "James Clear"
        },
        {
          "title": "Rich Dad Poor Dad",
          "author": "Robert Kiyosaki"
        },
        {
          "title": "The Power of Your Subconscious Mind",
          "author": "Joseph Murphy"
        },
        {
          "title": "The Psychology of Money",
          "author": "Morgan Housel"
        },
        {
          "title": "The $100 Startup",
          "author": "Chris Guillebeau"
        },
        {
          "title": "The Secret",
          "author": "Rhonda Byrne"
        },
        {
          "title": "Love yourself like your life depends on it",
          "author": "Kamal Ravikant"
        },
        {
          "title": "Don't Believe Everything You think",
          "author": "Joseph Nguyen"

        },
      
      ]
      const bookslist=books.map((item, index) => (
        <li key={index} className='m-4'>{item.title}-{item.author}</li>
      ));
      
      const blogs=[
        {
          "name": "Naval Ravikant Blogs",
          "url": "https://nav.al/"
        },
        {
          "name": "Derek Sivers",
          "url": "https://sive.rs/"
        },
        {
          "name": "Tiny Buddha",
          "url": "https://tinybuddha.com/"
        },
        {
          "name": "Secret Stories",
          "url": "https://www.thesecret.tv/the-secret-stories/"
        }
      ]
    
      const bloglist=blogs.map((item, index) => (
        <li key={index} className='m-4'>{item.name}-  <a href={item.url} className='text-blue-800'>{item.url}</a></li>
      ));
  return (
    !loading?
    <div>
        <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-center mt-5'>Books I Have Read So Far</h1>
      <ul className='text-1xl mt-5'>
        {bookslist}
      </ul>
      </div>
      <div className='flex flex-col justify-center items-center mt-5'>
      <h1 className='text-3xl text-center mt-5'>Interesting things found on internet</h1>
      <ul className='text-1xl mt-5'>
        {bloglist}
      </ul>
      </div>
    </div>:<Loader/>
  )
}
