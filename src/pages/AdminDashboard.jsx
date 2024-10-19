import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import NavbarDash from '../components/Dashboard/NavbarDashboard';
import Dashboard from './Dashboard';
import Users from './Users';
import Projects from './Projects';

const AdminPage = () => {
  const [activeContent, setActiveContent] = useState('dashboard'); // Default active content

  // Function to render the active content
  const renderActiveContent = () => {
    switch (activeContent) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'projects':
        return <Projects />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex color">
      <Sidebar activeContent={activeContent} setActiveContent={setActiveContent} />
      <div className="flex-1 pl-56 h-screen overflow-auto"> {/* Adjust margin for sidebar */}
        <NavbarDash />
        <div className='bg-[#F2F9FA] flex-grow h-full'>
        {renderActiveContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
