import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import DealsCard from '../Cards/dealsCard';

// Dummy Deals Data
const dealsData = [
    {
        name: 'Panoramic Hotel Lahore',
        location: 'Lahore, Pakistan',
        rating: '8.0',
        reviewText: 'Very Good',
        reviewCount: '232',
        originalPrice: 'PKR 15,456',
        discountedPrice: 'PKR 10,819',
        nights: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/square600/633900980.webp?k=114983dae25f4bfac39000d5a163173e11abdf22bc692a5b52768c37522fbcc2&o=',
        link: '/',
    },
    {
        name: 'Dream Executive Guest House',
        location: 'Islamabad, Pakistan',
        rating: '8.1',
        reviewText: 'Very Good',
        reviewCount: '57',
        originalPrice: 'PKR 15,456',
        discountedPrice: 'PKR 10,819',
        nights: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/square240/551997913.jpg?k=b17f268b66745ebffc886e2a6ba6a002ff51da899ef4304bb027c9fca41bbce6&o=',
        link: '/',
    },
    {
        name: 'LOKAL Rooms x Murree Kashmir Point',
        location: 'Murree, Pakistan',
        rating: '8',
        reviewText: 'Very Good',
        reviewCount: '55',
        originalPrice: 'PKR 15,456',
        discountedPrice: 'PKR 10,819',
        nights: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/square240/456728298.jpg?k=f7d71404df1798a19f610ed2c5b199d21ca9bcad07d605c1639633194cd20332&o=',
        link: '/',
    },
    {
        name: 'Park View Hotel Gulberg',
        location: 'Lahore, Pakistan',
        rating: '6.5',
        reviewText: 'Review score',
        reviewCount: '750',
        originalPrice: 'PKR 15,456',
        discountedPrice: 'PKR 10,819',
        nights: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/square240/420247317.jpg?k=2fd5edf56644e9b368b4adb47a744dae052182a9f9f9326fe06862425f915a8e&o=',
        link: '/',
    },
    {
        name: 'Hayat Grand Guest House',
        location: 'Islamabad, Pakistan',
        rating: '8.5',
        reviewText: 'Very Good',
        reviewCount: '33',
        originalPrice: 'PKR 15,456',
        discountedPrice: 'PKR 10,819',
        nights: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/square240/650072397.jpg?k=bb45860c73b61afca81d7d79676436c6ccc59e51082f9598364376a8cac4060f&o=',
        link: '/',
    },
    {
        name: 'Grand Heights Hotel',
        location: 'Murree, Pakistan',
        rating: '7.2',
        reviewText: 'Good',
        reviewCount: '22',
        originalPrice: 'PKR 15,456',
        discountedPrice: 'PKR 10,819',
        nights: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/square240/673779190.jpg?k=1337f97ae6b0f6c16c81fb4769ddba33b03c63607739cb4d436473544e9a3e40&o=',
        link: '/',
    },
];

export default function DealsCarousel() {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderContainerRef = useRef(null);

    const checkOverflow = (slideIndex = currentSlide) => {
        const totalSlides = dealsData.length;
        const visibleSlides = getVisibleSlides();

        setShowLeftArrow(slideIndex > 0);
        setShowRightArrow(slideIndex < totalSlides - visibleSlides);
    };

    const getVisibleSlides = () => {
        const width = window.innerWidth;
        if (width < 640) return 2;
        if (width < 1024) return 3;
        return 4;
    };

    function NextArrow({ onClick }) {
        return showRightArrow ? (
            <div
                className="absolute -right-2 top-40 -translate-y-13 z-10 bg-white hover:bg-white rounded-full p-2 shadow-zinc-800 shadow-lg cursor-pointer"
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
                className="absolute -left-2 top-40 -translate-y-13 z-10 bg-white hover:bg-white rounded-full p-2 shadow-zinc-800 shadow-lg"
                onClick={onClick}
            >

                <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        ) : null;
    }

    useEffect(() => {
        const timeout = setTimeout(checkOverflow, 300); // wait for DOM/layout

        const sliderNode = sliderContainerRef.current?.querySelector('.slick-list');
        if (!sliderNode) return;

        sliderNode.addEventListener('scroll', checkOverflow);
        window.addEventListener('resize', checkOverflow);

        return () => {
            clearTimeout(timeout);
            sliderNode.removeEventListener('scroll', checkOverflow);
            window.removeEventListener('resize', checkOverflow);
        };
    }, []);


    const settings = {
        infinite: false,
        speed: 0,
        slidesToShow: 4,
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
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="relative py-6" ref={sliderContainerRef}>
            <Slider {...settings}>
                {dealsData.map((deal, index) => (
                    <div key={index} className="px-2 mb-4 h-full">
                        <DealsCard {...deal} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
