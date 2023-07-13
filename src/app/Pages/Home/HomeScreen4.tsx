import React from 'react';

const HomeScreen4: React.FC = () => {
  return (
    <div className='bg-gray-100'>
      <div className="relative left-40 pe-3 mt-10 bg-gray-100 h-full flex flex-row items-center">
        <div className="banner_caption text-left  w-1/2 bg-gray-100  mr-8">
          <h1 className="banner_title font-normal relative  bg-gray-100  text-6xl">
            <span className="text-theme text-red-600 font-bold">Find Now</span>
            <br />
            Perfect Placein Your City
          </h1>
          <p className="text-md font-regular w- sw-1/2 ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
          </p>
          <form className="flex flex-wrap justify-center  h-60 relative pt-20 rounded-md">
          <div className='text-black bg-white h-20 w-1/3  relative top-0 ' ><p className=' relative top-6 font-bold left-4 text-xl text-10'>Find</p></div> 
            <div className=" rounded-md  w-1/2    text-black ">
              <input type="text " className="w-full  py-2 px-6 h-20  "  placeholder="Nail salons, plumbers, takeout..." />
            </div> 
          
            <div className="w-full sm:w-1/2 lg:w-32  relative right-32">
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
        
        <img src="/images/banner-3.png" alt="Image" className="w-1/3 relative top-24 right-40 ml-4" />
      </div>
    </div>
  );
};

export default HomeScreen4;