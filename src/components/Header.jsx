import { useState } from 'react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Service' },
    { id: 'portfolio', label: 'Work' },
    { id: 'pricing', label: 'Price' },
    { id: 'blog', label: 'Blog' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const mobileNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Service' },
    { id: 'pricing', label: 'Price' },
    { id: 'contact', label: 'Contact' }
  ];

  const navItems = isMobile ? mobileNavItems : allNavItems;

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">WebPulse Solutions</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;