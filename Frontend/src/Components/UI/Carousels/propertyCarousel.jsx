import React, { useRef, useEffect, useState } from 'react';

const properties = [
  {
    name: 'Hotels',
    img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=',
    link: '/',
  },
  {
    name: 'Apartments',
    img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=',
    link: '/',
  },
  {
    name: 'Resorts',
    img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=',
    link: '/',
  },
  {
    name: 'Villas',
    properties: '742 properties',
    img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o=',
    link: '/',
  },
  {
    name: 'Cabins',
    img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/595549239.jpeg?k=ad5273675c516cc1efc6cba2039877297b7ad2b5b3f54002c55ea6ebfb8bf949&o=',
    link: '/',
  },
  {
    name: 'Cottages',
    img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550000.jpeg?k=71eeb3e0996d7f734e57a6fa426c718749a36df768ca5d2fb1dc65fcd7483c1d&o=',
    link: '/',
  },
];

export default function PropertyCarousel() {
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
          className="absolute left-0 top-2/5 -translate-y-1/2 z-10 bg-white hover:bg-white rounded-full p-2 shadow-zinc-800 shadow-lg cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {showRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-2/5 -translate-y-1/2 z-10 bg-white hover:bg-white rounded-full p-2 shadow-zinc-800 shadow-lg cursor-pointer"
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
        className="flex gap-4 overflow-x-auto py-6 pr-6 scrollbar-hide"
      >
        {properties.map((property, index) => (
          <a
            key={index}
            href={property.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[275px] max-w-[275px] shrink-0 bg-white rounded-xl overflow-hidden"
          >
            <div className="aspect-[5/4] w-full">
              <img
                src={property.img}
                alt={property.name}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="py-4 px-0">
              <h3 className="text-lg font-bold">{property.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}