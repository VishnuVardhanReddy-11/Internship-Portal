import React from "react";
// import "../styles/HeaderMainDash.css";

export default function HeaderMain({ menuActive, toggleMenu }) {
  return (
    <header className="bg-white py-5 shadow-sm sticky top-0 z-50">
      <div className="w-full px-5 flex flex-wrap justify-between items-center">
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
          <ul
            className={`${
              menuActive ? "flex" : "hidden"
            } md:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 mt-5 md:mt-0 items-center`}
          >
            <li>
              <a
                href="/about"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/#courses"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#internships"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Internships
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="text-gray-600 font-semibold text-lg hover:text-[#6C5CE7] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6C5CE7] after:transition-all hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex gap-4">
          <a
            href="/login"
            className="inline-block px-5 py-3.5 rounded-md font-semibold text-lg bg-white text-[#6C5CE7] border-2 border-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all "
          >
            My Courses
          </a>
          {/* logout button  */}
          <button
            onClick={async () => {
              try {
                const res = await axios.post(
                  "http://localhost:3000/user/logout",
                  {},
                  { withCredentials: true }
                );

                if (res.status === 200) {
                  alert("Logged out successfully");
                  navigate("/");
                } else {
                  alert("Logout failed. Please try again.");
                }
              } catch (error) {
                console.error("Logout failed:", error);
                alert(
                  error.response?.data?.message ||
                    "Logout failed. Please try again."
                );
              }
            }}
            style={{
              padding: "11px 40px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            Logout
          </button>
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
