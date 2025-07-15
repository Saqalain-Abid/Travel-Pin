import React from 'react';

export default function DealsCard({
  image,
  name,
  location,
  rating,
  reviewText,
  reviewCount,
  link,
}) {
  return (
    <div className="w-full sm:w-1/2 lg:w-[304px] max-w-full rounded-xl shadow-md shadow- overflow-hidden transition-transform hover:scale-[1.02]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-56 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
        <div className='mb-1'>
            <span className='bg-blue-800 text-white py-1 px-3 rounded-sm text-[0.7rem]'>Genius</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{location}</p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-md font-bold text-white bg-blue-800 px-1.5 py-0.5 rounded-tr-sm rounded-tl-sm rounded-br-sm">
                {rating}
              </span>
              <div className="flex flex-col space-y-0.5">
                <span className="text-gray-700 text-sm">{reviewText}</span>
                <span className="text-sm text-gray-500">{reviewCount} reviews</span>
              </div>
            </div>
          </div>
          <div className='my-2'>
            <span className='bg-green-800 text-white p-2 rounded-sm text-[0.7rem]'>Gateway Deal</span>
          </div>
        </div>
      </a>
    </div>
  );
}
