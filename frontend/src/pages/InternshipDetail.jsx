// InternshipDetail.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer.jsx";
import HeaderMain from "../components/HeaderMain.jsx";

const internshipData = {
  ai: {
    title: "🧠 Artificial Intelligence Internship",
    subtitle: "Master AI concepts with real-world applications and hands-on projects",
    bgUrl: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=AI+Internship+Background",
    formBanner: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=AI+Internship+Form",
    domain: "Artificial Intelligence",
    learn: [
      "Python programming for AI",
      "Supervised & Unsupervised Machine Learning",
      "Deep Learning using TensorFlow & Keras",
      "Computer Vision and Image Processing",
      "Natural Language Processing (NLP)",
      "Model Evaluation and Hyperparameter Tuning",
      "Time Series Analysis and Forecasting",
      "AI Ethics and Responsible AI",
      "Deployment of AI models using Flask and Streamlit",
      "Working on real-world AI problems and datasets",
    ],
    projects: [
      "Image Classifier with CNN",
      "Sentiment Analysis App",
      "Face Detection System",
      "AI Chatbot using NLP",
      "Stock Price Prediction",
      "Resume Screening Tool",
    ],
    features: [
      ["🎓", "Mentorship", "1-on-1 guidance"],
      ["📜", "Certificate", "Industry recognized"],
      ["🤖", "AI Projects", "6+ live projects"],
      ["🤝", "Network", "Industry connections"],
    ],
  },
  app: {
    title: "📱 Application Development Internship",
    subtitle: "Build powerful mobile & web apps with real-world experience",
    bgUrl: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=App+Dev+Background",
    formBanner: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=App+Dev+Form",
    domain: "Application Development",
    learn: [
      "Building mobile apps using Flutter and React Native",
      "State management and app architecture",
      "Backend APIs integration for mobile apps",
      "Working with Firebase and cloud services",
      "Publishing apps to Play Store and App Store",
      "Offline data handling and caching",
      "User authentication and authorization",
      "Push notifications and real-time features",
      "UI/UX design for mobile interfaces",
      "Debugging and performance optimization",
    ],
    projects: [
      "Food Delivery App",
      "Personal Finance Tracker",
      "Fitness & Health App",
      "Event Booking System",
      "E-Learning Platform",
      "Mobile Chat App",
    ],
    features: [
      ["🎓", "Mentorship", "1-on-1 guidance"],
      ["📜", "Certificate", "Industry recognized"],
      ["💼", "Portfolio", "6+ live projects"],
      ["🤝", "Network", "Industry connections"],
    ],
  },
  devops: {
    title: "⚙️ DevOps Internship",
    subtitle: "Master CI/CD, cloud infrastructure, and automation tools",
    bgUrl: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=DevOps+Background",
    formBanner: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=DevOps+Form",
    domain: "DevOps",
    learn: [
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
    ],
    projects: [
      "CI/CD for Node.js App",
      "Dockerized Microservices",
      "Kubernetes Cluster Setup",
      "Monitoring Dashboard with Grafana",
      "Automated Infra with Terraform",
      "GitOps Pipeline with ArgoCD",
    ],
    features: [
      ["🎓", "Mentorship", "1-on-1 guidance"],
      ["📜", "Certificate", "Industry recognized"],
      ["💼", "Portfolio", "6+ live projects"],
      ["🤝", "Network", "Industry connections"],
    ],
  },
  web: {
    title: "🚀 Web Development Internship",
    subtitle: "Transform your coding skills with hands-on experience",
    bgUrl: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=Hair+CoAction+Background",
    formBanner: "https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=Hair+CoAction+Background",
    domain: "Web Development",
    learn: [
      "Modern React.js development with hooks and state management",
      "Backend development using Node.js and Express.js",
      "Database design and management with MongoDB",
      "RESTful API development and integration",
      "Version control with Git and collaborative development",
      "Cloud deployment and DevOps fundamentals",
      "Agile development methodologies and project management",
      "UI/UX design principles and responsive web development",
      "Testing strategies and debugging techniques",
      "Performance optimization and best practices",
    ],
    projects: [
      "E-Commerce Platform",
      "Social Media Dashboard",
      "Task Management App",
      "Real-time Chat System",
      "Weather Analytics Tool",
      "Portfolio Website",
    ],
    features: [
      ["🎓", "Mentorship", "1-on-1 guidance"],
      ["📜", "Certificate", "Industry recognized"],
      ["💼", "Portfolio", "6+ live projects"],
      ["🤝", "Network", "Industry connections"],
    ],
  },
};

