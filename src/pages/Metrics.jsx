import React, { useState } from "react";
import {
  Input,
  Anchor,
} from "antd";
import useAuthStore from "../store/useAuthStore";
import useUserStore from "../store/useUsersStore"; // Import your custom hook
import CashFlowTable from "../components/Dashboard/CashFlowTable";
import ExpensesTable from "../components/Dashboard/Expenses";
import RevenueTable from "../components/Dashboard/RevenueTable";
import BudgetTable from "../components/Dashboard/BudgetTable";
import DebtTable from "../components/Dashboard/DebtTable";
import InvestmentsTable from "../components/Dashboard/InvestmentsTable";
import FundingTable from "../components/Dashboard/FundingTable";

const { Link } = Anchor;

const Metrics = () => {
  const { signup } = useAuthStore();
  const { fetchUsers, users, deleteUser, updateUser } = useUserStore();
  const [activeSection, setActiveSection] = useState("cashflow");

  const renderSection = () => {
    switch (activeSection) {
      case "cashflow":
        return <CashFlowTable />;
      case "expenses":
        return <ExpensesTable />;
      case "revenue":
        return <RevenueTable/>;
      case "profit":
        return <div>Profit Component</div>;
      case "budget":
        return <BudgetTable/>;
      case "debt":
        return <DebtTable/>;
      case "investments":
        return <InvestmentsTable/>;
      case "funding":
        return <FundingTable/>;
      default:
        return <CashFlowTable />;
    }
  };

  const handleAnchorChange = (href) => {
    setActiveSection(href);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-white mx-1 my-2 px-6">
        <h1 className="text-2xl font-bold font-poppins mt-4">Metrics</h1>
        <Anchor
          direction="horizontal"
          affix={false}
          onClick={(e, { href }) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleAnchorChange(href.slice(1)); // Remove '#' from href
          }}
          activeLink={`#${activeSection}`} // Update to reflect the current active section
        >
          <Link href="#cashflow" title="CashFlow" />
          <Link href="#expenses" title="Expenses" />
          <Link href="#revenue" title="Revenue" />
          <Link href="#profit" title="Profit" />
          <Link href="#budget" title="Budget" />
          <Link href="#debt" title="Debt" />
          <Link href="#investments" title="Investments" />
          <Link href="#funding" title="Funding" />
        </Anchor>
      </div>

      {/* Render the section based on activeSection */}
      <div className="px-6 py-2">
      {renderSection()}
      </div>
    </div>
  );
};

export default Metrics;
