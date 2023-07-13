'use client'
import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { faB,faBasketball,faStar, faPenRuler,faPlane,faLocationDot,faWineGlass,faScrewdriver,faCar,faBookOpen,faBuilding ,faS, faStethoscope, faBasketShopping, faUtensils, faHouseChimneyCrack, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faMagnifyingGlass,faStar,faBasketball,faLocationDot, faS,faHouseChimneyCrack,faPlane,faPenRuler,faBookOpen,faCar ,faUtensils,faBuilding,faStethoscope, faBasketShopping, faWineGlass)


const companies=[
 
  {
    url:'/images/Logos1/Hotify.png'
  },
  {
    url:'/images/Logos1/GreenValley.png'
  },
  {
    url:'/images/Logos1/Soft.png'
  },
  {
    url:'/images/Logos1/SkrillDot.png'
  },
  {
    url:'/images/Logos1/Rikada.png'
  },
  {
    url:'/images/Logos1/Hizroo.png'
  },
  {
    url:'/images/Logos1/Rizak.png'
  },
  {
    url:'/images/Logos1/Roozle.png'
  },
  {
    url:'/images/Logos1/Aximum.png'
  },
  {
    url:'/images/Logos1/FireShoot.png'
  },
]
const images1 = [
  {
    url: '/images/Home3/R1.jpg',
    discount:'-20% OFF',
    Feature:'Featured',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },
  {
    url: '/images/Home3/R2.jpg',
    discount:'-20% OFF',
    Feature:'',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },,
  {
    url: '/images/Home3/R3.jpg',
    discount:'-20% OFF',
    availablity:'CLOSED',
    Feature:'Featured',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },
  {
    url: '/images/Home3/R4.jpg',
    discount:'',
    Feature:'',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },
  {
    url: '/images/Home3/R5.jpg',
    discount:'-20% OFF',
    Feature:'Featured',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },
  {
    url: '/images/Home3/R6.jpg',
    discount:'-20% OFF',
    Feature:'',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },
  {
    url: '/images/Home3/R7.jpg',
    discount:'',
    Feature:'Featured',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },
  {
    url: '/images/Home3/R8.jpg',
    discount:'-20% OFF',
    Feature:'',
    Rate:'4.9',
    stars:'',
    reviews:'',
    payment:'$1,800/Night',
    Name: '3112 Comfort Deluxe Space',
    Location:"1.5 km to Town Center",
  
  },
];

const TopCategories =[
  {
cities:'07 cities',
icon:<FontAwesomeIcon icon={faStethoscope}/>,
name:'Dentist',
listings:'607 Listings',
},
{
  cities:'17 cities',
  icon:<FontAwesomeIcon icon={faBuilding } />,
  name:'IT & Banking',
  listings:'76 Listings',
  },
  {
    cities:'19 cities',
    icon:<FontAwesomeIcon icon={faBasketShopping}/>,
    name:'Shoppings',
    listings:'112 Listings',
    },
    {
      cities:'32 cities',
      icon:<FontAwesomeIcon icon={faScrewdriver}/>,
      name:'Home Services',
      listings:'322 Listings',
      },
      {cities:'27 cities',
      icon:<FontAwesomeIcon icon={faBasketball}/>,
      name:'Active Life',
      listings:'161 Listings',
      },
      {cities:'26 cities',
      icon:<FontAwesomeIcon icon={faUtensils }/>,
      name:'Restaurants',
      listings:'172 Listings',
      },
      {cities:'10 cities',
      icon:<FontAwesomeIcon icon={faBookOpen }/>,
      name:'Education',
      listings:'144 Listings',
      },
      {cities:'24 cities',
      icon:<FontAwesomeIcon icon={faHouseChimneyCrack }/>,
      name:'Real Estate',
      listings:'210 Listings',
      },
      {cities:'18 cities',
      icon:<FontAwesomeIcon icon={faWineGlass}/>,
      name:'Event Planning',
      listings:'241 Listings',
      },
      {cities:'06 cities',
      icon:<FontAwesomeIcon icon={faCar}  />,
      name:'Automotive',
      listings:'52 Listings',
      },
      {cities:'08 cities',
      icon:<FontAwesomeIcon icon={faPenRuler}/>,
      name:'Art & Design',
      listings:'97 Listings',
      },
      {cities:'05 cities',
      icon:<FontAwesomeIcon icon={faPlane}/>,
      name:'Hotel & Travel',
      listings:'42 Listings',
      },
      
]
interface Props {}



