import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlaneDeparture,
  faCar,
  faTree,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import NavigationBar from '../Navbar/navbar';



export default function Header() {
  const [active, setActive] = useState('Stays');

  const navItems = [
    { name: 'Stays',         icon: faBed,             route: '' },
    { name: 'Flights',       icon: faPlaneDeparture,  route: 'flights' },
    { name: 'Car-rental',    icon: faCar,             route: 'car-rental' },
    { name: 'Attractions',   icon: faTree,            route: 'attractions' },
    { name: 'Airport-taxis', icon: faTaxi,            route: 'airport-taxis' },
  ];

  return (
    <header className="bg-[#003B95] py-2 text-white flex flex-col">
      <div className="mx-auto w-full max-w-6xl">
        {/* top blue bar */}
        <NavigationBar />

        {/* pill bar */}
        <nav className="mt-3 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-1 sm:gap-2 lg:gap-2 whitespace-nowrap px-1">
            {navItems.map(({ name, icon, route }) => (
              <li key={name}>
                <Link
                  to={`/${route}`}
                  onClick={() => setActive(name)}
                  className={`flex items-center gap-2 py-2 px-4 rounded-full transition
                    ${active === name ? 'border border-white bg-white/15' : ''}
                    hover:bg-white/10`}
                >
                  <FontAwesomeIcon icon={icon} />
                  <span>{name.replace('-', ' ')}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
