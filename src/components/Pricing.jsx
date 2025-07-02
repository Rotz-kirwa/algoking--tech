import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'KSh 20,000',
      period: '',
      description: 'Perfect for small businesses and personal websites',
      features: [
        '5GB SSD Storage',
        '50GB Bandwidth',
        '1 Website',
        'SSL Certificate',
        'Email Support',
        'Daily Backups'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KSh 35,000',
      period: '',
      description: 'Ideal for growing businesses with multiple websites',
      features: [
        '25GB SSD Storage',
        '200GB Bandwidth',
        '5 Websites',
        'SSL Certificate',
        'Priority Support',
        'Daily Backups',
        'CDN Integration',
        'Performance Monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'KSh 50,000',
      period: '',
      description: 'Advanced solution for large businesses and agencies',
      features: [
        '100GB SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Websites',
        'SSL Certificate',
        '24/7 Phone Support',
        'Hourly Backups',
        'CDN Integration',
        'Performance Monitoring',
        'Security Scanning',
        'Dedicated IP'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="pricing-subtitle">
          Choose the perfect plan for your business needs. All plans include our core features and 24/7 support.
        </p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
        <div className="pricing-note">
          <p>All plans include a 30-day money-back guarantee. Need a custom solution? <a href="#contact">Contact us</a> for enterprise pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;