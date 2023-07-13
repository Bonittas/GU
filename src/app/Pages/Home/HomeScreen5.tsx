import React from 'react';

const HomeScreen5 = () => {
  const backgroundStyle = {
    backgroundImage: "url('images/banner-4.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
   
  }

  return (
    <>
    <div className="flex flex-wrap justify-center items-center mb-5 text-white  inset-0  relative pt-48 opacity-24  h-full" style={backgroundStyle}>
      <div className="banner_caption text-center mb-5 ">
        <h1 className="banner_title font-bold mb-1 text-7xl">Find Great Place in Your Areas</h1>
        <p className="text-md font-medium">Explore wonderful place to stay, salon, shopping, massage or visit local areas.</p>
      </div>
      <div className="Goodup-top-cates font-small w-full">
  <ul className="flex relative left-64 justify-center font-small   items-center flex-wrap">
    <li className="w-full sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6">
      <a href="half-map-search-2.html" className="Goodup-top-cat-box flex justify-center items-center">
        <div className="Goodup-tp-ico"><i className="fas fa-stethoscope"></i></div>
        <div className="Goodup-tp-title"><h5 className="font-bold">Hospital</h5></div>
      </a>
    </li>
    <li className="w-full relative -left-6  sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6">
      <a href="half-map-search-2.html" className="Goodup-top-cat-box flex justify-center items-center">
        <div className="Goodup-tp-ico"><i className="fas fa-shopping-basket"></i></div>
        <div className="Goodup-tp-title"><h5 className="font-bold">Shoppings</h5></div>
      </a>
    </li>
    <li className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6">
      <a href="half-map-search-2.html" className="Goodup-top-cat-box flex justify-center items-center">
        <div className="Goodup-tp-ico"><i className="fas fa-basketball-ball"></i></div>
        <div className="Goodup-tp-title"><h5 className="font-bold">Active Life</h5></div>
      </a>
    </li>
    <li className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6">
      <a href="half-map-search-2.html" className="Goodup-top-cat-box flex justify-center items-center">
        <div className="Goodup-tp-ico"><i className="fas fa-utensils"></i></div>
        <div className="Goodup-tp-title"><h5 className="font-bold">Restaurants</h5></div>
      </a>
    </li>
    <li className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6">
      <a href="half-map-search-2.html" className="Goodup-top-cat-box flex justify-center items-center">
        <div className="Goodup-tp-ico"><i className="fas fa-car-alt"></i></div>
        <div className="Goodup-tp-title"><h5 className="font-bold">Automotive</h5></div>
      </a>
    </li>
    <li className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6">
      <a href="half-map-search-2.html" className="Goodup-top-cat-box flex justify-center items-center">
        <div className="Goodup-tp-ico"><i className="fas fa-pencil-ruler"></i></div>
        <div className="Goodup-tp-title"><h5 className="font-bold">Art &amp; Design</h5></div>
      </a>
    </li>
  </ul>
</div>
    </div>
    <section className="space">
  <div className="container">
    <div className="flex flex-row items-center justify-between ml-40">
      
      <div className="w-1/2">
        <div className="m-spaced">
          <div className="relative ">
            <div className="mb-2">
              <span className="bg-light-sky text-sky px-2 py-1 rounded text-green-500 ">Our Mission</span>
            </div>
            <h2 className="font-bold text-4xl mb-3">
              Claim Your Business &amp; <br />Get Started Today!
            </h2>
            <p className="mb-2 text-xl text-green-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="mb-4 text-xl text-gray-400">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
          <div className="row text-left">
  <div className="d-flex">
    <div className="col-lg-4 col-md-4 col-4">
      <h3 className="font-bold text-sky mb-0">
        <span className="font-bold text-4xl count text-green-700">7</span>+
      </h3>
      <p className="font-medium">Business Listing</p>
    </div>
    <div className="col-lg-4 col-md-4 col-4">
      <h3 className="font-bold text-warning mb-0">
        <span className="count text-yellow-500 text-4xl">6</span>k+
      </h3>
      <p className="font-bold">Popular Authors</p>
    </div>
    <div className="col-lg-4 col-md-4 col-4">
      <h3 className="font-bold text-danger mb-0">
        <span className="count font-bold text-red-600 text-4xl">200</span>+
      </h3>
      <p className="font-medium">Countries</p>
    </div>
  </div>
</div>
        </div>
        
      </div>
      <div className="w-1/2  relative ml-40">
        <div className="relative ">
          <img src="/images/tour.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default HomeScreen5;