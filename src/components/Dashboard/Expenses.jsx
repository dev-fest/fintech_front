import React, { useEffect } from "react";
import { Table } from "antd";
import useExpenseStore from "./path/to/your/store"; // Adjust the import path accordingly

const columns = [
  {
    title: "ID",
    dataIndex: "_id", // Use the correct key from the fetched data
    key: "_id",
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
    dataIndex: "category_id", // Use the correct key from the fetched data
    key: "category_id",
  },
  {
    title: "Created By",
    dataIndex: "created_by", // Use the correct key from the fetched data
    key: "created_by",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

function ExpensesTable() {
  const { Expenses, fetchExpenses, isLoading, error } = useExpenseStore();

  useEffect(() => {
    fetchExpenses(); // Fetch expenses when the component mounts
  }, [fetchExpenses]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Expenses Table</h2>
      <Table columns={columns} dataSource={Expenses} pagination={{ pageSize: 5 }} rowKey="_id" />
    </div>
  );
}

export default ExpensesTable;
