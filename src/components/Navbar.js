import './NavbarStyles.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // For hamburger Menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //Navbar background scrolling effect
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);


  //Navbar section
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className='myname'>
        Devendra
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/MySkills">Skills</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="https://drive.google.com/file/d/1WM8WIkrVQaPAwR7x_I2U5h1RhpD39y7k/view?usp=drivesdk" target="_blank" className='resume__btn'>Resume</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />)
          : (<FaBars size={20} style={{ color: "#fff" }} />)
        }
      </div>
      
    </div>

  );
};

export default Navbar;

