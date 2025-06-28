const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  instructor: String,
  duration: String,
  startDate: Date,
  endDate: Date,
  content: [
    {
      moduleTitle: String,
      description: String,
      videoUrl: String,
      resourceUrl: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
