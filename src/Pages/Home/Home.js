import React from 'react';
import Banner from './Banner/Banner';
import Services from '../Shared/Services/Services';
import About from '../Home/About/About';
import Contact from '../Home/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;