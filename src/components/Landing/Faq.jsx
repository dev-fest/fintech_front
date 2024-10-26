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
      const mailtoLink = `mailto:contact@corecapital.dz?subject=Subscription&body=I would like to subscribe with this email: ${email}`;
      window.location.href = mailtoLink;
      setEmail('');
    }
  };

  return (
    <div className='flex flex-col items-center bg-[#F2F9FA] h-full'>
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
        {/* Questions */}
        {[
          "How does the real-time financial dashboard work?",
          "What types of financial reports can the system generate?",
          "How do I access my financial data?",
          "Will the system provide insights into future expenses?",
          "Can the system scale with growing data and users?"
        ].map((question, index) => (
          <div key={index} className='flex flex-col'>
            <div 
              className='flex flex-row w-full justify-between items-center font-poppins cursor-pointer' 
              onClick={() => toggleQuestion(index)}
            >
              <div className={`${openIndex === index ? 'font-bold' : 'font-normal'} text-[20px]`}>
                {question}
              </div>
              <img src={openIndex === index ? Active : InActive} alt="drop" />
            </div>
            {openIndex === index && (
              <div className='font-light text-[16px] mt-3'>
                {/* You can customize the answer for each question here */}
                {index === 0 && "The dashboard offers a comprehensive view of financial health, updating key metrics like revenue, expenses, and profits in real time."}
                {index === 1 && "Users can export reports in multiple formats (PDF, Excel, CSV) and customize them based on time periods and specific metrics."}
                {index === 2 && "You can access your financial data through the dashboard, where all key metrics are displayed for your convenience."}
                {index === 3 && "Yes, the system will analyze past expense data to provide predictive insights. It will offer recommendations for future financial planning and budgeting."}
                {index === 4 && "Yes, scalability is a core feature of the system. It is designed to handle large volumes of data and increased user activity without compromising performance."}
              </div>
            )}
            <div className='w-full h-[1px] bg-purple-600 my-3'></div>
          </div>
        ))}
      </div>

      {/* Subscription Section */}
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
};

export default Faq;
