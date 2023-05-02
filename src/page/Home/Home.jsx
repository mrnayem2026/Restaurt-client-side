import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Home;