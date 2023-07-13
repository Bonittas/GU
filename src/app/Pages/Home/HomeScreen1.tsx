import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { faB,faS,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faS, faMagnifyingGlass )



const ArrowButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/some-page');
  };

  return (
    <button
      className="absolute right-0 bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 ease-in-out focus:outline-none z-20"
      onClick={handleClick}
    >
      <i className="lni lni-arrow-right-circle text-white"></i>
    </button>
  );
};
const FAQ=[{
  question:'Can I get GoodUp listing for free',
  answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
},
{
  question:'How To Permanently Delete Files From Windows',
  answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
},
{
  question:'Can I Get GoodUp Listing For Free',
  answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
},
{
  question:'For GoodUp which license is better for business purpose',
  answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
}
]
const images = [
  {
    url: '/images/Dentist.jpg',
    availability:'12 cities',
    description: 'Dentists',
    
  },
  {
    url: '/images/suit.jpg',
    availability:'14 cities',
    description: 'Dry Cleaning',
  },
  {
    url: '/images/brush.jpg',
    availability:'32 cities',
    description: 'Spa & Massage',
  },
  {
    url: '/images/era.jpg',
    availability:'19 cities',
    description: 'Home Services',
  },]
  const images1 = [
    {
      url: '/images/Wedding.jpg',
      availability:'closed',
      Feature:'Featured',
      profile:'/images/pr1.png',
      Event:'WEDDING',
      Name: 'Rajwara Marriage Home',
      Location:"Liverpool, London UK",
      PhoneNo:"+91 365 795 4526",
      Rate:'4.3',
      stars:'',
      dateTime:'2 min ago',      
    },
    {
      url: '/images/sport.jpg',
      availability:'closed',
      Feature:'',
      Event:'SPORTS',
      profile:'/images/pr2.png',
      Name: 'Dry Cleaning',
      Location:"San Denever, USA      ",
      PhoneNo:"+91 365 874 6310      ",
      Rate:'3.5',
      stars:'',
      dateTime:'10 min ago',  
    },
    {
      url: '/images/hotels.jpg',
      availability:'closed',
      Feature:'',
      Event:'HOTELS',
      profile:'/images/pr3.png',
      Name: 'Dry Cleaning',
      Location:"California, USA",
      PhoneNo:"+91 365 874 2140",
      Rate:'4.4',
      stars:'',
      dateTime:'3 hr ago',  
    },
    {
      url: '/images/zym.jpg',
      availability:'closed',
      Feature:'',
      Event:'ZYM & HEALTH',
      profile:'/images/pr4.png',
      Name: 'Dry Cleaning',
      Location:"New Wshington, UK",
      PhoneNo:"+91 368 740 5100",
      Rate:'4.9',
      stars:'',
      dateTime:'1 day ago',  
    },
    {
      url: '/images/beauty.jpg',
      availability:'closed',
      Feature:'',
      Event:'BEAUTY AND MAKEUP',
      profile:'/images/pr5.png',
      Name: 'Dry Cleaning',
      Location:"New Wshington, UK",
      PhoneNo:"+91 368 740 5100",
      Rate:'4.9',
      stars:'',
      dateTime:'2 days ago',
    },
    {
      url: '/images/party.jpg',
      availability:'closed',
      Feature:'',
      Event:'NIGHT PARTY',
      profile:'/images/pr6.png',
      Name: 'Dry Cleaning',
      Location:"New Wshington, UK",
      PhoneNo:"+91 368 740 5100",
      Rate:'4.9',
      stars:'',
      dateTime:'3 days ago',
    },
    {
      url: '/images/cafe.jpg',
      availability:'closed',
      Feature:'',
      Event:'CAFE & BAR',
      profile:'/images/pr7.png',
      Name: 'Dry Cleaning',
      Location:"New Wshington, UK",
      PhoneNo:"+91 368 740 5100",
      Rate:'4.9',
      stars:'',
      dateTime:'4 days ago',
    },
    {
      url: '/images/mall.jpg',
      availability:'closed',
      Feature:'',
      Event:'SHOPPING MALL ',
      profile:'/images/pr8.png',
      Name: 'Dry Cleaning',
      Location:"New Wshington, UK",
      PhoneNo:"+91 368 740 5100",
      Rate:'4.9',
      stars:'',
      dateTime:'3 days ago',
    },
];

