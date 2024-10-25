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
import ReactDOM from "react-dom";
import { DualAxes } from "@ant-design/plots";
import { Pie } from "@ant-design/charts";
import FinancialStatementCard from "../components/Dashboard/FinancialStatementCard";

const { Option } = Select;

const cashFlowData = [
  {
    id: 1,
    date: "2024-09-01",
    cash_inflow: 50000,
    cash_outflow: 20000,
    net_cash_flow: 30000,
    description: "Monthly revenue and operational costs",
    category: "operational",
  },
  {
    id: 2,
    date: "2024-09-08",
    cash_inflow: 20000,
    cash_outflow: 15000,
    net_cash_flow: 5000,
    description: "Product sales and marketing expense",
    category: "operational",
  },
  {
    id: 3,
    date: "2024-09-15",
    cash_inflow: 30000,
    cash_outflow: 18000,
    net_cash_flow: 12000,
    description: "Sales and office rent",
    category: "operational",
  },
  {
    id: 4,
    date: "2024-09-22",
    cash_inflow: 45000,
    cash_outflow: 10000,
    net_cash_flow: 35000,
    description: "Consulting services and inventory purchase",
    category: "investment",
  },
  {
    id: 5,
    date: "2024-09-30",
    cash_inflow: 35000,
    cash_outflow: 22000,
    net_cash_flow: 13000,
    description: "Monthly closing, salary payments",
    category: "operational",
  },
  {
    id: 6,
    date: "2024-08-01",
    cash_inflow: 60000,
    cash_outflow: 25000,
    net_cash_flow: 35000,
    description: "August sales and operational costs",
    category: "operational",
  },
  {
    id: 7,
    date: "2024-08-15",
    cash_inflow: 40000,
    cash_outflow: 15000,
    net_cash_flow: 25000,
    description: "Product launch revenue and expenses",
    category: "operational",
  },
  {
    id: 8,
    date: "2024-08-30",
    cash_inflow: 30000,
    cash_outflow: 12000,
    net_cash_flow: 18000,
    description: "End of month review and expenses",
    category: "operational",
  },
  {
    id: 9,
    date: "2024-07-01",
    cash_inflow: 55000,
    cash_outflow: 20000,
    net_cash_flow: 35000,
    description: "July revenue and operational costs",
    category: "operational",
  },
  {
    id: 10,
    date: "2024-07-15",
    cash_inflow: 45000,
    cash_outflow: 17000,
    net_cash_flow: 28000,
    description: "Sales and marketing expenses",
    category: "operational",
  },
  {
    id: 11,
    date: "2024-10-20",
    cash_inflow: 45000,
    cash_outflow: 23000,
    net_cash_flow: 22000,
    description: "Sales and marketing expenses",
    category: "operational",
  },
];
const DemoDualAxes = () => {
  // Transforming the data
  const inOutCashData = [];

  // Extract cash inflows and outflows
  cashFlowData.forEach((entry) => {
    inOutCashData.push({
      time: entry.date,
      value: entry.cash_inflow,
      type: "in",
    });
    inOutCashData.push({
      time: entry.date,
      value: entry.cash_outflow,
      type: "out",
    });
  });

  const transformData = cashFlowData.map((entry) => ({
    time: entry.date,
    count: entry.net_cash_flow,
  }));

  const config = {
    xField: "time",
    legend: true,
    children: [
      {
        data: inOutCashData,
        type: "interval",
        yField: "value",
        colorField: "type",
        group: true,
        color: ["#4CAF50", "#F44336"],
        interaction: { elementHighlight: { background: true } },
      },
      {
        data: transformData,
        type: "line",
        yField: "count",
        style: {
          lineWidth: 2,
          stroke: "#F44336", // Corrected color property
        },
        axis: { y: { position: "right" } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full h-full">
        <DualAxes {...config} />
      </div>
    </>
  );
};
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

  const Circletypes = () => {
    // Sample cash flow data

    // Extracting and summing values by category
    const data = cashFlowData.reduce((acc, item) => {
      // Check if the category already exists in the accumulator
      const existingCategory = acc.find((c) => c.type === item.category);

      if (existingCategory) {
        // If it exists, sum the net_cash_flow
        existingCategory.value += item.net_cash_flow;
      } else {
        // If not, create a new category entry
        acc.push({ type: item.category, value: item.net_cash_flow });
      }

      return acc;
    }, []);

    const config = {
      data: data, // Use the extracted data
      angleField: "value",
      colorField: "type",
      color: ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#E67E22"], // Add your desired colors here
      label: {
        text: "value",
        style: {
          fontWeight: "bold",
        },
      },
      legend: {
        color: {
          title: false,
          position: "right",
          rowPadding: 5,
        },
      },
    };
    return (
      <div className="w-full h-[80%]">
        <Pie {...config} />
      </div>
    );
  };
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
  const [activeSection, setActiveSection] = useState("stats");
  const [metricsConf, setMetricsConf] = useState(false);

  const { Link } = Anchor;
  const [activeLink, setActiveLink] = useState("stats"); // Default to 'stats'

  //list des metrics
  const [bool1, setBool1] = useState(true);
  const [bool2, setBool2] = useState(true);
  const [bool3, setBool3] = useState(true);
  const [bool4, setBool4] = useState(true);
  const [bool5, setBool5] = useState(false);
  const [bool6, setBool6] = useState(false);
  const [bool7, setBool7] = useState(true);
  const [bool8, setBool8] = useState(true);
  const [bool9, setBool9] = useState(false);
  const [bool10, setBool10] = useState(false);

  // Variables for numerical values
  const netProfit = 126560;
  const expensesPercentage = 12;
  const revenuePercentage = 11;
  const dailyProfit = 12423;
  const cashflow = 8846;
  const visits = 8846;
  const dailyVisits = 1234;

  const payments = 6560;
  const conversionRate = 60;

  const operationalEffect = 78;
  const handleAnchorChange = (activeKey) => {
    setActiveSection(activeKey);
  };
  const [booleanValues, setBooleanValues] = useState(Array(10).fill(false));

  // Function to toggle the visibility of the popup
  const toggleMetricsConf = () => {
    setMetricsConf((prev) => !prev);
  };

  // Transform data to fit the DualAxes configuration
  const inflowOutflowData = cashFlowData.flatMap((item) => [
    { date: item.date, value: item.cash_inflow, type: "Cash Inflow" },
    { date: item.date, value: item.cash_outflow, type: "Cash Outflow" },
  ]);

  const netCashFlowData = cashFlowData.map((item) => ({
    date: item.date,
    net_cash_flow: item.net_cash_flow,
  }));

  const configg = {
    data: [inflowOutflowData, netCashFlowData],
    xField: "date",
    yField: ["value", "net_cash_flow"],
    geometryOptions: [
      {
        geometry: "column",
        seriesField: "type",
        isGroup: true,
        color: ["#5B8FF9", "#E76C5E"], // Customize colors for inflow/outflow
      },
      {
        geometry: "line",
        color: "#5AD8A6", // Color for net cash flow line
        lineStyle: { lineWidth: 2 },
      },
    ],
    yAxis: {
      net_cash_flow: {
        title: { text: "Net Cash Flow" },
        min: 0,
      },
      value: {
        title: { text: "Cash Flow (Inflow and Outflow)" },
        min: 0,
      },
    },
    tooltip: { shared: true, showMarkers: true },
  };
  const components = [
    bool1 && (
      <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
        {/* Net Profit Component */}
        <div className="flex flex-row justify-between">
          <div className="text-[#00000073] text-[12px]">Net profit</div>
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
    ),
    bool2 && (
      <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
        {/* Cashflow Component */}
        <div className="flex flex-row justify-between">
          <div className="text-[#00000073] text-[12px]">Cashflow</div>
          <Tooltip title="Cashflow">
            <InfoCircleOutlined className="text-[#000000D9]" />
          </Tooltip>
        </div>
        <div className="text-[#000000D9] font-medium text-2xl my-[1px]">
          {cashflow.toLocaleString()}
        </div>
        <img src="/assests/visits_stats.svg" alt="cashflow stats" />
        <div className="w-full h-[1px] bg-[#0000000F] my-1"></div>
        <div className="flex flex-row gap-1 text-[12px] text-[#000000D9] my-[1px]">
          <div>Daily Visits</div>
          <div>{dailyVisits.toLocaleString()}</div>
        </div>
      </div>
    ),
    bool3 && (
      <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
        <div className="flex flex-row justify-between">
          <div className="text-[#00000073] text-[12px]">Visits</div>
          <Tooltip title="Visits">
            <InfoCircleOutlined className="text-[#000000D9]" />
          </Tooltip>
        </div>
        <div className="text-[#000000D9] font-medium text-2xl my-[1px]">
          {visits.toLocaleString()}
        </div>
        <img src="/assests/visits_stats.svg" alt="Visits stats" />
        <div className="w-full h-[1px] bg-[#0000000F] my-1"></div>
        <div className="flex flex-row gap-1 text-[12px] text-[#000000D9] my-[1px]">
          <div>Daily Visits</div>
          <div>{dailyVisits.toLocaleString()}</div>
        </div>
      </div>
    ),
    bool4 && (
      <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
        <div className="flex flex-row justify-between">
          <div className="text-[#00000073] text-[12px]">Budgets</div>
          <Tooltip title="Budgets">
            <InfoCircleOutlined className="text-[#000000D9]" />
          </Tooltip>
        </div>
        <div className="text-[#000000D9] font-medium text-2xl my-[1px]">
          {payments.toLocaleString()}
        </div>
        <img src="/assests/payemts_stats.svg" alt="Payments stats" />
        <div className="w-full h-[1px] bg-[#0000000F] my-1"></div>
        <div className="flex flex-row text-[12px] text-[#000000D9] my-[1px]">
          <div>Conversion Rate</div>
          <div>{conversionRate}%</div>
        </div>
      </div>
    ),
    bool5 && (
      <div className="flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm">
        <div className="flex flex-row justify-between">
          <div className="text-[#00000073] text-[12px]">Operational Effect</div>
          <Tooltip title="Operational Effect prompt text">
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
    ),
    // Add other components here...
  ];

  // Filter out inactive components
  const displayedComponents = components.filter(Boolean);

  return (
    <div className=" flex flex-col">
      {/* Dashboard + stats&resports nav */}
      <div className="flex flex-col bg-white mx-1 my-2 px-6">
        <h1 className="text-2xl font-bold font-poppins mt-4">Dashboard</h1>
        <Anchor
          direction="horizontal"
          affix={false} // Optional: to remove sticky behavior
          onClick={(e, { href }) => {
            handleAnchorChange(href.slice(1)); // Remove '#' from href
          }}
          activeLink="#stats"
        >
          <Link href="#stats" title="Stats" />
          <Link href="#reports" title="Reports" />
        </Anchor>
      </div>
      {/* Stats sections */}
      {activeSection === "stats" && (
        <div id="stats" className="px-6">
          <div className="flex flex-row w-full justify-end relative">
            {" "}
            {/* Set relative positioning here */}
            <button
              onClick={() => setMetricsConf((prev) => !prev)}
              className="px-2 py-1 bg-white border rounded-sm border-gray-400 text-[14px] mb-2 focus:border-blue-500 focus:text-blue-500"
            >
              Customize
            </button>
            {/* Metrics Configuration Popup */}
            {metricsConf && (
              <div className="absolute z-10 mt-7 bg-white p-2 border rounded shadow-lg">
                <div className="flex flex-col">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool1}
                      onChange={() => setBool1((prev) => !prev)}
                      className="mr-2"
                    />
                    Net Profit{" "}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool2}
                      onChange={() => setBool2((prev) => !prev)}
                      className="mr-2"
                    />
                    Daily Visits
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool3}
                      onChange={() => setBool3((prev) => !prev)}
                      className="mr-2"
                    />
                    Daily Visits
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool4}
                      onChange={() => setBool4((prev) => !prev)}
                      className="mr-2"
                    />
                    Conversion Rate
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool5}
                      onChange={() => setBool5((prev) => !prev)}
                      className="mr-2"
                    />
                    Operational Effect
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool6}
                      onChange={() => setBool6((prev) => !prev)}
                      className="mr-2"
                    />
                    Boolean 6
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool7}
                      onChange={() => setBool7((prev) => !prev)}
                      className="mr-2"
                    />
                    Expences
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool8}
                      onChange={() => setBool8((prev) => !prev)}
                      className="mr-2"
                    />
                    Cashflow
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool9}
                      onChange={() => setBool9((prev) => !prev)}
                      className="mr-2"
                    />
                    Boolean 9
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={bool10}
                      onChange={() => setBool10((prev) => !prev)}
                      className="mr-2"
                    />
                    Boolean 10
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-8">
            {displayedComponents.map((component, index) => (
              <div key={index} className="w-[22%]">
                {" "}
                {/* Adjust width as needed */}
                {component}
              </div>
            ))}
          </div>

          {/* Tabs and Filters */}
          {bool8 && (
            <div className="w-full mt-6 py-3 font-roboto text-sm bg-white px-3 ">
              <div>Cash flow</div>

              <div className="flex flex-row h-[500px]">
                <DemoDualAxes />
                <Circletypes />
              </div>
            </div>
          )}
          {bool7 && (
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
                        setActiveFilter("allMonth");
                        setTimeframe("months");
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
                        setActiveFilter("allYear");
                        setTimeframe("years");
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
          )}
        </div>
      )}

      {/* Reports section */}
      {activeSection === "reports" && (
        <div id="reports" className="px-6 font-montserrat">
          <div className="flex flex-row gap-2">
            <FinancialStatementCard
              title="The Income Statement"
              description="The income statement is also called the profit and loss statement, statement of operation, statement of financial result, or income, or earnings statement. "
              imgSrc="../../public/assests/reports.svg" // Adjust the path as needed
              buttonText="GENERATE AND DOWNLOAD"
              onClick={() => handleButtonClick("Income Statement")} // Pass the type of statement
            />
            <FinancialStatementCard
              title="The Balance Sheet"
              description="The balance sheet provides a snapshot of a company’s assets, liabilities, and equity at a specific point in time, reflecting what the company owns and owes."
              imgSrc="../../public/assests/balance_fin.png" // Adjust the path as needed
              buttonText="GENERATE AND DOWNLOAD"
              onClick={() => handleButtonClick("Balance Sheet")} // Pass the type of statement
            />
            <FinancialStatementCard
              title="Cash Flow Statement"
              description="The cash flow statement is a financial report that provides a summary of the cash inflows and outflows for a business during a specific period."
              imgSrc="../../public/assests/balance.png" // Adjust the path as needed
              buttonText="GENERATE AND DOWNLOAD"
              onClick={() => handleButtonClick("Cash Flow Statement")} // Pass the type of statement
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
