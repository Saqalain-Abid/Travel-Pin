import React from 'react';
import Slider from 'react-slick';
import DealsCard from '../Cards/dealsCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="relative py-6">
            <Slider {...settings}>
                <div className="px-2">
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
                <div className="px-2">
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
                <div className="px-2">
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
                <div className="px-2">
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
                <div className="px-2">
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
                <div className="px-2">
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

                {/* Add more <div className="px-2"><DealsCard /></div> as needed */}
            </Slider>
        </div>
    );
}
