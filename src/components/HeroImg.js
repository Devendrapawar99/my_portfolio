import './HeroImgStyles.css';

import React from 'react';

// Import images
import IntroImg from '../assets/intro-bg.jpg';

import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const HeroImg = () => {
    return (
        <div clasName="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="intro image" />
            </div>
            <div className="content">
                <h1>Hi, i'am Devendra</h1>

                <p>
                    and I am
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "Full stack Developer",
                                "React Developer",
                                "A Programmer"
                            ]
                        }}
                    />
                </p>
                <div>
                    <Link to="https://github.com/Devendrapawar99" target="_blank" className="btn"><i class="fa-brands fa-github"></i>View on Github</Link>
                    <Link to="https://www.linkedin.com/in/devendra-pawar-087295115/" target="_blank" className="btn btn-light"><i class="fa-brands fa-linkedin"></i>View on Linkedin</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;