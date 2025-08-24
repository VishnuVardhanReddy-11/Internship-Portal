import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';
const courseData = {
  ai: {
    title: 'Artificial Intelligence',
    instructor: 'Dr. Alan Turing',
    description: 'Explore the foundations and applications of AI across industries.',
    duration: '15 hours',
    rating: '4.8 (420)',
    image: '/ai.png',
    bg: 'https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=Artificial+Intelligence',
    details: 'This course covers the basics of AI, including machine learning, neural networks, and real-world applications.',
    learn: [
      "Fundamentals of AI and intelligent agents",
      "Machine Learning: regression & classification",
      "Deep Learning with TensorFlow & Keras",
      "Natural Language Processing (NLP)",
      "Computer Vision fundamentals",
      "Model evaluation and tuning",
      "Responsible and Ethical AI",
      "AI in real-world domains (healthcare, finance, etc.)",
      "AI deployment with Flask and Streamlit",
      "Knowledge representation and expert systems"
    ],
    features: [
      ["📚", "Comprehensive", "Structured curriculum"],
      ["🎓", "Certificate", "Issued after completion"],
      ["👨‍🏫", "Mentorship", "Live expert sessions"],
      ["🛠️", "Real Skills", "Deploy live AI applications"]
    ]
  },
  ml: {
    title: 'Machine Learning',
    instructor: 'Jane Doe',
    description: 'Master supervised and unsupervised ML with real-world datasets.',
    duration: '12 hours',
    rating: '4.9 (512)',
    image: '/ml.png',
    bg: 'https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=Machine+Learning',
    details: 'Dive deep into algorithms, hands-on projects, and ML workflows using Python.',
    learn: [
      "Data preprocessing & cleaning",
      "Supervised learning: SVM, KNN, Decision Trees",
      "Unsupervised learning: Clustering & PCA",
      "Model selection and evaluation techniques",
      "Overfitting & underfitting strategies",
      "Ensemble methods: Random Forests, XGBoost",
      "Python libraries: scikit-learn, pandas, matplotlib",
      "Real-world case studies and challenges",
      "ML model deployment basics"
    ],
    features: [
      ["🧠", "Algorithmic Depth", "Advanced ML techniques"],
      ["👨‍💻", "Hands-on", "Code-first learning style"],
      ["📊", "Case Studies", "Real industry applications"],
      ["🔁", "Projects", "Train & test multiple models"]
    ]
  },
  data: {
    title: 'Data Science',
    instructor: 'Dr. Grace Hopper',
    description: 'Analyze and visualize data, and apply machine learning techniques.',
    duration: '14 hours',
    rating: '4.9 (390)',
    image: '/data.png',
    bg: 'https://via.placeholder.com/1920x800/6C5CE7/ffffff?text=Data+Science',
    details: 'Learn end-to-end data workflows including wrangling, visualization, and prediction.',
    learn: [
      "Intro to data science & workflows",
      "Data wrangling with pandas",
      "Exploratory Data Analysis (EDA)",
      "Data visualization using matplotlib & seaborn",
      "Basic statistics & probability",
      "Feature engineering techniques",
      "Predictive modeling and ML intro",
      "Deploying notebooks with Streamlit",
      "Capstone project with real dataset"
    ],
    features: [
      ["📈", "Visual Analysis", "Charts & dashboards"],
      ["🧪", "Practical Labs", "Real-world data sets"],
      ["📚", "Beginner Friendly", "No prior experience needed"],
      ["🚀", "Capstone", "Project-based assessment"]
    ]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return <div className="p-10 text-center text-red-500 text-xl">❌ Course not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderMain/>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8 space-y-12">
        {/* Course Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <img src={course.image} alt={course.title} className="w-full rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
            <p className="mb-4">{course.description}</p>
            <div className="flex gap-4 text-sm text-gray-500 mb-5">
              <span><i className="fas fa-clock text-[#7A7266] mr-1"></i> {course.duration}</span>
              <span><i className="fas fa-star text-[#7A7266] mr-1"></i> {course.rating}</span>
            </div>
            <p className="text-gray-700">{course.details}</p>
          </div>
        </div>

        {/* What You'll Learn */}
        {course.learn && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b-4 border-indigo-500 pb-2 mb-4">What You'll Learn</h2>
            <ul className="space-y-3">
              {course.learn.map((point, i) => (
                <li
                  key={i}
                  className="bg-indigo-50 hover:bg-indigo-100 border-l-4 border-indigo-500 p-3 rounded-lg transition"
                >
                  ✓ {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Features */}
        {course.features && (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {course.features.map(([icon, title, desc], i) => (
              <div key={i} className="text-center bg-indigo-50 p-4 rounded-lg">
                <div className="text-3xl mb-2">{icon}</div>
                <h4 className="font-bold">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        
      </div>
<div className="flex justify-center items-center gap-6 mt-10 mb-10 flex-wrap">
  <button className="px-8 py-3 rounded-md font-semibold text-lg bg-[#7A7266] text-white border-2 border-[#7A7266] hover:bg-[#5B3A29] hover:border-[#5B3A29] transition-all">
    🚀 Enroll Now
  </button>
  
  <a
    href="/"
    className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-md border border-indigo-600 hover:bg-indigo-100 transition"
  >
    ⬅ Go Back to Home
  </a>
</div>

      <Footer />
    </div>
  );
}
