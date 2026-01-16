import React, { useState, useMemo } from 'react';
import '../appStyle.css';
import contentData from '../data/contentData.js';
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [year, setYear] = useState("all");
  const [projectType, setProjectType] = useState("all");

  // Memoize filtered projects to optimize performance during re-renders
  const filteredProjects = useMemo(() => {
    return contentData.filter(item => 
      item.type === "projects" &&
      (year === "all" || String(item.year) === year) &&
      (projectType === "all" || item.projectType === projectType)
    );
  }, [year, projectType]);

  const resetFilters = () => {
    setYear("all");
    setProjectType("all");
  };

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
            <option value="all">Type: All</option>
            <option value="drone">Drone</option>
            <option value="roboticArm">Robotic Arm</option>
          </select>

          <select 
            className='year' 
            value={year} 
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="all">Year: All</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>

          <button onClick={resetFilters}>Clear Filter</button>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="no--project">
            <h3>No projects have been uploaded for the selected criteria</h3>
            <p>Please select a different year or category</p>
          </div>
        ) : (
          <div className="projects--filling">
            {filteredProjects.map(item => (
              <motion.div
                key={item.id}
                layoutId={`project-${item.id}`}
                className='pro--box'
                onClick={() => setActiveProject(item)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="pro--imgWrap">
                  <img src={item.Icon} alt="Project Icon" />
                  <span className='pro--about'>{item.about}</span>
                </div>
                <h2>{item.title}</h2>
                <div className="tech">
                  {item.technology.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {activeProject && (
            <>
              {/* Overlay backdrop for the modal view */}
              <motion.div
                className='pro--backdrop'
                onClick={() => setActiveProject(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Detailed project modal view */}
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
                  <img src={activeProject.Icon} alt="Detailed View" loading="lazy" />
                  <h2 className='pro--heading'>{activeProject.title}</h2>
                  <span className='pro--time'>{activeProject.year}</span>
                  <span className='pro--for'>{activeProject.about}</span>
                </div>

                <h3>Project Description:</h3>
                <p className='pro--desc'>{activeProject.description}</p>

                <div className="tech">
                  {activeProject.technology.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="members">
                  <h4>Team Members:</h4>
                  <ul>
                    {activeProject.TeamMember.map((member, index) => (
                      <li key={index}>{member}</li>
                    ))}
                  </ul>
                </div>

                {activeProject.Achievement && (
                  <div className="achievement--pro">
                    <h2>Achievement:</h2>
                    <div className='achievement'>
                      <div className="achievement--icon--project">
                        <img 
                          src="/assets/icons/achievements.svg?react" 
                          alt="Achievement Icon" 
                          loading="lazy"
                        />
                      </div>
                      <p>{activeProject.Achievement}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;