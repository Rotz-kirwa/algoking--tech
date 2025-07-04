const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dbFilePath = path.join(__dirname, 'db.json');

// Helper function to read db.json
function readDB() {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { contacts: [] };
  }
}

// Helper function to write to db.json
function writeDB(data) {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
}

// Configure nodemailer transporter (using Gmail SMTP)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'gadielkirwa@gmail.com',
    pass: 'zdmrjrhtoyjzyyqu' // Gmail App Password (no spaces)
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post('/contact', (req, res) => {
  const { name, email, company, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Read existing contacts
  const db = readDB();

  // Add new contact
  const newContact = {
    id: Date.now(),
    name,
    email,
    company,
    service,
    message,
    date: new Date().toISOString()
  };
  db.contacts.push(newContact);

  // Write to db.json
  writeDB(db);

  // Send email notification
  const mailOptions = {
    from: 'gadielkirwa@gmail.com',
    to: 'gadielkirwa@gmail.com',
    subject: 'New Contact Form Submission - WebPulse Solutions',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      // Still save the contact even if email fails
      return res.status(200).json({ message: 'Contact saved successfully. Email notification failed - please check server logs.' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Contact form submitted and email sent successfully!' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});