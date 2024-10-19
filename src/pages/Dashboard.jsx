import React, { useState } from "react";
import {
  InfoCircleOutlined,
  CaretUpFilled,
  CaretDownFilled,
} from "@ant-design/icons"; // Importing specific icons
import { Anchor, DatePicker } from "antd";
import { Flex, Progress } from "antd";
import { Tooltip } from "antd";
import { Column } from "@ant-design/charts";
import { Select } from "antd";

const { Option } = Select;

// Example data
const dataByDays = [
  { day: "2023-10-01", value: 30 },
  { day: "2023-10-02", value: 50 },
  { day: "2023-10-03", value: 40 },
  { day: "2023-10-04", value: 60 },
  { day: "2023-10-05", value: 70 },
  { day: "2023-10-06", value: 80 },
  { day: "2023-10-07", value: 90 },
  { day: "2023-10-08", value: 75 },
  { day: "2023-10-09", value: 55 },
  { day: "2023-10-10", value: 65 },
  { day: "2023-10-11", value: 85 },
  { day: "2023-10-12", value: 95 },
];
const dataByWeeks = [
  { week: "Week 1", value: 100 },
  { week: "Week 2", value: 200 },
  { week: "Week 3", value: 150 },
  { week: "Week 4", value: 250 },
  { week: "Week 5", value: 300 },
  { week: "Week 6", value: 400 },
  { week: "Week 7", value: 350 },
  { week: "Week 8", value: 450 },
  { week: "Week 9", value: 500 },
  { week: "Week 10", value: 600 },
  { week: "Week 11", value: 550 },
  { week: "Week 12", value: 700 },
];

const dataByMonths = [
  { month: "January", value: 300 },
  { month: "February", value: 400 },
  { month: "March", value: 350 },
  { month: "April", value: 450 },
  { month: "May", value: 500 },
  { month: "June", value: 600 },
  { month: "July", value: 700 },
  { month: "August", value: 650 },
  { month: "September", value: 550 },
  { month: "October", value: 750 },
  { month: "November", value: 800 },
  { month: "December", value: 900 },
];

const dataByYears = [
  { year: "2021", value: 1200 },
  { year: "2022", value: 1400 },
  { year: "2023", value: 1500 },
  { year: "2024", value: 1300 },
  { year: "2025", value: 1390 },
  { year: "2026", value: 1000 },
  { year: "2027", value: 1300 },
  { year: "2028", value: 1800 },
  { year: "2029", value: 1600 },
  { year: "2030", value: 2000 },
  { year: "2031", value: 500 },
  { year: "2032", value: 1700 },
];

