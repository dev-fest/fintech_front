import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Active from '../../../public/assests/arrow_drop_active.svg';
import InActive from '../../../public/assests/arrow_drop_inactive.svg';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState('');

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      // Create a mailto link
      const mailtoLink = `mailto:contact@corecapital.dz?subject=Subscription&body=I would like to subscribe with this email: ${email}`;
      
      // Open the default email client with the mailto link
      window.location.href = mailtoLink;
  
      // Reset the email input
      setEmail('');
    }
  };
  return (
    <div className='flex flex-col items-center bg-[#F2F9FA]'>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>CoreCapital</title>
        <meta name="description" content="Find answers to your frequently asked questions about our real-time financial dashboard, reporting features, and more." />
        <meta name="keywords" content="FAQ, financial dashboard, financial reports, access financial data, expense insights, scalability" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="font-bold text-6xl flex flex-col items-center font-montserrat text-transparent bg-clip-text bg-gradient-to-t to-blue-500 from-indigo-500 mt-20">
        <p>FAQ</p>
      </div>
      
      <div className='flex flex-col w-[80%] font-poppins mb-7'>
        {/* Question01 */}
        <div className='flex flex-col'>
          <div className='flex flex-row w-full justify-between items-center font-poppins cursor-pointer' onClick={() => toggleQuestion(1)}>
            <div className='font-semibold text-[20px]'>How does the real-time financial dashboard work?</div>
            <img src={openIndex === 1 ? Active : InActive} alt="drop" />
          </div>
          {openIndex === 1 && (
            <div className='font-light text-[16px] mt-3'>
              The dashboard offers a comprehensive view of financial health, updating key metrics like revenue, expenses, and profits in real time.
            </div>
          )}
          <div className='w-full h-[1px] bg-purple-600 my-3'></div>
        </div>
        
        {/* Question02 */}
        <div className='flex flex-col'>
          <div className='flex flex-row w-full justify-between items-center font-poppins cursor-pointer' onClick={() => toggleQuestion(2)}>
            <div className='font-semibold text-[20px]'>What types of financial reports can the system generate?</div>
            <img src={openIndex === 2 ? Active : InActive} alt="drop" />
          </div>
          {openIndex === 2 && (
            <div className='font-light text-[16px] mt-3'>
              Users can export reports in multiple formats (PDF, Excel, CSV) and customize them based on time periods and specific metrics.
            </div>
          )}
          <div className='w-full h-[1px] bg-purple-600 my-3'></div>
        </div>
        
        {/* Question03 */}
        <div className='flex flex-col'>
          <div className='flex flex-row w-full justify-between items-center font-poppins cursor-pointer' onClick={() => toggleQuestion(3)}>
            <div className='font-semibold text-[20px]'>How do I access my financial data?</div>
            <img src={openIndex === 3 ? Active : InActive} alt="drop" />
          </div>
          {openIndex === 3 && (
            <div className='font-light text-[16px] mt-3'>
              You can access your financial data through the dashboard, where all key metrics are displayed for your convenience.
            </div>
          )}
          <div className='w-full h-[1px] bg-purple-600 my-3'></div>
        </div>
        
        {/* Question04 */}
        <div className='flex flex-col'>
          <div className='flex flex-row w-full justify-between items-center font-poppins cursor-pointer' onClick={() => toggleQuestion(4)}>
            <div className='font-semibold text-[20px]'>Will the system provide insights into future expenses?</div>
            <img src={openIndex === 4 ? Active : InActive} alt="drop" />
          </div>
          {openIndex === 4 && (
            <div className='font-light text-[16px] mt-3'>
              Yes, the system will analyze past expense data to provide predictive insights. It will offer recommendations for future financial planning and budgeting.
            </div>
          )}
          <div className='w-full h-[1px] bg-purple-600 my-3'></div>
        </div>
        
        {/* Question05 */}
        <div className='flex flex-col'>
          <div className='flex flex-row w-full justify-between items-center font-poppins cursor-pointer' onClick={() => toggleQuestion(5)}>
            <div className='font-semibold text-[20px]'>Can the system scale with growing data and users?</div>
            <img src={openIndex === 5 ? Active : InActive} alt="drop" />
          </div>
          {openIndex === 5 && (
            <div className='font-light text-[16px] mt-3'>
              Yes, scalability is a core feature of the system. It is designed to handle large volumes of data and increased user activity without compromising performance.
            </div>
          )}
          <div className='w-full h-[1px] bg-purple-600 my-3'></div>
        </div>
      </div>
      
      <div className='bg-[#001529] flex flex-col items-center w-full text-white '>
        <div className='font-montserrat font-bold text-3xl text-white mt-16'>Get in Touch</div>
        <div className='font-poppins flex flex-col justify-center items-center mt-8 font-light px-4 '>
          <div>Have any questions or interested in joining our community? Feel free to contact us,</div>
          <div>and we’ll be happy to assist you.</div>
        </div>
        <div className='flex flex-row pl-4 bg-[#F2F4F8] rounded-2xl mt-8 mb-16 '>
          <img src="../../../public/assests/envelope.svg" alt="envelope" />
          <input 
            type="email" 
            className='focus:outline-none text-black ml-2 bg-[#F2F4F8]' 
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <button 
            className={`px-6 py-3 rounded-2xl ${email ? 'bg-[#0F62FE]' : 'bg-gray-400'}`} 
            onClick={handleSubscribe}
            disabled={!email}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
