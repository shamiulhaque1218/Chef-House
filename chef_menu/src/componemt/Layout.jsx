// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  
    return (
        <div  className="bg-cover bg-center h-screen height" style={{backgroundImage: "url('https://images.hdqwalls.com/wallpapers/grey-material-design-4k-7l.jpg')"}} >
            <Header> </Header>
             <Outlet> </Outlet>
             <Footer> </Footer>
        </div>
    );
};

export default Layout;