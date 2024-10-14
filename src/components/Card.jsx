import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function Card({ item }) {
  const {theme} = useContext(ThemeContext)
  return (
    // <div className=' shadow-xl rounded-lg overflow-hidden border border-black hover:shadow-2xl hover:scale-105 transition  duration-300 flex flex-col'>
    <div className={`${theme==='light' ?'shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)]':'shadow-[8.0px_8.0px_8.0px_rgba(255,255,255,0.2)] hover:shadow-[4.0px_8.0px_8.0px_rgba(255,255,255,0.2)]'} rounded-lg overflow-hidden   hover:scale-105 transition  duration-300 flex flex-col`}>
      <img src={item.urlToImage} alt={item.title} className='w-full h-48 object-cover' />

      <div className='p-4 flex-grow'>
        <h2 className='font-semibold text-lg'>{item.title}</h2>
        <p className='text-md mt-2'>{item.description}</p>
      </div>

      <div className='flex flex-row items-center justify-between'>
      <Link   
        to={item.url} 
        className='text-blue-500 hover:underline mt-4 mb-4 mx-4' 
        target='_blank'
      >
        Read more..
      </Link>
      <p className='mx-5 font-semibold'>{item.source.name}</p>
      </div>
    </div>
  );
}

export default Card;
