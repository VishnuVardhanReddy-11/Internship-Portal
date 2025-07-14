import { useState } from 'react';

export default function HairCoaction() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white py-5 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <a href="#" className="text-3xl font-bold text-[#6C5CE7] uppercase tracking-wider">
              Hair Coaction
            </a>
          </div>
          
          <nav className="w-full md:w-auto order-3 md:order-none">
            <ul className={`${menuActive ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8 mt-5 md:mt-0`}>
              <li><a href="#about" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">About Us</a></li>
              <li><a href="#courses" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Courses</a></li>
              <li><a href="#projects" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Projects</a></li>
              <li><a href="#internships" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Internships</a></li>
              <li><a href="#contact" className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full">Contact</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:flex gap-4">
            <a 
  href="/login" 
  className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all"
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

      <main>
        {/* Hero Section */}
        <section 
  className="relative text-white py-24 min-h-[80vh] flex items-center"
  style={{
    background: "linear-gradient(to right, #6c5ce7e0, #8d7ee7e0), url('https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=Hair+CoAction+Background') no-repeat center center/cover"
  }}
>
  {/* Background overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#6c5ce7e0] to-[#8d7ee7e0]"></div>
  
  {/* Background image */}
  <div 
    className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=Hair+CoAction+Background')] bg-cover bg-center"
    aria-hidden="true"
  ></div>
  
  {/* Content */}
  <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10 relative z-10">
    <div className="flex-1 max-w-2xl">
      <h1 className="text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight mb-6">
        Elevate Your Hair Career with Hair Coaction
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10">
        Unlock your potential with expert courses, hands-on projects, and exclusive internship opportunities in the hair industry.
      </p>
      <div className="flex flex-col sm:flex-row gap-5">
        <a href="#courses" className="px-12 py-4 rounded-md font-semibold text-lg bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] hover:-translate-y-0.5 hover:shadow-md transition-all text-center">
          Explore Courses
        </a>
        <a href="#internships" className="px-12 py-4 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all text-center">
          Find Internships
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center">
      <img 
        src="https://via.placeholder.com/600x400/f8f8f8/333?text=Hair+Coaction+Hero+Image" 
        alt="Hair stylist working on hair" 
        className="max-w-full h-auto rounded-lg shadow-xl"
      />
    </div>
  </div>
