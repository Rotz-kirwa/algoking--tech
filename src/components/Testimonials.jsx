import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'David Kariuki',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'WebPulse Solutions transformed our online presence completely. Their hosting is incredibly reliable, and the support team is always there when we need them.',
      rating: 5
    },
    {
      name: 'Kipchumba Kennedy',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'The custom website they built for us has increased our conversion rate by 40%. Professional, fast, and exactly what we needed.',
      rating: 5
    },
    {
      name: 'Emberly Warutumo',
      company: 'Local Restaurant Chain',
      role: 'Owner',
      content: 'Their 24/7 maintenance service gives us peace of mind. Our website has never been down, and they handle all the technical stuff so we can focus on our business.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;