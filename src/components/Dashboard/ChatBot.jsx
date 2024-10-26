import React, { useState } from 'react';
import start from "../../assets/star.png"; 
import close from "../../assets/arrow-up.png"; 
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      setSuggestedQuestions([]);
      setIsTyping(true);
      
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "This is a bot response to your message!", sender: 'bot' }
        ]);
        setIsTyping(false);
      }, 3000);
    }
  };

  const handleSuggestedQuestion = (question) => {
    setMessages([...messages, { text: question, sender: 'user' }]);
    setMessage('');
    setSuggestedQuestions([]);
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: "This is a bot response to your message!", sender: 'bot' }
      ]);
      setIsTyping(false);
    }, 3000);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {!isOpen && (
        <div className="absolute bottom-24 w-[275px] h-[100px] text-[16px] right-0 p-[10px] gap-[10px] rounded-[10px] bg-gradient-to-b text-white shadow-lg z-10"
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
        className="fixed bottom-5 right-5 w-[76px] h-[76px] rounded-full bg-gradient-to-b flex items-center justify-center text-white cursor-pointer shadow-lg"
        style={{
          background: 'linear-gradient(to bottom, #3b82f6 40%, #8b5cf6 100%)',
        }}>
        <img src={isOpen ? close : start} alt="Toggle Icon" className="w-[46px] h-[46px]" />
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-[572px] h-[580px] bg-white border-black border rounded-lg shadow-lg flex flex-col">
          <div className="p-3 bg-[#0D009B] h-[72px] text-white flex justify-between items-center rounded-t-lg">
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
              className="w-full p-2 h-[52px] rounded-[16px] border border-[#D4D4D4]"
            />
            <button 
              className="ml-2 p-2 w-[50px] h-[50px] bg-[#A6DBFF] text-white rounded-[16px] flex items-center justify-center"
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

