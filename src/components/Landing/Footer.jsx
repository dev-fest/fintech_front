import React from 'react';
import logo from '../../../public/assests/logoName.svg'; // Make sure to replace this with the correct path to your logo image

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Coracpital Logo" className="h-10 mr-2" />
        </div>

        {/* Links */}
        <nav className="flex space-x-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </div>

    <div className='w-full bg-slate-200 h-[1px] my-4'></div>
      {/* Copyright */}
      <div className="text-center mt-4">
        <p className='font-poppins text-sm'>Copyright ©  {new Date().getFullYear()}Core Capital. All Rights Reserved.
        .</p>
      </div>
    </footer>
  );
}

export default Footer;
