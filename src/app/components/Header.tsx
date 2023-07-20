'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { faB, faAngleDown,faRightToBracket,faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faAngleDown,faUser,faRightToBracket)




export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [showHomeSubmenu, setShowHomeSubmenu] = useState(false);
  const [showListingsSubmenu, setShowListingsSubmenu] = useState(false);
  const [showDashboardSubmenu, setShowDashboardSubmenu] = useState(false);
  const [showPagesSubmenu, setShowPagesSubmenu] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHomeSubmenu = () => {
    setShowHomeSubmenu(!showHomeSubmenu);
  };

  const toggleListingsSubmenu = () => {
    setShowListingsSubmenu(!showListingsSubmenu);
  };

  const toggleDashboardSubmenu = () => {
    setShowDashboardSubmenu(!showDashboardSubmenu);
  };

  const togglePagesSubmenu = () => {
    setShowPagesSubmenu(!showPagesSubmenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowToggle(window.innerWidth <= 960);
      setMenuOpen(false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`bg-white-100 text-black h-20 relative ${menuOpen ? 'left-0' : 'mx-auto'}`}> {menuOpen && (
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-white-600 z-10"
        onClick={toggleMenu}
      />
    )}
    <nav className="flex justify-start items-center pl-16 py-4 px-6 md:pr-32">
      {showToggle && (
        <div className="flex md:hidden items-center toggle-menu absolute left-0 top-1/2 transform -translate-y-1/2"> <button
            onClick={toggleMenu}
            type="button"
            className="text-black hover:text-pink-600 focus:outline-none text-3xl"
          >
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 11H5v-1h14v1zm0 4H5v-1h14v1zm0-8H5V6h14v1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      )}
      <span className="text-2xl font-bold">
        <img
          className="block relative items-left  mx-10 absolute md:right-1 pr-10 w-fit h-12 mb-2"
          src="/images/logos.png"
          alt="Logo" 
        />
      </span>
      <ul className={`md:flex ${showToggle && menuOpen ? 'absolute left-0 top-16 bg-white border-2 w-1/3 z-20' : 'hidden'}`}>    
      <li className="relative">
            <div
              className="block m-4 md:inline-block md:mt-0 cursor-pointer text-black bg-white-600 "
              onMouseEnter={toggleHomeSubmenu}
              onMouseLeave={toggleHomeSubmenu}
            >
              <div className="flex items-center font-sm text-black hover:text-pink-700">
                <span>Home</span>
                <div className="relative md:m-2 top-1 text-md sm:ml-24">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
            <div
              className="absolute py-2 px-4 bg-white-600 rounded-md md:top-14 sm:left-48 sm:-top-4  md:left-0 z-20 w-72"
              onMouseEnter={toggleHomeSubmenu}
              onMouseLeave={toggleHomeSubmenu}
            >
              {showHomeSubmenu && (
                <ul className='border-2 rounded-md width-72 bg-white'>
                  <li className='bg-white mx-4 border-gray-300 border-b-2'>
                    <Link href="/Listings/ListingScreen1" legacyBehavior>
                      <a className="block py-3 text-black font-medium hover:text-pink-700 bg-white">
                        Home1
                      </a>
                    </Link>
                  </li>
                  <li className='mx-2 bg-white mx-4 border-gray-300 border-b-2'>
                    <Link href="/Listings/ListingScreen2" legacyBehavior>
                      <a className="block py-3 text-black font-medium hover:text-pink-700 bg-white">
                        Home2
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="relative">
            <div
              className="block m-4 md:inline-block md:mt-0 cursor-pointer text-black bg-white-600 "
              onMouseEnter={toggleListingsSubmenu}
              onMouseLeave={toggleListingsSubmenu}
            >
              <div className="flex items-center font-medium text-black hover:text-pink-700">
                <span>Listings</span>
                <div className="relative md:m-2 top-1 text-md sm:ml-20 ">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
            <div
              className="absolute py-2 px-4 bg-white-600rounded-md md:top-14 sm:left-48 sm:top-1 md:bottom-0 md:left-0 z-20 w-72"
              onMouseEnter={toggleListingsSubmenu}
              onMouseLeave={toggleListingsSubmenu}
            >
              {showListingsSubmenu && (
                <ul className='border-2 rounded-md width-72 bg-white'>
                  <li className='bg-white mx-4 border-gray-300 border-b-2'>
                    <Link href="/Listings/ListingScreen1" legacyBehavior>
                      <a className="block py-3 text-black font-medium hover:text-pink-700 bg-white">
                        Listing1
                      </a>
                    </Link>
                  </li>
                  <li className='mx-2 bg-white mx-4 border-gray-300 border-b-2'>
                    <Link href="/Listings/ListingScreen2" legacyBehavior>
                      <a className="block py-3 text-black font-medium hover:text-pink-700 bg-white">
                        Listing2
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="relative">
            <div
              className="block m-4 md:inline-block md:mt-0 cursor-pointer text-black bg-white-600 z-20"
              onMouseEnter={toggleDashboardSubmenu}
              onMouseLeave={toggleDashboardSubmenu}
            >
              <div className="flex items-center font-medium text-black hover:text-pink-700">
                <span>Dashboard</span>
                <div className="relative  md:m-2 top-1 text-md sm:ml-12 sm:left-2 md:left-0  ">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
            <div
              className="absolute py-2 px-4 bg-white-600 sm:left-48 md:top-14 sm:top-4 md:bottom-0 md:left-0  rounded-md z-20 w-72"
              onMouseEnter={toggleDashboardSubmenu}
              onMouseLeave={toggleDashboardSubmenu}
            >
              {showDashboardSubmenu && (
                <ul className='border-2 rounded-md width-72 bg-white'>
                  <li className='bg-white mx-4 border-gray-300 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen1" legacyBehavior>
                      <a className="block py-3 text-black font-medium hover:text-pink-700 bg-white">
                        Dashboard1
                      </a>
                    </Link>
                  </li>
                  <li className='mx-2 bg-white mx-4 border-gray-300 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-3 text-black font-medium hover:text-pink-700 bg-white">
                        Dashboard2
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="relative">
            <div
              className="block m-4 md:inline-block md:mt-0 cursor-pointer z-20 text-black bg-white-600 "
              onMouseEnter={togglePagesSubmenu}
              onMouseLeave={togglePagesSubmenu}
            >
              <div className="flex items-center font-medium text-black hover:text-pink-700">
                <span>Pages</span>
                <div className="relative  md:m-2 top-1 text-md sm:ml-20 sm:left-3 md:left-0">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
            <div
              className="absolute py-2 px-4 bg-white-600 sm:left-48 sm:top-4 md:bottom-0 md:top-14 md:left-0  rounded-md z-20 w-72"
              onMouseEnter={togglePagesSubmenu}
              onMouseLeave={togglePagesSubmenu}
            >
              {showPagesSubmenu && (
                <ul className='border-2 rounded-md width-72 bg-white'>
                  <li className='bg-white mx-4 border-gray-300 border-b-2'>
                    <Link href="/pages/about" legacyBehavior>
                      <a className="block py-3 text-black hover:text-pink-600 bg-white">
                      About Us
                      </a>
                    </Link>
                  </li>
                  <li className='mx-2 bg-white mx-4 ' >
                    <Link href="/pages/contact" legacyBehavior>
                      <a className="block py-3 text-black hover:text-pink-600 bg-white">
                        Contacts
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          
        </ul>
       <div className='flex justify-end items-right text-right'>
       <div className="sm:ml-auto ml-2 lg:ml-48 ">
         <ul className="nav-menu nav-menu-social flex justify-between ">
           <li className="relative ">
             {!isMobile ? (
               <a
                 href="#"
                 data-bs-toggle="modal"
                 data-bs-target="#signup"
                 className="relative  inline-flex items-center px-4 py-2 rounded-lg text-black font-bold"
               >
                 <div className="text-2xl relative mx-2 ">
                   <FontAwesomeIcon
                     icon={faRightToBracket}
                     style={{ color: "#f61f38" }}
                   />
                 </div>
                 <span className="relative whitespace-nowrap">Sign Up</span>
               </a>
             ) : (
               <a href="#" className="relative  px-4 py-2 rounded-lg text-black font-bold">
                 <div className="text-2xl relative mx-2 ">
                   <FontAwesomeIcon icon={faUser} style={{ color: "#f61f38" }} />
                 </div>
               </a>
             )}
           </li>
           <li className="relative mr-0">
             <button className="inline-flex items-center px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-bold h-14 w-48">
               <span className="text-2xl font-bold mr-6 text-white bg-white-100 flex relative left-4">+</span>
               <span>Add Listing</span>
             </button>
           </li>
         </ul>
       </div>
     </div>
      </nav>
    </header>
  );
}
