import React from "react";
import logo from "../../../public/assests/logoName.svg"; // Make sure to replace this with the correct path to your logo image

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white py-4 font-montserrat">
     <div className="flex flex-col sm:flex-row justify-around gap-5 px-5 ">
  <div className="flex flex-col items-center flex-grow flex-shrink-0 basis-2/5 gap-6">
    <img src="../../../public/assests/logoName.svg" alt="logo name" className="w-[80%]"  />
    <div className="px-3 flex justify-center w-[80%]">
      CC - Core Capital provides real-time financial insights and automated tracking for smarter business decisions.
    </div>
    <div className="flex flex-row justify-around w-[60%]">
      <img src="../../../public/assests/instagram.svg" alt="instagram" className="w-10"/>
      <img src="../../../public/assests/facebook.png" alt="fb" className="w-10"/>
      <img src="../../../public/assests/linked in.png" alt="linkedin" className="w-10"/>
    </div>
  </div>

  <div className="sm:flex flex-col mt-6 flex-grow flex-shrink-0 basis-1/5 hidden gap-4">
    <div className="text-2xl text-nowrap">Landing Page</div>
    <div>Home</div>
  </div>

  <div className="sm:flex flex-col  mt-6  flex-grow flex-shrink-0 basis-1/5 hidden gap-4">
    <div className="text-2xl text-nowrap">Our Services</div>
    <div>Services</div>
    <div>FAQ</div>
  </div>

  <div className="sm:flex flex-col   mt-6 flex-grow flex-shrink-0 basis-1/5 hidden gap-4">
    <div className="text-2xl text-nowrap">Contact Us</div>
    <div>Join Us</div>
    <div>Get in Touch</div>
  </div>
</div>
      <div className="w-full bg-slate-200 h-[1px] my-8"></div>
      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="font-poppins text-sm">
          Copyright ©  {new Date().getFullYear()}Core Capital. All Rights
          Reserved. .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
