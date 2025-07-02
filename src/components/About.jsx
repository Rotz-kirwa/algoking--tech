import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About WebPulse Solutions</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Empowering Businesses Through Technology</h3>
            <p>
              Founded with a mission to provide reliable, cutting-edge web solutions, 
              WebPulse Solutions has been helping businesses establish and maintain 
              their digital presence for over 5 years.
            </p>
            <p>
              Our team of experienced developers, designers, and system administrators 
              work around the clock to ensure your website performs at its best. 
              We combine technical expertise with creative vision to deliver solutions 
              that drive real business results.
            </p>
            <div className="expertise-areas">
              <div className="expertise-item">
                <span className="expertise-icon">🚀</span>
                <div>
                  <h4>Performance Optimization</h4>
                  <p>Lightning-fast loading speeds and optimal user experience</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">🔒</span>
                <div>
                  <h4>Security First</h4>
                  <p>Advanced security measures to protect your data and users</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">📱</span>
                <div>
                  <h4>Mobile-First Design</h4>
                  <p>Responsive designs that work perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-info">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;