import React, { useState } from "react";
import { Anchor } from "antd";
import useAuthStore from "../store/useAuthStore";
import useUserStore from "../store/useUsersStore"; // Import your custom hook
import GenericTable from "../components/Dashboard/GenericTable.jsx"; // Import the new GenericTable component

const { Link } = Anchor;

const Metrics = () => {
  const { signup } = useAuthStore();
  const { fetchUsers, users, deleteUser, updateUser } = useUserStore();
  const [activeSection, setActiveSection] = useState("cashflow");

  // Define column configurations for each table
  const tablesConfig = {
    cashflow : {
        columns: [
          { title: "Date", dataIndex: "date", key: "date" },
          { title: "Cash Inflow", dataIndex: "cash_inflow", key: "cash_inflow" },
          { title: "Cash Outflow", dataIndex: "cash_outflow", key: "cash_outflow" },
          { title: "Net Cash Flow", dataIndex: "net_cash_flow", key: "net_cash_flow" },
          { title: "Description", dataIndex: "description", key: "description" },
          { title: "Category", dataIndex: "category", key: "category" },
        ],
        data: [
          { id: 1, date: "2024-09-01", cash_inflow: 50000, cash_outflow: 20000, net_cash_flow: 30000, description: "Monthly revenue and operational costs", category: "operational" },
          { id: 2, date: "2024-09-08", cash_inflow: 20000, cash_outflow: 15000, net_cash_flow: 5000, description: "Product sales and marketing expense", category: "operational" },
          { id: 3, date: "2024-09-15", cash_inflow: 30000, cash_outflow: 18000, net_cash_flow: 12000, description: "Sales and office rent", category: "operational" },
          { id: 4, date: "2024-09-22", cash_inflow: 45000, cash_outflow: 10000, net_cash_flow: 35000, description: "Consulting services and inventory purchase", category: "investment" },
          { id: 5, date: "2024-09-30", cash_inflow: 35000, cash_outflow: 22000, net_cash_flow: 13000, description: "Monthly closing, salary payments", category: "operational" },
          { id: 6, date: "2024-08-01", cash_inflow: 60000, cash_outflow: 25000, net_cash_flow: 35000, description: "August sales and operational costs", category: "operational" },
          { id: 7, date: "2024-08-15", cash_inflow: 40000, cash_outflow: 15000, net_cash_flow: 25000, description: "Product launch revenue and expenses", category: "operational" },
          { id: 8, date: "2024-08-30", cash_inflow: 30000, cash_outflow: 12000, net_cash_flow: 18000, description: "End of month review and expenses", category: "operational" },
          { id: 9, date: "2024-07-01", cash_inflow: 55000, cash_outflow: 20000, net_cash_flow: 35000, description: "July revenue and operational costs", category: "operational" },
          { id: 10, date: "2024-07-15", cash_inflow: 45000, cash_outflow: 17000, net_cash_flow: 28000, description: "Sales and marketing expenses", category: "operational" },
          { id: 11, date: "2024-10-20", cash_inflow: 45000, cash_outflow: 23000, net_cash_flow: 22000, description: "Sales and marketing expenses", category: "operational" },
        ],
      },
    expenses: {
      columns: [
        { title: "Expense Type", dataIndex: "type", key: "type" },
        { title: "Amount", dataIndex: "amount", key: "amount" },
        { title: "Date", dataIndex: "date", key: "date" },
      ],
      data: [
        { id: 1, type: "Office Supplies", amount: 200, date: "2023-01-01" },
        { id: 2, type: "Utilities", amount: 150, date: "2023-01-02" },
        { id: 3, type: "Rent", amount: 1200, date: "2023-01-03" },
      ],
    },
    revenue: {
      columns: [
        { title: "Source", dataIndex: "source", key: "source" },
        { title: "Amount", dataIndex: "amount", key: "amount" },
        { title: "Date", dataIndex: "date", key: "date" },
      ],
      data: [
        { id: 1, source: "Product Sales", amount: 3000, date: "2023-01-01" },
        { id: 2, source: "Service Fees", amount: 1200, date: "2023-01-02" },
        { id: 3, source: "Investments", amount: 500, date: "2023-01-03" },
      ],
    },
    profit: {
      columns: [
        { title: "Period", dataIndex: "period", key: "period" },
        { title: "Revenue", dataIndex: "revenue", key: "revenue" },
        { title: "Expenses", dataIndex: "expenses", key: "expenses" },
        { title: "Profit", dataIndex: "profit", key: "profit" },
      ],
      data: [
        { id: 1, period: "Q1 2023", revenue: 3000, expenses: 2000, profit: 1000 },
        { id: 2, period: "Q2 2023", revenue: 4000, expenses: 2500, profit: 1500 },
      ],
    },
    budget: {
      columns: [
        { title: "Category", dataIndex: "category", key: "category" },
        { title: "Allocated Amount", dataIndex: "allocated", key: "allocated" },
        { title: "Spent Amount", dataIndex: "spent", key: "spent" },
        { title: "Remaining Amount", dataIndex: "remaining", key: "remaining" },
      ],
      data: [
        { id: 1, category: "Marketing", allocated: 1000, spent: 800, remaining: 200 },
        { id: 2, category: "Development", allocated: 5000, spent: 3000, remaining: 2000 },
      ],
    },
    debt: {
      columns: [
        { title: "Creditor", dataIndex: "creditor", key: "creditor" },
        { title: "Amount Owed", dataIndex: "amountOwed", key: "amountOwed" },
        { title: "Due Date", dataIndex: "dueDate", key: "dueDate" },
      ],
      data: [
        { id: 1, creditor: "Bank A", amountOwed: 5000, dueDate: "2024-01-01" },
        { id: 2, creditor: "Supplier B", amountOwed: 3000, dueDate: "2023-12-01" },
      ],
    },
    investments: {
      columns: [
        { title: "Investment Type", dataIndex: "type", key: "type" },
        { title: "Amount Invested", dataIndex: "amountInvested", key: "amountInvested" },
        { title: "Current Value", dataIndex: "currentValue", key: "currentValue" },
      ],
      data: [
        { id: 1, type: "Real Estate", amountInvested: 10000, currentValue: 15000 },
        { id: 2, type: "Stocks", amountInvested: 5000, currentValue: 7000 },
      ],
    },
    funding: {
      columns: [
        { title: "Source", dataIndex: "source", key: "source" },
        { title: "Amount", dataIndex: "amount", key: "amount" },
        { title: "Date Received", dataIndex: "dateReceived", key: "dateReceived" },
      ],
      data: [
        { id: 1, source: "Investor X", amount: 20000, dateReceived: "2023-01-01" },
        { id: 2, source: "Grant Y", amount: 10000, dateReceived: "2023-02-01" },
      ],
    },
  };

  const renderSection = () => {
    const tableConfig = tablesConfig[activeSection] || tablesConfig.cashflow;
    return <GenericTable columns={tableConfig.columns} data={tableConfig.data} />;
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
