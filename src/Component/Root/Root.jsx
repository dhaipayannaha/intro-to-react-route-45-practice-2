import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;