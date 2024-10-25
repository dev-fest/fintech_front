// BudgetTable.js
import React from "react";
import { Table } from "antd";

const budgetData = [
  { key: 1, id: 1, category: 'Marketing', budget_amount: 20000, spent_amount: 15000, remaining_amount: 5000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'Annual marketing budget' },
  { key: 2, id: 2, category: 'Development', budget_amount: 50000, spent_amount: 30000, remaining_amount: 20000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'Development budget for software projects' },
  { key: 3, id: 3, category: 'Operations', budget_amount: 30000, spent_amount: 20000, remaining_amount: 10000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'Operations budget for daily activities' },
  { key: 4, id: 4, category: 'Human Resources', budget_amount: 40000, spent_amount: 25000, remaining_amount: 15000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'HR budget for recruitment and training' },
  { key: 5, id: 5, category: 'Research and Development', budget_amount: 60000, spent_amount: 40000, remaining_amount: 20000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'R&D budget for product innovation' },
  { key: 6, id: 6, category: 'Sales', budget_amount: 25000, spent_amount: 18000, remaining_amount: 7000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'Sales budget for marketing campaigns' },
  { key: 7, id: 7, category: 'IT Infrastructure', budget_amount: 70000, spent_amount: 50000, remaining_amount: 20000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'IT budget for hardware and software purchases' },
  { key: 8, id: 8, category: 'Legal', budget_amount: 10000, spent_amount: 3000, remaining_amount: 7000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'Legal budget for compliance and contracts' },
  { key: 9, id: 9, category: 'Travel', budget_amount: 15000, spent_amount: 10000, remaining_amount: 5000, start_date: '2024-01-01', end_date: '2024-12-31', description: 'Travel budget for business trips' },
  { key: 10, id: 10, category: 'Office Supplies', budget_amount: 5000, spent_amount: 2500, remaining_amount: 2500, start_date: '2024-01-01', end_date: '2024-12-31', description: 'Budget for office supplies and materials' },
];

const budgetColumns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Category", dataIndex: "category", key: "category" },
  { title: "Budget Amount", dataIndex: "budget_amount", key: "budget_amount" },
  { title: "Spent Amount", dataIndex: "spent_amount", key: "spent_amount" },
  { title: "Remaining Amount", dataIndex: "remaining_amount", key: "remaining_amount" },
  { title: "Start Date", dataIndex: "start_date", key: "start_date" },
  { title: "End Date", dataIndex: "end_date", key: "end_date" },
  { title: "Description", dataIndex: "description", key: "description" },
];

function BudgetTable() {
  return (
    <div>
      <h2>Budget Table</h2>
      <Table columns={budgetColumns} dataSource={budgetData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default BudgetTable;
