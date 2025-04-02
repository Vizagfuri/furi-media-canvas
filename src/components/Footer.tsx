
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div>
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-furi-500">Furi</span>
                <span className="text-2xl font-normal ml-1">Media School</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering the next generation of digital marketers with cutting-edge education and practical skills.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Furi Media School.<br/>
              All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">SEO & Content Strategy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Paid Advertising</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Email Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics & Data</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to receive updates and marketing tips.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-900 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-furi-600 hover:bg-furi-700 px-4 py-2 rounded-r-md text-white text-sm transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
