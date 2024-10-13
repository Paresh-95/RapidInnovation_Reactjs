import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300 flex flex-col'>
      <img src={item.urlToImage} alt={item.title} className='w-full h-48 object-cover' />

      <div className='p-4 flex-grow'>
        <h2 className='font-semibold text-lg'>{item.title}</h2>
        <p className='text-sm text-gray-600 mt-2'>{item.description}</p>
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
