const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-4 py-16">
        <div className="flex flex-wrap justify-start lg:mx-10">
          <div className="w-full lg:w-1/5 relative lg:left-20  mb-8 lg:mb-0 lg:px-4">
            <img src="/images/logo.png" className="mb-8" alt="Logo" />
            <div className="text-gray-600 mb-4">
              7742 Sadar Street Range Road, USA<br />United Kingdom GHQ11
            </div>
            <div className="text-gray-600 mb-4">
              40 568 423 6597<br />support@Goodup.com
            </div>
          </div>
          <div className="w-full lg:w-1/6 mb-8 lg:mb-0 lg:ml-48 lg:px-4">
            <h4 className="text-black font-bold mb-4">Main Navigation</h4>
            <ul className="list-unstyled mb-1">
              <li className="mb-1">
                <a href="#">Explore Listings</a>
              </li>
              <li className="mb-1">
                <a href="#">Browse Authors</a>
              </li>
              <li className="mb-1">
                <a href="#">Submit Listings</a>
              </li>
              <li className="mb-1">
                <a href="#">Shortlisted</a>
              </li>
              <li className="mb-1">
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-8 lg:mb-0 lg:px-4">
            <h4 className="text-black font-bold mb-4">Business Owners</h4>
            <ul className="list-unstyled mb-1">
              <li className="mb-1">
                <a href="#">Browse Categories</a>
              </li>
              <li className="mb-1">
                <a href="#">Payment Links</a>
              </li>
              <li className="mb-1">
                <a href="#">Saved Places</a>
              </li>
              <li className="mb-1">
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-8 lg:mb-0 lg:px-4 lg:order-last">
            <h4 className="text-black font-bold mb-4">Helpful Topics</h4>
            <ul className="list-unstyled mb-1">
              <li className="mb-1">
                <a href="#">SiteMap</a>
              </li>
              <li className="mb-1">
                <a href="#">Security</a>
              </li>
              <li className="mb-1">
                <a href="#">Contact</a>
              </li>
              <li className="mb-1">
                <a href="#">FAQ's Page</a>
              </li>
              <li className="mb-1">
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-8 lg:mb-0 lg:px-4">
            <h4 className="text-black font-bold mb-4">About Company</h4>
            <ul className="list-unstyled mb-1">
              <li className="mb-1">
                <a href="#">Who We Are?</a>
              </li>
              <li className="mb-1">
                <a href="#">Our Mission</a>
              </li>
              <li className="mb-1">
                <a href="#">Our Team</a>
              </li>
              <li className="mb-1">
                <a href="#">Packages</a>
              </li>
              <li className="mb-1">
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
