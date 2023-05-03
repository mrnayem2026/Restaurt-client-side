import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../page/About/About';
import Process from '../../components/Process/Process';
import Chef from '../../components/Chef/Chef';

const Main = () => {
    return (
        <>
            <Banner></Banner>
            <Chef></Chef>
            <About></About>
            <Process></Process>
        </>
    );
};

export default Main;