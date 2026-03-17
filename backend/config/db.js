const mongoose = require('mongoose');

// MongoDB connection configuration
const dbURI = 'your_mongodb_uri_here';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;