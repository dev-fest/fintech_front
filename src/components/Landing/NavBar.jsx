import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons from react-icons

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* For desktop  */}
      <div className="w-full h-[7.5vh] bg-slate-200 flex flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center gap-3">
          <div>Logo</div>
          <div>Name</div>
        </div>
        <div className=" flex-row gap-6 hidden md:flex">
          <ul className="flex flex-row gap-3">
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contactus</li>
          </ul>
          <button>Register</button>
        </div>
      </div>


      
      
    </>
  );
};

export default NavBar;
