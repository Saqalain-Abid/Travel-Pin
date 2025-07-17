import React from 'react';

export default function DealsCard({
  image,
  name,
  location,
  rating,
  reviewText,
  reviewCount,
  link,
  originalPrice,
  discountedPrice,
  nights,
}) {
  return (
    <div className="w-full max-w-[304px] h-[480px] bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] flex flex-col">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <div className="mb-1">
              <span className="bg-blue-800 text-white py-1 px-3 rounded-sm text-[0.7rem]">Genius</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">{name}</h3>
            <p className="text-gray-500 text-sm mb-2">{location}</p>

            <div className="flex items-center space-x-2 mb-2">
              <span className="text-md font-bold text-white bg-blue-800 px-2 py-1 rounded">
                {rating}
              </span>
              <div className="flex flex-col">
                <span className="text-gray-700 text-sm">{reviewText}</span>
                <span className="text-xs text-gray-500">{reviewCount} reviews</span>
              </div>
            </div>

            <div>
              <span className="bg-green-800 text-white py-1 px-2 text-[0.7rem] rounded-sm">
                Gateway Deal
              </span>
            </div>
          </div>

          {/* Price Section at Bottom */}
          <div className="mt-4 flex justify-end items-end text-right">
            <div className='flex flex-row items-center space-x-1'>
              <p className="text-sm text-gray-600">{nights} nights</p>
              <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
              <p className="text-lg font-semibold text-red-600">{discountedPrice}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
