import React, { useRef } from 'react';
import HeroSection from '../components/Landing/HeroSection';
import NavBar from '../components/Landing/NavBar';
import ServicesSection from '../components/Landing/ServicesSection';
import Faq from '../components/Landing/Faq';
import Footer from '../components/Landing/Footer';
import Offers from '../components/Landing/Offers';
import ChatBot from '../components/Dashboard/ChatBot';
export const LandingPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const footerRef = useRef(null);
  const offersRef = useRef(null);

  return (
    <div className='bg-slate-400 h-[100vh] flex-grow'>
      <NavBar 
        heroRef={heroRef} 
        servicesRef={servicesRef} 
        faqRef={faqRef} 
        footerRef={footerRef} 
      />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <div ref={offersRef}>
        <Offers/>
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      <ChatBot/>
    </div>
  );
};

export default LandingPage;
