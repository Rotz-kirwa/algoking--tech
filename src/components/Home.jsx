import './Home.css';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>🚀 Professional Web Solutions</span>
            </div>
            <h1 className="hero-title">
              Build Your Digital
              <span className="gradient-text"> Empire</span>
              <br />With WebPulse Solutions
            </h1>
            <p className="hero-description">
              Transform your business with cutting-edge web development, reliable hosting, 
              and 24/7 support. We create digital experiences that convert visitors into customers.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn-secondary">
                <span className="play-icon">▶</span>
                View Our Work
              </a>
            </div>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>99.9% Uptime Guaranteed</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>24/7 Expert Support</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Mobile-First Design</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-title">WebPulse Dashboard</div>
              </div>
              <div className="mockup-content">
                <div className="metric-card">
                  <div className="metric-icon">📊</div>
                  <div className="metric-info">
                    <div className="metric-value">2.4M</div>
                    <div className="metric-label">Page Views</div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">⚡</div>
                  <div className="metric-info">
                    <div className="metric-value">0.8s</div>
                    <div className="metric-label">Load Time</div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">🔒</div>
                  <div className="metric-info">
                    <div className="metric-value">100%</div>
                    <div className="metric-label">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="trusted-by">
          <p className="trusted-text">Trusted by innovative companies</p>
          <div className="company-logos">
            <div className="logo-item">TechCorp</div>
            <div className="logo-item">StartupXYZ</div>
            <div className="logo-item">DigitalFlow</div>
            <div className="logo-item">WebMasters</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;