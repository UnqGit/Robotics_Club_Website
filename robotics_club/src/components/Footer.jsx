import React from "react"

const Footer = () => {
    return (
        <div className = "footer--container">
            <div className="Navbar">
                <h3>Robotics Club</h3>
                <p>Innovating the future through robotics, AI, and cutting-edge technology. Join us in building tomorrow's solutions today.</p>
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
                <div className="location">

                </div>
                <div className="email">

                </div>
                <div className="mobile">
                    
                </div>
            </div>
        </div>
    )
}

export default Footer