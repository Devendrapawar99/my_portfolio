import './FooterStyles.css';

import React from 'react';

import { FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Gokhlenagar housing Society.</p>
                            <p>Pune.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91-9922277750
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            devendrap575@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About Me</h4>
                    <p>
                        This is me Devendra Pawar. I am a Full-Stack Developer
                        and i enjoy discussing new projects and design challanges.
                        <div className='icons'>
                            <a href="https://www.linkedin.com/in/devendra-pawar-087295115/" title="LinkedIn" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/Devendrapawar99" title="gitHub" target="_blank"><i class="fa-brands fa-github align"></i></a>
                            <a href="https://twitter.com/devendra_p81631" title="Twitter" target="_blank"><i className="fa-brands fa-twitter-square align"></i></a>
                            <a href="https://www.instagram.com/devendrap575/" title="Instagram" target="_blank"><i class="fa-brands fa-instagram align"></i></a>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;