import './NavBar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Bottom = () => {
    return (
        <div className="bottom">
            <div className="icons">
                <a className="LinkedIn" href="https://www.linkedin.com/in/qidi-wang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                </a>
                <a className="GitHub" href="https://github.com/AlphauroraE" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={24} />
                </a>
            </div>
            <div>Copyright © Joanne Wang. All rights reserved.</div>
            <div className="made-with-love">Made with love ❤️</div>
        </div>
    );
};

export default Bottom;
