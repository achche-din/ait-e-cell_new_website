import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo">
                <img src="#" alt="I&E Cell Logo" />
            </div>

            <div className="nav-links">
                <div className="home-button">
                    <a href="#">Home</a>
                </div>
                <div className="event-button">
                    <a href="#">Events</a>
                </div>
                <div className="mentor-button">
                    <a href="#">Mentor Connects</a>
                </div>
                <div className="team-button">
                    <a href="#">Our Team</a>
                </div>
                <div className="internship-button">
                    <a href="#">Internships</a>
                </div>
                <div className="contact-button">
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
