// AboutUs.jsx
import React from 'react';

export default function AboutUs() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries in AI and haircare technology"
    },
    {
      title: "Excellence", 
      description: "We strive for the highest quality in everything we do"
    },
    {
      title: "Community",
      description: "We build and nurture a supportive learning environment"
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/anshika.png"
    },
    {
      name: "Sarah Chen", 
      role: "CTO",
      image: "/komal.png"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Education",
      image: "/manya.png"
    },
    {
      name: "Emily Watson",
      role: "Head of Operations",
      image: "/vanshika.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAE6E1] via-white to-[#F5D6C3]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EAE6E1] via-white to-[#F5D6C3] py-16 px-8 rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#7A7266] tracking-tight mb-6 drop-shadow-md">
            Welcome to     <br /><span className="text-[#1C1C1C]">Hair Coaction</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#7A7266] to-[#B6B2A6] mb-6 rounded-full mx-auto md:mx-0 animate-pulse"></div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your <span className="text-[#7A7266] font-medium">AI-powered</span> partner in <span className="italic text-[#1C1C1C]">personalized haircare, wellness, and education</span>.
            We blend <span className="font-semibold text-[#7A7266]">technology, science, and community</span> to help you care for your crown — smarter, earlier, and better.
          </p>
          
          <div className="mt-8 flex justify-center">
            <img 
              src="/girl.png" 
              alt="Hair Coaction Team" 
              className="w-48 sm:w-56 md:w-60 rounded-xl shadow-lg border-4 border-[#7A7266]"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#7A7266] mb-4 border-b-2 border-[#F5D6C3] pb-2">
              🎯 Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To democratize access to professional haircare education and create a global community 
              of skilled professionals who can transform lives through expert hair care services.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-[#7A7266] mb-4 border-b-2 border-[#F5D6C3] pb-2">
              🌟 Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the world's leading platform for hair care education, innovation, and community building, 
              empowering millions to achieve their dreams in the beauty industry.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[#7A7266] mb-4 border-b-2 border-[#F5D6C3] pb-2">💡 Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We've identified the key challenges in hair care education and created a comprehensive solution 
          that addresses accessibility, quality, and practical application. Our platform combines cutting-edge 
          AI technology with proven educational methodologies to deliver an unparalleled learning experience.
        </p>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[#7A7266] mb-4 border-b-2 border-[#F5D6C3] pb-2">🎁 What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3]">
            <h3 className="text-xl font-semibold text-[#7A7266] mb-3">📚 Comprehensive Courses</h3>
            <p className="text-gray-700">From beginner basics to advanced techniques, our courses cover every aspect of professional hair care.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3]">
            <h3 className="text-xl font-semibold text-[#7A7266] mb-3">🤖 AI-Powered Learning</h3>
            <p className="text-gray-700">Personalized learning paths and intelligent feedback systems that adapt to your progress and style.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3]">
            <h3 className="text-xl font-semibold text-[#7A7266] mb-3">🌍 Global Community</h3>
            <p className="text-gray-700">Connect with fellow learners, share experiences, and build lasting professional relationships.</p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[#7A7266] mb-4 border-b-2 border-[#F5D6C3] pb-2">🎯 Target Audience</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3]">
            <h3 className="text-xl font-semibold text-[#7A7266] mb-3">👩‍🎓 Students & Beginners</h3>
            <p className="text-gray-700">Individuals starting their journey in hair care, looking for structured learning and guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3]">
            <h3 className="text-xl font-semibold text-[#7A7266] mb-3">💼 Professionals</h3>
            <p className="text-gray-700">Experienced stylists seeking to upgrade skills, learn new techniques, or specialize in specific areas.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-[#7A7266] mb-10 border-b-4 border-[#F5D6C3] inline-block">
          💎 Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3] text-center">
              <h3 className="text-xl font-semibold text-[#7A7266] mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Model */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[#7A7266] mb-4 border-b-2 border-[#F5D6C3] pb-2">📊 Business Model</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our sustainable business model is built on providing value to our community while ensuring 
          long-term growth and innovation. We offer both free and premium content, ensuring accessibility 
          while maintaining quality standards.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[#7A7266] mb-4 border-b-2 border-[#F5D6C3] pb-2">🚀 Why Choose Hair Coaction?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3]">
            <h3 className="text-xl font-semibold text-[#7A7266] mb-3">🎓 Proven Track Record</h3>
            <p className="text-gray-700">Thousands of successful graduates and a growing community of satisfied learners.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3]">
            <h3 className="text-xl font-semibold text-[#7A7266] mb-3">🔬 Evidence-Based Approach</h3>
            <p className="text-gray-700">Our content is backed by scientific research and industry best practices.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[#7A7266] inline-block border-b-4 border-[#F5D6C3] px-4">
          👥 Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-[#F5D6C3] text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 object-cover border-4 border-[#7A7266]"
              />
              <h3 className="text-xl font-semibold text-[#7A7266] mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-[#7A7266] to-[#B6B2A6] p-12 rounded-3xl text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who have already transformed their careers with Hair Coaction
          </p>
          <a 
            href="/register" 
            className="inline-block px-8 py-4 bg-white text-[#7A7266] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}