import React from 'react'
import '../appStyle.css'
import contentData from '../data/contentData.js';
import { motion, AnimatePresence } from "framer-motion";



const Projects = () => {
  const [activeProject, setActiveProject] = React.useState(null);
  const [year, setYear] = React.useState("all");
  const [projectType, setProjectType] = React.useState("all");

  const filteredProject = contentData
  .filter(item => item.type === "projects" && 
  (year === "all" || String(item.year) === year) && 
  (projectType === "all" || item.projectType === projectType));

  {/* Projects Section of the website */}
  return (
    <div className='projects--pro'>
      <div className="content--pro">
        <h1>Our Projects</h1>
        <p>Innovative Robotics and AI solutions developed by our talented team members</p>
        <div className="filter--pro">
          <select 
          className='type'
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          >
            <option
            value="all"
            >
              Type : All</option>
            <option 
            value="drone"
              >
                Drone</option>
            <option
            value="roboticArm"
            >
              Robotic Arm</option>
          </select>
          <select
           className='year'
           value={year}
           onChange={(e) => setYear(e.target.value)}
           >
            <option 
            value="all"
            >
              Year : All
              </option>
            <option
            value="2025"
            >
              2025</option>
            <option
            value="2024"
            >
              2024</option>
            <option
            value="2023"
            >
              2023</option>
            <option
            value="2022"
            >
              2022</option>
            <option
            value="2021"
            >
              2021</option>
            <option
            value="2020"
            >
              2020</option>
            <option
            value="2019"
            >
              2019</option>
          </select>
          <button 
          onClick={() => {
            setYear("all");
            setProjectType("all");
          }} 
            >
            Clear Filter</button>
        </div>
        {filteredProject.length === 0 ? (
            <div className="no--project">
              <h3>NO Project has been uploaded this year</h3>
              <p>Choose Another Year or Type</p>
            </div>
        ) : (
            <div className="projects--filling">
              {filteredProject
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

        )
        }

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
                            <img src="/assets/icons/achievements.svg?react" alt="icon" loading="lazy"/>
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
