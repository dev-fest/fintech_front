import React from "react";
import { Card, Button } from "antd"; // Import Card and Button from Ant Design

const Offers = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$15/mo",
      audience:
        "Startups and small businesses looking for essential financial management tools.",
      features: [
        "Basic customer support ",
        "Basic expense tracking system",
        "Basic customer support ",
      ],
    },
    {
      title: "Professional Plan",
      price: "$40/mo",
      audience:
        "Growing businesses that require more advanced features for comprehensive financial management.",
      features: [
        "All features from the Basic Plan",
        "Enhanced real-time dashboard ",
        "Advanced expense tracking ",
      ],
    },
    {
      title: "Premium Plan",
      price: "$75/mo",
      audience:
        "Established businesses seeking advanced financial management tools and insights.",
      features: [
        "All features from the Professional",
        "Unlimited data storage ",
        "Access for custom integrations",
      ],
    },
  ];

  return (
    <div
      className="offers-container bg-effect-background bg-cover bg-center bg-[#F2F9FA]"
      style={{ padding: "50px", textAlign: "center" }}
    >
      <div className="font-bold text-6xl flex flex-col items-center font-montserrat text-transparent bg-clip-text bg-gradient-to-t to-blue-500 from-indigo-500 mt-7">
        <p>Our offers</p>
      </div>
      <p>
        Here are three subscription plan options for your fintech platform, each
        with distinct features and benefits:
      </p>

      <div className="flex flex-row justify-around">
        {plans.map((plan, index) => (
          <div
            key={index}
            bordered={true}
            style={{ width: 300, margin: "20px" }}
            className="font-poppins shadow-sm flex flex-col gap-5 justify-between border-transparent border bg-white px-7 py-9 rounded-[20px] hover:bg-[#E8F7FF] hover:border-blue-500 "
          >
            <div>
              <h1 className=" font-poppins  text-[20px]">{plan.title}</h1>
              <h3 className=" font-montserrat font-bold text-[36px] ">
                {plan.price}
              </h3>
            </div>
            <p className="font-poppins text-[12px] text-justify text-[#5D5D5D]">
              {plan.audience}
            </p>

            <div>
              {plan.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-row items-center justify-start w-full gap-2 mx-2 text-[#5D5D5D]"
                >
                  <div className="w-4 h-4 ">
                    <img
                      src="../../../public/assests/check.svg"
                      alt="check"
                      className="w-3.5 h-3.5"
                    />
                  </div>
                  <div className="flex-row justify-start text-[12px] ">
                    {feature}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="px-14 py-3 text-white font-poppins rounded-[10px] font-bold"
              style={{
                background:
                  "linear-gradient(180deg, #0073FC 0%, #556AFE 82.3%, #8266FF 100%)",
              }}
              onClick={() => (window.location.href = "/register")}
            >
              Sign Up
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
