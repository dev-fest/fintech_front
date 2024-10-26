import React, { useState,useEffect } from 'react';
import start from "../../../public/assests/chat_star.svg"; 
import close from "../../../public/assests/chat_arrow_up.svg";
import send from "../../assets/sendicon.png"; 

const TypingDots = () => (
  <div className="bg-[#b9bbbac9] p-4 rounded-2xl rounded-bl-md inline-block">
    <div className="flex items-center space-x-1">
      <div className="dot w-2 h-2 rounded-full animate-bounce" style={{ 
          animationDelay: '200ms',
          backgroundColor: 'gray' 
        }}></div>
      <div className="dot w-2 h-2 rounded-full animate-bounce" style={{ 
          animationDelay: '300ms',
          backgroundColor: 'gray' 
        }}></div>
      <div className="dot w-2 h-2 rounded-full animate-bounce" style={{ 
          animationDelay: '400ms',
          backgroundColor: 'gray' 
        }}></div>
    </div>
  </div>
);

const ChatBot = () => {
  const [showIntro, setShowIntro] = useState(true); // State to control introductory message
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "How can I edit my profile picture?",
    "Where do I find the expense tracking feature?",
    "How can I customize the financial dashboard?",
    "How do I generate a financial report?",
    "Can you guide me through uploading a file for analysis?"
  ]);
  const getUserId = () => {
    // Check if a user ID already exists in localStorage
    let userId = localStorage.getItem('userId');
    
    // If not, generate a new ID and store it
    if (!userId) {
      userId = `user-${Math.floor(Math.random() * 1000000)}`;
      localStorage.setItem('userId', userId);
    }
    
    return userId;
  };
  
  // Then, call this function when initializing the component:
  const [userId, setUserId] = useState(getUserId());
  const apiUrl = "https://dev-fest-chatbot.onrender.com/chat";

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      setSuggestedQuestions([]);
      setIsTyping(true);
      
      // Send message to the backend
      fetch("https://dev-fest-chatbot.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message,
          session_id: userId, // Include user ID here
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("Response from server:", data);
        setMessages(prevMessages => [
          ...prevMessages,
          { text: data.response, sender: 'bot' } // Display bot response
        ]);
        setIsTyping(false);
      })
      .catch(error => {
        console.error("Error:", error);
        setIsTyping(false);
      });
    }
  };
  

  const handleSuggestedQuestion = (question) => {
    const userMessage = { text: question, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setSuggestedQuestions([]);
    setIsTyping(true);
  
    // Fetch user ID from localStorage (or generate it if not present)
    const sessionId = getUserId(); // Assumes getUserId() is defined to retrieve or set a unique ID
  
    // Send the selected suggested question to the chatbot API
    fetch("https://dev-fest-chatbot.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: question,
        session_id: sessionId, // Use userId for the session ID
      })
    })
    .then(response => response.json())
    .then(data => {
      setMessages(prev => [
        ...prev,
        { text: data.response, sender: 'bot' }
      ]);
    })
    .catch(error => {
      console.error("Error:", error);
    })
    .finally(() => {
      setIsTyping(false);
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
       {!isOpen && showIntro && (
        <div className="absolute bottom-14 w-[275px] h-[100px] text-[16px] right-0 p-[10px] gap-[10px] rounded-[10px] bg-gradient-to-b text-white shadow-lg z-10"
          style={{
            background: 'linear-gradient(to bottom, #3b82f6 40%, #8b5cf6 100%)',
            fontWeight: 500,
          }}>
          <p>
            Hi! 👋 My name is B4, and I'm your assistant.
            <br />
            Looking for something? Have a question? I'm here to help you!
          </p>
        </div>
      )}

      <div
        onClick={toggleChat}
        className="fixed bottom-5 right-5 p-1 w-[50px] h-[50px] rounded-full bg-gradient-to-b flex items-center justify-center text-white cursor-pointer shadow-lg"
        style={{
          background: 'linear-gradient(to bottom, #3b82f6 40%, #8b5cf6 100%)',
        }}>
        <img src={isOpen ? close : start} alt="Toggle Icon" className="w-[25px] " />
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-[35vw] h-[80vh] bg-white border-black border rounded-lg shadow-lg flex flex-col">
          <div className="p-3 bg-[#0D009B] h-[10vh] text-white flex justify-between items-center rounded-t-lg">
            <span className="font-bold text-[28px] ml-5">B4 ChatBot</span>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex justify-${msg.sender === 'bot' ? 'start' : 'end'} mb-2`}>
                <div className={`p-2 rounded-md ${msg.sender === 'bot' ? 'bg-[#DFF2FF] text-left' : 'bg-[#A6DBFF] text-right'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-2">
                <TypingDots />
              </div>
            )}
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                className="w-full text-left p-2 mb-2 bg-[#DFF2FF] border border-[#A6DBFF] text-black rounded-md hover:bg-blue-200"
                onClick={() => handleSuggestedQuestion(question)}>
                {question}
              </button>
            ))}
          </div>
          <div className="p-3 border-gray-200 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type here..."
              className="w-full p-2 h-[45px] rounded-[16px] shadow-md border border-[#D4D4D4 outline-none focus:border-blue-500  focus:shadow-blue-100"
            />
            <button 
              className="ml-2 p-2 w-[45px] h-[45px] bg-[#A6DBFF] text-white rounded-[16px] flex items-center justify-center"
              onClick={handleSendMessage}>
              <img src={send} alt="Send" className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

