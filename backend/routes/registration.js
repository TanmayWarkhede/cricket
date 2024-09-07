const express = require('express');
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  teamName: String,
  captain: String,
  contact: String,
});

const Registration = mongoose.model('Registration', RegistrationSchema);

const router = express.Router();

router.post('/', async (req, res) => {
  const newRegistration = new Registration(req.body);
  try {
    await newRegistration.save();
    res.status(201).send("Registration successful");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
