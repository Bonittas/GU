"use client"
import React, { useState } from 'react';
import { faB,faS,faRightToBracket, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faAngleDown,faS,faRightToBracket,faMagnifyingGlass)

import HomeScreen2 from './contact';
import Link from 'next/link';

interface Props {}

const HomePage: React.FC<Props> = () => {
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

     <HomeScreen2/>


     <footer className="light-footer skin-light-footer style-2 bg-white z-30">
 <div className="footer-middle mx-48">
  <div className="container my-16 justify-center ">
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full mb-8 lg:mb-0 lg:px-0">
        <div className="footer_widget">
          <img src="/images/logo.png" className=" mb-2" alt="Logo" />
          <div className="address my-6 whitespace-nowrap">
            7742 Sadar Street Range Road, USA<br />United Kingdom GHQ11
          </div>
          <div className="address mt-3">
            40 568 423 6597<br />support@Goodup.com
          </div>
          <div className="address mt-2">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="theme-cl">
                  <i className="lni lni-facebook-filled"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="theme-cl">
                  <i className="lni lni-twitter-filled"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="theme-cl">
                  <i className="lni lni-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="theme-cl">
                  <i className="lni lni-instagram-filled"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="theme-cl">
                  <i className="lni lni-linkedin-original"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mb-8 lg:mb-0 left-16 relative pr-6 flex justify-center ">
        <div className="whitespace-nowrap relative mr-24">
          <h4 className="  py-3 font-bold">Main Navigation</h4>
          <ul className="mx-2">
            <li className="py-3">
              <a href="#">Explore Listings</a>
            </li>
            <li className="py-3">
              <a href="#">Browse Authors</a>
            </li>
            <li className="py-3">
              <a href="#">Submit Listings</a>
            </li>
            <li className="py-3">
              <a href="#">Shortlisted</a>
            </li>
            <li className="py-3">
              <a href="#">Dashboard</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mb-8 lg:mb-0 lg:px-0 relative pr-6">
        <div className="whitespace-nowrap">
          <h4 className="widget_title py-3 font-bold">Business Owners</h4>
          <ul className="mx-2">
            <li className="py-3">
              <a href="#">Browse Categories</a>
            </li>
            <li className="py-3">
              <a href="#">Payment Links</a>
            </li>
            <li className="py-3">
              <a href="#">Saved Places</a>
            </li>
            <li className="py-3">
              <a href="#">Dashboard</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mb-8 lg:mb-0 lg:px-0 relative pr-6">
        <div className="whitespace-nowrap">
          <h4 className="widget_title py-3 font-bold">About Company</h4>
          <ul className="mx-2">
            <li className="py-3">
              <a href="#">Who We Are?</a>
            </li>
            <li className="py-3">
              <a href="#">Our Mission</a>
            </li>
            <li className="py-3">
              <a href="#">Our Team</a>
            </li>
            <li className="py-3">
              <a href="#">Packages</a>
            </li>
            <li className="py-3">
              <a href="#">Dashboard</a>
            </li>
          </ul>
         </div>
       </div>

       <div className="w-full mb-8 lg:mb-0 lg:px-0 relative pr-6 whitespace-nowrap">
         <div className="whitespace-nowrap">
           <h4 className=" text-black font-24 py-3 font-bold text-10">Helpful Topics</h4>
        <ul className="mx-2 ">
            <li className="py-3">
              <a href="#">Site Map</a>
            </li>
            <li className="py-3">
              <a href="#">Security</a>
            </li>
            <li className="py-3">
              <a href="#">Contact</a>
            </li>
            <li className="py-3">
              <a href="#">FAQ's Page</a>
            </li>
            <li className="py-3">
              <a href="#">Privacy</a>
            </li>
        </ul>
      </div>
    </div>
   </div>
  </div>
 </div>
</footer>
    </div>




  );
};

export default HomePage;
