import React from "react";
import Search from "../../../public/assests/search.svg";
import Notification from "../../../public/assests/notif.svg";
import Language from "../../../public/assests/language.svg";
import UserPDF from "../../../public/assests/UserPDF.svg";

const NavbarDash = () => {
  return (
    <nav
      className="w-full h-[7vh] bg-white text-black flex flex-row items-center justify-end px-6 gap-5"
      style={{ boxShadow: "0px 1.04px 4.16px 0px #0015291F" }} // Inline style for box shadow
    >
      <button className="flex items-center">
        <img src={Search} alt="Search icon" />
      </button>
      <button className="flex items-center">
        <img src={Notification} alt="Notification icon" />
      </button>
      <div className="flex flex-row justify-center items-center gap-1">
        <img src={UserPDF} alt="user photo" /> {/* Optional: Make the user photo circular */}
        <div>User</div>
      </div>
      <button className="flex items-center">
        <img src={Language} alt="language icon" />
      </button>
    </nav>
  );
};

export default NavbarDash;
