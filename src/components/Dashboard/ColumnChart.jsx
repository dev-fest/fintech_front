import React, { useState } from 'react';
import { Column } from '@ant-design/charts';
import { Select } from 'antd';

const { Option } = Select;

// Example data
const dataByDays = [
  { day: '2023-10-01', value: 30 },
  { day: '2023-10-02', value: 50 },
  { day: '2023-10-03', value: 40 },
  { day: '2023-10-04', value: 60 },
];

const dataByWeeks = [
  { week: 'Week 1', value: 100 },
  { week: 'Week 2', value: 200 },
  { week: 'Week 3', value: 150 },
  { week: 'Week 4', value: 250 },
];

const dataByMonths = [
  { month: 'January', value: 300 },
  { month: 'February', value: 400 },
  { month: 'March', value: 350 },
];

const dataByYears = [
  { year: '2021', value: 1200 },
  { year: '2022', value: 1400 },
  { year: '2023', value: 1300 },
];

const ColumnChart = () => {
  const [timeframe, setTimeframe] = useState('days');
  
  // Get data based on the selected timeframe
  let data;
  let xField;
  
  switch (timeframe) {
    case 'days':
      data = dataByDays;
      xField = 'day';
      break;
    case 'weeks':
      data = dataByWeeks;
      xField = 'week';
      break;
    case 'months':
      data = dataByMonths;
      xField = 'month';
      break;
    case 'years':
      data = dataByYears;
      xField = 'year';
      break;
    default:
      data = dataByDays;
      xField = 'day';
  }

  const config = {
    data,
    xField,
    yField: 'value',
    columnWidth: 20,
    title: {
      visible: true,
      text: 'Values Over Time',
    },
    label: {
      visible: true,
      formatter: (val) => `${val}`,
    },
  };

  return (
    <div>
      <Select
        defaultValue="days"
        style={{ width: 120, marginBottom: '20px' }}
        onChange={setTimeframe}
      >
        <Option value="days">Days</Option>
        <Option value="weeks">Weeks</Option>
        <Option value="months">Months</Option>
        <Option value="years">Years</Option>
      </Select>
      <Column {...config} />
    </div>
  );
};

export default ColumnChart;
