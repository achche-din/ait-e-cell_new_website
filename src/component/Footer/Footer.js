import React from "react";
import "./Footer.css";

const footer = () => {
    return (
        <div className="footer-container">
            <div className="location">
                <p>Innovation and Entrepreneur Cell</p>
                <p>Army Institute of Technology</p>
                <p>Dighi Hills, Pune</p>
                <p>Maharashtra</p>
                <p>411015</p>
            </div>

            <div className="social-links">
                <p>Find Us On: </p>
                <div className="icons">
                    <a href="https://www.facebook.com/">
                        <img src="#" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src="#" alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src="#" alt="linkedin" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <img src="#" alt="youtube" />
                    </a>
                </div>
            </div>

            <div className="quick-links">
                <p>Quick Links:</p>
                <a href="https://aitecell.in/#Entrepreneurship">
                    Entrepreneurship Training
                </a>
                <a href="https://aitecell.in/#Incubation">Incubation Center Contacts</a>
                <a href="https://aitecell.in/#startups">Startup Initiatives</a>
                <a href="https://aitecell.in/headlines.html">Our Headlines</a>
            </div>

            <div className="disclaimer">
                <p>© 2020-21 All Rights Reserved. Innovation and Entrepreneurship Cell, AIT</p>
            </div>
        </div>
    );
};

export default footer;
