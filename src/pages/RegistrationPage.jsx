import React, { useState } from "react";
import { Input, Checkbox, Button, message } from 'antd'; 
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"; 

const RegistrationPage = () => {
  const navigate = useNavigate(); 

  // State to manage views
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [field, setField] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showNext, setShowNext] = useState(false); 
  const [showFinal, setShowFinal] = useState(false); 

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleNext = () => {
    // Basic validation for email and password
    if (!email || !password) {
      message.error("Email and password are required!");
      return;
    }
    setShowNext(true);
  };

  const handleCompleteProfile = () => {
    // Additional validation
    if (!firstName || !lastName || !companyName || !field) {
      message.error("All fields are required!");
      return;
    }
    
    // After successful registration, navigate to the dashboard
    navigate('/admin'); 
  };

  // Add the login function with navigation to AdminPage
  const handleLogin = () => {
    if (!email || !password) {
      message.error("Email and password are required!");
      return;
    }
    // You can add login logic here (e.g., API call)
    navigate('/admin'); // Navigate to AdminPage on successful login
  };

  return (
    <div className="flex justify-center items-center bg-[#F2F9FA] h-[100vh] w-full font-montserrat">
      <div className="flex flex-col justify-center items-center h-[60vh] sm:w-[70vh] rounded-2xl border-[#2150B7] border bg-white p-5">
        {isLogin ? (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4" style={{
              background: "linear-gradient(180deg, #0073FC 0%, #556AFE 82.3%, #8266FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Login
            </h1>
            <Input
              placeholder="Email"
              prefix={<UserOutlined className="text-[#1890FF]" />}
              className="w-full mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined className="text-[#1890FF]" />}
              className="w-full mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-row justify-between items-center w-full mb-3">
              <Checkbox 
                checked={rememberMe}
                onChange={handleCheckboxChange} 
                className="font-roboto text-sm"
              >
                Remember Me
              </Checkbox>
              <Button type="link" className="text-[#0073FC] underline">
                Forgot your password?
              </Button>
            </div>
            <Button type="primary" className="w-full mb-3" onClick={handleLogin}>
              Login
            </Button>
            <div className="flex flex-row items-center font-roboto text-sm">
              <div className="mr-1">Don’t have an account?</div>
              <Button type="link" className="text-blue-600 underline p-0" onClick={() => setIsLogin(false)}>
                Sign Up
              </Button>
            </div>
          </div>
        ) : showNext ? (
          <div className="flex flex-col items-center w-[80%]">
            <h1 className="text-4xl font-bold mb-4" style={{
              background: "linear-gradient(180deg, #0073FC 0%, #556AFE 82.3%, #8266FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Sign up
            </h1>
            <Input
              placeholder="First Name"
              className="w-full mb-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              placeholder="Last Name"
              className="w-full mb-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              placeholder="Company Name"
              className="w-full mb-3"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <Input
              placeholder="Field"
              className="w-full mb-3"
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
            <Button type="primary" className="w-full mb-3" onClick={handleCompleteProfile}>
              Sign Up
            </Button>
            <div className="flex flex-row items-center font-roboto text-sm">
              <div className="mr-1">Already have an account?</div>
              <Button type="link" className="text-blue-600 underline p-0" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </div>
          </div>
        ) : showFinal ? (
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4" style={{
              background: "linear-gradient(180deg, #0073FC 0%, #556AFE 82.3%, #8266FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Let’s Get Started!
            </h2>
            <p className="mb-4 text-center">
              Take control of your company’s financial future with real-time insights and smart expense tracking.
            </p>
            <Button type="primary" className="w-full" onClick={() => console.log("Get Started")}>
              Get Started
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4" style={{
              background: "linear-gradient(180deg, #0073FC 0%, #556AFE 82.3%, #8266FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Sign Up
            </h1>
            <Input
              placeholder="Email"
              prefix={<UserOutlined className="text-[#1890FF]" />}
              className="w-full mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined className="text-[#1890FF]" />}
              className="w-full mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input.Password
              placeholder="Confirm Password"
              prefix={<LockOutlined className="text-[#1890FF]" />}
              className="w-full mb-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex flex-row justify-between items-center w-full mb-3">
              <Checkbox 
                checked={rememberMe}
                onChange={handleCheckboxChange} 
              >
                Remember Me
              </Checkbox>
              <Button type="link" className="text-[#0073FC] underline">
                Forgot your password?
              </Button>
            </div>
            <Button type="primary" className="w-full mb-3" onClick={handleNext}>
              Next
            </Button>
            <div className="flex flex-row items-center font-roboto text-sm">
              <div className="mr-1">Already have an account?</div>
              <Button type="link" className="text-blue-600 underline p-0" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
