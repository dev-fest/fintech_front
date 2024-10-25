// CashFlowTable.js
import React from "react";
import { Table } from "antd";

// Define your data as an array of objects
const cashFlowData = [
  {
    key: 1,  // Ant Design requires a 'key' attribute in each row for performance optimization
    id: 1,
    date: "2024-09-01",
    cash_inflow: 50000,
    cash_outflow: 20000,
    net_cash_flow: 30000,
    description: "Monthly revenue and operational costs",
    category: "operational"
  },
  {
    key: 2,
    id: 2,
    date: "2024-09-08",
    cash_inflow: 20000,
    cash_outflow: 15000,
    net_cash_flow: 5000,
    description: "Product sales and marketing expense",
    category: "operational"
  },
  // Add more rows as needed
];

// Define your column structure
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Cash Inflow",
    dataIndex: "cash_inflow",
    key: "cash_inflow",
  },
  {
    title: "Cash Outflow",
    dataIndex: "cash_outflow",
    key: "cash_outflow",
  },
  {
    title: "Net Cash Flow",
    dataIndex: "net_cash_flow",
    key: "net_cash_flow",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
];

function CashFlowTable() {
  return (
    <div>
      <h2>Cash Flow Table</h2>
      <Table columns={columns} dataSource={cashFlowData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default CashFlowTable;
