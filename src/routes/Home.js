import React from 'react';
import Navbar from '../components/Navbar.js';
import HeroImg from '../components/HeroImg.js';
import Footer from '../components/Footer.js';
import Work from '../components/Work.js';
import Skills from '../components/Skills.js';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;