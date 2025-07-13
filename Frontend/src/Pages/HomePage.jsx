import React from 'react'
import HeroSection from '../Components/Main Components/Hero/HeroSection'
import HotelCard from '../Components/UI/Cards/hotelCard'
import Tabs from '../Components/UI/Carousels/CityCarousel/tabs'
import Button from '../Components/UI/Buttons/button'
import CityCarousel from '../Components/UI/Carousels/CityCarousel/cityCarousel'
import PropertyCarousel from '../Components/UI/Carousels/propertyCarousel'
import PopularDestinations from '../Components/UI/populardestination'
import ExploreCarousel from '../Components/UI/Carousels/exploreCarousel'
import DealsCarousel from '../Components/UI/Carousels/dealsCarousel'
import Footer from '../Components/Main Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className="max-w-6xl mx-auto my-8">
        <h1 className="text-3xl font-bold">Still interested in this property?</h1>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HotelCard
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


      <div className="container mx-auto my-3 max-w-6xl">
        <h1 className="text-3xl font-bold">Offers</h1>
        <p className="text-gray-500 text-base font-normal">Promotions, deals, and special offers for you</p>
        <div className="flex flex-wrap">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 p-4 pl-0 mb-6">
            <div className="flex flex-row justify-between h-full border border-gray-200 rounded-md p-4">
              {/* Text Section */}
              <div className="flex flex-col justify-between pr-4 w-2/3">
                <div>
                  <h4 className="text-xl mb-3 font-bold">Quick escape, quality time</h4>
                  <p className="text-sm font-light mb-3">
                    Save up to 20% with a Getaway Deal
                  </p>
                </div>
                <Button text="Save Your Stays" />
              </div>

              {/* Image Section */}
              <div className="w-30 h-auto">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/633900980.webp?k=114983dae25f4bfac39000d5a163173e11abdf22bc692a5b52768c37522fbcc2&o="
                  alt="Hotel"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 p-4 pr-0 mb-6">
            <div
              className="relative border border-gray-300 rounded-md overflow-hidden flex items-end"
              style={{
                backgroundImage: `url('https://cf.bstatic.com/xdata/images/hotel/square600/633900980.webp?k=114983dae25f4bfac39000d5a163173e11abdf22bc692a5b52768c37522fbcc2&o=')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-0" />

              {/* Content */}
              <div className="relative z-10 p-6 text-white w-full sm:w-2/3">
                <p className="text-sm mb-2">Vacation rentals</p>
                <h4 className="text-xl font-semibold mb-2">Live the dream in a vacation home</h4>
                <p className="text-sm font-light mb-2">
                  Choose from houses, villas, cabins, and more
                </p>
                <Button text="Book Yours" locate="/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-3">
        <h1 className="text-3xl font-bold">Quick and easy trip planner</h1>
        <p className="text-gray-500 text-base font-normal">Pick a vibe and explore the top destinations in Pakistan</p>
        <Tabs />
        <CityCarousel />
      </div>

      <div className="max-w-6xl mx-auto my-3">
        <h1 className="text-3xl font-bold">Destinations popular with travelers from Pakistan</h1>
        <PopularDestinations />
      </div>

      <div className="max-w-6xl mx-auto my-3">
        <h1 className="text-3xl font-bold">Explore destinations in Pakistan</h1>
        <ExploreCarousel />
      </div>

      <div className="max-w-6xl mx-auto my-3">
        <h1 className="text-3xl font-bold">Browse by property type</h1>
        <PropertyCarousel />
      </div>

      <div className="max-w-6xl mx-auto my-3">
        <h1 className="text-3xl font-bold">Deals for the weekend</h1>
        <p className="text-gray-500 text-base font-normal">Save on stays for July 18 - July 20</p>
        <DealsCarousel />
      </div>

      <div className="mt-3">
        <Footer />
      </div>
    </>
  )
}

export default HomePage
