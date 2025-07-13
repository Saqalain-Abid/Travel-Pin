import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../UI/Logo/logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/currency', label: 'PKR' },
    { to: '/language', label: <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.150.0/images-flags/Gb@3x.png"
        alt="English flag"
        className="w-7 h-7 rounded-full"
      /> },
    { to: '/help', label: <FontAwesomeIcon icon={faCircleQuestion} /> },
    { to: '/list-property', label: 'List your property' },
    { to: '/register',   label: 'Register', btn: true },
    { to: '/login',      label: 'Sign in', btn: true },
  ];

  return (
    <nav className="relative z-20 flex items-center justify-between py-2">
      <Logo />

      {/* hamburger – visible <lg */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-white lg:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* desktop menu */}
      <ul className="hidden lg:flex items-center gap-5">
        {navLinks.map(({ to, label, btn }) => (
          <li key={to}>
            <Link
              to={to}
              className={
                btn
                  ? 'bg-white text-[#0400ff] font-semibold px-3 py-1 rounded'
                  : 'text-white font-semibold'
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* mobile panel */}
      <div
        className={`absolute top-full inset-x-0 bg-[#003B95] lg:hidden transition-transform origin-top ${
          mobileOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {navLinks.map(({ to, label, btn }) => (
            <li key={to}>
              <Link
                onClick={() => setMobileOpen(false)}
                to={to}
                className={
                  btn
                    ? 'block w-full text-center bg-white text-[#003B95] font-bold px-3 py-2 rounded'
                    : 'block text-white font-medium'
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
