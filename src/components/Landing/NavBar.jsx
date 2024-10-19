import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons from react-icons
import { gsap } from 'gsap'; // Import GSAP for animations
import { NavLink } from 'react-router-dom';
import logo from '../../../public/assests/logo.svg';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for the dropdown menu

    useEffect(() => {
        // GSAP animation for dropdown menu
        if (isOpen) {
            gsap.to(dropdownRef.current, {
                duration: 0.5,
                height: 'auto',
                opacity: 1,
                ease: 'power2.out',
            });
        } else {
            gsap.to(dropdownRef.current, {
                duration: 0.5,
                height: 0,
                opacity: 0,
                ease: 'power2.in',
            });
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* For desktop */}
            <div className='w-full bg-[#001529] sm:flex justify-center items-center hidden'>
                <div className="w-[80%] h-[7.5vh] flex flex-row items-center justify-between px-4">
                    <div>
                        <img src={logo} alt="logo" className='h-[6vh]' />
                    </div>
                    <div className="hidden md:flex">
                        <ul className="flex flex-row gap-10 font-bold h-full">
                            <li>
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => 
                                        isActive 
                                            ? 'text-transparent py-2 bg-clip-text bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF] border-b-2 border-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF]' 
                                            : 'text-[#A6DBFF] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF]'
                                    }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => 
                                        isActive 
                                            ? 'text-transparent py-2 bg-clip-text bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF] border-b-2 border-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF]' 
                                            : 'text-[#A6DBFF] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF]'
                                    }>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => 
                                        isActive 
                                            ? 'text-transparent py-2 bg-clip-text bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF] border-b-2 border-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF]' 
                                            : 'text-[#A6DBFF] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF]'
                                    }>
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF] p-[1px] rounded-xl'>
                            <div className='bg-[#001529] w-full h-full rounded-xl'>
                                <span className="relative group-hover:text-white bg-gradient-to-b from-[#0073FC] to-[#8266FF] bg-clip-text text-transparent px-5 py-5 font-semibold">
                                    Contact Us
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* For mobile */}
            <div className="sm:hidden w-full h-[7.5vh] bg-[#001529] flex flex-row items-center justify-between px-4">
                <div>
                    <img src={logo} alt="logo" className='h-[5vh]' />
                   
                </div>
                <div onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="w-6 h-6 cursor-pointer text-[#0073FC] " /> : <FaBars className="w-6 h-6 cursor-pointer text-[#0073FC]" />}
                </div>
            </div>

            {/* Dropdown Menu (for mobile) */}
            <div
                ref={dropdownRef} // Attach the ref to the dropdown menu
                className="absolute top-[7.5vh] left-0 w-full bg-[#001529] overflow-hidden opacity-0 border-b-[1px] rounded-lg"
            >
                <ul className="flex flex-col items-center gap-4 py-4">
                    <li className="cursor-pointer">
                        <NavLink to="/" className="text-[#A6DBFF] hover:text-[#0073FC]">Home</NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to="/" className="text-[#A6DBFF] hover:text-[#0073FC]">About</NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to="/" className="text-[#A6DBFF] hover:text-[#0073FC]">Services</NavLink>
                    </li>
                    
                    <li>
                    <button className='bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF] p-[1px] rounded-xl'>
                            <div className='bg-[#001529] w-full h-full rounded-xl'>
                                <span className="relative group-hover:text-white bg-gradient-to-b from-[#0073FC] to-[#8266FF] bg-clip-text text-transparent px-5 py-5 font-semibold">
                                    Contact Us
                                </span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
