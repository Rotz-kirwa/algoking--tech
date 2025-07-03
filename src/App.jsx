import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home />
        <Services />
        <Portfolio />
        <Pricing />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default App;
