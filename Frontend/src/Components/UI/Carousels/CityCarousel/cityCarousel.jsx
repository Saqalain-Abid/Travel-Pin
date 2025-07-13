import React, { useRef, useEffect, useState } from 'react';

const cities = [
  {
    name: 'Lahore',
    distance: '2.3 km away',
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=',
    link: '/',
  },
  {
    name: 'Sialkot',
    distance: '104 km away',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/779298.jpg?k=da4edf7490aba59851acfa1408375c4523ab00a600d3715e6b43407389e1331e&o=',
    link: '/',
  },
  {
    name: 'Rawalpindi',
    distance: '254 km away',
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/633457.jpg?k=3ad8da46014cdb4e1c32103af31901b257218fc4c19395e1bafca75e000f0897&o=',
    link: '/',
  },
  {
    name: 'Islamabad',
    distance: '265 km away',
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
    link: '/',
  },
  {
    name: 'Peshawar',
    distance: '373 km away',
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/886699.jpg?k=889c52ffd8ccf862f6ae020cec9679c9b67924dc08dda1fabb8834fb299bf203&o=',
    link: '/',
  },
  {
    name: 'Karachi',
    distance: '1032 km away',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=',
    link: '/',
  },
];

export default function CityCarousel() {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Check scroll position to show/hide buttons
  const updateScrollButtons = () => {
    const el = containerRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth > el.clientWidth;
    setShowLeft(scrollable && el.scrollLeft > 0);
    setShowRight(scrollable && el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, []);

  const handleScroll = () => {
    updateScrollButtons();
  };

  const scroll = (dir) => {
    const el = containerRef.current;
    if (!el) return;
    const distance = 300;
    el.scrollBy({ left: dir === 'left' ? -distance : distance, behavior: 'smooth' });

    // Wait for scroll to finish, then update
    setTimeout(updateScrollButtons, 300);
  };

  // Drag-to-scroll logic
  const handleMouseDown = (e) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX;
    el.scrollLeft = scrollLeft - walk;
    updateScrollButtons();
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative">
      {showLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-13 z-10 bg-white hover:bg-white rounded-full p-2 shadow-zinc-800 shadow-lg cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {showRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-13 z-10 bg-white hover:bg-white rounded-full p-2 shadow-zinc-800 shadow-lg cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto py-3 pr-6 scrollbar-hide"
      >
        {cities.map((city, index) => (
          <a
            key={index}
            href={city.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[170px] max-w-[170px] shrink-0 bg-white rounded-xl overflow-hidden"
          >
            <div className="aspect-[5/4] w-full">
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="py-4 px-0">
              <h3 className="text-lg font-bold">{city.name}</h3>
              <p className="text-sm text-gray-500">{city.distance}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}