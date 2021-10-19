import React from 'react';
import PreRegister from '../PreRegister/PreRegister';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PreRegister></PreRegister>
            <Services></Services>
        </div>
    );
};

export default Home;