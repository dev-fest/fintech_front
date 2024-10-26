import React, { useState,useEffect,useRef } from "react";
import Search from "../../../public/assests/search.svg";
import Notification from "../../../public/assests/notif.svg";
import Language from "../../../public/assests/language.svg";
import UserPDF from "../../../public/assests/UserPDF.svg";
import { Input } from 'antd';

const NavbarDash = () => {
  const fileInputRef = useRef(null);

  // Sample notification data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Message",
      content: "You have received a new message.",
      date: "2024-10-19",
      time: "10:30 AM",
      read: false,
    },
    {
      id: 2,
      title: "System Update",
      content: "A new system update is available.",
      date: "2024-10-18",
      time: "09:00 AM",
      read: true,
    },
    {
      id: 3,
      title: "Event Reminder",
      content: "Don't forget the meeting at 3 PM.",
      date: "2024-10-17",
      time: "02:00 PM",
      read: false,
    },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfil, setShowProfil] = useState(false);
  const [email, setEmail] = useState("li_boussebata@esi.dz");
  const [fname, setFname] = useState("Issam");
  const [lname, setLname] = useState("oussebata");
  const [role, setRole] = useState("Admin");

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
// Toggle dropdown visibility
const toggleProfil = () => {
  setShowProfil((prev) => !prev);
};
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
    console.log("All notifications marked as read");
  };

  // Filter notifications based on read status
  const getFilteredNotifications = () => {
    if (activeFilter === "all") {
      return notifications;
    }
    return notifications.filter((n) => (activeFilter === "unread" ? !n.read : n.read));
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  useEffect(() => {
    const connectWebSocket = () => {
        const ws = new WebSocket("wss://fintech-backend-ltm6.onrender.com/");

        ws.onopen = () => {
            console.log("Connected to WebSocket server");
        };

        ws.onmessage = (event) => {
            const newNotification = JSON.parse(event.data);
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { ...newNotification, read: false }
            ]);
        };

        ws.onerror = (event) => {
            console.error("WebSocket error observed:", event);
            //Show error message to the user
            message.error("Error connecting to WebSocket server.");
          //  Optional: Attempt to reconnect
            setTimeout(() => {
                console.log("Attempting to reconnect...");
                connectWebSocket(); // Try to reconnect
            }, 5000); // Retry after 5 seconds
        };

        ws.onclose = () => {
            console.log("Disconnected from WebSocket server");
            message.warning("WebSocket connection closed. Retrying...");
          //  Attempt to reconnect after a delay
            setTimeout(() => {
                console.log("Attempting to reconnect...");
                connectWebSocket(); // Try to reconnect
            }, 5000); // Retry after 5 seconds
        };

        return () => {
            ws.close();
        };
    };

    connectWebSocket(); // Initialize WebSocket connection

}, []);

  return (
    <nav
      className="w-full h-[7vh] bg-white text-black flex flex-row items-center justify-end px-6 gap-5 font-poppins"
      style={{ boxShadow: "0px 1.04px 4.16px 0px #0015291F" }}
    >
      <button className="flex items-center">
        <img src={Search} alt="Search icon" />
      </button>
      <button className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <img src={Notification} alt="Notification icon" />
      </button>
      {/* Notification */}
      {showDropdown && (
        <div className="absolute right-6 top-[7vh] w-[40vw] bg-[#F2F9FA] border rounded shadow-lg p-4 z-10">
          <div className="flex flex-col gap-2 px-3">
            <div className="flex flex-row justify-between font-montserrat">
              <div className="font-bold">Notifications</div>
              <div
                className="underline text-[12px] cursor-pointer"
                onClick={markAllAsRead}
              >
                Mark all as read
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-5 font-roboto text-[12px]">
              <div
                onClick={() => handleFilterChange("all")}
                className={`cursor-pointer ${
                  activeFilter === "all" ? "text-blue-500 border-b-2 border-blue-500" : ""
                }`}
              >
                All
              </div>
              <div
                onClick={() => handleFilterChange("unread")}
                className={`cursor-pointer ${
                  activeFilter === "unread" ? "text-blue-500 border-b-2 border-blue-500" : ""
                }`}
              >
                Unread
              </div>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="flex flex-col gap-2 font-poppins">
              {getFilteredNotifications().map((notification) => (
                <div
                  key={notification.id}
                  className={`p-2 rounded ${
                    notification.read ? "bg-white" : "bg-[#D7F0FF]"
                  }`}
                >
                  <div className="flex flex-row justify-between" >
                    
                  <div>
                  <div className="font-medium text-[14px]"  >{notification.title}</div>
                  <div className="text-[12px] text-gray-500">{notification.content}</div>
                  </div>
                  <div className="text-[8px] text-gray-500">
                    {notification.date} at {notification.time}
                  </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* User Profil */}
      {showProfil && (
        <div className="absolute right-6 top-[7vh] w-[40vw] bg-[#F2F9FA] border rounded shadow-lg p-4 z-10">
          <div className="flex flex-col gap-2 px-3">
            <div className="flex flex-row justify-between ">
              <div className="font-semibold">Profil</div>
              <img src="../../../public/assests/x_icon.svg" alt="" className="h-3 cursor-pointer rounded-sm bg-white border border-black" onClick={toggleProfil}  />
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
           {/* Profil picture row */}
<div className="flex flex-row items-center gap-5">
  <div className="relative mb-4">
    {/* Circular Profile Picture */}
    <img
      src={selectedImage || '../../../public/assests/logo.svg'} // Placeholder image if no picture is uploaded
      alt="Profile"
      className="h-24 w-24 rounded-full border-4 border-blue-500 object-cover"
    />
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      ref={fileInputRef}
      className="absolute inset-0 opacity-0 cursor-pointer" // Invisible file input over the image
    />
  </div>
  {/* Upload Button */}
  <label
    className="bg-blue-500 text-white h-min px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
    onClick={() => fileInputRef.current.click()} // Trigger file input click
  >
    Upload Profile Picture
  </label>
</div>
            <div className="text-sm">First name</div>
            <Input placeholder="first name" value={fname} className="rounded-sm" />
            <div className="text-sm">Last name</div>

            <Input placeholder="last name" value={lname} className="rounded-sm"/>
            <div className="text-sm"> Email</div>

            <Input placeholder="email" disabled value={email} className="rounded-sm"/>
            <div className="text-sm">Role</div>

            <Input placeholder="role" disabled value={role}  className="rounded-sm"/>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-center items-center gap-1 cursor-pointer" onClick={toggleProfil}>
        <img src={selectedImage || '../../../public/assests/profile_user.svg'} alt="user photo" className="rounded-full w-[25px] "/>
        <div>{fname}</div>
      </div>
      <button className="flex items-center">
        <img src={Language} alt="language icon" />
      </button>
    </nav>
  );
};

export default NavbarDash;
