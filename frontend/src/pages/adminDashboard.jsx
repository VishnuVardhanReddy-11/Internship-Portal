import React, { useState, useEffect } from 'react';
import {
  Users, BookOpen, FolderOpen, TrendingUp, DollarSign,
  Eye, Star, Calendar, Search, Bell, Settings,
  ChevronDown, Plus, Edit, Trash2, BarChart3,
  Activity, Award, Clock, Download
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  // Simulated data
  const stats = {
    totalUsers: 12847,
    activeCourses: 156,
    totalProjects: 89,
    monthlyRevenue: 45280,
    courseCompletions: 2341,
    avgRating: 4.8,
    newSignups: 324,
    activeNow: 187
  };

  const recentCourses = [
    { id: 1, title: 'Advanced React Development', students: 1247, rating: 4.9, status: 'active', revenue: '$3,240' },
    { id: 2, title: 'Machine Learning Fundamentals', students: 892, rating: 4.7, status: 'active', revenue: '$2,890' },
    { id: 3, title: 'UI/UX Design Masterclass', students: 1534, rating: 4.8, status: 'active', revenue: '$4,120' },
    { id: 4, title: 'Python for Beginners', students: 2103, rating: 4.6, status: 'active', revenue: '$1,680' },
    { id: 5, title: 'DevOps Engineering', students: 567, rating: 4.9, status: 'draft', revenue: '$1,890' }
  ];

  const recentProjects = [
    { id: 1, title: 'E-commerce Platform', submissions: 234, difficulty: 'Advanced', category: 'Full Stack' },
    { id: 2, title: 'Weather App', submissions: 892, difficulty: 'Beginner', category: 'Frontend' },
    { id: 3, title: 'Chat Application', submissions: 456, difficulty: 'Intermediate', category: 'Backend' },
    { id: 4, title: 'Data Visualization', submissions: 321, difficulty: 'Advanced', category: 'Data Science' }
  ];

  useEffect(() => {
    setAnimationClass('animate-pulse');
    const timer = setTimeout(() => setAnimationClass(''), 200);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const StatCard = ({ icon: Icon, title, value, change, color = "blue" }) => (
    <div className={`bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${animationClass}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {change} from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color === 'blue' ? 'from-blue-500/20 to-cyan-500/20' :
                           color === 'green' ? 'from-green-500/20 to-emerald-500/20' :
                           color === 'purple' ? 'from-purple-500/20 to-pink-500/20' :
                           'from-orange-500/20 to-red-500/20'}`}>
          <Icon className={`w-6 h-6 ${color === 'blue' ? 'text-blue-400' :
                           color === 'green' ? 'text-green-400' :
                           color === 'purple' ? 'text-purple-400' :
                           'text-orange-400'}`} />
        </div>
      </div>
    </div>
  );

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30'
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{label}</span>
    </button>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          change="+12%"
          color="blue"
        />
        <StatCard
          icon={BookOpen}
          title="Active Courses"
          value={stats.activeCourses}
          change="+8%"
          color="green"
        />
        <StatCard
          icon={FolderOpen}
          title="Total Projects"
          value={stats.totalProjects}
          change="+15%"
          color="purple"
        />
        <StatCard
          icon={DollarSign}
          title="Monthly Revenue"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          change="+23%"
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Award}
          title="Course Completions"
          value={stats.courseCompletions.toLocaleString()}
          change="+18%"
          color="green"
        />
        <StatCard
          icon={Star}
          title="Average Rating"
          value={stats.avgRating}
          change="+0.2%"
          color="purple"
        />
        <StatCard
          icon={TrendingUp}
          title="New Signups"
          value={stats.newSignups}
          change="+34%"
          color="blue"
        />
        <StatCard
          icon={Activity}
          title="Active Now"
          value={stats.activeNow}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New course published', item: 'Advanced React Development', time: '2 hours ago', type: 'success' },
              { action: 'User milestone reached', item: '10K+ students enrolled', time: '4 hours ago', type: 'info' },
              { action: 'Project submitted', item: 'E-commerce Platform', time: '6 hours ago', type: 'warning' },
              { action: 'Course updated', item: 'Machine Learning Fundamentals', time: '1 day ago', type: 'info' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'warning' ? 'bg-yellow-400' :
                  'bg-blue-400'
                }`} />
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">{activity.item}</p>
                </div>
                <span className="text-gray-500 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Top Performing Courses</h3>
          <div className="space-y-4">
            {recentCourses.slice(0, 4).map((course, index) => (
              <div key={course.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{course.title}</p>
                  <p className="text-gray-400 text-xs">{course.students} students</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-medium">{course.revenue}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-xs">{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold text-white">Course Management</h2>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2 hover:scale-105">
          <Plus className="w-4 h-4" />
          Add New Course
        </button>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-700/50 text-gray-300 px-4 py-3 rounded-xl hover:bg-gray-600/50 transition-colors">
                Filter
              </button>
              <button className="bg-gray-700/50 text-gray-300 px-4 py-3 rounded-xl hover:bg-gray-600/50 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/30">
              <tr>
                <th className="text-left p-4 text-gray-300 font-medium">Course</th>
                <th className="text-left p-4 text-gray-300 font-medium">Students</th>
                <th className="text-left p-4 text-gray-300 font-medium">Rating</th>
                <th className="text-left p-4 text-gray-300 font-medium">Revenue</th>
                <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentCourses.map((course) => (
                <tr key={course.id} className="border-t border-gray-700/50 hover:bg-gray-700/20 transition-colors">
                  <td className="p-4">
                    <div className="text-white font-medium">{course.title}</div>
                  </td>
                  <td className="p-4 text-gray-300">{course.students.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300">{course.rating}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{course.revenue}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold text-white">Project Management</h2>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 hover:scale-105">
          <Plus className="w-4 h-4" />
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recentProjects.map((project) => (
          <div key={project.id} className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <FolderOpen className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex gap-1">
                <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.category}</p>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Submissions</span>
                <span className="text-white font-medium">{project.submissions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Difficulty</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {project.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics & Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Revenue Trends</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-400">Revenue chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">User Engagement</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-gray-400">Engagement chart visualization would go here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">87%</div>
            <div className="text-gray-400">Course Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4.8/5</div>
            <div className="text-gray-400">Average Course Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24min</div>
            <div className="text-gray-400">Avg. Session Duration</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-20">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Hair Coaction</h1>
                  <p className="text-gray-400 text-sm">Course & Project Management</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-700/30 sticky top-16 z-10">
          <div className="px-6 py-4">
            <div className="flex gap-2 overflow-x-auto">
              <TabButton
                id="overview"
                label="Overview"
                icon={BarChart3}
                isActive={activeTab === 'overview'}
                onClick={setActiveTab}
              />
              <TabButton
                id="courses"
                label="Courses"
                icon={BookOpen}
                isActive={activeTab === 'courses'}
                onClick={setActiveTab}
              />
              <TabButton
                id="projects"
                label="Projects"
                icon={FolderOpen}
                isActive={activeTab === 'projects'}
                onClick={setActiveTab}
              />
              <TabButton
                id="analytics"
                label="Analytics"
                icon={TrendingUp}
                isActive={activeTab === 'analytics'}
                onClick={setActiveTab}
              />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="px-6 py-8">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'analytics' && renderAnalytics()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;