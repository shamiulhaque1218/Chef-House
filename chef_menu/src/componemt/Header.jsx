// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='lg:h-24 mt-2 mx-1 lg:ml-2 lg:mr-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500'>
           <div className="navbar-start lg:navbar text-lg text-white">
            <a className="btn btn-ghost normal-case text-4xl italic">Chef House</a>
            
            <div className='flex flex-col lg:flex-row'>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2 lg:pl-60 mt-5 lg:mt-0'  : 'bg-red pr-12 pl-2 lg:pl-60 mt-5 lg:mt-0')}>Home</NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2'  : 'bg-red pr-12 pl-2')}>About</NavLink>
            <NavLink to="homee" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2'  : 'bg-red pr-12 pl-2')}>Recipes</NavLink>
            <NavLink to="/house" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2'  : 'bg-red pr-12 pl-2')}>Blogs</NavLink>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2'  : 'bg-red pr-12 pl-2')}>Contact</NavLink>
            </div>
           </div>   
        </div>
    );
};

export default Header;