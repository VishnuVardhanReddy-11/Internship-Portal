import { useState } from 'react';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';

export default function HairCoaction() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Header */}
      <HeaderMain menuActive={menuActive} toggleMenu={toggleMenu} />

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
      <h1 className="text-5xl md:text-6xl font-bold  leading-tight mb-6">
        <span className="block">Elevate Your</span>
  <span className="block">Hair Career with</span>
  <span className="block">Hair Coaction</span>
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
        src="girl.png" 
        alt="Hair stylist working on hair" 
        className="max-w-full h-auto rounded-lg shadow-xl"
      />
    </div>
  </div>
</section>

        {/* Features Section */}
        <section id="features-overview" className="bg-white py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold  text-gray-900 mb-16 text-center">
              Your Path to Success Starts Here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-50 p-9 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all text-center">
                <i className="fas fa-graduation-cap text-5xl text-[#6C5CE7] mb-5"></i>
                <h3 className="text-2xl font-semibold  mb-3">Comprehensive Courses</h3>
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
                <h3 className="text-2xl font-semibold  mb-3">Practical Projects</h3>
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
                <h3 className="text-2xl font-semibold  mb-3">Exclusive Internships</h3>
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
    <h2 className="text-4xl font-bold   text-gray-900 mb-5 text-center">
      Our Latest Courses
    </h2>
    <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-16 text-center -mt-5">
      Dive into our diverse range of courses designed to elevate your craft.
    </p>

    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      title: "Artificial Intelligence",
      instructor: "Dr. Alan Turing",
      description: "Explore the foundations and applications of AI across industries.",
      duration: "15 hours",
      rating: "4.8 (420)",
      image: "ai.png",
    },
    {
      title: "Machine Learning",
      instructor: "Jane Doe",
      description: "Explore the fundamentals of machine learning, including supervised and unsupervised learning, model evaluation, and real-world applications using Python.",
      duration: "12 hours",
      rating: "4.9 (512)",
      image: "ml.png",
    },
    {
      title: "Data Science",
      instructor: "Dr. Grace Hopper",
      description: "Analyze data, create visualizations, and apply ML algorithms.",
      duration: "14 hours",
      rating: "4.9 (390)",
      image: "data.png",
    },
  ].map((course, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col"
    >
      <img
        src={course.image}
        alt={`Course: ${course.title}`}
        className="w-full h-52 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-500 text-sm mb-2">Taught by: {course.instructor}</p>
        <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
        <div className="flex gap-4 text-sm text-gray-500 mb-5">
          <span>
            <i className="fas fa-clock text-[#6C5CE7] mr-1"></i> {course.duration}
          </span>
          <span>
            <i className="fas fa-star text-[#6C5CE7] mr-1"></i> {course.rating}
          </span>
        </div>
        <a
          href="#"
          className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center"
        >
          View Course
        </a>
      </div>
    </div>
  ))}
</div>

    </div>

    <div className="text-center mt-16">
      <a
        href="#"
        className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all"
      >
        View All Courses
      </a>
    </div>
  </div>
</section>


        {/* Projects Section */}
       <section id="projects" className="py-12 md:py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-5">
    <h2 className="text-4xl font-bold text-gray-900 mb-5 text-center">
      Showcase Your Skills with Projects
    </h2>
    <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-10 text-center -mt-5">
      Get hands-on, apply your learning, and build a stunning portfolio.
    </p>

    <div className="overflow-x-auto">
      <div className="flex gap-6 w-[700px] md:w-[1200px]">
        {/* Project 1 */}
        <div className="w-[500px] min-w-[500px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex-shrink-0">
          <img
            src="ecom.png"
            alt="E-Commerce Website"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">E-Commerce Website</h3>
          <p className="text-gray-600 mb-1">Domain: Web Development</p>
          <p className="text-gray-500 text-sm">
            Built a full-featured online shopping platform with cart, payment gateway, and admin panel.
          </p>
        </div>

        {/* Project 2 */}
        <div className="w-[500px] min-w-[500px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex-shrink-0">
          <img
            src="ci.png"
            alt="CI/CD Pipeline"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">CI/CD Pipeline</h3>
          <p className="text-gray-600 mb-1">Domain: DevOps</p>
          <p className="text-gray-500 text-sm">
            Implemented continuous integration and deployment for a web app using GitHub Actions & Docker.
          </p>
        </div>

        {/* Project 3 */}
        <div className="w-[500px] min-w-[500px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex-shrink-0">
          <img
            src="crop.png"
            alt="AI Crop Disease Classifier"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">AI Crop Disease Classifier</h3>
          <p className="text-gray-600 mb-1">Domain: AI</p>
          <p className="text-gray-500 text-sm">
            Trained a CNN model to identify plant diseases from leaf images and provide solutions.
          </p>
        </div>

        {/* Project 4 */}
        <div className="w-[500px] min-w-[500px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex-shrink-0">
          <img
            src="app.png"
            alt="Internship Management Portal"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Internship Management Portal</h3>
          <p className="text-gray-600 mb-1">Domain: Application Development</p>
          <p className="text-gray-500 text-sm">
            A role-based portal for students, mentors, and admins to manage internships.
          </p>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <a
        href="#"
        className="inline-block px-7 py-3.5 rounded-md font-semibold text-lg bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] hover:-translate-y-0.5 hover:shadow-md transition-all"
      >
        Explore All Projects
      </a>
    </div>
  </div>
