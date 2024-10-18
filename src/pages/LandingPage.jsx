import React from 'react';
import HeroSection from '../components/Landing/HeroSection';
import NavBar from '../components/Landing/NavBar';

export const LandingPage = () => {
  return (
    <div className='bg-slate-400 h-[100vh] flex-grow'>
        <NavBar></NavBar>
      <HeroSection />
    </div>
  );
};

export default LandingPage;