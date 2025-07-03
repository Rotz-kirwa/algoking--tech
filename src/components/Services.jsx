import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '☁️',
      title: 'Web Hosting',
      description: 'Reliable cloud hosting with 99.9% uptime guarantee. Fast, secure, and scalable solutions for businesses of all sizes.',
      features: ['SSD Storage', 'Daily Backups', 'SSL Certificates', 'CDN Integration']
    },
    {
      icon: '🔧',
      title: 'Website Maintenance',
      description: '24/7 monitoring and maintenance to keep your website running smoothly. Security updates, performance optimization, and technical support.',
      features: ['Security Updates', 'Performance Monitoring', 'Content Updates', 'Technical Support']
    },
    {
      icon: '💻',
      title: 'Custom Development',
      description: 'Stunning, responsive websites tailored to your business needs. Modern design, optimized performance, and user-friendly interfaces.',
      features: ['Responsive Design', 'SEO Optimization', 'Custom Features', 'CMS Integration']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;