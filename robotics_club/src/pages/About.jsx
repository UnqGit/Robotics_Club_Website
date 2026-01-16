import React from 'react';
import '../appStyle.css';
import contentData from '../data/contentData';

/**
 * About component renders the informational overview of the Robotics Club,
 * encompassing mission statements, core focus areas, and infrastructure details.
 */
const About = () => {
  const facility = [
    "3D Printers & CNC Machines for rapid prototyping",
    "Arduino, Raspberry Pi & ESP32 development boards",
    "Advanced sensor kits (LIDAR, IMU, ultrasonic)",
    "Soldering stations & electronic measurement tools",
    "High-performance computers with simulation software",
    "VR/AR headsets for immersive development",
    "Robotic arms & autonomous vehicle platforms",
    "Dedicated workspace with 20+ workbenches"
  ];

  return (
    <div className="about--ab">
      <div className="all--about">
        <h1>About Robotics Club</h1>
        <p>
          Empowering students to innovate, create, and shape the future of 
          technology through hands-on robotics and AI projects.
        </p>

        {/* Informational cards section */}
        <div className="about---container">
          {contentData
            .filter((item) => item.type === "info")
            .map((item) => (
              <div className="about--box card" key={item.id}>
                <div className="about--icons">
                  <img src={item.Icon} alt="icon" />
                </div>
                <h3>{item.members}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>

        {/* Detailed historical or long-form information */}
        <div className="longtime--info">
          {contentData
            .filter((item) => item.type === "longtimeInfo")
            .map((item) => (
              <div className={`longInfo longInfo--${item.gradient}`} key={item.id}>
                <div className="longInfo__image">
                  <img src={item.Image} alt={item.title} />
                </div>
                <div className="longInfo__content">
                  <div className={`longInfo__icon longInfo__icon--${item.gradient}`}>
                    <img src={item.Icon} alt="logo" />
                  </div>
                  <h2>{item.title}</h2>
                  <ul className="points--list">
                    {item.description.map((point, index) => (
                      <li key={index} className="longTime--desc">
                        <span className="point">●</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>

        {/* Core focus areas and club activities */}
        <div className="activities">
          <div className="focus">
            <h1>Focus Areas & Activities</h1>
            <p>Our diverse areas of expertise in competitions, workshops, and research.</p>
            <div className="focus--container">
              {contentData
                .filter((item) => item.type === "focus")
                .map((item) => (
                  <div className="focus--box card" key={item.id}>
                    <div className="focus--icon">
                      <img src={item.Icon} alt="logo" />
                    </div>
                    <div className="focus--content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Infrastructure and laboratory facilities */}
        <div className="facilities">
          <div className="facility--chamber">
            <h1>Infrastructure & Facilities</h1>
            <p>A state-of-the-art laboratory equipped with cutting-edge tools and technology.</p>
            <div className="facility--section">
              <div className="resources">
                <h2>Lab Equipment & Resources</h2>
                <ul className="facility--ul">
                  {facility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {contentData
                .filter((item) => item.type === "facility")
                .map((item) => (
                  <div className="resource--img" key={item.id}>
                    <img src={item.Icon} alt="logo" />
                    <div className="img--desc">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;