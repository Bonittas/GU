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
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

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
      setShowToggle(window.innerWidth <= 1200);
      setMenuOpen(false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`bg-white text-black h-20 top-0 z-50 w-full sticky relative   ${menuOpen ? 'left-0 ' : 'mx-auto'}`}> {menuOpen && (
      <div
        className="absolute left-0 sm:ml-8   h-screen w-screen bg-white-600 z-20"
        onClick={toggleMenu}
      />
    )}
    <nav className="flex justify-start items-center sm:pl-8  md:pr-32">
      {showToggle && (
        <div className="flex md:hidden relative  toggle-menu    transform -translate-y-1/2"> 
        <button
            onClick={toggleMenu}
            type="button"
            className="text-black hover:text-pink-600 relative top-8    focus:outline-none text-2xl"
          >
            <svg className="h-10 w-10 xs:h-8 xs:w-8 mr-1 fill-current" viewBox="0 0 24 24">
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
     <span className="text-2xl md:left-0 sm:left-20 top-4 xs:left-auto sm:bottom-2 xs:bottom-2 absolute lg:left-32 font-bold">
  <img
    className="abolute w-fit lg:h-12 md:h-10 xs:h-10  xs:left-auto sm:left-24 lg:bottom-0 sm:bottom-2 sm:h-10 sm:mb-6 xs:ml-8 lg:ml-4 md:ml-4"
    src="/images/logos.png"
    alt="Logo" 
  />
</span>
      <ul className={`md:flex   lg:ml-16 sm:right-2 xs:right-2 lg:right-0 md:right-0 sm:mt-0 xs:mt-0 sm:top-20 md:mt-2 lg:mt-2 xs:top-20 xs:border-2 xs:rounded-md xs:border-gray-100 sm:border-2 sm:rounded-md sm:border-gray-100 md:border-none lg:border-none  lg:top-2 md:top-2  absolute sm:left-2 md:left-56 lg:left-72 ${showToggle && menuOpen ? 'absolute   sm:right-32  sm:round-md sm:bg-white     w-1/3 z-20' : 'hidden'}`}>    
      <li className="relative">
            <div
              className="block mr-4 md:inline-block lg:p-0 md:p-0 sm:mx-4 sm:p-4 md:mt-0 cursor-pointer text-black bg-white-600 "
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
                <ul className='border-2 rounded-md width-full bg-white'>
                  <li className='bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen1" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                      HomeScreen1
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                       HomeScreen2
                      </a>
                    </Link>
                  </li>
                  <li className='bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen1" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                      HomeScreen3
                      </a>
                    </Link>
                  </li>
                  <li className='bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen1" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                      HomeScreen4
                      </a>
                    </Link>
                  </li>
                  <li className='bg-white mx-4 '>
                    <Link href="/Listings/ListingScreen1" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        HomeScreen5
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="relative">
            <div
              className="block mr-4 md:inline-block lg:p-0 md:p-0 sm:p-4 sm:border-t-2 lg:border-none md:border-none sm:mx-4 sm:border-gray-300 md:mt-0 cursor-pointer text-black bg-white-600 "
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
                  <li className='bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen1" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Grid Layout
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        List Layout
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Map Styles
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Listings/ListingScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Single Listing
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 '>
                    <Link href="/Listings/ListingScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Author Detail
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="relative">
            <div
              className="block mr-4 md:inline-block lg:p-0  md:p-0 sm:p-4 sm:border-t-2 lg:border-none md:border-none sm:mx-4 sm:border-gray-300 md:mt-0 cursor-pointer text-black bg-white-600 z-20"
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
                  <li className='bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen1" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className='bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen1" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        My Listing
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Add Listing
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Saved Listing
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        My Bookings
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Wallet
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Messages
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        My Profile
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4'>
                    <Link href="/Dashboard/DashboardScreen2" legacyBehavior>
                      <a className="block py-5 text-black font-medium hover:text-pink-700 bg-white">
                        Changed Password
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="relative">
            <div
              className="block mr-4 md:inline-block lg:p-0 md:p-0 sm:p-4 sm:border-t-2 lg:border-none md:border-none sm:mx-4 sm:border-gray-300  md:mt-0 cursor-pointer z-20 text-black bg-white-600 "
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
                <li className=' bg-white mx-4 border-gray-200 border-b-2' >
                <Link href="/pages/contact" legacyBehavior>
                  <a className="block py-5 text-black hover:text-pink-600 bg-white">
                    Blog Style
                  </a>
                </Link>
              </li>
                  <li className='bg-white mx-4 border-gray-200 border-b-2'>
                    <Link href="/Pages/about" legacyBehavior>
                      <a className="block py-5 text-black hover:text-pink-600 bg-white">
                      About Us
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2' >
                    <Link href="/pages/contact" legacyBehavior>
                      <a className="block py-5 text-black hover:text-pink-600 bg-white">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li className=' bg-white mx-4 border-gray-200 border-b-2' >
                  <Link href="/pages/contact" legacyBehavior>
                    <a className="block py-5 text-black hover:text-pink-600 bg-white">
                      Check Out
                    </a>
                  </Link>
                </li>
                <li className=' bg-white mx-4 border-gray-200 border-b-2' >
                <Link href="/pages/contact" legacyBehavior>
                  <a className="block py-5 text-black hover:text-pink-600 bg-white">
                    Pricing
                  </a>
                </Link>
              </li>
              <li className=' bg-white mx-4 border-gray-200 border-b-2' >
              <Link href="/pages/contact" legacyBehavior>
                <a className="block py-5 text-black hover:text-pink-600 bg-white">
                  Sign Up
                </a>
              </Link>
            </li>
            <li className=' bg-white mx-4 border-gray-200 border-b-2' >
            <Link href="/pages/contact" legacyBehavior>
              <a className="block py-5 text-black hover:text-pink-600 bg-white">
                Sign In
              </a>
            </Link>
          </li>
          <li className=' bg-white mx-4 border-gray-200 border-b-2' >
          <Link href="/pages/contact" legacyBehavior>
            <a className="block py-5 text-black hover:text-pink-600 bg-white">
              Privacy Policy
            </a>
          </Link>
        </li>
        <li className=' bg-white mx-4 border-gray-200 border-b-2' >
        <Link href="/pages/contact" legacyBehavior>
          <a className="block py-5 text-black hover:text-pink-600 bg-white">
            FAQs
          </a>
        </Link>
      </li>
      <li className=' bg-white  ' >
      <Link href="/pages/contact" legacyBehavior>
        <a className="block py-5 text-black hover:text-pink-600 bg-white">
          404 Page
        </a>
      </Link>
    </li>
                </ul>
              )}
            </div>
          </li>
          
        </ul>
      
      </nav>
      <div className='flex justify-end items-right text-right'>
       <div className="   sm:mx-4 sm:top-2 sm:mr-2 xs:mr-0 xs:top-2 md:mr-16 md:top-2 lg:top-2  relative  mx-auto">
         <ul className="nav-menu nav-menu-social flex justify-between ">
           <li className="relative md:bottom-0 lg:bottom-0 xs:bottom-12 sm:bottom-12">
             {!isMobile ? (
               <a
                 href="#"
                 data-bs-toggle="modal"
                 data-bs-target="#signup"
                 className="relative  inline-flex items-center px-2 py-2 rounded-lg text-black font-bold"
               >
                 <div className="text-2xl relative mr-1 top-2">
                   <FontAwesomeIcon
                     icon={faRightToBracket}
                     style={{ color: "#f61f38" }}
                   />
                 </div>
                 <span className="relative whitespace-nowrap top-2">Sign Up</span>
               </a>
             ) : (
               <a href="#" className="relative  px-4 py-2 rounded-lg text-black font-bold">
                 <div className="text-2xl relative text-red-500 text-center xs:bottom-0 md:bottom-2 ">
                   <FontAwesomeIcon icon={faUser}  />
                 </div>
               </a>
             )}
           </li>
           <li className="relative ml-2 md:bottom-0 xs:bottom-8 sm:bottom-8">
             <button className="inline-flex items-center xs:top-2 sm:top-2 md:top-2 px-4 py-2 rounded-lg bg-red-500  text-white font-bold lg:h-14 sm:h-12 sm:w-36 lg:w-48">
               <span className="lg:text-2xl sm:text-xl whitespace-wrap py-2 font-bold mr-2 text-white bg-white-100 flex relative sm:left-1 lg:left-0">+</span>
               <span className='text-center left-2 relative'>Add Listing</span>
             </button>
           </li>
         </ul>
       </div>
     </div>
    </header>
  );
}
