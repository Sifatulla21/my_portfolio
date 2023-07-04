import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ThemeContext } from '../Provider/ThemeProvider';
import ToggleButton from '../Theme/ToggleButton';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={`navbar fixed z-10 bg-opacity-20 text-black font-bold text-3xl ${theme === 'dark' ? 'text-white' : ''}`}>
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-opacity-80 shadow bg-black text-white rounded-box w-40 z-50">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <ToggleButton></ToggleButton>
                        </ul>
                    </div> */}
                    <Link><img className="h-24 w-32 " src={logo} alt="" /></Link>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 me-[1000px]">
                        {/* <li><a  className="mr-2 text-xl" href="#">Home</a></li>
                        <li><a className="mr-2 text-xl" href="#skills">Skills</a></li>
                        <li><a className="mr-2 text-xl" href="#projects">Projects</a></li> 
                        <li><a className="mr-2 text-xl" href="#contact">Contact</a></li>
                        <ToggleButton></ToggleButton> */}
                    </ul>
                </div>
                <div>

                </div>
            </div>

        </>
    );
};

export default Header;
