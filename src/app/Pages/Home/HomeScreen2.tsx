import React, { useState } from 'react';
import { faB,faBasketball,faStar,faEye, faPenRuler,faPlane,faLocationDot,faWineGlass,faScrewdriver,faCar,faBookOpen,faBuilding ,faS, faStethoscope, faBasketShopping, faUtensils, faHouseChimneyCrack, faMagnifyingGlass, faHeart, faMessage, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faEye,faClock,faMagnifyingGlass,faHeart,faEnvelope,faStar,faBasketball,faLocationDot, faS,faHouseChimneyCrack,faPlane,faPenRuler,faBookOpen,faCar ,faUtensils,faBuilding,faStethoscope, faBasketShopping, faWineGlass)


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
const images = [

  {
    url: '/images/Home2/img1.jpg',
    catagory:'Marketing',
    qtn: 'What is a VPN and How Does It Work?',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
    profile:'/images/Home2/pr1.jpg',
    view:'10k',
    date:'10 July 2021',
  },
  {
    url: '/images/Home2/img2.jpg',
    catagory:'Accounting',
    qtn: 'What is Ransomware: The Ultimate Guide?',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
    profile:'/images/Home2/pr2.jpg',
    view:'10k',
    date:'10 July 2021',
  },
  {
    url: '/images/Home2/img3.jpg',
    catagory:'Business',
    qtn: 'Can iPads Get Viruses? What You Need',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
    profile:'/images/Home2/pr3.jpg',
    view:'10k',
    date:'10 July 2021',
  },]
const places = [
  {
    url: '/images/beauty.jpg',
    availability:'CLOSED',
    Feature:'Featured',
    profile:'/images/pr1.png',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    Name: 'Rajwara Marriage Home',
    Location:"California, USA",
    category:"Beauty and Makeup",
    Rate:'4.3',
    stars:'',
    dateTime:'2 min ago', 
    review:'46',     
  },
  {
    url:'/images/party.jpg' ,
    availability:'OPEN',
    Feature:'',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    profile:'/images/pr2.png',
    Name: 'Dry Cleaning',
    Location:"San Francisco, USA      ",
    category:"Night Party",
    Rate:'3.5',
    stars:'',
    dateTime:'10 min ago', 
    review:'17', 
  },
  {
    url:'/images/cafe.jpg',
    availability:'OPEN',
    Feature:'',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    profile:'/images/pr3.png',
    Name: 'Dry Cleaning',
    Location:"102 Satirio, Canada",
    category:"Caffe & Bars",
    Rate:'4.4', 
    stars:'',
    dateTime:'3 hr ago',  
    review:'30',
  },
  {
    url: '/images/mall.jpg',
    availability:'CLOSED',
    Feature:'',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    profile:'/images/pr4.png',
    Name: 'Dry Cleaning',
    Location:"Oliy Denver, USA",
    category:"Shopping Mall",
    Rate:'4.9',
    stars:'',
    dateTime:'1 day ago',
    review:'42',  
  },
  {
    url: '/images/Home3/spas.jpg',
    availability:'OPEN',
    Feature:'',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    profile:'/images/pr5.png',
    Name: 'Dry Cleaning',
    Location:"Warmingham, London",
    category:"Spa & Salon",
    Rate:'4.9',
    stars:'',
    dateTime:'2 days ago',
    review:'12',
  },
  {
    url:'/images/Home3/library.jpg' ,
    availability:'CLOSED',
    Feature:'',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    profile:'/images/pr6.png',
    Name: 'Dry Cleaning',
    Location:"Liverpool, London",
    category:"Food Services",
    Rate:'4.9',
    stars:'',
    dateTime:'3 days ago',
    review:'36',
  },
  {
    url: '/images/Home3/ubber.jpg',
    availability:'CLOSED',
    Feature:'',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    profile:'/images/pr7.png',
    Name: 'Dry Cleaning',
    Location:"Metrio General Store",
    category:"Tour & Travels",
    Rate:'4.9',
    stars:'',
    dateTime:'4 days ago',
    review:'22',
  },
  {
    url: '/images/Wedding.jpg',
    availability:'OPEN',
    Feature:'',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    profile:'/images/pr8.png',
    Name: 'Dry Cleaning',
    Location:"Old California, USA",
    category:"Wedding",
    Rate:'4.9',
    stars:'',
    dateTime:'3 days ago',
    review:'12',
  },
];

