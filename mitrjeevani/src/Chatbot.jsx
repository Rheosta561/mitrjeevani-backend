import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return; 

    setMessages((prevMessages) => [...prevMessages, { type: 'sent', text: userInput }]);
    setUserInput(''); 
    setLoading(true); 

    try {
      const res = await axios.post('http://localhost:3001/api/process', { userInput });
      setMessages((prevMessages) => [...prevMessages, { type: 'received', text: res.data.result }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { type: 'received', text: 'Error occurred while processing your request.' }]);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 w-full max-w-2xl sm:w-svw mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="w-full h-96 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-lg max-w-2xl ${
              msg.type === 'sent'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-gray-300 text-gray-900 self-start mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="my-2 p-3 rounded-lg max-w-xs bg-gray-300 text-gray-900 self-start mr-auto">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce transition-all" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce transition-all" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce transition-all" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full">
        <input 
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me something..."
          className="flex-grow p-3 rounded-lg border border-gray-300 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
