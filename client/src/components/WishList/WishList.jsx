import React from 'react'

export default function WishList() {

    const items=[
        "Travel to a foreign country with parents",
        "Full freedom to choose where to live and flexible hours",
        "Financially free",
        "Own an independent business",
        "Good physique with muscles",
        "Own a fully customized PC with high specs",
        "Learn boxing and karate"
    ]
    const wishlist=items.map((item, index) => (
        <li key={index} className='m-4'>{item}</li>
      ));
  return (
    <div className='font-sans'>
      
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl mt-5 font-bold'>Things which I want to do before die</h1>
        <ul className='mt-5 text-1xl'>{wishlist}</ul>
      </div>
    </div>
  )
}
