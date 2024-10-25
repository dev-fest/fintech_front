import React from 'react';
import { Link } from 'react-router-dom';
import DashboardOIcon from '../../../public/assests/dashbooard_icon.svg';
import ProjectIcon from '../../../public/assests/project.svg';
import UserIcon from '../../../public/assests/userr.svg';
import logo from '../../../public/assests/logo.svg';

const Sidebar = ({ activeContent, setActiveContent }) => {
  return (
    <div className="w-56 h-full bg-[#001529] text-white fixed flex flex-col font-poppins"
    style={{ boxShadow: '2.21px 0px 6.64px 0px #00152959' }} // Inline style for box shadow
>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="logo" className='h-8 mt-3' />
      </div>
      <ul className="flex flex-col mt-6">
        <li 
          className={`hover:bg-gray-700 ${activeContent === 'dashboard' ? 'opacity-100' : 'opacity-60'}`} 
          onClick={() => setActiveContent('dashboard')}
        >
          <div className="p-4 block flex flex-row items-center gap-2 cursor-pointer"> {/* Added cursor-pointer here */}
            <img src={DashboardOIcon} alt="dashboard icon" />
            <div>Dashboard</div>
          </div>
        </li>
        <li 
          className={`hover:bg-gray-700 ${activeContent === 'users' ? 'opacity-100' : 'opacity-60'}`} 
          onClick={() => setActiveContent('users')}
        >
          <div className="p-4 block flex flex-row items-center gap-2 cursor-pointer"> {/* Added cursor-pointer here */}
            <img src={UserIcon} alt="user icon" />
            <div>Users</div>
          </div>
        </li>
        <li 
          className={`hover:bg-gray-700 ${activeContent === 'projects' ? 'opacity-100' : 'opacity-60'}`} 
          onClick={() => setActiveContent('projects')}
        >
          <div className="p-4 block flex flex-row items-center gap-2 cursor-pointer"> {/* Added cursor-pointer here */}
            <img src={ProjectIcon} alt="projects icon" />
            <div>Projects</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
