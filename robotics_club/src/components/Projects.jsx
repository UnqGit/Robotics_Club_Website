import React from 'react'
import '../appStyle.css'
import contentData from '../data/contentData.js';
import { motion, AnimatePresence } from "framer-motion";



const Projects = () => {
  const [activeProject, setActiveProject] = React.useState(null);

  return (
    <div className='projects--pro'>
      <div className="content--pro">
        <h1>Our Projects</h1>
        <p>Innovative Robotics and AI solutions developed by our talented team members</p>
        <div className="filter--pro">
          <select className='type'>
            <option>Type : All</option>
            <option>Drone</option>
            <option>Robotic Arm</option>
          </select>
          <select className='year'>
            <option>Year : All</option>
            <option>2024</option>
            <option>2025</option>
          </select>
          <button>Clear Filter</button>
        </div>

        <div className="projects--filling">
          {
            contentData
            .filter(item => item.type === "projects")
            .map(item => (
              <motion.div
                layoutId = {`project-${item.id}`}
                className='pro--box'
                onClick={() => setActiveProject(item)}
                whileHover={ { scale: 1.03 } }
              >
                <div className="pro--imgWrap">
                  <img src={item.Icon} alt="logo" />
                  <span className='pro--about'>{item.about}</span>
                </div>
                <h2>{item.title}</h2>

                <div className="tech">
                  {
                    item.technology.map((tech , index) => (
                      <span key={index}>{tech}</span>
                    ))
                  }
                </div>
              </motion.div>
            ))
          }
        </div>

        <AnimatePresence>
          {
            activeProject && (
              <>
                {/* BACKDRP */}
                <motion.div
                  className='pro--backdrop'
                  onClick={() => setActiveProject(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* Expanded Project */}
                <motion.div
                  layoutId={`project-${activeProject.id}`}
                  className='pro--modal'
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <button 
                    className='close--btn'
                    onClick={() => setActiveProject(null)}
                  >
                    ✕
                  </button>
                  <div className="imgWrap--mono">
                    <img src={activeProject.Icon} alt="project--img" loading="lazy"/>
                    <h2 className='pro--heading'>{activeProject.title}</h2>
                    <span className='pro--time'>{activeProject.year}</span>
                    <span className='pro--for'>{activeProject.about}</span>
                  </div>
                  <h3>Project Description : </h3>
                  <p className='pro--desc'>{activeProject.description}</p>
                  <div className="tech">
                    {activeProject.technology.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="members">
                    <h4>Team Members : </h4>
                    <ul>
                      {
                        activeProject.TeamMember.map((member, index) => (
                          <li key={index}>{member}</li>
                        ))
                      }
                    </ul>
                  </div>
                  {
                    activeProject.Achievement && (
                      <div className="achievement--pro">
                        <h2>Achievement : </h2>
                        <p className='achievement'>
                          <div className="achievement--icon--project">
                            <img src="./src/assets/icons/achievements.svg?react" alt="icon" loading="lazy"/>
                          </div>
                          {
                            activeProject.Achievement
                          }
                        </p>
                      </div>
                    ) 
                  }

                </motion.div>
              </>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects