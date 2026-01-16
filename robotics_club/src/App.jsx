import React, { useState, useEffect } from 'react';
import './appStyle.css';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Events from './pages/Event';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import News from './pages/News';
import Teams from './pages/Teams';

const App = () => {
  const [openPage, setOpenPage] = useState("home");
  const [hamburger, setHamburger] = useState(false);

  // Reset scroll position to the top-left upon page navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [openPage]);

  return (
    <div className="main--container--mn">
      <Navbar
        openPage={openPage}
        setOpenPage={setOpenPage}
        hamburger={hamburger}
        setHamburger={setHamburger}
      />

      {/* Conditional rendering of page components based on state */}
      {openPage === "home" && <Home setOpenPage={setOpenPage} />}
      {openPage === "about" && <About />}
      {openPage === "projects" && <Projects />}
      {openPage === "events" && <Events />}
      {openPage === "teams" && <Teams />}
      {openPage === "contact" && <Contact />}
      {openPage === "achievements" && <Achievements />}
      {openPage === "news" && <News />}

      <Footer setOpenPage={setOpenPage} />

    </div>
  );
};

export default App;