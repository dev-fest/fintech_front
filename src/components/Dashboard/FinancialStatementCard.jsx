// FinancialStatementCard.jsx
import React from 'react';

const FinancialStatementCard = ({ title, description, imgSrc, buttonText, onClick }) => {
  return (
    <div className="flex flex-col items-start h-min w-full bg-white p-8 gap-2">
      <img
        src={imgSrc}
        alt={title}
        className="h-[70px]"
      />
      <div className="text-[20px] font-semibold">
        {title}
      </div>
      <div className="text-[16px] font-light text-justify my-4">
        {description}
      </div>
      <button className="bg-blue-500 px-2 py-1" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default FinancialStatementCard;
