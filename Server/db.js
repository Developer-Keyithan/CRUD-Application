require('dotenv').config();

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI  || "mongodb+srv://sathyjaseelankeyithan:keyithan1234@cluster0.8tbea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGO_URI) {
    console.error('MONGO_URI is not defined in .env file');
    process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

module.exports = mongoose;