function HomeScreen3() {
  const [searchTerm, setSearchTerm] = useState('');
const [location, setLocation] = useState('');
const [category, setCategory] = useState('');
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
    <><div className="bg-transparent">
      <header className="relative bg-transparent -left-30">
        <nav className="mx-auto px-4 py-6 bg-transparent max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-10">
            <div className="flex items-center">
            <div className="ml-4">
  <img
    className="block relative -ml-10 -left-20 "
    src="/images/logos.png"
    alt="Logo"
    width={200}
  />
</div>
<div className="relative ">
  <button
    type="button"
    className="z-10 inline-flex items-center px-5 py-2 rounded-md text-sm font-sm text-black bg-transparent hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 relative"
    id="menu-button"
    aria-expanded={isMenuOpen ? 'true' : 'false'}
    aria-haspopup="true"
    onClick={toggleMenu}
  >
    <span className="mr-2">Home</span>
    <svg
        className="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 14z"
          clipRule="evenodd"
        />
      </svg>
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
      <Link href="/about">
    
      className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-pink-700"
      role="menuitem"
      tabIndex={-1}
      id="menu-item-1"
  
      HomeScreen 1
    
  </Link>
    </div>
    <div className="py-1" role="none">
      <a
        href="/about"
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
  <div className="flex items-center ml-4">
    <button
      type="button"
      className=" inline-flex items-center px-5 py-2 rounded-md text-sm font-sm text-black bg-white hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 relative"
      aria-expanded={isListingOpen ? 'true' : 'false'}
      aria-haspopup="true"
      onClick={toggleListing}
    >
      <span className="mr-2">Listings</span>
      <svg
        className="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 14z"
          clipRule="evenodd"
        />
      </svg>
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
      className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-black bg-white hover:text-pink-600  "
      id="dashboard-button"
      onClick={toggleDashboard}
    >
     User Dashboard
      <svg
        className="-mr-1 ml-2 h-5 w-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 14z"
          clipRule="evenodd"
        />
      </svg>
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
      className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-black bg-white hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
      id="dashboard-button"
      aria-expanded={isPagesOpen ? 'true' : 'false'}
      aria-haspopup="true"
      onClick={togglePages}
    >
      Pages
      <svg
        className="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 14z"
          clipRule="evenodd"
        />
      </svg>
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
</div><ul className="nav-menu nav-menu-social flex justify-end ml-auto">
  <li className="mr-3">
  <a href="#" data-bs-toggle="modal" data-bs-target="#signup" className="inline-flex items-center px-4 py-2 rounded-lg hover:bg-pink-600 text-black font-bold">
  
  <svg className="h-15 w-15 text-pink-700 transform rotate-0" viewBox="0 0 20 20">
    <path d="M14 10l-4-4v3H4v2h6v3l4-4z "  rotate={0} fill="currentColor" />
  </svg>
  <span className="mr-1 text-pink-700"  >]</span>
  <span>Sign Up</span>
</a>
  </li>
  <li className="ml-3">
    <button className="inline-flex items-center px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-bold">
      <span className="text-2xl font-bold mr-2 text-white">+</span>
      <span>Add Listing</span>
    </button>
  </li>
  
</ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </div>
    
  <div className="flex items-center justify-center bg-pink">
      <div className="w-full h-full relative">
        <div className="absolute inset-0">
          <img src="/images/banner-2.jpg" alt="banner" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="text-center text-white relative z-10 mt-64 text-white-500">
          <h1 className="text-6xl font-bold mb-2 left-1 font-custom ">Explore Great Place in Your Town</h1>
          <p className="text-md font-medium mb-32">Explore wonderful place to stay, salon, shoping, massage or visit local areas.</p>
          
          <form className="flex flex-wrap justify-center h-60 relative  rounded-md">
          <div className='text-black bg-white h-20  relative top-0 ' ><p className=' relative top-6 font-bold left-4 text-xl text-10'>Find</p></div> 
            <div className=" rounded-md  w-full sm:w-1/2 lg:w-1/3    text-black ">
              <input type="text " className="w-full  py-2 px-6 h-20  "  placeholder="Nail salons, plumbers, takeout..." />
            </div>
            <div className='text-black bg-white h-20  relative top-0' ><p className=' relative top-6 font-bold text-xl'>Where</p></div> 
            <div className="w-full sm:w-1/2 lg:w-1/3  text-black">
              <input type="text"  className="w-full  py-2 px-3 h-20 text-black" placeholder="San Francisco, CA " />
            </div>
           
            <div className="w-full sm:w-1/2 lg:w-32  ">
            <button className="w-full bg-pink-600 h-20 text-white font-bold py-2 px-4 rounded-md" type="button">
  Search
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-4 h-4 ml-2">
    <path d="M15.5 14h-.79l-.28-.27a6.53 6.53 0 1 0-.7.7l.27.28v.79l4.25 4.24 1.42-1.42-4.24-4.25zm-6 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" />
    <path d="M9.5 4a5.5 5.5 0 0 1 5.5 5.5c0 1.21-.39 2.32-1.05 3.23l4.04 4.04a.996.996 0 1 1-1.41 1.41l-4.04-4.04A5.467 5.467 0 0 1 9.5 14a5.5 5.5 0 0 1 0-11z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
</button>
            </div>
          </form>
        </div>

        
</div>
      </div>
    

      <div className="container mx-auto my-20">
      <h2 className=" flex items-center justify-center text-lg text-gray-700 ">Our Partners</h2>
  <div className="flex items-center justify-center">
  
    <h2 className="text-4xl font-bold mr-2 text-gray-700">We Have Worked with</h2>
    <h2 className="text-4xl font-bold text-pink-600">10,000+</h2>
  </div>
  <p className="text-4xl font-medium mb-12 text-gray-700 flex items-center justify-center">Trusted Companies</p>
          
          
    <div className="container mx-auto">
  <div className="grid grid-cols-6 gap-6">
    {companies.slice(0, 6).map((image, index) => (
      <div className="col-span-1 p-2" key={index}>
        <img
          src={image.url}
          className="w-full object-fit-cover rounded-t-md h-16"
        />
      </div>
    ))}
  </div>
  <div className="grid grid-cols-6 gap-2 mt-4">
    <div className="col-start-2 col-span-1 p-2">
      <img
        src={companies[6].url}
        className="w-full object-fit-cover rounded-t-md"
      />
    </div>
    <div className="col-start-3 col-span-1 p-2">
      <img
        src={companies[7].url}
        className="w-full object-fit-cover rounded-t-md"
      />
    </div>
    <div className="col-start-4 col-span-1 p-2">
      <img
        src={companies[8].url}
        className="w-full object-fit-cover rounded-t-md"
      />
    </div>
    <div className="col-start-5 col-span-1 p-2">
      <img
        src={companies[9].url}
        className="w-full object-fit-cover rounded-t-md"
      />
    </div>
  </div>
</div>
</div>


      <div className="container mx-auto ">
      <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mt-10 mb-16">
              <div className="sec_title relative pt-10 text-center mb-5">
                <h6 className="text-muted mb-0 text-xl text-red">Book Your Space</h6>
                <h2 className="font-bold text-4xl">Book Your Room in California
