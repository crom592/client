import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navItems = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' }
  ];

  return (
    <div className="w-full h-[80px] z-10 bg-light fixed drop-shadow-lg">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl text-primary">
            김성은
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id} className="hover:text-primary duration-300">
              <Link to={item.id} smooth={true} duration={500}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute bg-light w-full px-8'}>
        {navItems.map((item) => (
          <li key={item.id} className="border-b-2 border-zinc-300 w-full">
            <Link onClick={handleClick} to={item.id} smooth={true} duration={500}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
