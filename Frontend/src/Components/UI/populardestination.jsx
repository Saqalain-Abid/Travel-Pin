import React from "react";

const destinations = [
  {
    name: "Lahore",
    countryFlag: "pk",
    img: "https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=",
    link: "/",
  },
  {
    name: "Islamabad",
    countryFlag: "pk",
    img: "https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=",
    link: "/",
  },
  {
    name: "Dubai",
    countryFlag: "ae",
    img: "https://cf.bstatic.com/xdata/images/city/600x600/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o=",
    link: "/",
  },
  {
    name: "Karachi",
    countryFlag: "pk",
    img: "https://cf.bstatic.com/xdata/images/city/600x600/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=",
    link: "/",
  },
  {
    name: "Mecca",
    countryFlag: "sa",
    img: "https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o=",
    link: "/",
  },
];

export default function DestinationCards() {
  return (
    <div className="py-6 max-w-screen-xl mx-auto">

      <div className="grid gap-4">
        {/* First row: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destinations.slice(0, 2).map((dest) => (
            <DestinationCard key={dest.name} {...dest} ratio="pt-[66%]" />
          ))}
        </div>

        {/* Second row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {destinations.slice(2).map((dest) => (
            <DestinationCard key={dest.name} {...dest} ratio="pt-[75%]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function DestinationCard({ name, img, link, countryFlag, ratio }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.01] transition-transform duration-300"
    >
      <div className={`relative w-full ${ratio}`}>
        {/* Image */}
        <img
          src={img}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/90 to-transparent z-10" />

        {/* Label */}
        <div className="absolute top-2 left-2 z-20 px-3 py-1 rounded-md text-white text-3xl font-bold flex items-center gap-1">
          {name}  <span className={`fi fi-${countryFlag} w-5 h-4 rounded-sm`} />
        </div>
      </div>
    </a>
  );
}
