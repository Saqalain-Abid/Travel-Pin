import React, { useRef, useEffect, useState } from 'react';
import DealsCard from '../Cards/dealsCard';

export default function DealsCarousel() {
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
                <DealsCard
                    name="Panoramic Hotel Lahore"
                    location="Lahore, Pakistan"
                    rating="8.0"
                    reviewText="Very Good"
                    reviewCount="232"
                    image="https://cf.bstatic.com/xdata/images/hotel/square600/633900980.webp?k=114983dae25f4bfac39000d5a163173e11abdf22bc692a5b52768c37522fbcc2&o="
                    link="/"
                />
            </div>
        </div>
    );
}