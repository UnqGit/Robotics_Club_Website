import React from 'react'
import '../appStyle.css'
import contentData from '../data/contentData'
// import AboutUs from '../assets/icons/about.svg?react'
// import Projects from '../assets/icons/project.svg?react'

const About = () => {
  return (
    <div className="about--ab">
      <div className="all--about">
        <h1>About Robotics Club</h1>
        <p>Empowering students to innovative, create, and shape the future of teachnology through hands-on robotics and AI projects</p>

        <div className="about---container">
          {
            contentData
            .filter(item => item.type === "info")
            .map(item => (
              <div className="about--box">
                <div className="about--icons">
                  <img src={item.Icon} alt="icon" />
                </div>
                <h3>{item.members}</h3>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>

        <div className="longtime--info">
          {
            contentData
            .filter(item => item.type === "longtimeInfo")
            .map(item => (
              <div className="longInfo">
                <div className="longInfo__icon">
                  <img src={item.Icon} alt="logo" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About