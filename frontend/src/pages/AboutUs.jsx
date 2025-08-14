// AboutUs.jsx
import React, { useState } from 'react';
import HeaderMain from '../components/HeaderMain';
import Footer from '../components/Footer';

export default function AboutUs() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
      <HeaderMain menuActive={menuActive} toggleMenu={toggleMenu} />

      <main className="max-w-6xl mx-auto px-5 py-20 space-y-24">
       <section className="relative bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff] py-16 px-8 rounded-3xl shadow-xl overflow-hidden">
  <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover opacity-5 pointer-events-none"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    {/* Text Section */}
    <div className="text-center md:text-left">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-[#5B47EB] tracking-tight mb-6 drop-shadow-md">
        Welcome to     <br /><span className="text-[#341f97]">Hair Coaction</span>
      </h1>

      <div className="w-24 h-1 bg-gradient-to-r from-[#6C5CE7] to-[#a29bfe] mb-6 rounded-full mx-auto md:mx-0 animate-pulse"></div>

      <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
        Your <span className="text-[#6C5CE7] font-medium">AI-powered</span> partner in <span className="italic text-[#444]">personalized haircare, wellness, and education</span>.
        We blend <span className="font-semibold text-[#5B47EB]">technology, science, and community</span> to help you care for your crown — smarter, earlier, and better.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src="comb.png"
        alt="Hair Coaction Illustration"
        className="w-48 sm:w-56 md:w-60 rounded-xl shadow-lg border-4 border-[#6C5CE7]"
      />
    </div>
  </div>
</section>


        {/* Problem Statement */}
        <section className="bg-white p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold text-[#6C5CE7] mb-4 border-b-2 border-purple-200 pb-2">
    🧠 Problem Statement
  </h2>
  <p className="text-gray-700 text-lg leading-relaxed">
    With increasing pollution, individuals are facing issues like Alopecia Areata, Folliculitis, and Telogen Effluvium.
    Early signs are often missed due to lack of awareness. Generic products fail to address diverse textures, scalp types,
    and unique needs — this care gap affects well-being, confidence, and diagnosis.
  </p>
</section>


        {/* Vision */}
        <section className="bg-white p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold text-[#6C5CE7] mb-4 border-b-2 border-purple-200 pb-2">
    🌟 Our Vision
  </h2>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
    <li>Tailored solutions for all hair types, volumes, and scalps.</li>
    <li>Empowering users with AI-powered early diagnosis and prevention.</li>
    <li>Promoting self-love and acceptance through tech-enabled care.</li>
    <li>Creating an inclusive, knowledge-sharing community.</li>
  </ul>
</section>


        {/* Solution */}
       <section className="bg-white p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold text-[#6C5CE7] mb-4 border-b-2 border-purple-200 pb-2">💡 Our Solution</h2>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
    <li>AI/ML-driven detection of early-stage scalp conditions.</li>
    <li>Customized care routines based on individual characteristics.</li>
    <li>Integration with dermatologists for expert-backed recommendations.</li>
    <li>Real-time support and symptom tracking for users.</li>
    <li>Educational resources to help users understand their hair better.</li>
  </ul>
</section>

        {/* What We Offer */}
<section className="bg-white p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold text-[#6C5CE7] mb-4 border-b-2 border-purple-200 pb-2">🎁 What We Offer</h2>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
    <li>Expert-led courses on haircare, styling, and biology.</li>
    <li>Hands-on internships and practical project opportunities.</li>
    <li>AI-driven hair analysis and custom reports.</li>
    <li>Interactive community events and webinars.</li>
  </ul>
</section>

        {/* Target Audience */}
<section className="bg-white p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold text-[#6C5CE7] mb-4 border-b-2 border-purple-200 pb-2">🎯 Target Audience</h2>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
    <li>People suffering from hair fall, dandruff, and scalp issues.</li>
    <li>Consumers seeking gentle, soothing, and organic haircare.</li>
    <li>Individuals open to data-driven and tech-based solutions.</li>
    <li>Salon professionals and beauty tech innovators.</li>
  </ul>
</section>
{/* Core Values */}
<section>
  <h2 className="text-3xl font-bold text-center text-[#6C5CE7] mb-10 border-b-4 border-purple-200 inline-block">
    🌟 Our Core Values
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: 'Inclusivity',
        desc: 'We welcome and represent all hair types, colors, and conditions.',
        icon: '🌍',
      },
      {
        title: 'Innovation',
        desc: 'We leverage AI and science to solve personalized haircare challenges.',
        icon: '🧠',
      },
      {
        title: 'Education',
        desc: 'We build knowledge to empower confident, informed hair decisions.',
        icon: '📚',
      },
      {
        title: 'Empowerment',
        desc: 'We inspire users to take charge of their beauty and career paths.',
        icon: '🚀',
      },
    ].map((value, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-md p-6 text-center transition transform hover:scale-105 hover:shadow-xl"
      >
        <div className="text-4xl mb-3">{value.icon}</div>
        <h3 className="text-xl font-semibold text-[#6C5CE7] mb-2">{value.title}</h3>
        <p className="text-gray-700 text-base">{value.desc}</p>
      </div>
    ))}
  </div>
</section>


{/* Business Model */}
<section className="bg-white p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold text-[#6C5CE7] mb-4 border-b-2 border-purple-200 pb-2">📊 Business Model</h2>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
    <li><strong>AI/ML Platform:</strong> Paid subscriptions for diagnosis and guidance.</li>
    <li><strong>NGO Programs:</strong> Awareness drives and customized product demos.</li>
    <li><strong>Events:</strong> Workshops, quizzes, seminars for learning and revenue.</li>
  </ul>
</section>

{/* Why Choose Us */}
<section className="bg-white p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold text-[#6C5CE7] mb-4 border-b-2 border-purple-200 pb-2">🚀 Why Choose Hair Coaction?</h2>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
    <li>We blend science, style, and strategy to deliver unmatched haircare experiences.</li>
    <li>Our team is driven by purpose, backed by research, and inspired by real stories.</li>
    <li>We prioritize accessibility, inclusivity, and transformation at every step.</li>
    <li>We're not just a platform—we're a movement changing how the world sees hair wellness.</li>
  </ul>
</section>

       {/* Team Section */}
{/* Team Section */}
{/* Our Core Team */}
{/* Our Core Team */}
<section className="bg-white p-10 rounded-2xl shadow-xl mt-20 max-w-6xl mx-auto text-center">
  <div className="mb-10">
    <h2 className="text-3xl font-bold text-[#6C5CE7] inline-block border-b-4 border-purple-200 px-4">
      👥 Our Core Team
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
    {[
      {
        name: 'Vanshika Gupta',
        role: 'Founder – Vision, Strategy, Brand, and Stakeholder Management.',
        image: 'vanshika.png',
      },
      {
        name: 'Komal',
        role: 'Co-Founder – Execution, Operations, and Team Coordination.',
        image: 'komal.png',
      },
      {
        name: 'Manya Malik',
        role: 'Compliance & Documentation – Agreements, Certifications, Reporting.',
        image: 'manya.png',
      },
      {
        name: 'Anshika',
        role: 'Talent & Operations – Onboarding, Evaluation, Internal Coordination.',
        image: 'anshika.png',
      },
    ].map((member, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 max-w-xs"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 object-cover border-4 border-[#6C5CE7]"
        />
        <h3 className="text-xl font-semibold text-[#6C5CE7] mb-2">{member.name}</h3>
        <p className="text-gray-700 text-sm">{member.role}</p>
      </div>
    ))}
  </div>
</section>        
      </main>

      <Footer />
    </div>
  );
}