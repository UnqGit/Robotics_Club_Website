import '../appStyle.css'

const Navbar = ({openPage, setOpenPage, hamburger, setHamburger}) => {
    const handleMobileNav = (page) => {
        setOpenPage(page);
        setHamburger(false);
    };

    {/* The Navbar section */}
    return (    
        <div className="navbar--nb">

            <div className="logo--point">
                <img src='./src/assets/Robotics_logo.png' alt="logo" />
                <h1>Robotics club</h1>
            </div>
            <div className="navigating--navbar">
                <button onClick={() => setOpenPage("home")}>Home</button>
                <button onClick={() => setOpenPage("about")}>About</button>
                <button onClick={() => setOpenPage("projects")}>Projects</button>
                <button onClick={() => setOpenPage("events")}>Events</button>
                <button onClick={() => setOpenPage("teams")}>Teams</button>
                <button onClick={() => setOpenPage("news")}>News</button>
                <button onClick={() => setOpenPage("achievements")}>Achievements</button>
                <button onClick={() => setOpenPage("contact")}>Contact</button>
            </div>

            {/* Humberger */}
            <button
                className={`hamburger ${hamburger ? "isOpen" : ""}`}
                onClick={() => setHamburger(prev => !prev)}
                aria-label="Toggle menu"
                >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`mobile-menu ${hamburger ? "show" : ""}`}>
                <button onClick={() => handleMobileNav("home")}>Home</button>
                <button onClick={() => handleMobileNav(("about"))}>About</button>
                <button onClick={() => handleMobileNav(("projects"))}>Projects</button>
                <button onClick={() => handleMobileNav(("events"))}>Events</button>
                <button onClick={() => handleMobileNav(("teams"))}>Teams</button>
                <button onClick={() => handleMobileNav(("news"))}>News</button>
                <button onClick={() => handleMobileNav(("achievements"))}>Achievements</button>
                <button onClick={() => handleMobileNav(("contact"))}>Contact</button>
            </div>

        </div>
    )
}

export default Navbar