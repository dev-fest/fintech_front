import React, { useState } from "react";
import Search from "../../../public/assests/search.svg";
import Notification from "../../../public/assests/notif.svg";
import NotificationOn from "../../../public/assests/notif_on.svg";
import Language from "../../../public/assests/language.svg";
import UserPDF from "../../../public/assests/UserPDF.svg";
import { Input } from 'antd';
import useAuthStore from "../../store/useAuthStore";
const roleNames = {
  "6713a626c74280ead1f879b4": "User",
  "671420c2df2d71de25efde15": "Admin",
  "6713a61ec74280ead1f879b3": "Mederateur",
};

const NavbarDash = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Optimize Cash Flow", content: "Consider reducing expenses to improve your cash flow balance.", date: "2024-10-26", time: "08:45 AM", read: false },
    { id: 2, title: "Revenue Increase Opportunity", content: "Recent analysis suggests potential to increase revenue by focusing on high-performing projects.", date: "2024-10-25", time: "11:15 AM", read: false },
    { id: 3, title: "Budget Adjustment", content: "Consider adjusting your budget allocation to reduce debt.", date: "2024-10-24", time: "03:20 PM", read: true },
    { id: 4, title: "Project Investment Advice", content: "Invest more in Project Alpha to maximize return on investment.", date: "2024-10-23", time: "10:00 AM", read: false },
    { id: 5, title: "Expense Analysis", content: "High expenses detected in Q3. Review and optimize your operational costs.", date: "2024-10-22", time: "01:30 PM", read: true },
    { id: 6, title: "Debt Reduction Suggestion", content: "Consider reducing debt through available cash flow reserves to improve financial health.", date: "2024-10-21", time: "09:45 AM", read: false },
    { id: 7, title: "Funding Opportunity", content: "Potential funding opportunities available for high-budget projects.", date: "2024-10-20", time: "04:15 PM", read: true },
    { id: 8, title: "Profit Margin Alert", content: "Profit margin is below target. Consider revising pricing or cutting costs.", date: "2024-10-19", time: "02:00 PM", read: false },
    { id: 9, title: "Revenue Diversification", content: "Explore opportunities to diversify revenue sources to reduce risk.", date: "2024-10-18", time: "12:30 PM", read: true },
    { id: 10, title: "Expense Reduction Suggestion", content: "Lowering marketing expenses could increase your profit margin.", date: "2024-10-17", time: "10:45 AM", read: false },
    { id: 11, title: "Investment Efficiency", content: "Consider reallocating investments from low-return projects to high-potential areas.", date: "2024-10-16", time: "09:30 AM", read: true },
    { id: 12, title: "Upcoming Financial Goals", content: "Set financial goals for the upcoming quarter to stay on track.", date: "2024-10-15", time: "04:50 PM", read: false },
    { id: 13, title: "Operational Efficiency Tip", content: "Optimize staffing to reduce payroll expenses and improve operational efficiency.", date: "2024-10-14", time: "11:00 AM", read: true },
    { id: 14, title: "Financial Report Update", content: "Your quarterly financial report is ready for review in the dashboard.", date: "2024-10-13", time: "08:30 AM", read: false },
    { id: 15, title: "Profitability Insight", content: "Project Beta is generating high returns. Focus resources here for maximum impact.", date: "2024-10-12", time: "07:45 AM", read: true },
]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfil, setShowProfil] = useState(false);
  const { user } = useAuthStore(); 
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

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleProfil = () => {
    setShowProfil((prev) => !prev);
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
    console.log("All notifications marked as read");
  };

  const getFilteredNotifications = () => {
    if (activeFilter === "all") {
      return notifications;
    }
    return notifications.filter((n) => (activeFilter === "unread" ? !n.read : n.read));
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const roleName = roleNames[user?.role_id] || "Unknown Role";

  return (
    <nav
      className="w-full h-[7vh] bg-white text-black flex flex-row items-center justify-end px-6 gap-5 font-poppins"
      style={{ boxShadow: "0px 1.04px 4.16px 0px #0015291F" }}
    >
      <button className="flex items-center">
        <img src={Search} alt="Search icon" />
      </button>
      <button className="flex items-center cursor-pointer" onClick={toggleDropdown}>
  <img 
    src={notifications.some(notification => !notification.read) ? NotificationOn : Notification} 
    alt="Notification icon" 
  />
</button>
      {showDropdown && (
        <div className="absolute right-6 top-[7vh] w-[40vw] h-[60vh] bg-[#F2F9FA] border rounded shadow-lg p-4 z-10 overflow-y-auto">

          <div className="flex flex-col gap-2 px-3">
            <div className="flex flex-row justify-between font-montserrat">
              <div className="font-bold">Notifications</div>
              <div className="underline text-[12px] cursor-pointer" onClick={markAllAsRead}>
                Mark all as read
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-5 font-roboto text-[12px]">
              <div
                onClick={() => handleFilterChange("all")}
                className={`cursor-pointer ${activeFilter === "all" ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
              >
                All
              </div>
              <div
                onClick={() => handleFilterChange("unread")}
                className={`cursor-pointer ${activeFilter === "unread" ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
              >
                Unread
              </div>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="flex flex-col gap-2 font-poppins">
              {getFilteredNotifications().map((notification) => (
                <div
                  key={notification.id}
                  className={`p-2 rounded ${notification.read ? "bg-white" : "bg-[#D7F0FF]"}`}
                >
                  <div className="flex flex-row justify-between">
                    <div>
                      <div className="font-medium">{notification.title}</div>
                      <div className="text-[12px] text-gray-500">{notification.content}</div>
                    </div>
                    <div className="text-[8px] text-gray-500 text-nowrap">
  {new Date(notification.date).toDateString() === new Date().toDateString()
    ? notification.time // Show only the time if it's today's date
    : notification.date // Otherwise, show the full date without time
  }
</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showProfil && (
        <div className="absolute right-6 top-[7vh] w-[40vw] bg-[#F2F9FA] border rounded shadow-lg p-4 z-10">
          <div className="flex flex-col gap-2 px-3">
            <div className="flex flex-row justify-between">
              <div className="font-semibold">Profil</div>
              <img
                src="../../../public/assests/x_icon.svg"
                alt=""
                className="h-3 cursor-pointer rounded-sm bg-white border border-black"
                onClick={toggleProfil}
              />
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
           {/* Profil picture row */}
<div className="flex flex-row items-center gap-5">
  <div className="relative mb-4">
    {/* Circular Profile Picture */}
    <img
      src={selectedImage || '../../../public/assests/profile_user.svg'} // Placeholder image if no picture is uploaded
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
            <Input placeholder="first name" value={user?.first_name || ""} className="rounded-sm" />
            <div className="text-sm">Last name</div>
            <Input placeholder="last name" value={user?.last_name || ""} className="rounded-sm"/>
            <div className="text-sm">Email</div>
            <Input placeholder="email" disabled value={user?.email || ""} className="rounded-sm"/>
            <div className="text-sm">Role</div>
            <Input placeholder="role" disabled value={roleName} className="rounded-sm"/>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-center items-center gap-1 cursor-pointer" onClick={toggleProfil}>

        <img src={selectedImage || '../../../public/assests/profile_user.svg'} alt="user photo" className="rounded-full w-[25px] h-[25px] "/>
        <div>{user?.first_name}</div>

      </div>
      <button className="flex items-center">
        <img src={Language} alt="language icon" />
      </button>
    </nav>
  );
};

export default NavbarDash;

