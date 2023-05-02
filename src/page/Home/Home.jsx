import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Home;