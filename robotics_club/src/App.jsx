import React from 'react'
import './appStyle.css'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Events from './pages/Event'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import News from './pages/News'
import Teams from './pages/Teams'

import Footer from './components/Footer'

const App = () => {
  const [openPage, setOpenPage] = React.useState("home");
  const [hamburger, setHamburger] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [openPage]);

  return (
    <div className='main--container--mn'>

      <Navbar 
        openPage={openPage}
        setOpenPage={setOpenPage}
        hamburger={hamburger}
        setHamburger={setHamburger}
      />
      
      {
        openPage === "home"  && 
        <Home
          setOpenPage={setOpenPage}
        /> 
      }
      { openPage === "about" && <About /> }
      { openPage === "projects" && <Projects /> }
      { openPage === "events" && <Events /> }
      { openPage === "teams" && <Teams /> }
      { openPage === "contact" && <Contact /> }
      { openPage === "achievements" && <Achievements /> }
      { openPage === "news" && <News /> }

      <Footer />
      
    </div>
  )
}

export default App