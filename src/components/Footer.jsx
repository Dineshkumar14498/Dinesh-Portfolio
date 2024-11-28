import React from 'react';
import Resume from "../assets/Dinesh Resume.pdf";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Footer copyright text */}
            <p className="footer__copyright">© 2024 DK. All rights reserved.</p>

            {/* Footer links */}
            <div className="footer__links">
                <a href="https://www.linkedin.com/in/dinesh-kumar-2565191b4/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/Dineshkumar14498" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-file-pdf"></i> Resume
                </a>
            </div>

            {/* Contact Info */}
            <div className="footer__contact">
                <p><i className="fas fa-phone"></i> <a href="tel:+1234567890">9629144985</a></p>
                <p><i className="fas fa-envelope"></i> <a href="mailto:dinesh.kumar@example.com">dineshvlr9500@gmail.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;
