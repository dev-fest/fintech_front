// FinancialCard.jsx
import React from "react";

const FinancialCard = ({ title, description, onButtonClick }) => {
  return (
    <div className="flex flex-col justify-between flex-grow px-7 py-11 rounded-2xl bg-[linear-gradient(180deg,_#0073FC_0%,_#556AFE_82.3%,_#8266FF_100%)] text-white">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-justify text-sm font-normal">{description}</p>
      <button
        className="flex p-3 bg-[#A6DBFF] w-max border-solid border-gray-200 rounded"
        style={{ borderWidth: '0.3px 0.3px 1px 1px' }}
        onClick={onButtonClick}
      >
        <img src="../../../public/assests/arrow_right.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default FinancialCard;