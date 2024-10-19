import React from 'react';
import HeroSection from '../components/Landing/HeroSection';
import NavBar from '../components/Landing/NavBar';
import ServicesSection from '../components/Landing/ServicesSection';
import Faq from '../components/Landing/Faq';
import Footer from '../components/Landing/Footer';

export const LandingPage = () => {
  return (
    <div className='bg-slate-400 h-[100vh] flex-grow'>
        <NavBar></NavBar>
      <HeroSection />
      <ServicesSection></ServicesSection>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default LandingPage;