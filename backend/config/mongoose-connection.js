const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/PortalDb')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})

module.exports = mongoose.connection;