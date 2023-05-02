// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';


const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const handelLogOut = () => {
  logOut().then((res) => {
    console.log(res).catch((err) => {
        console.log(err);
    })
  })
    }
    return (
        <div className='lg:h-24 h-60  rounded'>
           <div className="navbar-start lg:navbar text-lg text-white">
           <img className='h-20 w-20 rounded-full' src="https://cdn.dribbble.com/users/3399824/screenshots/6521075/mascot-2-04.jpg" alt="" />
            <a className="btn btn-ghost normal-case text-4xl italic">Chef House</a>
            
            <div className='flex flex-col lg:flex-row'>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2 lg:pl-80 mt-5 lg:mt-0'  : 'bg-red pr-12 pl-2 lg:pl-80 mt-5 lg:mt-0')}>Home</NavLink>
            <NavLink to="/registration" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2'  : 'bg-red pr-12 pl-2')}>About</NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-yellow-200 pr-12 pl-2'  : 'bg-red pr-12 pl-2')}>Blogs</NavLink>

            {
                user && <span> welcome {user.email}</span> 
            }
            </div>
            <button className='text-center' onClick={handelLogOut}>Log out</button>
           </div>   
        </div>
    );
};

export default Header;