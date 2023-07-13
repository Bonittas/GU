import React from 'react';

import { faB,faS,faMagnifyingGlass,faStar, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faS,faStar,faPhone, faLocationDot  )


const places = [
 
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

function singleList(){
    return(
<>

<div className="container mx-auto ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
    {places.map((image) => (
      <div className="w-full relative m-4 border-2" key={image.url} >
        <div className="h-64 relative">
          <img
            src={image.url}
            alt={image.Name}
            className="absolute w-full h-full object-cover rounded-t-md"
            style={{ minWidth: "100%", minHeight: "100%" }}
          />
         <button className={`absolute bottom-56 left-4 z-10 px-2 top-4 rounded-md text-sm h-8 w-20 text-white ${image.availability === 'OPEN' ? 'bg-green-400' : 'bg-blue-600'}`}>
  {image.availability}
</button>
          {image.Feature && (
    <button className="absolute bottom-56 left-24 top-4 z-10 px-4 ml-4 rounded-md text-sm bg-pink-700 h-8 w-24 text-white">
      {image.Feature}
            </button>
          )}
          <div className="relative z-20 h-16 w-16">
  <img
    className="rounded-full h-full w-full object-cover absolute top-64 left-72 top-50% left-50% transform -translate-x-1/2 -translate-y-1/2 border-4 border-white"
    src={image.profile}
    alt="description Image"
  />
</div>
         <div className="flex items-center relative top-32 mx-4 ">
 
  <div className="w-1/5 text-orange-500 z-10 flex bottom-3 left-8 justify-end relative ">
  
  </div>

</div>
          
        </div>
        <div className="bg-white relative mx-8 rounded-b-md">
        <div className="text-left text-pink-600  relative text-md text-bold top-3  whitespace-nowrap z-10">
            {image.Event} 
          </div>
        <div className="text-left h-16   rounded-b-md relative  font-bold pt-5 whitespace-nowrap">
            {image.Name}
          </div>
          <div className="flex items-center justify-between">
          <div className='text-gray-500 whitespace-nowrap relative mr-2 text-xl'><FontAwesomeIcon icon={faLocationDot}/></div>
          <div className="text-center h-16 text-gray-600 rounded-b-md relative pr-56  py-5 whitespace-nowrap">
            {image.Location}</div></div>
          <div className="relative   text-md  text-gray-600 z-10">
          <FontAwesomeIcon icon={faPhone}/> {image.PhoneNo}
          </div>

        </div>
        <div className='border-t-gray border-1 border-broken relative p-4 '>
         
        <button className="relative  h-10 w-14 rounded-md z-10 px-4 mb-6 text-sm bg-green-600 text-white font-bold">
    {image.Rate}
  </button>
         <div className='whitespace-nowrap flex relative left-32'>
         <div className='relative  bottom-12  p-3 text-center text-gray-400'> <div className="w-1/5 text-orange-500 z-10 flex bottom-3 left-8 justify-end relative ">
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
  </div> </div>
         <div className='relative whitespace-nowrap bottom-12 text-center text-gray-400'>  {image.dateTime}
        </div>
        </div>
          </div>
      </div>
      
    ))}
  </div>
  
</div>


       
<div className="bg-red-600 relative h-100">
      <img src="/images/landing-bg.png" alt="landing" className="absolute  h-100 bg-green-800 w-full h-full object-cover z-20" />

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
                  <button className="w-full bg-pink-600 h-16 text-white font-bold py-2 px-4 rounded-md" type="button">
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

    )
}

export default singleList