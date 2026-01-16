import { useRef, useEffect } from 'react';
import '../appStyle.css';

const Navbar = ({ openPage, setOpenPage, hamburger, setHamburger }) => {
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Synchronize event listeners to handle clicks outside the component scope
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                hamburger &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setHamburger(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [hamburger, setHamburger]);

    // Handle navigation updates and state resets for mobile interfaces
    const handleMobileNav = (page) => {
        setOpenPage(page);
        setHamburger(false);
    };

    return (
        <div className="navbar--nb">
            <div className="logo--point">
                <img src="/assets/Robotics_logo.png" alt="logo" />
                <h1>Robotics club</h1>
            </div>

            <div className="navigating--navbar">
                <button
                    className={openPage === "home" ? "page--open" : ""}
                    onClick={() => setOpenPage("home")}
                >
                    Home
                </button>
                <button
                    className={openPage === "about" ? "page--open" : ""}
                    onClick={() => setOpenPage("about")}
                >
                    About
                </button>
                <button
                    className={openPage === "projects" ? "page--open" : ""}
                    onClick={() => setOpenPage("projects")}
                >
                    Projects
                </button>
                <button
                    className={openPage === "events" ? "page--open" : ""}
                    onClick={() => setOpenPage("events")}
                >
                    Events
                </button>
                <button
                    className={openPage === "teams" ? "page--open" : ""}
                    onClick={() => setOpenPage("teams")}
                >
                    Teams
                </button>
                <button
                    className={openPage === "news" ? "page--open" : ""}
                    onClick={() => setOpenPage("news")}
                >
                    News
                </button>
                <button
                    className={openPage === "achievements" ? "page--open" : ""}
                    onClick={() => setOpenPage("achievements")}
                >
                    Achievements
                </button>
                <button
                    className={openPage === "contact" ? "page--open" : ""}
                    onClick={() => setOpenPage("contact")}
                >
                    Contact
                </button>
            </div>

            <button
                ref={hamburgerRef}
                className={`hamburger ${hamburger ? "isOpen" : ""}`}
                onClick={() => setHamburger(prev => !prev)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div ref={menuRef} className={`mobile-menu ${hamburger ? "show" : ""}`}>
                <button onClick={() => handleMobileNav("home")}>Home</button>
                <button onClick={() => handleMobileNav("about")}>About</button>
                <button onClick={() => handleMobileNav("projects")}>Projects</button>
                <button onClick={() => handleMobileNav("events")}>Events</button>
                <button onClick={() => handleMobileNav("teams")}>Teams</button>
                <button onClick={() => handleMobileNav("news")}>News</button>
                <button onClick={() => handleMobileNav("achievements")}>Achievements</button>
                <button onClick={() => handleMobileNav("contact")}>Contact</button>
            </div>
        </div>
    );
};

export default Navbar;