import React from "react";

/**
 * Footer component providing site navigation, branding, and contact details.
 */
const Footer = () => {
  return (
    <div className="footer--option">
      <div className="line"></div>
      
      {/* Primary container for footer content sections */}
      <div className="footer--container">
        <div className="Navbar">
          <h3>Robotics Club</h3>
          <p>
            Innovating the future through robotics, AI, and cutting-edge technology. 
            Join us in building tomorrow's solutions today.
          </p>
          <div className="footer--icon">
            <i className="fa-regular fa-envelope core-icon core-email"></i>
            <i className="fa-brands fa-linkedin-in core-icon core-linkedin"></i>
            <i className="fa-brands fa-github core-icon core-github"></i>
          </div>
        </div>

        <div className="quick--link">
          <p>Quick links</p>
          <button>Home</button>
          <button>About Us</button>
          <button>Projects</button>
          <button>Events</button>
        </div>

        <div className="resources--link">
          <p>Resources</p>
          <button>Team</button>
          <button>News</button>
          <button>Achievement</button>
          <button>Contact</button>
        </div>

        <div className="contact--info">
          <p>Contact</p>
          <div className="location--link">
            <i className="fa-solid fa-location-arrow"></i>
            <span>Main Building, First floor</span>
          </div>
          <div className="email--link">
            <i className="fa-regular fa-envelope"></i>
            <span>roboticsClub@nitp.ac.in</span>
          </div>
          <div className="mobile">
            <i className="fa-solid fa-phone"></i>
            <span>+91 9119634692</span>
          </div>
        </div>
      </div>

      <div className="line"></div>

      {/* Legal and secondary navigation information */}
      <div className="copyright">
        <div className="copy--footer">
          <span>© 2026 RoboTech Club. All rights reserved.</span>
        </div>
        <div className="privacy--terms">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;