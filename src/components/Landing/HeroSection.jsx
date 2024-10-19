import React from "react";
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/register'); // Change '/register' to your actual register route
    };

    return (
        <div className="flex flex-col md:justify-center items-center bg-[#001529] h-full bg-effect-background bg-cover bg-center">
            <div className="font-bold  mt-[20vh] md:mt-0 md:text-6xl text-xl sm:text-4xl flex flex-col items-center text-white mb-2 md:mb-11 font-montserrat">
                <div>Empowering Businesses with</div>
                <div>Real-Time Financial Insights</div>
            </div>
            <div className="font-light  md:text-2xl text-sm sm:text-lg text-white mb-11 text-justify font-montserrat px-6">
                <p>
                    real-time data, streamlined expense tracking, and automated <br />
                    reporting. Ready to shape the future of financial management?
                </p>
            </div>
            <button
                className="px-10 py-3 text-white font-poppins rounded-2xl"
                style={{
                    background: "linear-gradient(180deg, #0073FC 0%, #556AFE 82.3%, #8266FF 100%)",
                }}
                onClick={handleNavigate}
            >
                Get Started
            </button>
        </div>
    );
};

export default HeroSection;