interface Category {
  city: string;
  imageSrc: string;
  category: string;
}
//image list end here
interface TrendingCategoriesProps {
  categories: Category[];
}
function HomeScreen1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    // TODO: Implement search logic
  };
  

  return (<>
    <div className="flex items-center bg-gray-100 justify-center bg-pink">
      <div className="w-full bg-gray-100 relative">
        <div className="absolute bg-gray-100 inset-0">
          <img src="/images/banner.jpg" alt="banner" className="absolute inset-0 bg-pink-700 w-full h-full object-cover" />
          <div className="absolute inset-0  bg-black opacity-40"></div>
        </div>

        <div className="text-center text-white relative z-10 mt-48 ">
          <h1 className="text-6xl font-bold mb-2 left-1 font-custom">Great Workplace for Your Business</h1>
          <p className="text-md font-medium mb-32">Explore wonderful place to stay, salon, shopping, massage or visit local areas.</p>
          
          <form className="flex flex-wrap justify-center h-60 relative  rounded-md">
            <div className="w-full sm:w-1/2 lg:w-1/4    text-black rounded-md ">
              <input type="text " className="w-full rounded-l-md py-2 px-3 h-20  "  placeholder="Nail salons, plumbers, takeout..." />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  text-black">
              <input type="text"  className="w-full  py-2 px-3 h-20 text-black border-2"  placeholder="San Francisco, CA " />
            </div>
            <div className="w-10 sm:w-1/2 lg:w-1/4   h-56">
              <select className="w-full h-20 text-black">
                <option value="">Choose Categories</option>
                <option value="1">Restaurants</option>
                <option value="2">Information Technology</option>
                <option value="3">Cloud Computing</option>
                <option value="4">Engineering Services</option>
                <option value="5">Healthcare/Pharma</option>
                <option value="6">Telecom/Internet</option>
                <option value="7">Finance/Insurance</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 lg:w-32  ">
            <button className="w-full bg-pink-600 h-20 text-white font-bold py-2 px-4 rounded-md" type="button">
  Search
  <div className='text-white-500'><FontAwesomeIcon icon={faMagnifyingGlass } /></div>
</button>

            </div>
          </form>
        </div>

        <div className="banner-categories relative z-10  ">
  <ul className="Goodup-bnr-cats pr-4 ml-2 relative left-80 -top-24 text-white border border-transparent">
    <li className="inline-block pr-4 contrast-more:first-line: bg-transparent border border-transparent "><a href="half-map-search-1.html" className="py-2 px-3 rounded-lg hover:bg-white hover:text-pink-600">Pets</a></li>
    <li className="inline-block pr-4 bg-transparent border border-transparent"><a href="half-map-search-1.html" className="py-2 px-3 rounded-lg hover:bg-white hover:text-pink-600">Restaurants</a></li>
    <li className="inline-block pr-4 bg-transparent border border-transparent"><a href="half-map-search-1.html" className="py-2 px-3 rounded-lg hover:bg-white hover:text-pink-600">Plumbers</a></li>
    <li className="inline-block pr-4 bg-transparent border border-transparent"><a href="half-map-search-1.html" className="py-2 px-3 rounded-lg hover:bg-white hover:text-pink-600">Delivery</a></li>
    <li className="inline-block pr-4 bg-transparent border border-transparent"><a href="half-map-search-1.html" className="py-2 px-3 rounded-lg hover:bg-white hover:text-pink-600">Coffee &amp; Tea</a></li>
    <li className="inline-block pr-4 bg-transparent border border-transparent"><a href="half-map-search-1.html" className="py-2 px-3 rounded-lg hover:bg-white hover:text-pink-600">Businesses</a></li>
  </ul>
</div>
      </div>
    </div>
    
    <div className='bg-gray-100 relative bottom-10'>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mt-10 mb-16">
              <div className="sec_title relative pt-10 text-center mb-5">
                <h6 className="text-muted mb-0 text-xl">Trending Categories</h6>
                <h2 className="font-bold text-4xl">Find the Best Businesses in Town</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap relative ml-24 right-4">
            {images.map((image) => (
              <div className="w-1/4 p-2 " key={image.url}>
                <div className="h-60 relative">
                  <img
                    src={image.url}
                    alt={image.description}
                    className="w-full h-full object-fit-cover rounded-t-md"
                  />
                  <button className="absolute top-4 left-4 z-10 px-2 text-sm bg-pink-700 h-6 text-white ">
                    {image.availability}
                  </button>
                </div>
                <div className="text-center bg-white h-16 rounded-b-md relative pr-56 font-bold pt-5">
                  {image.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gray-100 relative bottom-10'>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mt-10 mb-16">
              <div className="sec_title relative pt-10 text-center mb-5">
                <h6 className="text-muted mb-0 text-4xl text-pink-700">Goodup in Los Angeles</h6>
              
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
  <div className="flex flex-wrap justify-center">
    {images1.map((image) => (
      <div className="w-full sm:w-full sm:h-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2" key={image.url}>
        <div className="h-64 relative">
          <img
            src={image.url}
            alt={image.Name}
            className="absolute w-full h-full object-cover rounded-t-md"
            style={{ minWidth: "100%", minHeight: "100%" }}
          />
          <button className="absolute bottom-56 left-4 z-10 px-2 text-sm bg-green-500 h-6 text-white">
            {image.availability}
          </button>
          {image.Feature && (
    <button className="absolute bottom-56 left-20 z-10 px-2 text-sm bg-red-600 h-6 text-white">
      {image.Feature}
            </button>
          )}
          <div className="relative z-20 h-16 w-16">
  <img
    className="rounded-full h-full w-full object-cover absolute top-64 left-72 top-50% left-50% transform -translate-x-1/2 -translate-y-1/2 border-4 border-white"
    src={image.profile}
    alt="Event Image"
  />
</div>
        </div>
        <div className="bg-white">
          <div className="text-center h-16 rounded-b-md relative pr-56 text-sm pt-5 text-red-500 z-10">
            {image.Event}
          </div>

          <div className="text-center h-16 rounded-b-md relative pr-56 font-bold pt-5 whitespace-nowrap">
            {image.Name}
          </div>
          <div className="text-center h-16 rounded-b-md relative pr-56 font-bold pt-5 whitespace-nowrap">
            {image.Location}
          </div>
          <div className="text-center h-16 rounded-b-md relative pr-56 font-bold pt-5 whitespace-nowrap">
            {image.PhoneNo}
          </div>
          <div className="h-10 bg-white round-b-md">
            <button className="relative left-10 z-10 px-2 text-sm bg-green-800 h-6 text-white font-bold">
              {image.Rate}
            </button>
          </div>
        </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    <div className='bg-gray-800 w-full '>
      <div className="container text-white p-10 relative ">
  <section className="pricing py-8 ">
    <div className="container relative mx-32 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative  ">

      <div className="col-md-4  border-2  rounded-xl border-gray-600 relative  mr-5 p-14 pr-10 ">
  <div className="Goodup-price-wrap dark-price ">
  <div className="Goodup-author-header ">
  <div className="Goodup-price-currency  ">
    <h3 className="text-5xl font-weight-extrabold ">
    
      <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-new-price text-6xl">49</span>

          <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-old-price text-3xl text-gray-400">149</span></h3>
     
    
              </div>
              <div className="flex justify-between">
  <div className="Goodup-price-tlt">
    <p className="text-3xl">Personal</p>
  </div>
  <div className="Goodup-price-ribbon">
    <span className="Goodup-ribbon-offer all text-orange-500 absolute top-32 font-bold right-48">50% Off</span>
  </div>
</div>
              <div className="Goodup-price-subtitle text-2xl  whitespace-no-wrap">Best Choice for Individuals</div>
            </div>
            <div className="Goodup-price-body pb-8 p-2">
  <div className='border-t-2 border-gray-500 text-black my-10 z-20  '></div> 
  <ul className="price__features py-2">
    <li className="flex items-center font-md text-bold  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Lifetime Bandwidth Usage</span>
    </li>
    <li className="flex items-center font-md text-bold  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>6 Months Support &amp; Updates</span>
    </li>
    <li className="flex items-center font-md text-bold  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>10 Website License</span>
    </li>
    <li className="flex items-center font-md text-bold  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Quickstart Included</span>
    </li>
    <li className="flex items-center font-md text-bold  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Access to Plugins &amp; Theme</span>
    </li>
    <li className="flex items-center font-md text-bold  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Branding/Copyright Removal</span>
    </li>
  </ul>
</div>
<div className="Goodup-price-bottom border-dashed border-2 border-gray-600 rounded-full hover:bg-pink-700 p-4 flex justify-center items-center h-20">
  <a className="Goodup-price-btn items-center" href="#">
    <i className="fas fa-shopping-basket"></i> Purchase Now
  </a>
</div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 border-2  rounded-xl border-gray-600 relative p-14 mr-5 bg-white text-gray-600 ">
  <div className="Goodup-price-wrap dark-price">
    <div className="Goodup-author-header ">
      <div className="Goodup-price-currency ">
        <h3 className="text-5xl font-weight-extrabold">
        
        <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-new-price text-6xl text-pink-600">129</span>
          <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-old-price text-3xl text-gray-400">199</span></h3>
     
    
              </div>
              <div className="flex justify-between">
  <div className="Goodup-price-tlt">
    <p className="text-3xl">Personal</p>
  </div>
  <div className="Goodup-price-ribbon">
    <span className="Goodup-ribbon-offer all text-green-500 absolute top-32 font-bold right-48">50% Off</span>
  </div>
</div>
              <div className="Goodup-price-subtitle text-2xl  whitespace-no-wrap">Best Choice for Individuals</div>
            </div>
            <div className="Goodup-price-body pb-8 p-2 ">
  <div className='border-t-2 border-gray-500 text-black my-10 z-20 '></div> 
  <ul className="price__features py-2 ">
    <li className="flex items-center font-md text-bold  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Lifetime Bandwidth Usage</span>
    </li>
    <li className="flex items-center  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>12 Months Support &amp; Updates</span>
    </li>
    <li className="flex items-center  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>20 Website License</span>
    </li>
    <li className="flex items-center  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Quickstart Included</span>
    </li>
    <li className="flex items-center  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Access to Plugins &amp; Theme</span>
    </li>
    <li className="flex items-center  pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Branding/Copyright Remova</span>
    </li>
  </ul>
</div>
<div className="Goodup-price-bottom border-dashed border-2 border-gray-600 bg-pink-600 text-white rounded-full hover:bg-pink-700 p-4 flex justify-center items-center h-20">
  <a className="Goodup-price-btn items-center" href="#">
    <i className="fas fa-shopping-basket"></i> Purchase Now
  </a>
</div>
          </div>
        </div>

        <div className="col-md-4  border-2  rounded-xl border-gray-600 relative  mr-5 p-14 pr-10 ">
  <div className="Goodup-price-wrap dark-price ">
  <div className="Goodup-author-header ">
  <div className="Goodup-price-currency  ">
    <h3 className="text-5xl font-weight-extrabold ">
    
      <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-new-price text-6xl">149</span>

          <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-old-price text-3xl text-gray-400">249</span></h3>
     
    
              </div>
              <div className="flex justify-between">
  <div className="Goodup-price-tlt">
    <p className="text-3xl">Personal</p>
  </div>
  <div className="Goodup-price-ribbon">
    <span className="Goodup-ribbon-offer all text-orange-500 absolute top-32 font-bold right-48">50% Off</span>
  </div>
</div>
              <div className="Goodup-price-subtitle text-2xl  whitespace-no-wrap">Best Choice for Individuals</div>
            </div>
            <div className="Goodup-price-body pb-8 p-2  ">
  <div className='border-t-2 border-gray-500 text-black my-10 z-20 '></div> 
  <ul className="price__features py-2">
    <li className="flex items-center font-sm pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Lifetime Bandwidth Usage</span>
    </li>
    <li className="flex items-center  font-md text-bold pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Lifetime Support & Updates</span>
    </li>
    <li className="flex items-center font-md text-bold pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>50 Website License</span>
    </li>
    <li className="flex items-center font-md text-bold pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Quickstart Included</span>
    </li>
    <li className="flex items-center font-md text-bold pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Access to Plugins &amp; Theme</span>
    </li>
    <li className="flex items-center font-md text-bold pb-6">
      <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-red-500 mr-2">
        <path d="M14.707 12l-4.146 4.146a1 1 0 0 0 1.414 1.414l4.793-4.793a1 1 0 0 0 0-1.414l-4.793-4.793a1 1 0 1 0-1.414 1.414L14.707 12z"/>
      </svg>
      <span>Branding/Copyright Removal</span>
    </li>
  </ul>
</div>
<div className="Goodup-price-bottom border-dashed border-2 border-gray-600 rounded-full hover:bg-pink-700 p-4 flex justify-center items-center h-20 ">
  <a className="Goodup-price-btn " href="#">
    <i className="fas fa-shopping-basket"></i> Purchase Now
  </a>
</div>
          </div>
        </div>
        </div>
        
      
    </div>
  </section>
</div></div>
 
 
<div className="bg-red-600 relative h-100">
      <img src="/images/landing-bg.png" alt="landing" className="absolute  h-100 bg-pink-700 w-full h-full object-cover z-20" />

      <div className="container py-3 relative mt-10 z-20">
        <div className="row justify-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title relative text-center mb-5">
              <h6 className="text-white relative mt-32 text-xl">Subscribe Now</h6>
              <h2 className="font-bold text-white text-4xl">Get All Updates &amp; Advance Offers</h2>
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
                <div className="w-full sm:w-1/2 lg:w-48 relative ml-auto bottom-20 mr-6 mt-6 mx-2 left-5">
                  <button className="w-full bg-gray-600 h-16 text-white font-bold py-2 px-4 rounded-md" type="button">
                    Search
                    <div className='text-white-500'><FontAwesomeIcon icon={faMagnifyingGlass } /></div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
 const toggleQuestion = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  const toggleQuestion = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <>
      <Head>
        <title>FAQ Section</title>
      </Head>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col">
          {FAQ.map((question, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{question.question}</h3>
                <button
                  className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  {activeQuestion === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10.707 6.293a1 1 0 00-1.414 0L7 8.586V7a1 1 0 00-2 0v3a1 1 0 001 1h3a1 1 0 000-2H8.414l2.293-2.293a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svgcont'd:

xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-10a1 1 0 011 1v3a1 1 0 01-2 0V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {activeQuestion === index && (
                <div className="mt-4 text-gray-600">{question.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}; */}


    </div>



    </>
  );
 
}


export default HomeScreen1;

   
 
 
