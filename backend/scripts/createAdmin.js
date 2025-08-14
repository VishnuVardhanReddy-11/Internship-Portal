// require('dotenv').config();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const Admin = require('../models/adminModel');

// const createAdmin = async () => {
//  mongoose.connect('mongodb://127.0.0.1:27017/PortalDb')
//  .then(() => {
//      console.log('Connected to MongoDB');
//  })
//  .catch((error) => {
//      console.error('Error connecting to MongoDB:', error);
//  })
//   const existingAdmins = await Admin.countDocuments();
//   if (existingAdmins >= 4) {
//     console.log('Cannot create more than 4 admins');
//     return;
//   }

//   const hashedPassword = await bcrypt.hash('Admin@123', 10);

//   const admin = new Admin({
//     name: 'Super Admin',
//     email: 'admin@example.com',
//     password: hashedPassword,
//     role: 'admin',
//   });

//   await admin.save();
//   console.log('Admin created successfully');
//   mongoose.disconnect();
// };

// createAdmin();
