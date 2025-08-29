import HeaderMainDash from "../components/HeaderMainDash";
import InternshipDetail from "./InternshipDetail";
import { Link } from "react-router-dom";




const InternshipsDash = () => {
  return (
    <>
     <HeaderMainDash />
     
     {/* Internships Section */}
        <section id="internships" className="bg-gray-100 py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold   text-gray-900 mb-5 text-center">
              Kickstart Your Career with Internships
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-16 text-center -mt-5">
              Find valuable hands-on experience at top salons and studios near
              you.
            </p>

            {/* Scrollable Internship Cards */}
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-7">
              <div className="flex space-x-6 min-w-[1024px] md:min-w-[1536px] px-1">
                {[
                  {
                    id: "web",
                    title: "Web Development Intern",
                    description:
                      "Work on frontend and backend features using React and Node.js",
                  },
                  {
                    id: "ai",
                    title: "Artificial Intelligence Intern",
                    description:
                      "Assist in model training and automation tasks using Python and TensorFlow",
                  },
                  {
                    id: "app",
                    title: "Application Development Intern",
                    description:
                      "Work on developing cross-platform mobile and web applications using Flutter and Node.js.",
                  },
                  {
                    id: "devops",
                    title: "DevOps Intern",
                    description:
                      "Work with CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure",
                  },
                ].map((intern) => (
                  <div
                    key={intern.id}
                    className="bg-white rounded-lg shadow-md min-w-[300px] max-w-sm p-6 hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col"
                  >
                    <h3 className="text-xl font-semibold mb-3">
                      {intern.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <i className="fas fa-building text-[#6C5CE7] mr-2"></i>
                      Hair Coaction
                    </p>
                    <p className="text-gray-600 mb-4">
                      <i className="fas fa-map-marker-alt text-[#6C5CE7] mr-2"></i>
                      Remote
                    </p>
                    <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                      <li>
                        <i className="fas fa-clock text-[#6C5CE7] mr-1"></i>{" "}
                        Part-time
                      </li>
                      <li>
                        <i className="fas fa-money-bill-wave text-[#6C5CE7] mr-1"></i>{" "}
                        Unpaid
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt text-[#6C5CE7] mr-1"></i>{" "}
                        3 Months
                      </li>
                    </ul>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {intern.description}
                    </p>
                    <Link
                      to={`/internship/${intern.id}`}
                      className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center self-start"
                    >
                      Apply Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default InternshipsDash;
