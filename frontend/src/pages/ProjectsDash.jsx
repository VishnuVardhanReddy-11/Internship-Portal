import HeaderMainDash from "../components/HeaderMainDash";

const ProjectsDash = () => {
  return (
    <>
        <HeaderMainDash/>

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
                  <h3 className="text-xl font-semibold mb-2">
                    E-Commerce Website
                  </h3>
                  <p className="text-gray-600 mb-1">Domain: Web Development</p>
                  <p className="text-gray-500 text-sm">
                    Built a full-featured online shopping platform with cart,
                    payment gateway, and admin panel.
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
                    Implemented continuous integration and deployment for a web
                    app using GitHub Actions & Docker.
                  </p>
                </div>

                {/* Project 3 */}
                <div className="w-[500px] min-w-[500px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex-shrink-0">
                  <img
                    src="crop.png"
                    alt="AI Crop Disease Classifier"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    AI Crop Disease Classifier
                  </h3>
                  <p className="text-gray-600 mb-1">Domain: AI</p>
                  <p className="text-gray-500 text-sm">
                    Trained a CNN model to identify plant diseases from leaf
                    images and provide solutions.
                  </p>
                </div>

                {/* Project 4 */}
                <div className="w-[500px] min-w-[500px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex-shrink-0">
                  <img
                    src="app.png"
                    alt="Internship Management Portal"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Internship Management Portal
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Domain: Application Development
                  </p>
                  <p className="text-gray-500 text-sm">
                    A role-based portal for students, mentors, and admins to
                    manage internships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
  );
};

export default ProjectsDash;
