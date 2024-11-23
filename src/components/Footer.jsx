import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Footer copyright text */}
            <p>© 2024 Your Name. All rights reserved.</p>
            
            {/* Footer links */}
            <div className="footer-links">
                <a href="mailto:your.email@example.com">Email</a> |
                <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </footer>
    );
};

export default Footer;
