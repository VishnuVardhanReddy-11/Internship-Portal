const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  enrolledCourses: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Enrollments' }],
    default: []
  },
  enrolledProjects: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Projects' }],
    default: []
  },
  profileInfo: {
    address: String,
    bio: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: Date
});

module.exports = mongoose.model('Users', userSchema);
