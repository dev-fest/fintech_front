// FundingTable.js
import React from "react";
import { Table } from "antd";

const fundingData = [
  { key: 1, id: 1, funding_round: 'Series A', amount_raised: 1000000, date: '2024-07-01', investor_name: 'ABC Ventures', valuation: 5000000, description: 'Series A funding raised in July 2024' },
  { key: 2, id: 2, funding_round: 'Series B', amount_raised: 2500000, date: '2024-10-01', investor_name: 'XYZ Capital', valuation: 7500000, description: 'Series B funding round' },
  { key: 3, id: 3, funding_round: 'Seed', amount_raised: 500000, date: '2023-12-01', investor_name: 'Angel Investors Group', valuation: 2500000, description: 'Seed funding round with early investors' },
  { key: 4, id: 4, funding_round: 'Series C', amount_raised: 4000000, date: '2025-01-15', investor_name: 'Tech Growth Fund', valuation: 12000000, description: 'Series C funding for business expansion and new markets' },
  { key: 5, id: 5, funding_round: 'Seed', amount_raised: 300000, date: '2023-06-01', investor_name: 'Private Angels', valuation: 1800000, description: 'Initial seed funding for product development' },
  { key: 6, id: 6, funding_round: 'Series A', amount_raised: 800000, date: '2024-03-01', investor_name: 'Startup Ventures', valuation: 4200000, description: 'Additional Series A funding for scaling operations' },
  { key: 7, id: 7, funding_round: 'Series B', amount_raised: 2000000, date: '2024-09-15', investor_name: 'Innovation Partners', valuation: 6800000, description: 'Series B funding to accelerate growth in new regions' },
  { key: 8, id: 8, funding_round: 'Debt Financing', amount_raised: 1500000, date: '2024-05-01', investor_name: 'Bank of Capital', valuation: 5000000, description: 'Debt financing to support cash flow and operations' },
  { key: 9, id: 9, funding_round: 'Crowdfunding', amount_raised: 250000, date: '2023-11-10', investor_name: 'Kickstarter Backers', valuation: 2000000, description: 'Crowdfunding round to gain community support for product launch' },
  { key: 10, id: 10, funding_round: 'Series D', amount_raised: 5500000, date: '2025-06-30', investor_name: 'Global Investors', valuation: 15000000, description: 'Series D funding for international expansion and R&D investments' },
];

const fundingColumns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Funding Round", dataIndex: "funding_round", key: "funding_round" },
  { title: "Amount Raised", dataIndex: "amount_raised", key: "amount_raised" },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Investor Name", dataIndex: "investor_name", key: "investor_name" },
  { title: "Valuation", dataIndex: "valuation", key: "valuation" },
  { title: "Description", dataIndex: "description", key: "description" },
];

function FundingTable() {
  return (
    <div>
      <h2>Funding Table</h2>
      <Table columns={fundingColumns} dataSource={fundingData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default FundingTable;
