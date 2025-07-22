export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8" id="contact">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-semibold    text-white mb-5">Hair Coaction</h3>
            <p className="text-gray-400">
              Your premier portal for hair education, practical skill development, and career opportunities.
            </p>
          </div>
          {/* Links Column */}
          <div>
            <h3 className="text-xl font-semibold    text-white mb-5">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Courses</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Projects</a></li>
              <li><a href="#internships" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Internships</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Contact Column */}
          {/* Contact Column */}
<div>
  <h3 className="text-xl font-semibold    text-white mb-5">Contact Us</h3>
  <div className="space-y-4 text-gray-400 text-sm">
    {/* Email (clickable) */}
    <a 
      href="mailto:haircoaction@gmail.com" 
      className="flex items-center hover:text-[#6C5CE7] transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#6C5CE7] mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-15zM4 4l8 6 8-6H4zm0 2.25v12.75h16V6.25L12 12.75 4 6.25z"/>
      </svg>
      haircoaction@gmail.com
    </a>

    {/* Phone (not clickable) */}
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#6C5CE7] mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.11-.21c1.21.49 2.53.76 3.89.76.55 0 1 .45 1 1v3.5a1 1 0 0 1-1 1C10.07 22.5 1.5 13.93 1.5 3.5a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1c0 1.36.26 2.68.76 3.89a1.003 1.003 0 0 1-.21 1.11l-2.2 2.2z" />
      </svg>
      +91 60050 92270
    </div>

    {/* Location */}
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#6C5CE7] mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
      </svg>
      Panipat, Haryana, India
    </div>
  </div>
</div>

          {/* Social Column */}
<div>
  <h3 className="text-xl font-semibold    text-white mb-5">Follow Us</h3>
  <div className="flex gap-4 mt-5">
    <a
      href="https://www.instagram.com/haircoaction/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#6C5CE7] hover:-translate-y-1 transition-all"
      aria-label="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608C4.516 2.496 5.783 2.225 7.149 2.163 8.414 2.105 8.794 2.093 12 2.093m0-2.163C8.741 0 8.332.012 7.052.07c-1.631.074-3.137.548-4.29 1.701C1.548 2.925 1.074 4.431 1 6.062.942 7.342.93 7.751.93 12s.012 4.658.07 5.938c.074 1.631.548 3.137 1.701 4.29 1.153 1.153 2.659 1.627 4.29 1.701 1.28.058 1.689.07 5.938.07s4.658-.012 5.938-.07c1.631-.074 3.137-.548 4.29-1.701 1.153-1.153 1.627-2.659 1.701-4.29.058-1.28.07-1.689.07-5.938s-.012-4.658-.07-5.938c-.074-1.631-.548-3.137-1.701-4.29C20.137.618 18.631.144 17 .07 15.72.012 15.311 0 12 0z" />
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/hair-coaction-24719a27b/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#6C5CE7] hover:-translate-y-1 transition-all"
      aria-label="LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5C1.12 6 0 4.88 0 3.5S1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4v12h-4V8zm7.5 0h3.6v1.645h.05c.5-.95 1.72-1.945 3.55-1.945 3.8 0 4.5 2.5 4.5 5.745V20h-4v-5.35c0-1.275-.025-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.825V20h-4V8z" />
      </svg>
    </a>
  </div>
</div>

        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Hair Coaction. All rights reserved.
          </p>
          <ul className="flex flex-col md:flex-row gap-5">
            <li><a href="#" className="text-gray-500 text-sm hover:text-[#6C5CE7] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-[#6C5CE7] transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
