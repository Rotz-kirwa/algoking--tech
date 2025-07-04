import { useState } from 'react';
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

    setStatus({ success: null, message: 'Sending message...' });

    try {
      console.log('Sending to:', 'http://localhost:5000/contact');
      console.log('Data:', formData);
      
      const response = await fetch('https://your-app-name.onrender.com/contact', { // Replace with your actual Render URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        setStatus({ success: false, message: errorData.error || 'Failed to send message.' });
      } else {
        const result = await response.json();
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
      console.error('Fetch error:', error);
      setStatus({ success: false, message: 'Backend server not running. Please start the server first.' });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Ready to start your project? Contact us today for a free consultation and quote.
        </p>
        {status.message && (
          <div className={`status-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email Us</h4>
                <p><a href="mailto:gadielkirwa@gmail.com" className="contact-link">gadielkirwa@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Call & WhatsApp</h4>
                <p>
                  <a href="tel:+254791260817" className="contact-link">Call: 0791260817</a><br/>
                  <a href="https://wa.me/254791260817" target="_blank" rel="noopener noreferrer" className="contact-link">WhatsApp: 0791260817</a>
                </p>
                <p>24/7 Support Available</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Business Hours</h4>
                <p>24/7</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
