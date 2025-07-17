import React from 'react';
import Slider from 'react-slick';
import DealsCard from '../Cards/dealsCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <FaChevronRight className="text-black w-4 h-4" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <FaChevronLeft className="text-black w-4 h-4" />
        </div>
    );
}

export default function DealsCarousel() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative py-6">
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
