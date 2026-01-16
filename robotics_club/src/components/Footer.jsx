import React from "react"

const Footer = ({ setOpenPage }) => {
    return (
        <div className="footer--option">
            <div className="line"></div>
            <div className="footer--container">
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
                    <button onClick={() => setOpenPage("home")}>Home</button>
                    <button onClick={() => setOpenPage("about")}>About Us</button>
                    <button onClick={() => setOpenPage("projects")}>Projects</button>
                    <button onClick={() => setOpenPage("events")}>Events</button>
                </div>
                <div className="resources--link">
                    <p>Resources</p>
                    <button onClick={() => setOpenPage("teams")}>Team</button>
                    <button onClick={() => setOpenPage("news")}>News</button>
                    <button onClick={() => setOpenPage("achievements")}>Achievement</button>
                    <button onClick={() => setOpenPage("contact")}>Contact</button>
                </div>
                <div className="contact--info">
                    <p>Contact</p>
                    <div className="location--link">
                        <i class="fa-solid fa-location-arrow"></i>
                        <span>Main Building, First floor and </span>
                    </div>
                    <div className="email--link">
                        <i class="fa-regular fa-envelope"></i>
                        <span>roboticsClub@nitp.ac.in</span>
                    </div>
                    <div className="mobile">
                        <i class="fa-solid fa-phone"></i>
                        <span>+91 9119634692</span>
                    </div>
                </div>
            </div>
            <div className="line"></div>
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
    )
}

export default Footer