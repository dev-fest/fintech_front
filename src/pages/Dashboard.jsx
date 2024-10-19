import React from 'react';
import { InfoCircleOutlined,CaretUpFilled,CaretDownFilled} from '@ant-design/icons'; // Importing specific icons
const Dashboard = () => {
  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className='flex flex-row font-roboto justify-between '>
        {/* net profit */}
        <div className='flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm'>
          <div className='flex flex-row justify-between'>
            <div className='text-[#00000073] text-[12px] '>Net profit</div>
            <InfoCircleOutlined className='text-[#000000D9]' />
          </div>
          <div className='text-[#000000D9] font-medium text-2xl my-[1px]'>$ 126,560</div>
          <div className='flex flex-row text-[12px] font-roboto text-[#000000D9] my-[1px]'><div >Expenses 12%</div> <CaretUpFilled className='text-green-500'/></div>
          <div className='flex flex-row text-[12px] text-[#000000D9] my-[1px]'><div >Revenue 11%</div> <CaretDownFilled className='text-red-500'/></div>
          <div className='w-full h-[1px] bg-[#0000000F] my-1'></div>
          <div className='flex flex-row text-[12px] text-[#000000D9] my-[1px]'><div>Daily Profit</div> <div>$12,423</div></div>
        </div>
        {/* visits */}
        <div className='flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm'>
          <div className='flex flex-row justify-between'>
            <div className='text-[#00000073] text-[12px] '>Visits</div>
            <InfoCircleOutlined className='text-[#000000D9]' />
          </div>
          <div className='text-[#000000D9] font-medium text-2xl my-[1px]'>8,846</div>
          <img src="../../public/assests/visits_stats.svg" alt="stats" />
         <div className='w-full h-[1px] bg-[#0000000F] my-1'></div>
          <div className='flex flex-row gap-1 text-[12px] text-[#000000D9] my-[1px]'><div>Daily Visits</div> <div>1,234</div></div>
        </div>
        {/* payments */}
        <div className='flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm'>
          <div className='flex flex-row justify-between'>
            <div className='text-[#00000073] text-[12px] '>Payments</div>
            <InfoCircleOutlined className='text-[#000000D9]' />
          </div>
          <div className='text-[#000000D9] font-medium text-2xl my-[1px]'>6,560</div>
          <img src="../../public/assests/payemts_stats.svg" alt="" />
          <div className='w-full h-[1px] bg-[#0000000F] my-1'></div>
          <div className='flex flex-row text-[12px] text-[#000000D9] my-[1px]'><div>Conversion Rate</div> <div>60%</div></div>
        </div>
        {/* operational effect */}
        <div className='flex flex-col bg-white border-[#0000000F] w-[18vw] p-5 rounded-sm'>
          <div className='flex flex-row justify-between'>
            <div className='text-[#00000073] text-[12px] '>Operational Effect</div>
            <InfoCircleOutlined className='text-[#000000D9]' />
          </div>
          <div className='text-[#000000D9] font-medium text-2xl my-[1px]'>78%</div>
          <img src="../../public/assests/progress.svg" alt="" />
          <div className='w-full h-[1px] bg-[#0000000F] my-1'></div>
          <div className='flex flex-row text-[12px] text-[#000000D9] my-[1px]'><div>Daily Profit</div> <div>$12,423</div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
