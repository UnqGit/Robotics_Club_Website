import '../appStyle.css'
import contentData from '../data/contentData'

const About = () => {
  {/* About section of the website */}
  return (
    <div className="about--ab">
      <div className="all--about">
        <h1>About Robotics Club</h1>
        <p>Empowering students to innovate, create, and shape the future of technology through hands-on robotics and AI projects</p>

        <div className="about---container">
          {
            contentData
            .filter(item => item.type === "info")
            .map(item => (
              <div className="about--box" key={item.id}>
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
              <div className="longInfo" key={item.id}>
                <div className="longInfo__icon">
                  <img src={item.Icon} alt="logo" />
                </div>
                <h2>{item.title}</h2>
                  <ul className='points--list'>
                    {
                      item.description.map((point, index) => (
                        <li key={index} className='longTime--desc'>
                          <span className='point'>●</span>
                          {point}
                        </li>
                      ))
                    }
                  </ul>
              </div>
            ))
          }
        </div>

        <div className="activities">
          <div className="focus">
            <h1>Focus Areas & Activities</h1>
            <p>Our diverse areas of expertise in competitions, workshops and research</p>
            <div className="focus--container">
              {
                contentData
                .filter(item => item.type === "focus")
                .map(item => (
                  <div className="focus--box" key={item.id}>
                    <div className="focus--icon">
                      <img src={item.Icon} alt="logo" />
                    </div>
                    <div className="focus--content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="facilities">
          <div className="facility--chamber">
            <h1>Infrastructure & Facilities</h1>
            <p>State-of-the-art lab equipped with modern tools and technology</p>
            <div className="facility--section">
              <div className="resources">
                <h2>Lab Equipments & Resources</h2>
                <ul className='facility--ul'>
                  <li> 3D Printers & CNC Machines for rapid prototyping</li>
                  <li> Arduino, Raspberry Pi & ESP32 development boards</li>
                  <li> Advanced sensor kits (LIDAR, IMU, ultrasonic)</li>
                  <li> Soldering stations & electronic measurement tools</li>
                  <li> High-performance computers with simulation software</li>
                  <li> VR/AR headsets for immersive development</li>
                  <li> Robotic arms & autonomous vehicle platforms</li>
                  <li> Dedicated workspace with 20+ workbenches</li>
                </ul>
              </div>
              {
                contentData.filter(item => item.type === "facility")
                .map(item => (
                  <div className="resource--img" key={item.id}>
                    <img src={item.Icon} alt="logo" />
                    <div className="img--desc">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        


      </div>
    </div>
  )
}

export default About