</h2>
              </div>
            </div>
          </div>
        </div>

        
  <div className="flex flex-wrap justify-center">
    {images1.map((image) => (
      <div className="w-full sm:w-full sm:h-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2" key={image?.url}>
        <div className="h-64 relative">
          <img
            src={image?.url}
            alt={image?.Name}
            className="absolute w-full h-full object-cover rounded-t-md"
            style={{ minWidth: "100%", minHeight: "100%" }}
          />
          
            {image?.discount && (
    <button className="relative m-2 left-4 z-10 px-2 text-sm bg-orange-500 w-24 h-8 rounded-md text-bold text-white">
      {image?.discount}
            </button>
          )}
         
          {image?.Feature && (
    <button className="relative mt-2 left-4 z-10 px-2 text-sm bg-red-600 w-24 h-8 rounded-md text-white text-bold">
      {image?.Feature}
            </button>
          )}
         
        </div>
        <div className='bg-white border-2 rounded-b-md'>
        <div className="text-center h-16 rounded-b-md relative pr-56 font-bold pt-5 whitespace-nowrap">
            {image?.payment}
          </div>
          <div className="text-center h-16 rounded-b-md relative pr-56 font-bold pt-5 whitespace-nowrap">
            {image?.Name}
          </div>
          <div className="text-center h-16 rounded-b-md relative pr-56 font-bold pt-5 whitespace-nowrap">
            {image?.Location}
          </div>
          
          <div className="h-10 bg-white round-b-md">
            <button className="relative bottom-64 left-10 z-10 w-16 h-16 rounded-md px-2 text-sm bg-green-800  text-white font-bold">
              {image?.Rate}
            </button>
            <div className="text-center h-16 rounded-b-md relative pr-56 font-bold pt-5 whitespace-nowrap">
            {image?.reviews}
          </div>
          </div>
          <button className="relative left-16 pb-10 mb-10 z-10 w-64 h-20 hover:bg-green-600 rounded-full px-2 text-sm bg-gray-300  text-white  font-bold">
              <p className='p-2'>Book Now</p>
            </button>
       </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-gray-100 relative bottom-10 '>
  <div className="container mx-auto relative my-14 top-5">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12 mt-10 mb-16">
        <div className="sec_title relative pt-10 text-center mb-5">
          <h6 className="text-muted mb-0 text-xl text-red-600">Popular Categories</h6>
          <h2 className="font-bold text-4xl">Browse Top Catagories</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container mx-auto ">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
    {TopCategories.map((category) => (
      <div className="flex flex-col items-center justify-center w-full h-64 relative rounded-md bg-white p-4 mb-4" >
        <button className="relative bottom-4 right-16 m-5 rounded-md hover:bg-green-700 hover:text-white text-sm text-green-700 bg-green-100 h-8 w-1/3">
          {category.cities}
        </button>
        <div className="">
          <div className="text-4xl hover:text-white flex justify-center m-6 relative text-red-500 w-20 h-20 p-5 rounded-full bottom-11 border-2 bg-pink-100 hover:bg-red-600 ">
            {category.icon}
          </div>
        </div>
        <div className="text-gray-700 text-center  font-bold text-xl relative bottom-8">{category.name}</div>
        <div className=" text-gray-700 text-center mt-2 relative bottom-8 text-lg">{category.listings}</div>
      </div>
    ))}
  </div>
</div>
   
   </div>
  



<section
  className=" text-center relative h-screen"
  style={{ background: '#353535 url(/images/Home3/bg.jpg)', zIndex: '1' }}
  data-overlay="7"
>
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-7 col-md-10">
        <div className="relative top-16">
          <h2 className="text-white font-bold text-4xl">Best In Canada</h2>
          <h3 className="text-white font-medium mb-4 text-4xl">
            Visit The Best Spa &amp; Hotels in California
          </h3>
          <p className="mb-4 text-white">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident
          </p>
         
          <button className="btn btn-primary mt-4" style={{ background: 'white' }}>
            Explore &amp; Submit Listings
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



   <div className="bg-green-800 relative h-100">
      <img src="/images/landing-bg.png" alt="landing" className="absolute  h-100 bg-pink-700 w-full h-full object-cover z-20" />

      <div className="container py-3 relative mt-10 z-20">
        <div className="row justify-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title relative text-center mb-5">
              <h6 className="text-white relative mt-32 text-xl">Subscribe Now</h6>
              <h2 className="font-bold text-white text-4xl relative left-">Get All Updates &amp; Advance Offers</h2>
            </div>
          </div>
        </div>

        <div className="row items-center justify-center relative ml-64 w-1/2 left-56 mt-16 mb-24">
          <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
            <form className="bg-white rounded-md p-1 h-20">
              <div className="row no-gutters">
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                  <div className="form-group my-5 relative">
                    <input type="text" className="form-control border-0 text-black m-2" placeholder="Enter Your Email Address" />
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-48 relative ml-auto bottom-20 mr-6 mt-6 mx-2 left-5  flex justify-between">
                  <button className="w-full bg-gray-600 h-16 text-white font-bold py-2 px-2 rounded-md whitespace-nowrap" type="button">
                    Search
                    <div className='text-white-500'><FontAwesomeIcon icon={faMagnifyingGlass } /></div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>    
 </>
  );
}


export default HomeScreen3;
