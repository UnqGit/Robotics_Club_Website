import React from 'react';
import contentData from '../data/contentData';

const Teams = () => {
  // This component serves as the primary interface for showcasing organizational leadership and staff.
  return (
    <main className="teams-page">
      <h1 className="main-heading">Meet Our Team</h1>
      <p className="paragraph">
        The distinguished professionals driving our institutional innovation and success.
      </p>

      <section className="faculty-section">
        {contentData
          .filter((item) => item.type === "coreTeam")
          .map((item) => (
            <div className="faculty-card" key={item.id}>
              <div className="faculty-profile-img">
                <img src={item.Image} alt={item.name} />
              </div>
              <div className="faculty-content">
                <h2 className="faculty-name">{item.name}</h2>
                <p className="faculty-role">{item.position}</p>
                <p className="faculty-dept">{item.department}</p>

                <div className="faculty-quote-box">
                  <p>{item.description}</p>
                </div>

                <div className="faculty-socials">
                  <a href="#" aria-label="Email">
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </section>

      <h1 className="main-heading">Core Team / Office Bearers</h1>
      <p className="paragraph">
        The leadership team at the helm of our strategic activities and development.
      </p>

      <section className="core-team-section">
        <div className="core-team-grid">
          {contentData
            .filter((item) => item.type === "teams")
            .map((item) => (
              <div className="core-team-card" key={item.id}>
                <div className="core-team-image">
                  <img src={item.Image} alt={item.name} loading='lazy' />
                </div>
                <div className="core-team-content">
                  <h3>{item.name}</h3>
                  <span className="core-team-role">{item.position}</span>
                  <div className="core-team-info">
                    <span className="label">Specialization</span>
                    <p>Autonomous Systems</p>
                  </div>
                  <div className="core-team-achievement">
                    Distinction: IEEE Best Paper Award 2025
                  </div>
                  <div className="core-team-contact">
                    <i className="fa-regular fa-envelope core-icon core-email"></i>
                    <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
                    <i className="fa-brands fa-github core-icon core-github"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Teams;