import React from 'react';
import { Card, Button } from 'antd'; // Import Card and Button from Ant Design

const Offers = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$15/month',
      audience: 'Startups and small businesses looking for essential financial management tools.',
      features: [
        'Real-time financial dashboard with basic metrics (cash flow, expenses, profits)',
        'Basic expense tracking system',
        'Monthly financial report generation (PDF format)',
        'Basic customer support via email',
        'Access to educational resources (webinars, articles)',
        'Limited data storage (up to 500 transactions)',
      ],
    },
    {
      title: 'Professional Plan',
      price: '$40/month',
      audience: 'Growing businesses that require more advanced features for comprehensive financial management.',
      features: [
        'All features from the Basic Plan',
        'Enhanced real-time dashboard with customizable metrics',
        'Advanced expense tracking with visual trends over time',
        'Automated generation of financial reports (PDF, Excel, CSV formats)',
        'Priority customer support via chat and email',
        'Integration with third-party accounting software',
        'Access to predictive insights and recommendations',
        'Increased data storage (up to 2,500 transactions)',
      ],
    },
    {
      title: 'Premium Plan',
      price: '$75/month',
      audience: 'Established businesses seeking advanced financial management tools and insights.',
      features: [
        'All features from the Professional Plan',
        'Fully customizable financial dashboard with real-time updates',
        'Comprehensive expense insights and budgeting recommendations',
        'Automated financial reporting with advanced analytics',
        'Dedicated account manager for personalized support',
        'Integration with payment gateways and banking systems',
        'API access for custom integrations',
        'Unlimited data storage (unlimited transactions)',
      ],
    },
  ];

  return (
    <div className="offers-container" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Our Offers</h2>
      <p>Here are three subscription plan options for your fintech platform, each with distinct features and benefits:</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {plans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            bordered={true}
            style={{ width: 300, margin: '20px' }}
          >
            <h3>{plan.price}</h3>
            <p>{plan.audience}</p>
            <h4>Features:</h4>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Button type="primary" onClick={() => window.location.href = '/register'}>
              Sign Up
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Offers;
