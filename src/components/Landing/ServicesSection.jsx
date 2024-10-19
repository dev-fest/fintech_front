import React from "react";
import FinancialCard from "./FinancialCard";

const ServicesSection = () => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
        // Add your button functionality here
      };
  return (
    <div className="flex flex-col font-montserrat items-center bg-[#F2F9FA] min-h-full bg-effect-background bg-cover bg-center">
      <div className="font-bold  text-4xl md:text-6xl flex flex-col items-center  font-montserrat text-transparent bg-clip-text bg-gradient-to-t to-blue-500  from-indigo-500 mt-5">
        <p>Our Services</p>
      </div>
      <div className="font-light text-sm px-3 md:text-2xl text-black  text-justify font-montserrat ">
        <p>
          Explore the key features that drive smarter financial management for
          your business
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-stretch w-[90%] h-min md:mb-20" >
  <FinancialCard
    title="Real-Time Financial Dashboard"
    description="Track key financial metrics such as cash flow, expenses, and revenue with live updates, providing a clear view of your business's financial health."
    onButtonClick={handleButtonClick}
  />
  <FinancialCard
    title="Expense Tracking"
    description="Easily log and categorize company expenses, offering a detailed overview of spending patterns and helping you stay on top of your financial performance."
    onButtonClick={handleButtonClick}
  />
  <FinancialCard
    title="Automated Financial Reporting"
    description="Generate comprehensive financial reports, including income statements, balance sheets, and cash flow reports, with multiple export formats like PDF, Excel, and CSV."
    onButtonClick={handleButtonClick}
  />
  <FinancialCard
    title="Expense Insights & Recommendations"
    description="Leverage AI-powered insights and predictive analytics to optimize budgeting, forecast expenses, and make proactive financial decisions."
    onButtonClick={handleButtonClick}
  />
</div>
    </div>
  );
};

export default ServicesSection;
