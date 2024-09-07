const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/cricketRegistration', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define the schema
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  teamName: String
  
  
});

const Registration = mongoose.model('Registration', registrationSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Handle registration
app.post('/register', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newRegistration = new Registration({ name, email, phone });
    await newRegistration.save();
    res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed!' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
