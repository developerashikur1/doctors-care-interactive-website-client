import React from 'react';
import Accordions from '../../Accordion/Accordions';
import PreRegister from '../PreRegister/PreRegister';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        // three pages
        <div>
            <Slider></Slider>
            <PreRegister></PreRegister>
            <Services></Services>
            <Accordions></Accordions>
        </div>
    );
};

export default Home;