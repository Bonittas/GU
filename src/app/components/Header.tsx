"use client"
import React, { useState } from 'react';
import { faB,faS,faRightToBracket, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faAngleDown,faS,faRightToBracket,faMagnifyingGlass)

import Link from 'next/link';

interface Props {}

const Header: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isListingOpen, setIsListingOpen] = useState<boolean>(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);
  const [isPagesOpen, setIsPagesOpen] = useState<boolean>(false);
  const homeMenuClass = isMenuOpen ? 'block' : 'hidden';
  const listingMenuClass = isListingOpen ? 'block' : 'hidden';
  const dashboardMenuClass = isDashboardOpen ? 'block' : 'hidden';
  const pagesMenuClass = isPagesOpen ? 'block' : 'hidden';
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsListingOpen(false); // Close the listing menu
    setIsDashboardOpen(false); // Close the dashboard menu
    setIsPagesOpen(false); // Close the pages menu
  };

  const toggleListing = () => {
    setIsListingOpen(!isListingOpen);
    setIsMenuOpen(false); // Close the home menu
    setIsDashboardOpen(false); // Close the dashboard menu
    setIsPagesOpen(false); // Close the pages menu
  };

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
    setIsMenuOpen(false); // Close the home menu
    setIsListingOpen(false); // Close the listing menu
    setIsPagesOpen(false); // Close the pages menu
  };
  
  const togglePages = () => {
    setIsPagesOpen(!isPagesOpen);
    setIsMenuOpen(false); // Close the home menu
    setIsListingOpen(false); // Close the listing menu
    setIsDashboardOpen(false); // Close the dashboard menu
  };

  return (
    <div className="bg-white">
      <header className="relative  -left-30">
        <nav className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-10">
            <div className="flex items-center">
            <div className="ml-4">
  <img
    className="block relative -ml-10 -left-20 w-full h-12 "
    src="/images/logos.png"
    alt="Logo"
    
  />
</div>
<div className="relative left-3">
  <button
    type="button"
    className="z-10 inline-flex items-center pr-5 py-2 rounded-md text-sm font-sm text-black  hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 relative"
    id="menu-button"
    aria-expanded={isMenuOpen ? 'true' : 'false'}
    aria-haspopup="true"
    onClick={toggleMenu}
  >
    <span className=" ">Home</span>
    <div className='realtive m-2'> <FontAwesomeIcon icon={faAngleDown}/></div>
  </button>
  <div
    className={`z-10 origin-top-right absolute left-0 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${homeMenuClass}`}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabIndex={-1}
    style={{ top: 'calc(100% + 0.5rem)' }}
  >
    
    <div className="py-1" role="none">
      <Link href="/HomeScreen1"  legacyBehavior>
    <a                                                                               
      className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-pink-700"
      role="menuitem"
      tabIndex={-1}
      id="menu-item-1"
  >
      HomeScreen 1
      </a>
  </Link>
    </div>
    <div className="py-1" role="none">
      <a
        href="/HomeScreen2"
        className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-pink-700"
        role="menuitem"
        tabIndex={-1}
        id="menu-item-1"
      >
        HomeScreen 2
      </a>
    </div>
  </div>
</div>
  <div className="flex items-center ">
    <button
      type="button"
      className=" inline-flex items-center px-5 py-2 rounded-md text-sm font-sm text-black bg-white hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 relative"
      aria-expanded={isListingOpen ? 'true' : 'false'}
      aria-haspopup="true"
      onClick={toggleListing}
    >
      <span className="">Listings</span>
      <div className='realtive m-2'> <FontAwesomeIcon icon={faAngleDown}/></div>
    </button>
    <div
    className={`z-10 origin-top-right absolute left-70  -mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${listingMenuClass}`}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="listings-button"
    tabIndex={-1}
    style={{ top: 'calc(100% + 0.5rem)' }}
  >
    <div className="py-1" role="none">
      <a
        href="/about"
        className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-pink-600"
        role="menuitem"
        tabIndex={-1}
        id="menu-item-1"
      >
          Grid View
        </a>
      
    </div>
  </div>
  <div className="z-10 flex items-center">
  <div className="flex-1">
    <button
      type="button"
      className="inline-flex items-center relative text-sm text-black-700 px-2 bg-white hover:text-pink-600   whitespace-nowrap"
      id="dashboard-button"
      onClick={toggleDashboard}
    >
     User Dashboard
    <div className='realtive m-2'> <FontAwesomeIcon icon={faAngleDown}/></div>
      
      <div
      className={`z-10 origin-top-right absolute left-380 top-50 mt-32 w-56 rounded-md shadow-lg bg-white ${dashboardMenuClass}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="dashboard-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        <a
          href="/about"
          className="block px-4 py-2 text-sm text-black  hover:text-pink-700"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-1"
        >
            Over View
          </a>
        </div>
      </div>
    </button>
  </div>

  <div className="pages1 relative">
    <button
      type="button"
      className="inline-flex items-center  rounded-md text-sm font-md text-black-700 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
      id="dashboard-button"
      aria-expanded={isPagesOpen ? 'true' : 'false'}
      aria-haspopup="true"
      onClick={togglePages}
    >
      Pages
      <div className='realtive m-2'> <FontAwesomeIcon icon={faAngleDown}/></div>
    </button>

    <div
      className={`z-10 origin-top-right absolute left-90 mt-6 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${pagesMenuClass}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="pages-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        <a
          href="/about"
          className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-pink-700"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-1"
        >
          About Us
        </a>
      </div>
    </div>
  </div>
</div>
<div className='relative ml-72'>
<ul className="nav-menu nav-menu-social flex justify-end ">
  <li className="relative ">
    
  <a href="#" data-bs-toggle="modal" data-bs-target="#signup" className=" relative mt-2 right-16 inline-flex items-center px-4 py-2 rounded-lg text-black font-bold">
  
 <div className='text-2xl relative '> <FontAwesomeIcon icon={faRightToBracket} style={{color: "#f61f38",}} /></div>
 
  <span className='relative whitespace-nowrap'>Sign Up</span>
</a>
  </li>
  <li className="relative mr-0">
    <button className="inline-flex items-center px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-bold h-14 w-48">
      <span className="text-2xl font-bold mr-8 text-white bg-white-100 flex relative left-4">+</span>
      <span>Add Listing</span>
    </button>
  </li>
  
</ul>
</div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    </div>

  );
};

export default Header ;




  
