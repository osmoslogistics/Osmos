"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A192F]">
      <nav className="fixed w-full bg-white dark:bg-[#0A192F] border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a
                href="/"
                className="text-[#0047AB] dark:text-[#4A90E2] text-xl font-bold font-inter"
              >
                Osmos Logistics
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-[#0047AB] dark:hover:text-[#4A90E2] font-inter"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-gray-700 dark:text-gray-300 hover:text-[#0047AB] dark:hover:text-[#4A90E2] font-inter"
              >
                Services
              </a>
              <a
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-[#0047AB] dark:hover:text-[#4A90E2] font-inter"
              >
                About
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`fa-solid ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-gray-900 dark:text-white`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 font-inter"
              >
                Home
              </a>
              <a
                href="/services"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 font-inter"
              >
                Services
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 font-inter"
              >
                About
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white font-inter mb-4">
              Logistics Assistant
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-inter">
              Get instant answers to your logistics questions in Zimbabwe
            </p>
          </div>

          <div className="h-[600px] w-full rounded-lg shadow-lg overflow-hidden">
            <OsmosChatbot initialMessage="Hello! I'm your logistics assistant for Zimbabwe. How can I help you today? You can ask me about shipping rates, customs procedures, delivery times, or any other logistics-related questions." />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <i className="fa-solid fa-truck text-[#0047AB] dark:text-[#4A90E2] text-2xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-2">
                Shipping Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Ask about rates, routes, and delivery times for your shipments
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <i className="fa-solid fa-file-contract text-[#0047AB] dark:text-[#4A90E2] text-2xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-2">
                Customs Guidance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Learn about documentation and customs procedures
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <i className="fa-solid fa-clock text-[#0047AB] dark:text-[#4A90E2] text-2xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-2">
                Real-time Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Get instant answers about your shipment status
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-[#0A192F] border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-300 font-inter">
            © 2025 Osmos Logistics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;