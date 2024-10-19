import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons from react-icons
import { gsap } from 'gsap'; // Import GSAP for animations
import { NavLink } from 'react-router-dom';
import logo from '../../../public/assests/logo.svg';

const NavBar = ({ heroRef, servicesRef, faqRef, footerRef }) => {
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

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close the menu after clicking
    };

    return (
        <>
            {/* For desktop */}
            <div className='w-full bg-[#001529] sm:flex justify-center items-center hidden font-poppins'>
                <div className="w-[80%] h-[7.5vh] flex flex-row items-center justify-between px-4 ">
                    <div>
                        <img src={logo} alt="logo" className='h-[6vh]' />
                    </div>
                    <div className="hidden md:flex  items-center justify-center">
                        <div className="flex flex-row items-center gap-10 font-bold h-full">
                            <div>
                                <button 
                                    onClick={() => scrollToSection(heroRef)} 
                                    className='text-[#A6DBFF] hover:text-[#0073FC]'>
                                    Home
                                </button>
                            </div>
                            <div>
                                <button 
                                    onClick={() => scrollToSection(servicesRef)} 
                                    className='text-[#A6DBFF] hover:text-[#0073FC]'>
                                    Services
                                </button>
                            </div>
                            <div>
                                <button 
                                    onClick={() => scrollToSection(faqRef)} 
                                    className='text-[#A6DBFF] hover:text-[#0073FC]'>
                                    FAQ
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-gradient-to-b from-[#0073FC] via-[#556AFE] to-[#8266FF] p-[1px] rounded-xl'>
                            <div className='bg-[#001529] w-full h-full rounded-xl'>
                                <span className="relative group-hover:text-white bg-gradient-to-b from-[#0073FC] to-[#8266FF] bg-clip-text text-transparent px-5 py-10 font-semibold">
                                    Contact Us
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* For mobile */}
            <div className="sm:hidden w-full h-[7.5vh] bg-[#001529] flex flex-row items-center justify-between px-4 font-poppins">
                <div>
                    <img src={logo} alt="logo" className='h-[5vh]' />
                </div>
                <div onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="w-6 h-6 cursor-pointer text-[#0073FC]" /> : <FaBars className="w-6 h-6 cursor-pointer text-[#0073FC]" />}
                </div>
            </div>

            {/* Dropdown Menu (for mobile) */}
            <div
                ref={dropdownRef} // Attach the ref to the dropdown menu
                className="absolute font-poppins top-[7.5vh] left-0 w-full bg-[#001529] overflow-hidden opacity-0 border-b-[1px] rounded-lg"
            >
                <ul className="flex flex-col items-center gap-4 py-4">
                    <li className="cursor-pointer">
                        <button onClick={() => scrollToSection(heroRef)} className="text-[#A6DBFF] hover:text-[#0073FC]">Home</button>
                    </li>
                    <li className="cursor-pointer">
                        <button onClick={() => scrollToSection(servicesRef)} className="text-[#A6DBFF] hover:text-[#0073FC]">Services</button>
                    </li>
                    <li className="cursor-pointer">
                        <button onClick={() => scrollToSection(faqRef)} className="text-[#A6DBFF] hover:text-[#0073FC]">FAQ</button>
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
