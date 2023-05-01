// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
            <Header> </Header>
             <Outlet> </Outlet>
             <Footer> </Footer>
        </div>
    );
};

export default Layout;