</section>

        {/* Features Section */}
        <section id="features-overview" className="bg-white py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold font-['Poppins'] text-gray-900 mb-16 text-center">
              Your Path to Success Starts Here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-50 p-9 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all text-center">
                <i className="fas fa-graduation-cap text-5xl text-[#6C5CE7] mb-5"></i>
                <h3 className="text-2xl font-semibold font-['Poppins'] mb-3">Comprehensive Courses</h3>
                <p className="text-gray-600 mb-6">
                  Master new techniques and business skills with our curated online courses, taught by industry leaders.
                </p>
                <a href="#courses" className="text-[#6C5CE7] font-semibold hover:text-[#5B4DC0] transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2 transition-all hover:ml-3"></i>
                </a>
              </div>
              
              {/* Feature Card 2 */}
              <div className="bg-gray-50 p-9 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all text-center">
                <i className="fas fa-lightbulb text-5xl text-[#6C5CE7] mb-5"></i>
                <h3 className="text-2xl font-semibold font-['Poppins'] mb-3">Practical Projects</h3>
                <p className="text-gray-600 mb-6">
                  Apply your knowledge with real-world projects, build your portfolio, and get valuable feedback.
                </p>
                <a href="#projects" className="text-[#6C5CE7] font-semibold hover:text-[#5B4DC0] transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2 transition-all hover:ml-3"></i>
                </a>
              </div>
              
              {/* Feature Card 3 */}
              <div className="bg-gray-50 p-9 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all text-center">
                <i className="fas fa-briefcase text-5xl text-[#6C5CE7] mb-5"></i>
                <h3 className="text-2xl font-semibold font-['Poppins'] mb-3">Exclusive Internships</h3>
                <p className="text-gray-600 mb-6">
                  Connect with top salons and studios for hands-on experience and kickstart your professional journey.
                </p>
                <a href="#internships" className="text-[#6C5CE7] font-semibold hover:text-[#5B4DC0] transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2 transition-all hover:ml-3"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="bg-gray-100 py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold font-['Poppins'] text-gray-900 mb-5 text-center">
              Our Latest Courses
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-16 text-center -mt-5">
              Dive into our diverse range of courses designed to elevate your craft.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Course Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <img 
                  src="https://via.placeholder.com/300x200/ddd/333?text=Course+Image+1" 
                  alt="Course: Advanced Balayage Techniques" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-['Poppins'] mb-2">Advanced Balayage Techniques</h3>
                  <p className="text-gray-500 text-sm mb-3">Taught by: Sarah Lee</p>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Master the art of natural-looking highlights and dimension.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-500 mb-5">
                    <span><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> 10 hours</span>
                    <span><i className="fas fa-star text-[#6C5CE7] mr-1"></i> 4.9 (245)</span>
                  </div>
                  <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center">
                    View Course
                  </a>
                </div>
              </div>
              
              {/* Course Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <img 
                  src="https://via.placeholder.com/300x200/ddd/333?text=Course+Image+2" 
                  alt="Course: Salon Business Essentials" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-['Poppins'] mb-2">Salon Business Essentials</h3>
                  <p className="text-gray-500 text-sm mb-3">Taught by: Mark Chen</p>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Learn to manage, market, and grow your salon business effectively.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-500 mb-5">
                    <span><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> 8 hours</span>
                    <span><i className="fas fa-star text-[#6C5CE7] mr-1"></i> 4.7 (180)</span>
                  </div>
                  <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center">
                    View Course
                  </a>
                </div>
              </div>
              
              {/* Course Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <img 
                  src="https://via.placeholder.com/300x200/ddd/333?text=Course+Image+3" 
                  alt="Course: Creative Updos & Bridal Styling" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-['Poppins'] mb-2">Creative Updos & Bridal Styling</h3>
                  <p className="text-gray-500 text-sm mb-3">Taught by: Emily White</p>
                  <p className="text-gray-600 mb-4 flex-grow">
                    From classic to contemporary, master stunning bridal looks.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-500 mb-5">
                    <span><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> 12 hours</span>
                    <span><i className="fas fa-star text-[#6C5CE7] mr-1"></i> 5.0 (310)</span>
                  </div>
                  <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center">
                    View Course
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a href="#" className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all">
                View All Courses
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold font-['Poppins'] text-gray-900 mb-5 text-center">
              Showcase Your Skills with Projects
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-16 text-center -mt-5">
              Get hands-on, apply your learning, and build a stunning portfolio.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <img 
                  src="https://via.placeholder.com/300x200/eee/333?text=Project+Image+1" 
                  alt="Project: Before and after haircut transformation" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-['Poppins'] mb-2">Classic Bob Transformation</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Challenge: Apply precision cutting for a sharp, modern bob.
                  </p>
                  <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-transparent text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white transition-all text-center">
                    View Project
                  </a>
                </div>
              </div>
              
              {/* Project Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <img 
                  src="https://via.placeholder.com/300x200/eee/333?text=Project+Image+2" 
                  alt="Project: Creative Color Blend" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-['Poppins'] mb-2">Multi-Dimensional Color Blend</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Challenge: Create a seamless, vibrant color blend using advanced techniques.
                  </p>
                  <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-transparent text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white transition-all text-center">
                    View Project
                  </a>
                </div>
              </div>
              
              {/* Project Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <img 
                  src="https://via.placeholder.com/300x200/eee/333?text=Project+Image+3" 
                  alt="Project: Elaborate updo for special occasion" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-['Poppins'] mb-2">Bridal Updo Masterpiece</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Challenge: Design and execute an intricate updo for a wedding.
                  </p>
                  <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-transparent text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white transition-all text-center">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a href="#" className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] hover:-translate-y-0.5 hover:shadow-md transition-all">
                Explore All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="bg-gray-100 py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold font-['Poppins'] text-gray-900 mb-5 text-center">
              Kickstart Your Career with Internships
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-16 text-center -mt-5">
              Find valuable hands-on experience at top salons and studios near you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Internship Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <h3 className="text-xl font-semibold font-['Poppins'] mb-3">Junior Stylist Intern</h3>
                <p className="text-gray-600 mb-2"><i className="fas fa-building text-[#6C5CE7] mr-2"></i> "The Style Hub" Salon</p>
                <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i> Panipat, Haryana</p>
                
                <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                  <li><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> Full-time</li>
                  <li><i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i> Paid Stipend</li>
                  <li><i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i> 6 Months</li>
                </ul>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  Assist senior stylists, learn client consultation, and master blowouts.
                </p>
                
                <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start">
                  Apply Now
                </a>
              </div>
              
              {/* Internship Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <h3 className="text-xl font-semibold font-['Poppins'] mb-3">Coloring Apprentice</h3>
                <p className="text-gray-600 mb-2"><i className="fas fa-building text-[#6C5CE7] mr-2"></i> "Vibrant Hues" Studio</p>
                <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i> Indore, MP</p>
                
                <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                  <li><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> Part-time</li>
                  <li><i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i> Unpaid (for credit)</li>
                  <li><i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i> 3 Months</li>
                </ul>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  Focus on color mixing, application, and advanced techniques.
                </p>
                
                <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start">
                  Apply Now
                </a>
              </div>
              
              {/* Internship Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
                <h3 className="text-xl font-semibold font-['Poppins'] mb-3">Salon Management Intern</h3>
                <p className="text-gray-600 mb-2"><i className="fas fa-building text-[#6C5CE7] mr-2"></i> "Elite Beauty" Group</p>
                <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i> Delhi, NCR</p>
                
                <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                  <li><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> Full-time</li>
                  <li><i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i> Paid Internship</li>
                  <li><i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i> 1 Year</li>
                </ul>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  Gain insights into salon operations, marketing, and client relations.
                </p>
                
                <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start">
                  Apply Now
                </a>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a href="#" className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all">
                View All Internships
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta-join" className="bg-[#6C5CE7] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-4xl font-bold font-['Poppins'] text-white mb-6">
              Ready to Transform Your Hair Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Join the Hair Coaction community today and take the next step in your career.
            </p>
            <a href="#" className="inline-block px-10 py-4 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-white hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all">
              Sign Up for Free!
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 pt-16 pb-8" id="contact">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* About Column */}
            <div>
              <h3 className="text-xl font-semibold font-['Poppins'] text-white mb-5">Hair Coaction</h3>
              <p className="text-gray-400">
                Your premier portal for hair education, practical skill development, and career opportunities.
              </p>
            </div>
            
            {/* Links Column */}
            <div>
              <h3 className="text-xl font-semibold font-['Poppins'] text-white mb-5">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">About Us</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Courses</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Projects</a></li>
                <li><a href="#internships" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Internships</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#6C5CE7] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-semibold font-['Poppins'] text-white mb-5">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <p><i className="fas fa-envelope text-[#6C5CE7] mr-2"></i> haircoaction@gmail.com</p>
                <p><i className="fas fa-phone text-[#6C5CE7] mr-2"></i> +91 60050 92270</p>
                <p><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i> Panipat, Haryana, India</p>
              </div>
            </div>
            
            {/* Social Column */}
            <div>
              <h3 className="text-xl font-semibold font-['Poppins'] text-white mb-5">Follow Us</h3>
              <div className="flex gap-4 mt-5">
                <a 
                  href="https://www.instagram.com/haircoaction/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 text-2xl hover:text-[#6C5CE7] hover:-translate-y-1 transition-all"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/hair-coaction-24719a27b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 text-2xl hover:text-[#6C5CE7] hover:-translate-y-1 transition-all"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
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
    </div>
  );
}