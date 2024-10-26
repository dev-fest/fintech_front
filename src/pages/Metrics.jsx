import React, { useState, useEffect } from "react";
import { Anchor } from "antd";
import useAuthStore from "../store/useAuthStore";
import useUserStore from "../store/useUsersStore"; // Import your custom hook
import GenericTable from "../components/Dashboard/GenericTable.jsx"; 
import useExpenseStore from "../store/useExpensesStore.js"
import useRevenueStore from "../store/useRevenueStore.js";
import useProfiteStore from "../store/useProfitStore.js";
import useBudgetStore from "../store/useBudgetStore.js";
import useCashStore from "../store/useCashStore.js";
import useDebtStore from "../store/useDebtStore.js";
import useFundingStore from "../store/useFundingStore.js";

const { Link } = Anchor;

const Metrics = () => {
  const { signup } = useAuthStore();
  const { fetchUsers, users, deleteUser, updateUser } = useUserStore();
  const { fetchExpenses, expenses, isLoading: loadingExpenses, error: errorExpenses } = useExpenseStore();
  const { fetchRevenues, revenues, isLoading: loadingRevenues, error: errorRevenues } = useRevenueStore();
  const { fetchProfites, profites, isLoading: loadingProfites, error: errorProfites } = useProfiteStore();
  const { fetchBudgets, budgets, isLoading: loadingBudgets, error: errorBudgets } = useBudgetStore();
  const { fetchDebts, debts, isLoading: loadingDebts, error: errorDebts } = useDebtStore();
  const { fetchCashs, cashs, isLoading: loadingCashs, error: errorCashs } = useCashStore();
  const { fetchFundings, fundings, isLoading: loadingFundings, error: errorFundings } = useFundingStore();
  const [activeSection, setActiveSection] = useState("cashflow");

  // Fetch expenses on component mount
  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  useEffect(() => {
    fetchRevenues();
  }, [fetchRevenues]);

  useEffect(() => {
    fetchProfites();
  }, [fetchProfites]);

  useEffect(() => {
    fetchBudgets();
  }, [fetchBudgets]);

  useEffect(() => {
    fetchCashs();
  }, [fetchCashs]);

  useEffect(() => {
    fetchDebts();
  }, [fetchDebts]);


  useEffect(() => {
    fetchFundings();
  }, [fetchFundings]);



  // Define column configurations for each table
  const tablesConfig = {
    cashflow : {
      columns: [
        { title: "Category", dataIndex: "category", key: "category" },
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "Cash inflow", dataIndex: "cash_inflow", key: "cash_inflow" },
        { title: "Cash outflow", dataIndex: "cash_outflow", key: "cash_outflow" },
        { title: "New Cash Flow", dataIndex: "net_cash_flow", key: "net_cash_flow" },
      ],
      data: cashs || [], // Use the fetched revenue data
      },
      expenses: {
        columns: [
          { title: "Amount", dataIndex: "amount", key: "amount" },
          { title: "Date", dataIndex: "date", key: "date" },
          { title: "Description", dataIndex: "description", key: "description" },
          { title: "Project ID", dataIndex: "project_id", key: "project_id" }, 
        ],
        data: expenses, 
      },
  
      revenue: {
        columns: [
          { title: "Amount", dataIndex: "amount", key: "amount" },
          { title: "Date", dataIndex: "date", key: "date" },
          { title: "Description", dataIndex: "description", key: "description" },
          { title: "Project ID", dataIndex: "project_id", key: "project_id" },
        ],
        data: revenues || [], // Use the fetched revenue data
      },
    profit: {
      columns: [
        { title: "Revenue", dataIndex: "revenue", key: "revenue" },
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "Expenses", dataIndex: "expenses", key: "expenses" },
        { title: "Net Profit", dataIndex: "net_profit", key: "net_profit" },
        { title: "Profit margin", dataIndex: "profit_margin", key: "profit_margin" },
      ],
      data: profites || [], // Use the fetched revenue data
    },
    budget: {
      columns: [
        { title: "Amount", dataIndex: "amount", key: "amount" },
        { title: "Date start", dataIndex: "start_date", key: "date" },
        { title: "Date end", dataIndex: "end_date", key: "date" },
        { title: "Project ID", dataIndex: "project_id", key: "project_id" },
      ],
      data: budgets || [], // Use the fetched revenue data
    },
    debt: {
      columns: [
        { title: "Det type", dataIndex: "debt_type", key: "debt_type" },
        { title: "amount paid", dataIndex: "amount_paid", key: "amount_paid" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "interest rate", dataIndex: "interest_rate", key: "interest_rate" },
        { title: "maturity date", dataIndex: "maturity_date", key: "maturity_date" },
        { title: "principal", dataIndex: "principal", key: "principal" },
        { title: "payment due date", dataIndex: "payment_due_date", key: "payment_due_date" },
        { title: "outstanding balance", dataIndex: "outstanding_balance", key: "outstanding_balance" },
      ],
      data: debts || [], // Use the fetched revenue data
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
        { title: "Amount Raised", dataIndex: "amount_raised", key: "amount_raised" },
        { title: "Funding Round", dataIndex: "funding_round", key: "funding_round" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Investor Name", dataIndex: "investor_name", key: "investor_name" },
        { title: "Valuation", dataIndex: "valuation", key: "valuation" },
      ],
      data: fundings || [],
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
