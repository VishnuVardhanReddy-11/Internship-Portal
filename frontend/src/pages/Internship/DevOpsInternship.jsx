import { useState } from "react";

export default function DevOpsInternship() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        alert("🎉 Thank you for applying! We'll review your application and get back to you within 48 hours.");
        setSubmitted(false);
        document.getElementById("applicationForm").reset();
      }, 1000);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-gray-800"
      style={{
        background: `linear-gradient(to right, #6c5ce7e0, #8d7ee7e0), url('https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=DevOps+Background') no-repeat center center / cover`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-10">
        <header className="text-center text-white mb-10 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">⚙️ DevOps Internship</h1>
          <p className="mt-2 text-lg">Master CI/CD, cloud infrastructure, and automation tools</p>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-xl animate-fade-in-left">
            <h2 className="text-3xl font-semibold border-b-4 border-indigo-500 pb-2 mb-6">Internship Overview</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                ["Domain", "DevOps"],
                ["Duration", "3 Months"],
                ["Work Mode", "100% Remote"],
                ["Start Date", "August 2025"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-purple-400 to-pink-500 text-white text-center p-4 rounded-xl shadow transition hover:-translate-y-1"
                >
                  <h3 className="text-sm opacity-80">{label}</h3>
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            {/* Learning Points */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold border-b-4 border-indigo-500 pb-2 mb-4">What You'll Learn</h2>
              <ul className="space-y-3">
                {[
                  "Introduction to DevOps practices and culture",
                  "CI/CD pipelines using Jenkins and GitHub Actions",
                  "Docker containerization and orchestration",
                  "Kubernetes basics and deployment",
                  "Infrastructure as Code using Terraform",
                  "Monitoring and logging with Prometheus & Grafana",
                  "Configuration management with Ansible",
                  "Version control with Git and GitHub",
                  "Cloud services (AWS basics for DevOps)",
                  "Scripting with Bash and Python for automation",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="bg-indigo-50 hover:bg-indigo-100 border-l-4 border-indigo-500 p-3 rounded-lg transition"
                  >
                    ✓ {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold border-b-4 border-indigo-500 pb-2 mb-4">Project Portfolio</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "CI/CD for Node.js App",
                  "Dockerized Microservices",
                  "Kubernetes Cluster Setup",
                  "Monitoring Dashboard with Grafana",
                  "Automated Infra with Terraform",
                  "GitOps Pipeline with ArgoCD",
                ].map((project, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-teal-100 to-pink-100 p-4 rounded-xl text-center font-semibold hover:scale-105 transition"
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["🎓", "Mentorship", "1-on-1 guidance"],
                ["📜", "Certificate", "Industry recognized"],
                ["💼", "Portfolio", "6+ live projects"],
                ["🤝", "Network", "Industry connections"],
              ].map(([icon, title, desc], i) => (
                <div key={i} className="text-center bg-indigo-50 p-4 rounded-lg">
                  <div className="text-3xl mb-2">{icon}</div>
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-2xl p-6 shadow-xl h-fit sticky top-5 animate-fade-in-right">
            <form
              onSubmit={handleSubmit}
              id="applicationForm"
              className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-xl"
              style={{
                background: `linear-gradient(to right, #6c5ce7e0, #8d7ee7e0), url('https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=DevOps+Form') no-repeat center center / cover`,
              }}
            >
              <h3 className="text-xl font-semibold text-center mb-6">🚀 Apply Now</h3>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium" htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" required className="w-full p-3 rounded-md bg-white text-gray-800" />
                </div>

                <div>
                  <label className="block mb-1 font-medium" htmlFor="email">Email Address</label>
                  <input type="email" id="email" required className="w-full p-3 rounded-md bg-white text-gray-800" />
                </div>

                <div>
                  <label className="block mb-1 font-medium" htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full p-3 rounded-md bg-white text-gray-800" />
                </div>

                <div>
                  <label className="block mb-1 font-medium" htmlFor="experience">Experience Level</label>
                  <select id="experience" required className="w-full p-3 rounded-md bg-white text-gray-800">
                    <option value="">Select Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium" htmlFor="motivation">Why do you want to join?</label>
                  <textarea
                    id="motivation"
                    required
                    placeholder="Tell us about your motivation and goals..."
                    className="w-full p-3 rounded-md bg-white text-gray-800 h-28 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full p-3 rounded-md font-semibold text-lg transition ${
                    loading
                      ? "bg-orange-300 cursor-not-allowed"
                      : submitted
                      ? "bg-green-600"
                      : "bg-gradient-to-br from-red-400 to-orange-500 hover:brightness-105"
                  }`}
                  disabled={loading || submitted}
                >
                  {loading ? "Submitting... ⏳" : submitted ? "Application Submitted ✅" : "Submit Application 🚀"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <a
          href="/"
          className="inline-block px-6 py-3 mb-10 bg-white text-indigo-600 font-semibold rounded-md shadow-md border border-indigo-600 hover:bg-indigo-100 transition"
        >
          ⬅ Go Back to Home
        </a>
      </div>
    </div>
  );
}
