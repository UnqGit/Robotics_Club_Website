import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Event from './components/Event.jsx'
import Teams from './components/Teams.jsx'
import News from './components/News.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/events" element={<Event />}/>
        <Route path="/teams" element={<Teams />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/achievements" element={<Achievements />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