</section>


        {/* Internships Section */}
        <section id="internships" className="bg-gray-100 py-12 md:py-24">
  <div className="max-w-6xl mx-auto px-5">
    <h2 className="text-4xl font-bold   text-gray-900 mb-5 text-center">
      Kickstart Your Career with Internships
    </h2>
    <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-16 text-center -mt-5">
      Find valuable hands-on experience at top salons and studios near you.
    </p>

    {/* Scrollable Internship Cards */}
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-7">
  <div className="flex space-x-6 min-w-[1024px] md:min-w-[1536px] px-1">
        {/* Web Development Intern */}
        <div className="bg-white rounded-lg shadow-md min-w-[300px] max-w-sm p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
          <h3 className="text-xl font-semibold   mb-3">Web Development Intern</h3>
          <p className="text-gray-600 mb-2"><i className="fas fa-building text-[#6C5CE7] mr-2"></i>Code Canvas</p>
          <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i>Bengaluru, Karnataka</p>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
            <li><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> Full-time</li>
            <li><i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i> Paid</li>
            <li><i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i> 6 Months</li>
          </ul>
          <p className="text-gray-600 mb-6 flex-grow">
            Work on frontend and backend features using React and Node.js
          </p>
          <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start">
            Apply Now
          </a>
        </div>

        {/* AI Intern */}
        <div className="bg-white rounded-lg shadow-md min-w-[300px] max-w-sm p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
          <h3 className="text-xl font-semibold   mb-3">Artificial Intelligence Intern</h3>
          <p className="text-gray-600 mb-2"><i className="fas fa-building text-[#6C5CE7] mr-2"></i>AI Nexus</p>
          <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i>Hyderabad, Telangana</p>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
            <li><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> Part-time</li>
            <li><i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i> Unpaid</li>
            <li><i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i> 3 Months</li>
          </ul>
          <p className="text-gray-600 mb-6 flex-grow">
            Assist in model training and automation tasks using Python and TensorFlow
          </p>
          <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start">
            Apply Now
          </a>
        </div>

        {/* Data Science Intern */}
        <div className="bg-white rounded-lg shadow-md min-w-[300px] max-w-sm p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
          <h3 className="text-xl font-semibold   mb-3">Application Development Intern</h3>
          <p className="text-gray-600 mb-2"><i className="fas fa-building text-[#6C5CE7] mr-2"></i>CodeCrafters Technologies</p>
          <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i>Pune, Maharashtra</p>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
            <li><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> Full-time</li>
            <li><i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i> Paid</li>
            <li><i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i> 4 Months</li>
          </ul>
          <p className="text-gray-600 mb-6 flex-grow">
            Work on developing cross-platform mobile and web applications using Flutter and Node.js.
          </p>
          <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start">
            Apply Now
          </a>
        </div>

        {/* DevOps Intern */}
        <div className="bg-white rounded-lg shadow-md min-w-[300px] max-w-sm p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col">
          <h3 className="text-xl font-semibold   mb-3">DevOps Intern</h3>
          <p className="text-gray-600 mb-2"><i className="fas fa-building text-[#6C5CE7] mr-2"></i>CloudStackers</p>
          <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i>Remote</p>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
            <li><i className="fas fa-clock text-[#6C5CE7] mr-1"></i> Full-time</li>
            <li><i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i> Paid</li>
            <li><i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i> 6 Months</li>
          </ul>
          <p className="text-gray-600 mb-6 flex-grow">
            Work with CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure
          </p>
          <a href="#" className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start">
            Apply Now
          </a>
        </div>
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
            <h2 className="text-4xl font-bold   text-white mb-6">
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
      <Footer />
    </div>
  );
}