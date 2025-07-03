import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus({ success: false, message: 'Name, email, and message are required.' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setStatus({ success: false, message: errorData.error || 'Failed to send message.' });
      } else {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Failed to fetch. Please try again later.' });
    }
  };

  return (
<section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      {status.message && (
        <p className={status.success ? 'success-message' : 'error-message'}>
          {status.message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Interested In</label>
          <input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
