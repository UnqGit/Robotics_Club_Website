import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Event from './pages/Event.jsx'
import Teams from './pages/Teams.jsx'
import News from './pages/News.jsx'
import Achievements from './pages/Achievements.jsx'
import Contact from './pages/Contact.jsx'
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
