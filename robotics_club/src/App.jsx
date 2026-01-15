import React from 'react'
import './appStyle.css'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Events from './components/Event'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import News from './components/News'
import Teams from './components/Teams'

const App = () => {
  const [openPage, setOpenPage] = React.useState("home");
  const [hamburger, setHamburger] = React.useState(false);

  const handleMobileNav = (page) => {
    setOpenPage(page);
    setHamburger(false);
  };


  return (
    <div className='main--container--mn'>

      {/* The Navbar section */}
      <div className="navbar--nb">

        <div className="logo--point">
          <img src='./src/assets/Robotics_logo.png' alt="logo" />
          <h1>Robotics club</h1>
        </div>
        <div className="navigating--navbar">
          <button onClick={() => setOpenPage("home")}>Home</button>
          <button onClick={() => setOpenPage("about")}>About</button>
          <button onClick={() => setOpenPage("projects")}>Projects</button>
          <button onClick={() => setOpenPage("events")}>Events</button>
          <button onClick={() => setOpenPage("teams")}>Teams</button>
          <button onClick={() => setOpenPage("news")}>News</button>
          <button onClick={() => setOpenPage("achievement")}>Achievements</button>
          <button onClick={() => setOpenPage("contact")}>Contact</button>
        </div>

        {/* Humberger */}
        <button
          className={`hamburger ${hamburger ? "isOpen" : ""}`}
          onClick={() => setHamburger(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${hamburger ? "show" : ""}`}>
          <button onClick={() => handleMobileNav("home")}>Home</button>
          <button onClick={() => handleMobileNav(("about"))}>About</button>
          <button onClick={() => handleMobileNav(("projects"))}>Projects</button>
          <button onClick={() => handleMobileNav(("events"))}>Events</button>
          <button onClick={() => handleMobileNav(("teams"))}>Teams</button>
          <button onClick={() => handleMobileNav(("news"))}>News</button>
          <button onClick={() => handleMobileNav(("achievement"))}>Achievements</button>
          <button onClick={() => handleMobileNav(("contact"))}>Contact</button>
        </div>

      </div>


      {/* hero or the main page */}
      {openPage === "home"  && 
        <Home />
      }

      {/* 2nd page About section of the website */}
      {
        openPage === "about" &&
        <About />
      }

      {/* 3rd page Projects Section of the website */}
      {
        openPage === "projects" &&
        <Projects />
      }

      {/* 4th page Events section of the website */}
      {
        openPage === "events" &&
        <Events />
      }

      {/* 5th page Teams section of the website */}
      {
        openPage === "teams" &&
        <Teams />
      }

      {/* 6th page Contact section of the website */}
      {
        openPage === "contact" &&
        <Contact />
      }

      {/* 7th page Achievements section of the website */}
      {
        openPage === "achievements" &&
        <Achievements />
      }

      {/* 8th page News section of the website */}
      {
        openPage === "news" &&
        <News />
      }

    </div>
  )
}

export default App