function HomeScreen2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    // TODO: Implement search logic
  };
  

  return (
    <>
   <div className="flex items-center justify-center bg-pink"> 
   <div className="w-full relative"> 
   <div className="absolute inset-0"> 
   <img src="/images/banner-1.jpg" alt="banner" className="absolute inset-0 w-full h-full object-cover" /> 
   <div className="absolute inset-0 bg-black opacity-40"></div> </div>

    <div className="text-center text-white relative z-10 mt-64 ">
      <h1 className="text-6xl font-bold mb-2 ml-2 font-custom">Explore Great Place in Your Town</h1>
      <p className="text-md font-medium mb-32">Explore wonderful place to stay, salon, shoping, massage or visit local areas.</p>
      
      <form className="flex flex-wrap justify-center h-60 relative  rounded-md">
      <div className='text-black bg-white h-20  relative top-0 rounded-l-md' ><p className=' relative top-6 font-bold left-4 pr-4 text-xl text-10'>Find</p></div> 
        <div className=" rounded-md  w-full sm:w-1/3 lg:w-1/3    text-black ">
          <input type="text-gray " className="  py-2 px-6 h-20 w-full "  placeholder="Nail salons, plumbers, takeout..." />
        </div>
        <div className='text-black bg-white h-20  relative top-0 border-l-2' ><p className=' relative top-6 font-bold text-xl pl-4'>Where</p></div> 
        <div className="w-full sm:w-1/3 lg:w-1/3  text-black">
          <input type="text"  className="w-full  py-2 px-3 h-20 text-black" placeholder="San Francisco, CA " />
        </div>
       
        <div className="w-full sm:w-48  ">
        <button className="w-full bg-pink-600 h-20 text-white font-bold py-2 px-4 rounded-md" type="button">
Search

<div className='text-white-500'><FontAwesomeIcon icon={faMagnifyingGlass } /></div> </button> </div> </form> </div> </div> </div>
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
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
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
  

   <div className="container mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
    {places.map((image) => (
      <div className="w-full h-full relative border-2" key={image.url}>
        <div className="h-64 relative">
          <img
            src={image.url}
            alt={image.Name}
            className="absolute w-full h-full object-cover rounded-t-md"
          />
          <button className={`absolute bottom-56 left-4 z-10 px-2 top-4 rounded-md text-sm h-8 w-20 text-white ${image.availability === 'OPEN' ? 'bg-green-400' : 'bg-blue-600'}`}>
            {image.availability}
          </button>
          {image.Feature && (
            <button className="absolute bottom-56 left-24 top-4 z-10 px-4 ml-4 rounded-md text-sm bg-pink-700 h-8 w-24 text-white">
              {image.Feature}
            </button>
          )}
          <div className="relative z-20 h-16 w-16" style={{ left: '50%', transform: 'translateX(-50%)' }}>
            <img
              className="rounded-full h-full w-full object-cover left-32 absolute top-64 top-50% transform -translate-y-1/2 border-4 border-white"
              src={image.profile}
              alt="description Image"
            />
          </div>
          <div className="flex items-center relative top-32 mx-4 ">
            <button className="relative  h-12 w-14 rounded-md z-10 px-4 text-sm bg-green-600 text-white font-bold">
              {image.Rate}
            </button>
            <div className="w-1/5 text-orange-500 z-10 flex bottom-3 left-8 justify-end relative ">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="text-center  relative text-sm top-3 right-12 text-white whitespace-nowrap z-10">
              {image.review} Reviews
            </div>
          </div>
        </div>
        <div className="bg-white relative mx-8 ">
          <div className="text-left h-16   relative  font-bold pt-5 whitespace-nowrap">
            {image.Name}
          </div>
          <div className="flex items-center justify-between  ">
            <div className='text-pink-700 whitespace-nowrap relative mr-2 text-xl'>
              <FontAwesomeIcon icon={faLocationDot}/>
            </div>
            <div className="text-center h-16 text-gray-600 relative pr-56  py-5 whitespace-nowrap">
              {image.Location}
            </div>
          </div>
          <div className="relative  px-5 text-md  text-gray-600 z-10">
            {image.description}
          </div>
        </div>
        <div className='border-t-2 border-gray-300 relative top-10 rounded-b-md border-dashed'>
          <div className="text-center h-16 rounded-b-md relative pr-56 font-bold text-gray-500 pt-5 text-black whitespace-nowrap">
            {image.category}
          </div>
          <div className='relative  flex  '>
            <div className='relative left-64 mr-4  rounded-full bottom-12  w-12 h-12 border-2 p-3 text-center text-gray-400'>
              <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <div className='relative left-64 whitespace-nowrap rounded-full bottom-12  w-12 h-12 border-2 p-3 text-center text-gray-400'>
              <FontAwesomeIcon icon={faHeart}/>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        <div className='w-full bg-gray-200 '>
      <div className="container text-black p-10 relative ">
  <section className="pricing py-8 ">
    <div className="container relative mx-32 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative  ">

      <div className="col-md-4  border-2  rounded-xl relative  mr-5 p-14 pr-10 bg-white transition-transform duration-300 ease-in-out transform hover:-translate-y-3">
  <div className="Goodup-price-wrap dark-price ">
  <div className="Goodup-author-header ">
  <div className="Goodup-price-currency  ">
    <h3 className="text-5xl font-weight-extrabold ">
    
      <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-new-price text-6xl">49</span>

          <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-old-price text-4xl text-gray-400">149</span></h3>
     
    
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
<div className="Goodup-price-bottom  border-dashed border-2 border-gray-600 rounded-full hover:bg-pink-700 p-4 flex justify-center items-center h-20">
  <a className="Goodup-price-btn items-center" href="#">
   <FontAwesomeIcon icon={faBasketShopping}/> Purchase Now
  </a>
</div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 border-2  rounded-xl border-gray-100 relative p-14 mr-5 bg-white text-gray-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-3">
  <div className="Goodup-price-wrap dark-price">
    <div className="Goodup-author-header ">
      <div className="Goodup-price-currency ">
        <h3 className="text-5xl font-weight-extrabold">
        
        <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-new-price text-6xl text-pink-600">129</span>
          <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-old-price text-4xl text-gray-400">199</span></h3>
     
    
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
   <FontAwesomeIcon icon={faBasketShopping}/> Purchase Now
  </a>
</div>
          </div>
        </div>

        <div className="col-md-4  border-2  rounded-xl  relative  mr-5 p-14 pr-10 bg-white transition-transform duration-300 ease-in-out transform hover:-translate-y-3">
  <div className="Goodup-price-wrap dark-price ">
  <div className="Goodup-author-header ">
  <div className="Goodup-price-currency  ">
    <h3 className="text-5xl font-weight-extrabold ">
    
      <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-new-price text-6xl">149</span>

          <span className="Goodup-new-price text-gray-400 text-xl">$</span>
          <span className="Goodup-old-price text-5xl text-gray-400">249</span></h3>
     
    
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
   <FontAwesomeIcon icon={faBasketShopping}/> Purchase Now
  </a>
</div>
          </div>
        </div>
        </div>
        
      
    </div>
  </section>
</div></div>
 
 
<div className="bg-green-900 relative h-100">
  <img src="/images/landing-bg.png" alt="landing" className="absolute h-100 bg-green-900 w-full h-full object-cover z-20" />

  <div className="container py-3 relative mt-10 z-20">
    <div className="row justify-center">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="sec_title relative text-center mb-5">
          <h6 className="text-white relative mt-32 text-xl">Subscribe Now</h6>
          <h2 className="font-bold text-white text-4xl">Get All Updates &amp; Advance Offers</h2>
        </div>
      </div>
    </div>

    <div className="row items-center justify-center relative mt-16 mb-24 rowjustify-center">
      <div className="xl:col-7 col-lg-10 col-md-12 col-sm-12 col-12">
        <form className="bg-white rounded-md p-1 w-1/2 relative mx-auto flex justify-between">
          <div className="w-full sm:w-3/4">
            <input type="text" className="w-full text-white py-6 px-2" placeholder="Enter Your Email Address" />
          </div>
          <div className="w-full sm:w-1/4 items-right relative top-20 m-5 left-2">
            <button className="bg-pink-600 h-20 w-32 bottom-12 m-2 text-white font-bold py-2 px-4 rounded-md absolute left-16" type="button">
              Search
              <div className='text-white-500'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

      <section className="space">
  <div className="container">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      
      <div className="lg:w-1/2">
        <div className="m-spaced">
          <div className="relative ">
            <div className="mb-5 lg:hidden">
              <span className="bg-pink-100 border-1 text-sky px-2 py-2 relative rounded-md text-xl text-pink-600 ">Download Apps</span>
            </div>
            <h2 className="font-bold text-4xl mb-3 lg:hidden ">
              Download the Goodup App&amp; <br />For Easy Use
            </h2>
            
            <p className="mb-4 text-xl text-green-800 sm:hidden">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            
            <div className="lg:hidden">
              {/* Show the counters only on screens smaller than lg */}
              <div className="flex flex-row justify-between mb-4">
                <div className="w-1/3 text-center">
                  <h3 className="font-bold text-sky mb-0">
                    <span className="font-bold text-4xl count text-pink-600">10k+</span>
                  </h3>
                  <p className="font-medium">Active Jobs</p>
                </div>
                <div className="w-1/3 text-center">
                  <h3 className="font-bold text-warning mb-0">
                    <span className="count text-pink-600 text-4xl">12k+</span>
                  </h3>
                  <p className="font-bold">Resumes</p>
                </div>
                <div className="w-1/3 text-center">
                  <h3 className="font-bold text-danger mb-0">
                    <span className="count font-bold text-pink-700 text-4xl">7k+</span>
                  </h3>
                  <p className="font-medium">Employers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            {/* Show the counters only on screens larger than lg */}
            <div className="flex flex-row justify-between mb-4">
              <div className="w-1/3 text-center">
                <h3 className="font-bold text-sky mb-0">
                  <span className="font-bold text-4xl count text-pink-600">10k+</span>
                </h3>
                <p className="font-medium">Active Jobs</p>
              </div>
              <div className="w-1/3 text-center">
                <h3 className="font-bold text-warning mb-0">
                  <span className="count text-pink-600 text-4xl">12k+</span>
                </h3>
                <p className="font-bold">Resumes</p>
              </div>
              <div className="w-1/3 text-center">
                <h3 className="font-bold text-danger mb-0">
                  <span className="count font-bold text-pink-700 text-4xl">7k+</span>
                </h3>
                <p className="font-medium">Employers</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="lg:w-1/2 relative mt-10 lg:mt-0">
        <div className="relative h-full w-full lg:object-contain">
          <img src="/images/Home2/tour.png" className="img-fluid" alt="" />
        </div>
      </div>
      
    </div>
  </div>
</section>

  </>
  );
}


export default HomeScreen2;
