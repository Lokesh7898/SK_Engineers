import React, { useState, useEffect } from 'react';
import logo from '../assets/images/sk engineers logo.png';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Effect to handle scroll and update scrolled state
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault();
        
        // Calculate the navbar height dynamically
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 70; // Default to 70 if navbar is not found

        const section = document.getElementById(sectionId);
        if (section) {
            // Scroll to the section with the navbar offset
            window.scrollTo({
                top: section.offsetTop - navbarHeight, // Adjusted with navbar height
                behavior: 'smooth',
            });
        }

        // Close the navbar on mobile view after clicking a link
        if (window.innerWidth <= 700) {
            setIsNavOpen(false); 
        }
    };

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <a className="navbar-brand" href="#home">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </a>
            <button
                className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
                type="button"
                aria-controls="navbarNav"
                aria-expanded={isNavOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
                onClick={handleNavToggle}
            >
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
            </button>

            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home" onClick={(e) => handleScrollToSection(e, 'home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us" onClick={(e) => handleScrollToSection(e, 'about-us')}>About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blogs" onClick={(e) => handleScrollToSection(e, 'blogs')}>Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-us" onClick={(e) => handleScrollToSection(e, 'contact-us')}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
