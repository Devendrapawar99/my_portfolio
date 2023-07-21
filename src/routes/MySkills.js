import React from 'react';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';

import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';

const MySkills = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="TECHNOLOGY /" text="skills speak louder than words." />
            <Skills />
            <Footer />
        </div>
    );
};

export default MySkills;