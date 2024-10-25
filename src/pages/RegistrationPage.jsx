import React, { useState } from "react";
import { Input, Checkbox, Button, message } from 'antd'; 
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"; 
import useAuthStore from "../store/useAuthStore";

const RegistrationPage = () => {
  const navigate = useNavigate(); 
  const { login, signup } = useAuthStore();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showNext, setShowNext] = useState(false); 

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleNext = () => {
    if (!email || !password) {
      message.error("Email and password are required!");
      return;
    }
    setShowNext(true);
  };

  const handleCompleteProfile = async () => {
    if (!firstName || !lastName) {
        message.error("All fields are required!");
        return;
    }
    const roleId = "671420c2df2d71de25efde15"; 
    try {
        await signup(firstName, lastName, email, password, roleId);
        console.log("success")
        message.success("Registration successful!");
        navigate('/admin');
    } catch (error) {
        message.error("Registration failed: " + (error.response?.data?.message || "An error occurred."));
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
        message.error("Email and password are required!");
        return;
    }
    try {
        const response = await login(email, password); 
        // console.log("Login successful!", response.access_token); //to debug
        message.success("Login successful!");
        navigate('/admin');
    } catch (error) {
        // console.error("Login failed:", error); //debugging
        const errorMessage = error.response?.data?.message || "An error occurred.";
        message.error("Login failed: " + errorMessage);
    }
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
