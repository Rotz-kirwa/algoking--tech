import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with payment integration and inventory management.',
      image: '🛒',
      tech: ['React', 'Flask', 'MySQL'],
      liveDemo: 'https://suhas86.github.io/react-ecomm-sample/'
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional corporate website with CMS and multi-language support.',
      image: '🏢',
      tech: ['React', 'Flask', 'MySQL'],
      liveDemo: 'https://www.heroui.com/'
    },
    {
      title: 'Restaurant Chain',
      category: 'Web Development',
      description: 'Multi-location restaurant website with online ordering system.',
      image: '🍕',
      tech: ['React', 'Flask', 'MySQL'],
      liveDemo: 'https://gericht-restaurant.netlify.app/#contact'
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Application',
      description: 'Patient management system with appointment scheduling and records.',
      image: '🏥',
      tech: ['React', 'Flask', 'MySQL'],
      liveDemo: 'https://aarhospital.com/'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'Property listing platform with advanced search and virtual tours.',
      image: '🏠',
      tech: ['React', 'Flask', 'MySQL'],
      liveDemo: 'https://www.tollbrotherscityliving.com/'
    },
    {
      title: 'Educational Platform',
      category: 'Web Application',
      description: 'Online learning management system with video streaming and assessments.',
      image: '📚',
      tech: ['React', 'Flask', 'MySQL'],
      liveDemo: 'https://rising-lion-school-git-master-eliuds-projects-ebf8c589.vercel.app/#staff'
    }
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="portfolio-subtitle">
          Showcasing our expertise through successful projects across various industries
        </p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-icon">{project.image}</span>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-category">{project.category}</div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo-btn">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;