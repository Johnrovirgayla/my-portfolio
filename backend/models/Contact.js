const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['pending', 'resolved', 'archived'], default: 'pending' },
    timestamp: { type: Date, default: Date.now }
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;