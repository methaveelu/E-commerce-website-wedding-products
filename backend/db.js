const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongodbUrl = process.env.MONGODB_URL;

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('MongoDB connection successful!');
  });

  connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
  });
};

connectDB();

module.exports = mongoose;