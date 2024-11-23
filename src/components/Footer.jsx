import React from 'react';
//import Resume from "../assets/JANANI.pdf"

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
        </footer>
    );
};

export default Footer;
