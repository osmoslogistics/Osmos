"use client";
import React from "react";

import { useHandleStreamResponse } from "../utilities/runtime-helpers";

function MainComponent() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [streamingMessage, setStreamingMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hey there! 👋 I'm Ossy, your friendly Osmos Logistics assistant! I can help you understand our services and collect your information so our team can provide you with the best logistics solutions in Zimbabwe. How can I assist you today? 🚚✨",
      },
    ]);
  }, []);

  const handleStreamResponse = useHandleStreamResponse({
    onChunk: setStreamingMessage,
    onFinish: (message) => {
      setMessages((prev) => [...prev, { role: "assistant", content: message }]);
      setStreamingMessage("");
      setLoading(false);
    },
  });

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { role: "user", content: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("/integrations/chat-gpt/conversationgpt4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "You are Ossy, Osmos Logistics' friendly AI assistant. Your role is to help gather information from potential customers and direct them to contact Osmos Logistics for detailed services. Never refer to or recommend other logistics companies. Instead, focus on understanding the customer's needs and encouraging them to get in touch with the Osmos team for personalized solutions. When discussing rates or services, provide general information and always emphasize that for accurate quotes and detailed information, they should contact the Osmos team through the contact form or request a quote. Use phrases like 'Our team would be happy to provide you with a detailed quote' or 'Let me help collect some information so our team can assist you better.' Keep the tone friendly and professional, using emojis occasionally, while maintaining focus on Osmos Logistics' services. For specific inquiries about rates or services, ask for relevant details (like cargo type, weight, destination) and then guide them to submit a quote request or contact form for personalized assistance.",
            },
            ...messages,
            newMessage,
          ],
          stream: true,
        }),
      });
      handleStreamResponse(response);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center relative">
              <span className="text-2xl">🚚</span>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm">
                ⭐
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Chat with Ossy
              </h1>
              <p className="text-sm text-gray-600">
                Your Cool Logistics Buddy 🎯
              </p>
            </div>
          </div>

          <div className="h-[500px] overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-4 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800 shadow"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {streamingMessage && (
              <div className="text-left">
                <div className="inline-block p-4 rounded-lg bg-white text-gray-800 shadow">
                  {streamingMessage}
                </div>
              </div>
            )}
            {loading && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask Ossy about logistics..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span>Send</span>
              {!loading && <span>🚀</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;