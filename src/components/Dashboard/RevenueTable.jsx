// RevenueTable.js
import React from "react";
import { Table } from "antd";

const revenueData = [
  { id: 1, date: "2024-09-01", amount: 40000, product_line: "Product A", customer_type: "new", description: "Sales of Product A to new customers" },
  { id: 2, date: "2024-09-08", amount: 20000, product_line: "Product B", customer_type: "returning", description: "Sales of Product B to returning customers" },
  { id: 3, date: "2024-09-15", amount: 30000, product_line: "Product C", customer_type: "new", description: "Launch sales of Product C" },
  { id: 4, date: "2024-09-22", amount: 15000, product_line: "Service A", customer_type: "new", description: "Consulting services for new clients" },
  { id: 5, date: "2024-09-30", amount: 25000, product_line: "Product A", customer_type: "returning", description: "Sales of Product A to returning customers" },
  { id: 6, date: "2024-08-01", amount: 60000, product_line: "Product D", customer_type: "new", description: "Sales of Product D to new customers" },
  { id: 7, date: "2024-08-15", amount: 45000, product_line: "Service B", customer_type: "returning", description: "Recurring services for returning clients" },
  { id: 8, date: "2024-08-30", amount: 50000, product_line: "Product E", customer_type: "new", description: "Sales of Product E during promotion" },
  { id: 9, date: "2024-07-01", amount: 55000, product_line: "Product F", customer_type: "new", description: "Sales of Product F to new customers" },
  { id: 10, date: "2024-07-15", amount: 40000, product_line: "Product G", customer_type: "returning", description: "Sales of Product G to returning customers" },
];

const RevenueTable = () => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Product Line", dataIndex: "product_line", key: "product_line" },
    { title: "Customer Type", dataIndex: "customer_type", key: "customer_type" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  return (
    <div>
      <h2>Revenue Table</h2>
      <Table dataSource={revenueData} columns={columns} rowKey="id" />
    </div>
  );
};

export default RevenueTable;
