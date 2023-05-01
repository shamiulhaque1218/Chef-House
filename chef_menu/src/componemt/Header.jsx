// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-300'>
           <div className="navbar-start lg:navbar text-lg">
            <a className="btn btn-ghost normal-case text-3xl">Chef House</a>
            <div className='flex flex-col lg:flex-row'>
            <NavLink className="pr-12 pl-2 lg:pl-60 mt-5 lg:mt-0">Home</NavLink>
            <NavLink className="pr-12 pl-2">About</NavLink>
            <NavLink className="pr-12 pl-2">Recipes</NavLink>
            <NavLink className="pr-12 pl-2">Blogs</NavLink>
            <NavLink className="pr-12 pl-2">Contact</NavLink>
            </div>
           </div>
        </div>
    );
};

export default Header;