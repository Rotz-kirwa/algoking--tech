import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

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
  service: 'gmail',
  auth: {
    user: 'gadielkirwa@gmail.com',
    pass: 'eqeq ckxg nuqo lcid' // You need to generate an app password for Gmail
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
    subject: 'New Contact Form Submission',
    text: `Name: ${name}
Email: ${email}
Company: ${company}
Service Interested In: ${service}
Message: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    } else {
      return res.status(200).json({ message: 'Contact form submitted successfully.' });
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
