import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

export default function UniversalCarousel({ data = [], renderCard, slidesToShowConfig }) {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderContainerRef = useRef(null);

    const checkOverflow = (slideIndex = currentSlide) => {
        const totalSlides = data.length;
        const visibleSlides = getVisibleSlides();

        setShowLeftArrow(slideIndex > 0);
        setShowRightArrow(slideIndex < totalSlides - visibleSlides);
    };

    const getVisibleSlides = () => {
        const width = window.innerWidth;
        if (width < 640) return slidesToShowConfig?.sm || 2;
        if (width < 1024) return slidesToShowConfig?.md || 3;
        return slidesToShowConfig?.lg || 4;
    };

    function NextArrow({ onClick }) {
        return showRightArrow ? (
            <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer"
                onClick={onClick}
            >
                <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        ) : null;
    }

    function PrevArrow({ onClick }) {
        return showLeftArrow ? (
            <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer"
                onClick={onClick}
            >
                <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        ) : null;
    }

    useEffect(() => {
        const timeout = setTimeout(checkOverflow, 300);

        const sliderNode = sliderContainerRef.current?.querySelector('.slick-list');
        if (!sliderNode) return;

        sliderNode.addEventListener('scroll', checkOverflow);
        window.addEventListener('resize', checkOverflow);

        return () => {
            clearTimeout(timeout);
            sliderNode.removeEventListener('scroll', checkOverflow);
            window.removeEventListener('resize', checkOverflow);
        };
    }, [data]);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShowConfig?.lg || 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
            checkOverflow(newIndex);
        },
        afterChange: (index) => {
            checkOverflow(index);
        },
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: slidesToShowConfig?.lg || 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slidesToShowConfig?.md || 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: slidesToShowConfig?.sm || 2,
                },
            },
        ],
    };

    return (
        <div className="relative py-6" ref={sliderContainerRef}>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="px-2 mb-4 h-full">
                        {renderCard(item)}
                    </div>
                ))}
            </Slider>
        </div>
    );
}
