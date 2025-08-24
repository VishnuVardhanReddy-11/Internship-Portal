import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo.jpeg" alt="Hair Coaction Logo" className="h-12 w-12 object-cover rounded-lg mr-3" />
              <h3 className="text-2xl font-bold text-[#D89A7A]">Hair Coaction</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your AI-powered partner in personalized haircare, wellness, and education. 
              We blend technology, science, and community to help you care for your crown.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D89A7A] transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D89A7A] transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D89A7A] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D89A7A]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-[#D89A7A] transition-colors">About Us</a></li>
              <li><a href="/#courses" className="text-gray-400 hover:text-[#D89A7A] transition-colors">Courses</a></li>
              <li><a href="/#projects" className="text-gray-400 hover:text-[#D89A7A] transition-colors">Projects</a></li>
              <li><a href="/#internships" className="text-gray-400 hover:text-[#D89A7A] transition-colors">Internships</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-[#D89A7A] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D89A7A]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center hover:text-[#D89A7A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#D89A7A] mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-gray-300">123 Innovation St, Tech City</span>
              </div>
              <div className="flex items-center hover:text-[#D89A7A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#D89A7A] mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-gray-300">hello@haircoaction.com</span>
              </div>
              <div className="flex items-center hover:text-[#D89A7A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#D89A7A] mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-[#D89A7A]">Stay Updated</h4>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates and insights</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#D89A7A] focus:ring-1 focus:ring-[#D89A7A]"
              />
              <button className="px-6 py-3 bg-[#D89A7A] text-white rounded-md font-semibold hover:bg-[#c08565] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Hair Coaction. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-[#D89A7A] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#D89A7A] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
