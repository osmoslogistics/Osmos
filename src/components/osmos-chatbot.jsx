"use client";
import React from "react";

import { useHandleStreamResponse } from '../utilities/runtime-helpers'

export default function Index() {
  return (function MainComponent({ initialMessage = "Hello! I'm your logistics assistant. How can I help you today?" }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: initialMessage }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [streamingMessage, setStreamingMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleStreamResponse = useHandleStreamResponse({
    onChunk: setStreamingMessage,
    onFinish: (message) => {
      setMessages(prev => [...prev, { role: 'assistant', content: message }]);
      setStreamingMessage('');
      setIsLoading(false);
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = { role: 'user', content: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/integrations/google-gemini-1-5/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          stream: true
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      handleStreamResponse(response);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to get response. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#F0F8FF] to-[#E6E6FA] dark:from-gray-900 dark:to-gray-800">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-[#0047AB] text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                } shadow-md font-inter`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {streamingMessage && (
            <div className="flex justify-start animate-fadeIn">
              <div className="max-w-[80%] rounded-lg p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md font-inter">
                {streamingMessage}
              </div>
            </div>
          )}
          {isLoading && !streamingMessage && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-4 bg-white dark:bg-gray-700 shadow-md">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center font-inter">
              {error}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about logistics in Zimbabwe..."
            className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
          />
          <button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="px-6 py-2 bg-[#0047AB] text-white rounded-lg font-inter hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

function StoryComponent() {
  return (
    <div className="h-[600px] w-full">
      <MainComponent
        initialMessage="Welcome to the Zimbabwe Logistics Assistant! I can help you with shipping, customs, and logistics queries. How may I assist you today?"
      />
    </div>
  );
});
}