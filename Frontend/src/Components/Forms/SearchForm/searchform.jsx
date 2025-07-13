import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function SearchForm() {
  const [location, setLocation] = useState('');

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative z-10 -mt-14 md:-mt-8 mx-auto max-w-6xl
                 flex flex-col lg:flex-row items-stretch bg-white
                 border-4 border-yellow-400 rounded-lg shadow-md overflow-hidden"
    >
      {/* Location */}
      <div className="flex items-center gap-3 px-4 py-4 w-100 border-yellow-400 md:border-b-0 lg:border-r-4">
        <FontAwesomeIcon icon={faBed} className="w-5 h-5 text-gray-600" />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where are you going?"
          className="flex-1 bg-transparent outline-none text-sm"
        />
        {location && (
          <button onClick={() => setLocation('')}>
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4 text-gray-400 hover:text-red-500" />
          </button>
        )}
      </div>

      {/* Dates (static text, swap in a date‑picker lib later) */}
      <div className="flex items-center gap-3 px-4  w-100 py-4 border-yellow-400 md:border-b-0 lg:border-r-4">
        <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5 text-gray-600" />
        <span className="text-sm text-gray-700">Wed, Jul 2 — Thu, Jul 3</span>
      </div>

      {/* Guests */}
      <div className="flex items-center gap-3 px-4 w-100 py-4 border-yellow-400 md:border-b-0 lg:border-r-4">
        <FontAwesomeIcon icon={faUsers} className="w-5 h-5 text-gray-600" />
        <span className="text-sm text-gray-700">3 adults · 0 children · 1 room</span>
      </div>

      {/* Search button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium
                   px-8 md:px-10 md:py-2 whitespace-nowrap"
      >
        Search
      </button>
    </form>
  );
}
