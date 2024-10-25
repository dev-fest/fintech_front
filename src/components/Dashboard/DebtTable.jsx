// DebtTable.js
import React from "react";
import { Table } from "antd";

const debtData = [
  { key: 1, id: 1, debt_type: 'loan', principal: 50000, interest_rate: 0.05, maturity_date: '2025-12-31', payment_due_date: '2024-12-01', amount_paid: 10000, outstanding_balance: 40000, description: 'Bank loan for equipment purchase' },
  { key: 2, id: 2, debt_type: 'bond', principal: 30000, interest_rate: 0.03, maturity_date: '2026-12-31', payment_due_date: '2024-10-01', amount_paid: 5000, outstanding_balance: 25000, description: 'Corporate bond for capital raising' },
  { key: 3, id: 3, debt_type: 'credit line', principal: 20000, interest_rate: 0.07, maturity_date: '2024-11-30', payment_due_date: '2024-10-15', amount_paid: 8000, outstanding_balance: 12000, description: 'Credit line for working capital' },
  { key: 4, id: 4, debt_type: 'personal loan', principal: 10000, interest_rate: 0.06, maturity_date: '2025-09-30', payment_due_date: '2024-09-01', amount_paid: 2000, outstanding_balance: 8000, description: 'Personal loan for home renovation' },
  { key: 5, id: 5, debt_type: 'student loan', principal: 15000, interest_rate: 0.04, maturity_date: '2026-05-31', payment_due_date: '2024-05-01', amount_paid: 3000, outstanding_balance: 12000, description: 'Student loan for educational expenses' },
  { key: 6, id: 6, debt_type: 'mortgage', principal: 200000, interest_rate: 0.03, maturity_date: '2040-01-01', payment_due_date: '2024-02-01', amount_paid: 15000, outstanding_balance: 185000, description: 'Mortgage for home purchase' },
  { key: 7, id: 7, debt_type: 'business loan', principal: 75000, interest_rate: 0.05, maturity_date: '2025-07-15', payment_due_date: '2024-07-01', amount_paid: 20000, outstanding_balance: 55000, description: 'Business loan for expansion' },
  { key: 8, id: 8, debt_type: 'auto loan', principal: 25000, interest_rate: 0.04, maturity_date: '2026-11-30', payment_due_date: '2024-11-01', amount_paid: 5000, outstanding_balance: 20000, description: 'Auto loan for vehicle purchase' },
  { key: 9, id: 9, debt_type: 'business credit card', principal: 10000, interest_rate: 0.15, maturity_date: '2024-09-15', payment_due_date: '2024-08-01', amount_paid: 3000, outstanding_balance: 7000, description: 'Credit card debt for business expenses' },
  { key: 10, id: 10, debt_type: 'construction loan', principal: 120000, interest_rate: 0.06, maturity_date: '2025-12-01', payment_due_date: '2024-12-15', amount_paid: 20000, outstanding_balance: 100000, description: 'Construction loan for new building' },
];

const debtColumns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Debt Type", dataIndex: "debt_type", key: "debt_type" },
  { title: "Principal", dataIndex: "principal", key: "principal" },
  { title: "Interest Rate", dataIndex: "interest_rate", key: "interest_rate" },
  { title: "Maturity Date", dataIndex: "maturity_date", key: "maturity_date" },
  { title: "Payment Due Date", dataIndex: "payment_due_date", key: "payment_due_date" },
  { title: "Amount Paid", dataIndex: "amount_paid", key: "amount_paid" },
  { title: "Outstanding Balance", dataIndex: "outstanding_balance", key: "outstanding_balance" },
  { title: "Description", dataIndex: "description", key: "description" },
];

function DebtTable() {
  return (
    <div>
      <h2>Debt Table</h2>
      <Table columns={debtColumns} dataSource={debtData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default DebtTable;