export default function InternshipDetail() {
  const { internshipId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = internshipData[internshipId];


  if (!data) return <div className="text-center p-10">Internship not found.</div>;

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
      className="min-h-screen text-gray-800"
      style={{
        background: `linear-gradient(to right, #6c5ce7e0, #8d7ee7e0), url('${data.bgUrl}') no-repeat center center / cover`,
      }}
    >
      <HeaderMain />
      <div className="max-w-7xl mx-auto px-5 py-10">
        <header className="text-center text-white mb-10 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{data.title}</h1>
          <p className="mt-2 text-lg">{data.subtitle}</p>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-xl animate-fade-in-left">
            <h2 className="text-3xl font-semibold border-b-4 border-indigo-500 pb-2 mb-6">Internship Overview</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                ["Domain", data.domain],
                ["Duration", "3 Months"],
                ["Work Mode", "100% Remote"],
                ["Start Date", "August 2025"],
              ].map(([label, value], i) => (
                <div key={i} className="bg-gradient-to-br from-pink-300 to-pink-500 text-white text-center p-4 rounded-xl shadow transition hover:-translate-y-1">
                  <h3 className="text-sm opacity-80">{label}</h3>
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold border-b-4 border-indigo-500 pb-2 mb-4">What You'll Learn</h2>
              <ul className="space-y-3">
                {data.learn.map((point, i) => (
                  <li key={i} className="bg-indigo-50 hover:bg-indigo-100 border-l-4 border-indigo-500 p-3 rounded-lg transition">
                    ✓ {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold border-b-4 border-indigo-500 pb-2 mb-4">Project Portfolio</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.projects.map((project, i) => (
                  <div key={i} className="bg-gradient-to-br from-teal-100 to-pink-100 p-4 rounded-xl text-center font-semibold hover:scale-105 transition">
                    {project}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {data.features.map(([icon, title, desc], i) => (
                <div key={i} className="text-center bg-indigo-50 p-4 rounded-lg">
                  <div className="text-3xl mb-2">{icon}</div>
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl h-fit sticky top-5 animate-fade-in-right">
            <form
              onSubmit={handleSubmit}
              id="applicationForm"
              className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-xl"
              style={{
                background: `linear-gradient(to right, #6c5ce7e0, #8d7ee7e0), url('${data.formBanner}') no-repeat center center / cover`,
              }}
            >
              <h3 className="text-xl font-semibold text-center mb-6">🔥 Apply Now</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" required className="w-full p-3 rounded-md bg-white text-gray-800" />
                <input type="email" placeholder="Email Address" required className="w-full p-3 rounded-md bg-white text-gray-800" />
                <input type="tel" placeholder="Phone Number" required className="w-full p-3 rounded-md bg-white text-gray-800" />
                <select required className="w-full p-3 rounded-md bg-white text-gray-800">
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <textarea placeholder="Why do you want to join?" required className="w-full p-3 rounded-md bg-white text-gray-800 h-28 resize-y" />
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
        <a href="/" className="inline-block px-6 py-3 mb-10 bg-white text-indigo-600 font-semibold rounded-md shadow-md border border-indigo-600 hover:bg-indigo-100 transition">
          ⬅ Go Back to Home
        </a>
      </div>
      <Footer />
    </div>
  );
}