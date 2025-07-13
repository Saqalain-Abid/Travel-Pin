import React from 'react';

const quickLinks = [
  { label: 'Countries', href: '/' },
  { label: 'Regions', href: '/' },
  { label: 'Cities', href: '/' },
  { label: 'Districts', href: '/' },
  { label: 'Airports', href: '/' },
  { label: 'Hotels', href: '/' },
  { label: 'Places of interest', href: '/' },
  { label: 'Vacation Homes', href: '/' },
  { label: 'Apartments', href: '/' },
  { label: 'Resorts', href: '/' },
  { label: 'Villas', href: '/' },
  { label: 'Hostels', href: '/' },
  { label: 'B&Bs', href: '/' },
  { label: 'Guest Houses', href: '/' },
  { label: 'Unique places to stay', href: '/' },
  { label: 'All destinations', href: '/' },
  { label: 'All flight destinations', href: '/' },
  { label: 'All car rental locations', href: '/' },
  { label: 'All vacation destinations', href: '/' },
  { label: 'Guides', href: '/' },
  { label: 'Discover', href: '/' },
  { label: 'Reviews', href: '/' },
  { label: 'Discover monthly stays', href: '/' },
];

const QuickLinksFooter = () => {
  return (
    <div className="py-4">
      <nav aria-label="Quick Links">
        <ul className="flex flex-wrap gap-2.5 text-sm font-light">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="hover:underline transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinksFooter;
