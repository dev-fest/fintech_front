// ExpensesTable.js
import React from "react";
import { Table } from "antd";

// Define your expenses data as an array of objects
const expensesData = [
  {
    key: 1,
    id: 1,
    date: '2024-09-01',
    amount: 5000,
    expense_category: 'rent',
    department: 'operations',
    description: 'Office rent for September',
  },
  {
    key: 2,
    id: 2,
    date: '2024-09-01',
    amount: 8000,
    expense_category: 'salaries',
    department: 'HR',
    description: 'Employee salaries for September',
  },
  {
    key: 3,
    id: 3,
    date: '2024-09-08',
    amount: 3000,
    expense_category: 'marketing',
    department: 'marketing',
    description: 'Online ad campaign',
  },
  {
    key: 4,
    id: 4,
    date: '2024-09-15',
    amount: 2000,
    expense_category: 'supplies',
    department: 'operations',
    description: 'Office supplies purchase',
  },
  {
    key: 5,
    id: 5,
    date: '2024-09-22',
    amount: 10000,
    expense_category: 'inventory',
    department: 'operations',
    description: 'Inventory purchase for Q4',
  },
  {
    key: 6,
    id: 6,
    date: '2024-08-01',
    amount: 7000,
    expense_category: 'rent',
    department: 'operations',
    description: 'Office rent for August',
  },
  {
    key: 7,
    id: 7,
    date: '2024-08-01',
    amount: 9000,
    expense_category: 'salaries',
    department: 'HR',
    description: 'Employee salaries for August',
  },
  {
    key: 8,
    id: 8,
    date: '2024-08-15',
    amount: 4000,
    expense_category: 'marketing',
    department: 'marketing',
    description: 'Digital marketing expenses',
  },
  {
    key: 9,
    id: 9,
    date: '2024-08-30',
    amount: 3000,
    expense_category: 'supplies',
    department: 'operations',
    description: 'Supplies purchase for the month',
  },
  {
    key: 10,
    id: 10,
    date: '2024-07-01',
    amount: 6000,
    expense_category: 'rent',
    department: 'operations',
    description: 'Office rent for July',
  },
  {
    key: 11,
    id: 11,
    date: '2024-10-08',
    amount: 3000,
    expense_category: 'marketing',
    department: 'marketing',
    description: 'Online ad campaign',
  },
];

// Define your column structure for the Expenses Table
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
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Expense Category",
    dataIndex: "expense_category",
    key: "expense_category",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

function ExpensesTable() {
  return (
    <div>
      <h2>Expenses Table</h2>
      <Table columns={columns} dataSource={expensesData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default ExpensesTable;
