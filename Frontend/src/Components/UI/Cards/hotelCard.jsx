import React from 'react';

export default function HotelCard({
  image,
  name,
  location,
  rating,
  reviewText,
  reviewCount,
  link,
}) {
  return (
    <div className="w-full sm:w-1/2 lg:w-[304px] max-w-full rounded-xl shadow-2xl overflow-hidden bg-white transition-transform hover:scale-[1.02]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-56 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{location}</p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-white bg-blue-600 px-2 py-0.5 rounded">
                {rating}
              </span>
              <div className="flex flex-col space-y-0.5">
                <span className="text-gray-700 text-sm">{reviewText}</span>
                <span className="text-sm text-gray-500">{reviewCount} reviews</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
