import React from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import Update from '../Update/Update';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
            <Update></Update>
        </div>
    );
};

export default Home;