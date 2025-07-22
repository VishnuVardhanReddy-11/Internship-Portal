import React from 'react';

export default function HeaderMain({ menuActive, toggleMenu }) {
  return (
    <header className="bg-white py-5 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-4 md:mb-0">
          <img 
            src="/logo.jpeg" 
            alt="Hair Coaction Logo" 
            className="h-20 w-20 object-cover rounded-xl shadow" 
          />
          <a 
            href="/" 
            className="text-3xl font-bold text-[#6C5CE7] uppercase tracking-wider text-center md:text-left"
          >
            Hair Coaction
          </a>
        </div>
        <nav className="w-full md:w-auto order-3 md:order-none">
          <ul className={`${menuActive ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8 mt-5 md:mt-0`}>
            <li><a href="/about" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">About Us</a></li>
            <li><a href="/#courses" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Courses</a></li>
            <li><a href="/#projects" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Projects</a></li>
            <li><a href="/#internships" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Internships</a></li>
            <li><a href="/#contact" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Contact</a></li>
          </ul>
        </nav>
        <div className="hidden md:flex gap-4">
          <a 
            href="/login" 
            className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all "
          >
            Login
          </a>
          <a 
            href="/register" 
            className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            Register
          </a>
        </div>
        <button 
          className="md:hidden ml-auto text-2xl text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