const { RangePicker } = DatePicker;

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("days");

  // Get data based on the selected timeframe
  let data;
  let xField;

  switch (timeframe) {
    case "days":
      data = dataByDays;
      xField = "day";
      break;
    case "weeks":
      data = dataByWeeks;
      xField = "week";
      break;
    case "months":
      data = dataByMonths;
      xField = "month";
      break;
    case "years":
      data = dataByYears;
      xField = "year";
      break;
    default:
      data = dataByDays;
      xField = "day";
  }

  const config = {
    data,
    xField,
    yField: "value",
    columnWidth: 20,
    title: {
      visible: true,
      text: "Values Over Time",
    },
    label: {
      visible: true,
      formatter: (val) => `${val}`,
    },
  };
  // State management
  const [activeTab, setActiveTab] = useState("expenses"); // Track active tab
  const [activeFilter, setActiveFilter] = useState("allDays"); // Track active filter

  // Variables for numerical values
  const netProfit = 126560;
  const expensesPercentage = 12;
  const revenuePercentage = 11;
  const dailyProfit = 12423;

  const visits = 8846;
  const dailyVisits = 1234;

  const payments = 6560;
  const conversionRate = 60;

  const operationalEffect = 78;

  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {/* first row */}
      <div className="flex flex-row font-roboto justify-between ">
        {/* net profit */}
        <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
          <div className="flex flex-row justify-between">
            <div className="text-[#00000073] text-[12px] ">Net profit</div>

            <Tooltip title="Net profit">
              <InfoCircleOutlined className="text-[#000000D9]" />
            </Tooltip>
          </div>
          <div className="text-[#000000D9] font-medium text-2xl my-[1px]">
            ${netProfit.toLocaleString()}
          </div>
          <div className="flex flex-row text-[12px] font-roboto text-[#000000D9] my-[1px]">
            <div>Expenses {expensesPercentage}%</div>
            <CaretUpFilled className="text-green-500" />
          </div>
          <div className="flex flex-row text-[12px] text-[#000000D9] my-[1px]">
            <div>Revenue {revenuePercentage}%</div>
            <CaretDownFilled className="text-red-500" />
          </div>
          <div className="w-full h-[1px] bg-[#0000000F] my-1"></div>
          <div className="flex flex-row text-[12px] text-[#000000D9] my-[1px]">
            <div>Daily Profit</div>
            <div>${dailyProfit.toLocaleString()}</div>
          </div>
        </div>
        {/* visits */}
        <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
          <div className="flex flex-row justify-between">
            <div className="text-[#00000073] text-[12px] ">Visits</div>
            <Tooltip title="Visits">
              <InfoCircleOutlined className="text-[#000000D9]" />
            </Tooltip>
          </div>
          <div className="text-[#000000D9] font-medium text-2xl my-[1px]">
            {visits.toLocaleString()}
          </div>
          <img src="../../public/assests/visits_stats.svg" alt="stats" />
          <div className="w-full h-[1px] bg-[#0000000F] my-1"></div>
          <div className="flex flex-row gap-1 text-[12px] text-[#000000D9] my-[1px]">
            <div>Daily Visits</div>
            <div>{dailyVisits.toLocaleString()}</div>
          </div>
        </div>
        {/* payments */}
        <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
          <div className="flex flex-row justify-between">
            <div className="text-[#00000073] text-[12px] ">Budgets</div>
            <Tooltip title="Budgets">
              <InfoCircleOutlined className="text-[#000000D9]" />
            </Tooltip>
          </div>
          <div className="text-[#000000D9] font-medium text-2xl my-[1px]">
            {payments.toLocaleString()}
          </div>
          <img src="../../public/assests/payemts_stats.svg" alt="" />
          <div className="w-full h-[1px] bg-[#0000000F] my-1"></div>
          <div className="flex flex-row text-[12px] text-[#000000D9] my-[1px]">
            <div>Conversion Rate</div>
            <div>{conversionRate}%</div>
          </div>
        </div>
        {/* operational effect */}
        <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
          <div className="flex flex-row justify-between">
            <div className="text-[#00000073] text-[12px] ">
              Operational Effect
            </div>
            <Tooltip title="prompt text">
              <InfoCircleOutlined className="text-[#000000D9]" />
            </Tooltip>
          </div>
          <div className="text-[#000000D9] font-medium text-2xl my-[1px]">
            {operationalEffect}%
          </div>
          <Flex vertical gap="small">
            <Progress percent={operationalEffect} showInfo={false} />
          </Flex>
          <div className="w-full h-[1px] bg-[#0000000F] my-1"></div>
          <div className="flex flex-row text-[12px] text-[#000000D9] my-[1px]">
            <div>Daily Profit</div>
            <div>${dailyProfit.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="w-full bg-white mt-6 py-3 font-roboto text-sm">
        <div className="flex flex-row px-3 justify-between text-[12px]">
          <div className="flex flex-row gap-2">
            <button
              onClick={() => {
                setActiveTab("expenses");
                setActiveFilter("allDays"); // Reset filter to default when changing tabs
              }}
              className={`${
                activeTab === "expenses"
                  ? "bg-primary text-blue-500 border-b-2 border-blue-500"
                  : "text-black"
              } px-2 py-1`}
            >
              Expenses
            </button>
            <button
              onClick={() => {
                setActiveTab("revenue");
                setActiveFilter("allDays"); // Reset filter to default when changing tabs
              }}
              className={`${
                activeTab === "revenue"
                  ? "bg-primary text-blue-500 border-b-2 border-blue-500"
                  : "text-black"
              } px-2 py-1`}
            >
              Revenue
            </button>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-4">
              <button
                onClick={() => {
                  setActiveFilter("allDays");
                  setTimeframe("days");
                }}
                className={`${
                  activeFilter === "allDays"
                    ? "bg-primary text-blue-500 border-b-2 border-blue-500"
                    : "text-black"
                } px-2 py-1 text-nowrap`}
              >
                All days
              </button>
              <button
                onClick={() => {
                  setActiveFilter("allWeek");
                  setTimeframe("weeks");
                }}
                className={`${
                  activeFilter === "allWeek"
                    ? "bg-primary text-blue-500 border-b-2 border-blue-500"
                    : "text-black"
                } px-2 py-1 text-nowrap`}
              >
                All week
              </button>
              <button
                onClick={() => {
                  {
                    setActiveFilter("allMonth");
                    setTimeframe("months");
                  }
                }}
                className={`${
                  activeFilter === "allMonth"
                    ? "bg-primary text-blue-500 border-b-2 border-blue-500"
                    : "text-black"
                } px-2 py-1 text-nowrap`}
              >
                All month
              </button>
              <button
                onClick={() => {
                  {
                    setActiveFilter("allYear");
                    setTimeframe("years");
                  }
                }}
                className={`${
                  activeFilter === "allYear"
                    ? "bg-primary text-blue-500 border-b-2 border-blue-500"
                    : "text-black"
                } px-2 py-1 text-nowrap`}
              >
                All year
              </button>
            </div>
            <div>
              <RangePicker className="rounded-sm mr-4 w-max" />
            </div>
          </div>
        </div>

        {/* if expenses active */}
        <div className="px-6 py-2">
          {activeTab === "expenses" && (
            <div className="flex flex-row justify-between  w-full">
              <div className="w-[70%] h-[50vh]">
                Expenses per month
                <Column {...config} />
              </div>
              <div className="flex flex-col">
                <p>Expenses Ranking</p>
                <div className="text-gray-600">
                {Array.from({ length: 8 }, (_, index) => (
                  <p key={index}>#{index + 1} Gongzhuan No.1 shop</p>
                ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* if revenue active */}
        <div>
          {activeTab === "revenue" && (
            <div>
              <Column {...config} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
