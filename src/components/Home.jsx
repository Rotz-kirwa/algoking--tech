import './Home.css';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional Web Solutions for 
              <span className="highlight"> Modern Businesses</span>
            </h1>
            <p className="hero-description">
              WebPulse Solutions delivers reliable web hosting, 24/7 maintenance, 
              and stunning custom websites that drive your business forward.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn-secondary">View Our Work</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="tech-grid">
              <div className="tech-item">
                <div className="icon">☁️</div>
                <span>Cloud Hosting</span>
              </div>
              <div className="tech-item">
                <div className="icon">⚙️</div>
                <span>24/7 Maintenance</span>
              </div>
              <div className="tech-item">
                <div className="icon">💻</div>
                <span>Custom Development</span>
              </div>
              <div className="tech-item">
                <div className="icon">🔧</div>
                <span>Technical Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stats">
          <div className="stat">
            <div className="stat-number">100+</div>
            <div className="stat-label">Websites Hosted</div>
          </div>
          <div className="stat">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime Guarantee</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;