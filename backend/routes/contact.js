'use strict';

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Database connection setup (replace with your own connection)
const db = require('../config/db'); // Assumes you have a db.js file for DB connection

// POST endpoint for contact form submissions
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    
    // Save to database example (modify as needed)
    try {
        const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
        await db.query(sql, [name, email, message]);
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Database error occurred.' });
    }
    
    // Send email notification
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // email user goes here
            pass: process.env.EMAIL_PASS // email password goes here
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.NOTIFICATION_EMAIL, // notification email goes here
        subject: 'New Contact Form Submission',
        text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

module.exports = router;
