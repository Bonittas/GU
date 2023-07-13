
import { faB,faS,faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookFilled } from '@ant-design/icons';
library.add(faB,faS,faArrowRight, faMagnifyingGlass )
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const Process= [
  {
    icon: '/images/pr1.png',
    ToDo:'Project Manager',
    Description: 'James R. Smith',
    
    
  },
  {
    icon: '/images/pr1.png',
    ToDo:'Project Manager',
    Description: 'James R. Smith',
    
  },
  {
    icon: '/images/pr1.png',
    ToDo:'Project Manager',
    Description: 'James R. Smith',
    
  },
]
const images = [
  {
    url: '/images/pr1.png',
    New:"New",
    Popular:"",
    Profession:'Project Manager',
    Name: 'James R. Smith',
    
    
  },
  {
    url: '/images/pr2.png',
    New:"",
    Popular:"Popular",
    Profession:'Team Leader',
    Name: 'Howard L. Gallegos',
  },
  {
    url: '/images/pr3.png',
    New:"",
    Popular:"",
    Profession:'UI/UX Designer',
    Name: 'Patricia C. Foshee',
  },
  {
    url: '/images/pr4.png',
    New:"",
    Popular:"Popular",
    Profession:'Web Developer',
    Name: 'Helen A. Robbins',
  },
  {
    url: '/images/pr5.png',
    New:"New",
    Popular:"",
    Profession:'Content Writter',
    Name: 'Andrew D. Taylor',
    
  },
  {
    url: '/images/pr6.png',
    New:"",
    popular:"",
    Profession:'Web Expert',
    Name: 'Larry J. Mapes',
    
  },
  {
    url: '/images/pr7.png',
    New:"",
    Popular:"Popular",
    Profession:'Product Designer',
    Name: 'Loretta G. Wood',
    
  },
  {
    url: '/images/pr8.png',
    New:"New",
    Popular:"",
    Profession:'Sales Manager',
    Name: 'Javier M. Brookins',
    
  },
]

function about(){

return(
<>
  <div className="flex items-center justify-center bg-pink-700">
  <div className="w-full relative">
    <div className="absolute inset-0">
      <img src="/images/about/about.jpg" alt="banner" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>

    <div className="text-left text-white relative z-10 mt-16 ml-32 ">
      <h1 className="text-6xl font-bold   font-custom w-1/2">Smart team alwasy create better thing and better solutions.</h1>
      <p className="text-lg font-medium mb-32 w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    <button className="bg-white text-red-600 relative m-8 p-4 rounded-md">
      Get Started <FontAwesomeIcon icon={faArrowRight } />
    </button>
      
    </div>
    <div className=" relative ml-24 ">
<div className="flex relative mb-16 ">
  <div className="col-lg-4 col-md-4 col-4 z-20 ">
    <div className="  relative mr-32">
      <span className="font-bold text-4xl count text-green-700 relative mr-16">7+</span>
    </div>
    <p className="font-medium z-20 text-white">Business Listing</p>
  </div>
  <div className="col-lg-4 col-md-4 col-4 z-20 relative mr-32">
    <div className="font-bold text-warning mb-0 ">
      <span className="count text-yellow-500 text-4xl">6k+</span>
    </div>
    <p className="font-bold text-white">Popular Authors</p>
  </div>
  <div className="col-lg-4 col-md-4 col-4">
    <div className="font-bold text-danger mb-0 relative mr-32">
      <span className="count font-bold text-red-600 text-4xl">200+</span>
    </div>
    <p className="font-medium z-20 text-white">Countries</p>
  </div>
</div>
</div>
</div>


</div>

    



<div className="bg-gray-100 relative bottom-10">
  <div className="container mx-auto">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12 mt-10 mb-16">
        <div className="sec_title relative pt-10 text-center mb-5">
          <h6 className="text-muted mb-0 text-xl">Trending Categories</h6>
          <h2 className="font-bold text-4xl">Find the Best Businesses in Town</h2>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap relative ml-16 right-4 lw-1/4 md-1/3">
      {images.map((image) => (
        <div className="w-1/4 py-4 " key={image.url}>
          <div className="relative rounded-lg overflow-hidden bg-white h-full ml-8 pt-16">
            <div className="relative flex justify-center items-center h-48">
              <img
                src={image.url}
                className="w-48 h-48 object-fit-cover rounded-full"
              />
              {image?.Popular && (
                <button className="absolute  m-4 right-48 bottom-48 z-10 px-2 text-sm bg-purple-800 w-24 h-8 rounded-full text-bold text-white">
                  {image?.Popular}
                </button>
              )}
              {image?.New && (
                <button className="absolute  m-4 right-48 bottom-48 z-10 px-2 text-sm bg-green-800 w-24 h-8 rounded-full text-white text-bold">
                  {image?.New}
                </button>
              )}
            </div>
            <div className="text-center bg-white py-4">
              <h3 className="font-bold text-2xl">{image.Name}</h3>
              <p className="text-gray-500">{image.Profession}</p>
              <div className='bg-pink-200 w-1/4'>
                <FacebookOutlined />
                <TwitterOutlined />
                <LinkedinOutlined />
                <InstagramOutlined />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



<div className="bg-green-800 relative h-100">
      <img src="/images/landing-bg.png" alt="landing" className="absolute  h-100 bg-green-900 w-full h-full object-cover z-20" />

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
                  <button className="w-full bg-pink-700 h-16 text-white font-bold py-2 px-4 rounded-md" type="button">
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

export default about