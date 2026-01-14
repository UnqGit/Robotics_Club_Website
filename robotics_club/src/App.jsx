import React from 'react'
import logo from './assets/Robotics_logo.png'
import './appStyle.css'
import contentData from './data/contentData';
import Events from "../src/assets/icons/events.svg?react"
import Group from "../src/assets/icons/about.svg?react"

import About from './components/About';
import Projects from './components/Projects';
import EventsPage from './components/Event';
import Teams from './components/Teams';
import Contact from './components/Contact';

const App = () => {
  const [openPage, setOpenPage] = React.useState("home");
  const [hamburger, setHamburger] = React.useState(false);

  return (
    <div className='main--container--mn'>
      {/* The Navbar section */}
      <div className="navbar--nb">

        <div className="logo--point">
          <img src={logo} alt="logo" />
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

        <div className={`mobile-menu ${hamburger ? "show" : ""}`} onClick={() => setHamburger(prev => !prev)}>
          <button onClick={() => { setOpenPage("home"); setHamburger(false); }}>Home</button>
          <button onClick={() => { setOpenPage("about"); setHamburger(false); }}>About</button>
          <button onClick={() => { setOpenPage("projects"); setHamburger(false); }}>Projects</button>
          <button onClick={() => { setOpenPage("events"); setHamburger(false); }}>Events</button>
          <button onClick={() => { setOpenPage("teams"); setHamburger(false); }}>Teams</button>
          <button onClick={() => { setOpenPage("news"); setHamburger(false); }}>News</button>
          <button onClick={() => { setOpenPage("achievement"); setHamburger(false); }}>Achievements</button>
          <button onClick={() => { setOpenPage("contact"); setHamburger(false); }}>Contact</button>
        </div>

      </div>


      {/* hero or the main page */}
      {openPage === "home" &&
        <div className="hero--section">
          <div className="img--hero">
            <img src={logo} alt="logo" />
          </div>
          <h1>Robotics Club</h1>
          <p>Innovating Tomorrow Through Robotics, AI & Automation</p>
          <p>Where creativity meets technology. Join us in building intelligent systems that shape the future.</p>
          <div className="btns--exploring">
            <button className='project--exploring'>Exploring Projects<span>➜</span></button>
            <button className='upcoming--events'>Upcoming Events</button>
          </div>

          <div className="club--ideas">
            <h1>Explore Our Club</h1>
            <p>Navigate through different sections to discover what we do ans how you can be part of our journey</p>
            <div className="club--highlights">
              {
                contentData
                  .filter(item => item.type === "explore")
                  .map(item => (
                    <div className="highlights" key={item.id}>
                      <div className={`icon--box ${item.style}`}>
                        <img src={item.Icon} alt={`${item.title} icon`} />
                      </div>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <button>{item.btnText}</button>
                    </div>
                  ))
              }
            </div>
          </div>

          <div className="club--highlight">
            <h1>Club Highlights</h1>
            <p>Latest competitions, ongoing workshops, and innovative projects</p>
            <div className="highlight--boxes">
              {
                contentData
                  .filter(item => item.type === "highlight")
                  .map(item => (
                    <div className="highlights" key={item.id}>
                      <div className={`highlight--icon`}>
                        <img src={item.Icon} alt='highlight Icon' />
                      </div>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <span className='highlight--time'>{item.time}</span>
                    </div>
                  ))
              }
            </div>
          </div>

          <div className="main--event">
            <div className="event--inside">
              <div className="event--showing">
                <p>Next Big Event</p>
              </div>
              <div className="next--event--info">
                <h1>International Robotics Summit 2026</h1>
                <p>Join us for a 3-day event features workshop, competitions, and keynotes speeches from industry leaders.</p>
                <p>Register now to secure your spot!</p>
                <div className="next--event--detail">
                  <img src={Events} alt="calender" />
                  <p>March 15, 2026</p>
                  <img src={Group} alt='Gathering' />
                  <p>500+ participants expected</p>
                </div>
                <button>View Details ➜</button>
              </div>
            </div>
            <div className="motion--box">
              <img src={Events} alt="Next--Event" />
            </div>
          </div>

          <div className="recent--achievements">
            <h1>Recent Achievements</h1>
            <p>Celebrating our latest wins and recognitions</p>
            <div className="achievements">
              {
                contentData
                  .filter(item => item.type === "recent-Achievements")
                  .map(item => (
                    <div className="achieve--box" key={item.id}>
                      <div className="achieve--icon">
                        <img src={item.Icon} alt="victory icon" />
                      </div>
                      <div className="achieve--info">
                        <p className='achieve--time'>{item.time}</p>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>

        </div>
      }

      {/* 2nd page About section of the website */}
      {
        openPage === "about" &&
        <About />
      }

      {/* #rd page Projects Section  */}

      {
        openPage === "projects" &&
        <Projects />
      }

      {
        openPage === "events" &&
        <EventsPage />
      }

      {
        openPage === "teams" &&
        <Teams />
      }

      {
        openPage === "contact" &&
        <Contact />
      }

    </div>
  )
}

export default App