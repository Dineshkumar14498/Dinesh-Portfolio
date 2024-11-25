import React from 'react';
// import Resume from "../assets/JANANI.pdf"

const Footer = () => {
    return (
        <footer className="footer">
            {/* Footer copyright text */}
            <p>© 2024 DK. All rights reserved.</p>

            {/* Footer links */}
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/dinesh-kumar-2565191b4/" target="_blank" rel="Dineshkumar">LinkedIn</a> |
                <a href="https://github.com/Dineshkumar14498" target="_blank" rel="Dineshkumar">GitHub</a> |
                <a href="" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
                <p>Contact: <a href="tel:+1234567890">9629144985</a></p>
                <p>Email: <a href="mailto:dinesh.kumar@example.com">dineshvlr9500@gmail.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;
