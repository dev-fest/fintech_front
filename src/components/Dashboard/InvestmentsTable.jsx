// InvestmentsTable.js
import React from "react";
import { Table } from "antd";

const investmentsData = [
  { key: 1, id: 1, investment_type: 'stock', investment_amount: 20000, investment_date: '2024-01-15', returns: 2500, risk_level: 'medium', current_value: 22500, description: 'Stock purchase in January 2024' },
  { key: 2, id: 2, investment_type: 'venture capital', investment_amount: 50000, investment_date: '2024-03-10', returns: 8000, risk_level: 'high', current_value: 58000, description: 'VC investment in tech startup' },
  { key: 3, id: 3, investment_type: 'real estate', investment_amount: 100000, investment_date: '2023-07-25', returns: 15000, risk_level: 'low', current_value: 115000, description: 'Investment in commercial real estate property' },
  { key: 4, id: 4, investment_type: 'bonds', investment_amount: 30000, investment_date: '2023-11-10', returns: 1200, risk_level: 'low', current_value: 31200, description: 'Government bonds purchase for long-term returns' },
  { key: 5, id: 5, investment_type: 'cryptocurrency', investment_amount: 15000, investment_date: '2024-02-05', returns: -2000, risk_level: 'high', current_value: 13000, description: 'Cryptocurrency investment with volatility' },
  { key: 6, id: 6, investment_type: 'mutual funds', investment_amount: 25000, investment_date: '2023-09-15', returns: 3000, risk_level: 'medium', current_value: 28000, description: 'Investment in diversified mutual funds' },
  { key: 7, id: 7, investment_type: 'private equity', investment_amount: 75000, investment_date: '2023-12-20', returns: 20000, risk_level: 'high', current_value: 95000, description: 'Private equity in a growing company' },
  { key: 8, id: 8, investment_type: 'stock', investment_amount: 40000, investment_date: '2024-05-01', returns: 5000, risk_level: 'medium', current_value: 45000, description: 'Additional stock investments in tech companies' },
  { key: 9, id: 9, investment_type: 'venture capital', investment_amount: 120000, investment_date: '2024-08-01', returns: 25000, risk_level: 'high', current_value: 145000, description: 'VC investment in healthcare startup' },
  { key: 10, id: 10, investment_type: 'commodities', investment_amount: 20000, investment_date: '2024-04-10', returns: 1000, risk_level: 'medium', current_value: 21000, description: 'Commodities investment in gold and silver' },
];

const investmentsColumns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Investment Type", dataIndex: "investment_type", key: "investment_type" },
  { title: "Investment Amount", dataIndex: "investment_amount", key: "investment_amount" },
  { title: "Investment Date", dataIndex: "investment_date", key: "investment_date" },
  { title: "Returns", dataIndex: "returns", key: "returns" },
  { title: "Risk Level", dataIndex: "risk_level", key: "risk_level" },
  { title: "Current Value", dataIndex: "current_value", key: "current_value" },
  { title: "Description", dataIndex: "description", key: "description" },
];

function InvestmentsTable() {
  return (
    <div>
      <h2>Investments Table</h2>
      <Table columns={investmentsColumns} dataSource={investmentsData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default InvestmentsTable;
