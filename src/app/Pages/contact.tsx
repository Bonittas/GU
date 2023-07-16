import { useState } from 'react';
import Link from 'next/link';
import { faB,faS,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faB,faS, faMagnifyingGlass )

interface FormValues {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: 'Your Name',
    email: 'Your Email',
    mobile: '+91 256 548 7542',
    subject: 'Type Your Subject',
    message: 'Your Message...',
  });

  type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  
  type Contact = {
    type: string;
    value: string;
  };
  
  type ContactInfo = {
    address: Address;
    contacts: Contact[];
  };
  
  const contactInfo: ContactInfo = {
    address: {
      street: '1354 Green Street',
      city: 'Nashville ,',
      state: 'Dodge City ',
      zip: 'KS 67801',
      country: 'United States',
    },
    contacts: [
      {
        type: 'Customer Care',
        value: '+91 458 753 6924',
      },
      {
        type: 'Drop A Mail',
        value: 'dhananjaypreet@gmail.com',
      },
    ],
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
const { address, contacts } = contactInfo;
  return (
    <>
    <div className='bg-gray-100'>
  <header className="bg-gray-900 relative h-16">
    <div className="container mx-auto px-4 flex justify-left items-center h-full">
      <nav className="flex space-x-4">
        <Link href="/" passHref legacyBehavior>
          <a
            className={`text-white hover:text-gray-300 ${activeLink === '/' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </a>
        </Link>
        <Link href="/pages" passHref legacyBehavior>
          <a
            className={`text-white hover:text-gray-300 ${activeLink === '/pages' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('/pages')}
          >
            Pages
          </a>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <a
            className={`text-white hover:text-gray-300 ${activeLink === '/contact' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </a>
        </Link>
      </nav>
    </div>
  </header>
  <section className="relative mt-16">
  <div className="container mx-auto px-4 lg:px-0">
    <div className="flex justify-center">
      <h2 className="text-6xl p-4 rounded my-6">Contact Us</h2>
    </div>
    <div className="row align-items-start justify-content-center bg-white rounded-lg">
      <div className="col-lg-8 col-md-10 col-sm-12">
        <form onSubmit={handleSubmit} className="submit-form py-4 px-3 mb-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="p-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full border-2 h-16 border-gray-200 placeholder-gray-400 outline-none"
                placeholder=""
              />
            </div>
            <div className="p-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email *
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full border-2 h-16 border-gray-200 placeholder-gray-400 outline-none"
                placeholder=""
              />
            </div>
            <div className="p-3">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
                className="w-full border-2 h-16 border-gray-200 placeholder-gray-400 outline-none"
                placeholder=""
              />
            </div>
            <div className="p-3">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formValues.subject}
                onChange={handleChange}
                className="w-full border-2 h-16 border-gray-200 placeholder-gray-400 outline-none"
                placeholder=""
              />
            </div>
            <div className="p-3">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="w-full border-2 h-48 border-gray-200 placeholder-gray-400 outline-none"
                placeholder=""
              />
            </div>
            
          </div>
          <div className="p-3">
              <button
                type="submit"
                className="bg-pink-600 w-48 h-16 text-white font-bold py-2 px-2 rounded-md"
              >
                Send Message
              </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</section>

  <section className="py-8 ">
      <div className="container mx-auto px-2">
       
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-1 relative mx-16 ">
          <div className="bg-white shadow rounded-lg p-4 w-5/6 h-fit ">
            <h3 className="text-2xl font-bold mb-4 text-pink-600 ">Address Info</h3>
            <p className="text-gray-700 ">
              {address.street} {address.city} Drive {address.state}, <p className='whitespace-wrap'>{address.zip} {address.country}</p>
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 w-5/6 h-fit">
            <h3 className="text-xl font-bold mb-4 text-pink-600">Call Us</h3>
            <p className='font-bold text-md'>Customer Care:</p>
            {contacts
              .filter((contact) => contact.type === 'Customer Care')
              .map((contact, index) => (
                <p key={index} className="text-gray-700">
                  {contact.value}
                </p>
              ))}
          </div>
          <div className="bg-white shadow rounded-lg p-4 w-5/6 h-fit">
            <h3 className="text-xl font-bold mb-4 text-pink-600">Drop A Mail</h3>
            <p>Drop mail we will contact you within 24 hours.</p>
            {contacts
              .filter((contact) => contact.type === 'Drop A Mail')
              .map((contact, index) => (
                <p key={index} className="text-gray-700">
                  {contact.value}
                </p>
              ))}
          </div>
       </div>
      </div>
    </section>


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


</div>
    </>
  );
}
