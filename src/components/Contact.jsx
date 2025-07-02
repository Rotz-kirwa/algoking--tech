import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Ready to start your project? Contact us today for a free consultation and quote.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email Us</h4>
                <p><a href="mailto:gadielkirwa451@gmail.com">gadielkirwa451@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p><a href="tel:0791260817">0791260817</a></p>
                <p><a href="https://wa.me/254791260817" target="_blank" rel="noopener noreferrer">WhatsApp: 0791260817</a></p>
              </div>
            </div>
            {/* Removed the Visit Us location section as per user request */}
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Business Hours</h4>
                <p>24/7 Monday to Monday</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="hosting">Web Hosting</option>
                <option value="maintenance">Website Maintenance</option>
                <option value="development">Custom Development</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      service: form.service.value,
      message: form.message.value
    };

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Message sent successfully!');
        form.reset();
      })
      .catch(error => {
        alert('There was a problem sending your message: ' + error.message);
      });
  }
};

export default Contact;
