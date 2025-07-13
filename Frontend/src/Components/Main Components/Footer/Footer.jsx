import { Link } from 'react-router-dom';
import QuickLinksFooter from './QuickLinks';

const footerData = [
  {
    title: 'Support',
    links: [
      { label: 'Coronavirus (COVID-19) FAQs', url: '/' },
      { label: 'Manage your trips', url: '/' },
      { label: 'Contact Customer Service', url: '/' },
      { label: 'Safety Resource Center', url: '/' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Genius loyalty program', url: '/' },
      { label: 'Seasonal and holiday deals', url: '/' },
      { label: 'Travel articles', url: '/' },
      { label: 'Booking.com for Business', url: '/' },
      { label: 'Traveller Review Awards', url: '/' },
      { label: 'Car rental', url: '/' },
      { label: 'Flight finder', url: '/' },
      { label: 'Restaurant reservations', url: '/' },
      { label: 'Booking.com for Travel Agents', url: '/' },
    ],
  },
  {
    title: 'Terms and settings',
    links: [
      { label: 'Privacy & cookies', url: '/' },
      { label: 'Terms & conditions', url: '/' },
      { label: 'Accessibility Statement', url: '/' },
      { label: 'Partner dispute', url: '/' },
      { label: 'Modern Slavery Statement', url: '/' },
      { label: 'Human Rights Statement', url: '/' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Extranet login', url: '/' },
      { label: 'Partner help', url: '/' },
      { label: 'List your property', url: '/' },
      { label: 'Become an affiliate', url: '/' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Booking.com', url: '/' },
      { label: 'How We Work', url: '/' },
      { label: 'Sustainability', url: '/' },
      { label: 'Press center', url: '/' },
      { label: 'Careers', url: '/' },
      { label: 'Investor relations', url: '/' },
      { label: 'Corporate contact', url: '/' },
    ],
  },
];

export default function Footer() {

  return (
    <>
      <div className='max-w-6xl w-full mx-auto'>
        <QuickLinksFooter />
      </div>
      <footer className="bg-[#f1f1f1] py-2 flex flex-col">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-gray-700">

            <div className="grid grid-cols-1 sm:grid-cols-2 py-8 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {footerData.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          className="text-sm hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='py-4 border-[#e0e0e0] border-t text-center'>
              <p className="text-sm">
                Travel-Pin.com is part of Booking Holdings Inc., the world leader in online travel and related services.
              </p>
              <p className="text-sm">
                Copyright &copy; {new Date().getFullYear()} Travel-Pin.com<sup className='text-[8px] font-bold'>TM</sup>. All rights reserved.
              </p>
              <p className="text-xs mt-1">
                <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> |
                <Link to="/terms-of-service" className="text-blue-600 hover:underline ml-1">Terms of Service</Link>
              </p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
