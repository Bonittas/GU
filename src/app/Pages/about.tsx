
import { faB,faS,faMagnifyingGlass,faEye,faHeart, faArrowRight, faShieldHalved, faMapLocationDot, faUserAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookFilled } from '@ant-design/icons';
library.add(faB,faS,faEye,faClock,faHeart,faArrowRight,faShieldHalved,faMapLocationDot,faUserAlt, faMagnifyingGlass )
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';


const news = [

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
type ProcessType = {
  icon: any;
  ToDo: string;
  Description: string;
  bgColor: string;
  color: string;
}

const Process: ProcessType[] = [
  {
    icon: faMapLocationDot,
    ToDo: 'Find Interesting Place',
    Description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
    bgColor: 'bg-green-100',
    color: 'text-green-600',
  },
  {
    icon: faUserAlt,
    ToDo: 'Contact A Few Owners',
    Description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
    bgColor: 'bg-red-100',
    color: 'text-red-600',
  },
  {
    icon: faShieldHalved,
    ToDo: 'Make A Reservation',
    Description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
    bgColor: 'bg-blue-100',
    color: 'text-blue-600',
  },
];
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

    <div className=" text-white relative z-10 mt-16  pl-16">
      <h1 className="flex items-center text-6xl  font-bold lg:text-6xl sm:text-4xl pb-6  lg:w-1/2">Smart team always create better thing and better solutions.</h1>
      <p className="text-lg font-medium mb-32 w-1/2 relative pb-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    <button className="bg-white text-red-600 relative  p-4 rounded-md">
      Get Started <FontAwesomeIcon icon={faArrowRight } />
    </button>
      
    </div>
    <div className=" relative p-16 ">
<div className="flex relative mb-16 ">
  <div className="col-lg-4 col-md-4 col-4 z-20 ">
    <div className="  relative ">
      <span className="font-bold text-4xl count text-green-700 relative ">7+</span>
    </div>
    <p className="font-medium z-20 text-white">Business Listing</p>
  </div>
  <div className="col-lg-4 col-md-4 col-4 z-20 relative mx-10 ">
    <div className="font-bold text-warning mb-0 ">
      <span className="count text-yellow-500 text-4xl">6k+</span>
    </div>
    <p className="font-bold text-white">Popular Authors</p>
  </div>
  <div className="col-lg-4 col-md-4 col-4">
    <div className="font-bold text-danger mb-0 relative">
      <span className="count font-bold text-red-600 text-4xl">200+</span>
    </div>
    <p className="font-medium z-20 text-white">Countries</p>
  </div>
</div>
</div>
</div>

</div>




  <div className="container mx-auto mb-10 relative">
    <div className="row">
      <div className="mt-10 mb-16">
        <div className="sec_title relative pt-10 text-center mb-5">
          <h6 className="text-red-700 mb-0 text-xl">Working Process</h6>
          <h2 className="font-bold text-4xl">How it Works</h2>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
  <ul className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2">
    {Process.map((process, index) => (
      <li key={index} className="border-2 border-gray-300 rounded-md p-10 flex flex-col items-center">
        <div className={`rounded-full flex items-center justify-center w-24 h-24 ${process.bgColor}`}>
          <FontAwesomeIcon icon={process.icon} className={`text-gray-700 rounded-full text-2xl ${process.color}`} />
        </div>
        <h3 className="text-lg font-medium mt-4">{process.ToDo}</h3>
        <p className="text-gray-">{process.Description}</p>
      </li>
    ))}
  </ul>
</div>
</div>
    

<div className="bg-gray-100 relative bottom-10">
  <div className="container mx-auto">
    <div className="row">
      <div className="mt-10 mb-16">
        <div className="sec_title relative pt-10 text-center mb-5">
          <h6 className="text-muted mb-0 text-xl">Trending Categories</h6>
          <h2 className="font-bold text-4xl">Find the Best Businesses in Town</h2>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap relative left-16 right-4 w-full justify-center">
  {images.map((image) => (
    <div className="w-full py-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={image.url}>
      <div className="relative rounded-lg overflow-hidden bg-white h-full ml-8 pt-16">
        <div className="relative flex justify-center items-center h-48">
          <img
            src={image.url}
            className="w-48 h-48 object-fit-cover rounded-full"
          />
          {image?.Popular && (
            <button className="absolute m-6  right-32 items-left bottom-48 z-10 px-4 text-sm bg-purple-600 w-20 h-6 rounded-full text-bold text-white">
              {image?.Popular}
            </button>
          )}
          {image?.New && (
            <button className="absolute  m-6 right-32 bottom-48 z-10 px-2 text-sm bg-green-800 w-20 h-6 rounded-full text-white text-bold">
              {image?.New}
            </button>
          )}
        </div>
        <div className="text-center bg-white py-16">
          <h3 className="font-bold text-2xl">{image.Name}</h3>
          <p className="text-gray-500">{image.Profession}</p>
          {/* <div className="text-xl w-1/4 absolute py-4 pr-2 flex justify-between left-24 sm:static sm:py-0 sm:text-base sm:w-auto sm:flex-col sm:justify-start sm:left-0 lg:flex-row lg:justify-center lg:w-full lg:text-2xl lg:items-center">
  <div className='text-pink-600 relative'><FacebookOutlined /></div>
  <div className='text-pink-600 relative'><TwitterOutlined /></div>
  <div className='text-pink-600 relative'><LinkedinOutlined /></div>
  <div className='text-pink-600 relative'><InstagramOutlined /></div>
</div> */}
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</div>



<div className="container mx-auto relative   ">
  <div className="flex flex-wrap relative ml-16 right-4">
    {news.map((image) => (
      <div className="w-full  sm:w-full md:w-1/2  lg:w-1/3 p-2 gap-2 " key={image.url}>
        <div className="h-60 relative ">
          <img
            src={image.url}
            alt={image.description}
            className="w-full h-full object-fit-cover rounded-t-md"
          />
          </div>
          <div className="bg-white border-2  border-gray-300  rounded-b-md text-left relative  pl-6">
            <div className='relative  py-4 '>
            <div className="rounded-md p-2  border-2  border-pink-200 w-32 h-10 bg-pink-200 text-center   font-bold text-md relative   text-red-600 ">
              {image.catagory}
            </div></div>
            <div className="text-center relative font-bold  whitespace-nowrap">
              {image.qtn}
            </div>
            <div className=" h-16 rounded-b-md relative text-gray-500 font-bold pt-5">
              {image.description}
            </div>
            <div className='line-2 line-black whitespace-nowrap flex relative  bottom-0 '>
            <img
    className="rounded-full  h-14 w-14 object-cover absolute  top-20 mt-2 left-6 left-50% transform -translate-x-1/2 -translate-y-1/2 border-4 border-white z-20"
    src={image.profile}
    alt="description Image"
  />
  </div>
  <div className="text-center h-16 rounded-b-md right-10 top-20 p-1 relative font-bold  justify-center flex ">
  <div className='text-green-500 relative m-3 bottom-3'><FontAwesomeIcon icon={faEye}/> </div> {image.view} views
            </div>
            <div className="text-center h-16 rounded-b-md relative justify-end flex font-bold p-5">
            <div className='text-yellow-500 relative  m-3 bottom-3'>  <FontAwesomeIcon icon={faClock}/>  </div> {image.date}
            </div>
           
        </div>
      </div>
    ))}
  </div>
</div>


<div className="bg-blue-900 relative h-100">
  <img src="/images/landing-bg.png" alt="landing" className="absolute h-100 bg-green-900 w-full h-full object-cover z-20" />

  <div className="container py-3 relative mt-10 z-20">
    <div className="row justify-center">
      <div className="">
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
            <input type="text" className="w-full text-white py-6 px-4" placeholder="Enter Your Email Address" />
          </div>
          <div className="w-full sm:w-1/4 items-right relative top-20 m-5 left-2">
            <button className="bg-pink-600 h-20 w-32 bottom-12 m-2 text-white font-bold py-2 px-4 rounded-r-md absolute left-16" type="button">
              Search
              <div className='text-white-500'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </button>
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
