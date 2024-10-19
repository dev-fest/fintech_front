import React from "react";
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/register'); // Change '/register' to your actual register route
    };

  return (
    <div className="flex flex-col justify-center items-center bg-[#001529] h-full bg-effect-background bg-cover bg-center">
      <div className=" font-bold text-6xl flex flex-col items-center text-white mb-11 font-montserrat ">
        <p>Empowering Businesses with</p>
        <p>Real-Time Financial Insights</p>
      </div>
      <div className="font-light text-2xl text-white mb-11 text-justify font-montserrat ">
        <p>
          real-time data, streamlined expense tracking, and automated <br />
          reporting. Ready to shape the future of financial management?
        </p>
      </div>
      <button
        className="px-10 py-1 text-white font-poppins rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, #0073FC 0%, #556AFE 82.3%, #8266FF 100%)",
        }}
        onClick={handleNavigate}

      >
        Get Started

      </button>{" "}
    </div>
  );
};
export default HeroSection;
