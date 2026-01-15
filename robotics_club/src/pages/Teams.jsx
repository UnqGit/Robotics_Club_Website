import React from 'react'

const Teams = () => {
  return (
    <main className="teams-page">
      <h1 className="main-heading">Meet Our Team</h1>
      <p className="paragraph">The brilliant minds behind our innovations and achievements</p>

      <section className="faculty-section">
        <h2>Professor Incharge</h2>
        <div className="faculty-card">
          <div className="faculty-profile-img">
            <img src="./assets/PI.jpeg" alt="Professor Incharge" />
          </div>
          <div className="faculty-content">
            <h2 className="faculty-name">Dr. Gagandeep Meena</h2>
            <p className="faculty-role">Professor Incharge</p>
            <p className="faculty-dept">Department of Electrical Engineering</p>

            <div className="faculty-quote-box">
              <p>
                "Robotics is not just about building machines; it's about creating intelligent systems
                that enhance human capabilities and solve real-world problems.
                I'm proud to mentor these brilliant minds shaping the future."
              </p>
            </div>

            <div className="faculty-socials">
              <a href="#" aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <h2>Faculty Advisor</h2>
        <div className="faculty-card">
          <div className="faculty-profile-img">
            <img src="./assets/faculty_advisor.png" alt="Faculty Advisor" />
          </div>
          <div className="faculty-content">
            <h2 className="faculty-name">Dr. Bharat Gupta</h2>
            <p className="faculty-role">Faculty Advisor</p>
            <p className="faculty-dept">Department of Electronics and Communication</p>

            <div className="faculty-quote-box">
              <p>
                "Robotics is not just about building machines; it's about creating intelligent systems
                that enhance human capabilities and solve real-world problems.
                I'm proud to mentor these brilliant minds shaping the future."
              </p>
            </div>

            <div className="faculty-socials">
              <a href="#" aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </section>

      <h1 className="main-heading">Core Team / Office Bearers</h1>
      <p className="paragraph">Leadership team driving innovation and organizing activities</p>

      <section className="core-team-section">
        <div className="core-team-grid">
          {/* Core Team Card 1 */}
          <div className="core-team-card">
            <div className="core-team-image">
              <img src="./assets/president.jpg" alt="President" />
            </div>
            <div className="core-team-content">
              <h3>Darshan Jain</h3>
              <span className="core-team-role">President</span>
              <div className="core-team-info">
                <span className="label">Specialization</span>
                <p>Autonomous Systems</p>
              </div>
              <div className="core-team-achievement">
                🏆 IEEE Best Paper Award 2025
              </div>
              <div className="core-team-contact">
                <i className="fa-regular fa-envelope core-icon core-email"></i>
                <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
                <i className="fa-brands fa-github core-icon core-github"></i>
              </div>
            </div>
          </div>

          {/* Core Team Card 2 */}
          <div className="core-team-card">
            <div className="core-team-image">
              <img src="./assets/president.jpg" alt="President" />
            </div>
            <div className="core-team-content">
              <h3>Darshan Jain</h3>
              <span className="core-team-role">President</span>
              <div className="core-team-info">
                <span className="label">Specialization</span>
                <p>Autonomous Systems</p>
              </div>
              <div className="core-team-achievement">
                🏆 IEEE Best Paper Award 2025
              </div>
              <div className="core-team-contact">
                <i className="fa-regular fa-envelope core-icon core-email"></i>
                <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
                <i className="fa-brands fa-github core-icon core-github"></i>
              </div>
            </div>
          </div>

          {/* Core Team Card 3 */}
          <div className="core-team-card">
            <div className="core-team-image">
              <img src="./assets/president.jpg" alt="President" />
            </div>
            <div className="core-team-content">
              <h3>Darshan Jain</h3>
              <span className="core-team-role">President</span>
              <div className="core-team-info">
                <span className="label">Specialization</span>
                <p>Autonomous Systems</p>
              </div>
              <div className="core-team-achievement">
                🏆 IEEE Best Paper Award 2025
              </div>
              <div className="core-team-contact">
                <i className="fa-regular fa-envelope core-icon core-email"></i>
                <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
                <i className="fa-brands fa-github core-icon core-github"></i>
              </div>
            </div>
          </div>

          {/* Core Team Card 4 */}
          <div className="core-team-card">
            <div className="core-team-image">
              <img src="./assets/president.jpg" alt="President" />
            </div>
            <div className="core-team-content">
              <h3>Darshan Jain</h3>
              <span className="core-team-role">President</span>
              <div className="core-team-info">
                <span className="label">Specialization</span>
                <p>Autonomous Systems</p>
              </div>
              <div className="core-team-achievement">
                🏆 IEEE Best Paper Award 2025
              </div>
              <div className="core-team-contact">
                <i className="fa-regular fa-envelope core-icon core-email"></i>
                <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
                <i className="fa-brands fa-github core-icon core-github"></i>
              </div>
            </div>
          </div>

          {/* Core Team Card 5 */}
          <div className="core-team-card">
            <div className="core-team-image">
              <img src="./assets/president.jpg" alt="President" />
            </div>
            <div className="core-team-content">
              <h3>Darshan Jain</h3>
              <span className="core-team-role">President</span>
              <div className="core-team-info">
                <span className="label">Specialization</span>
                <p>Autonomous Systems</p>
              </div>
              <div className="core-team-achievement">
                🏆 IEEE Best Paper Award 2025
              </div>
              <div className="core-team-contact">
                <i className="fa-regular fa-envelope core-icon core-email"></i>
                <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
                <i className="fa-brands fa-github core-icon core-github"></i>
              </div>
            </div>
          </div>

          {/* Core Team Card 6 */}
          <div className="core-team-card">
            <div className="core-team-image">
              <img src="./assets/president.jpg" alt="President" />
            </div>
            <div className="core-team-content">
              <h3>Darshan Jain</h3>
              <span className="core-team-role">President</span>
              <div className="core-team-info">
                <span className="label">Specialization</span>
                <p>Autonomous Systems</p>
              </div>
              <div className="core-team-achievement">
                🏆 IEEE Best Paper Award 2025
              </div>
              <div className="core-team-contact">
                <i className="fa-regular fa-envelope core-icon core-email"></i>
                <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
                <i className="fa-brands fa-github core-icon core-github"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Teams