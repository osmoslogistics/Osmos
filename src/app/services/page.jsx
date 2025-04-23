"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const services = [
    {
      id: "rail-transport",
      title: "Rail Transport",
      icon: "fa-solid fa-train",
      description: "Efficient and sustainable rail freight solutions",
      features: [
        "Bulk cargo transportation",
        "Intermodal container services",
        "Cross-border rail freight",
        "Track and trace capabilities",
        "Rail-to-door delivery options",
        "Specialized cargo handling",
      ],
    },
    {
      id: "global-shipping",
      title: "Global Shipping",
      icon: "fa-solid fa-ship",
      description: "End-to-end ocean freight solutions for international trade",
      features: [
        "Container shipping services",
        "Port-to-port delivery",
        "Customs clearance assistance",
        "Real-time cargo tracking",
      ],
    },
    {
      id: "air-freight",
      title: "Air Freight",
      icon: "fa-solid fa-plane",
      description: "Fast and reliable air cargo transportation worldwide",
      features: [
        "Express air freight",
        "Charter services",
        "Temperature-controlled shipping",
        "Door-to-door delivery",
      ],
    },
    {
      id: "ground-transport",
      title: "Ground Transport",
      icon: "fa-solid fa-truck",
      description: "Efficient road transportation solutions",
      features: [
        "Full truckload services",
        "Less than truckload (LTL)",
        "Last-mile delivery",
        "Cross-border trucking",
      ],
    },
    {
      id: "warehousing",
      title: "Warehousing",
      icon: "fa-solid fa-warehouse",
      description: "Strategic storage and distribution solutions",
      features: [
        "Inventory management",
        "Order fulfillment",
        "Cross-docking services",
        "Climate-controlled storage",
      ],
    },
    {
      id: "logistics-consulting",
      title: "Logistics Consulting",
      icon: "fa-solid fa-clipboard-check",
      description: "Expert guidance for optimizing your supply chain",
      features: [
        "Supply chain optimization",
        "Route planning and analysis",
        "Cost reduction strategies",
        "Network design and optimization",
        "Risk assessment and management",
        "Technology implementation advice",
      ],
    },
    {
      id: "customs-brokerage",
      title: "Customs Brokerage",
      icon: "fa-solid fa-passport",
      description: "Seamless customs clearance and compliance services",
      features: [
        "Import/Export documentation",
        "Customs compliance",
        "Tariff classification",
        "Duty and tax calculation",
        "Regulatory compliance",
        "Trade consulting",
      ],
    },
    {
      id: "specialized-cargo",
      title: "Specialized Cargo",
      icon: "fa-solid fa-box-open",
      description: "Handling of unique and sensitive shipments",
      features: [
        "Hazardous materials transport",
        "Oversized cargo handling",
        "High-value goods security",
        "Temperature-sensitive items",
        "Project cargo logistics",
        "Special equipment provision",
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("/api/quote/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit quote request");
      }

      setSubmitStatus({
        loading: false,
        success: true,
        error: null,
      });
      setFormData({
        name: "",
        email: "",
        service: "",
        details: "",
      });

      setTimeout(() => {
        setSubmitStatus({
          loading: false,
          success: false,
          error: null,
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting quote:", error);
      setSubmitStatus({
        loading: false,
        success: false,
        error: error.message,
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A192F]">
      <nav className="fixed w-full bg-white dark:bg-[#0A192F] border-b border-[#E3F2FD] dark:border-[#172A46] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-[#0066CC] dark:bg-[#64B5F6] transform rotate-45"></div>
                  <div className="absolute inset-1 bg-[#003366] dark:bg-[#1E88E5] transform rotate-45"></div>
                  <div className="absolute inset-2 bg-[#0066CC] dark:bg-[#64B5F6] transform rotate-45 flex items-center justify-center">
                    <div className="w-4 h-[1px] bg-white"></div>
                  </div>
                </div>
                <span className="text-[#0066CC] dark:text-[#64B5F6] text-xl font-bold font-inter">
                  OSMOS
                  <span className="text-sm block -mt-1 text-[#334155] dark:text-[#B2DFFC]">
                    Transport & Logistics
                  </span>
                </span>
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-[#334155] dark:text-[#B2DFFC] hover:text-[#0066CC] dark:hover:text-[#64B5F6] font-inter"
              >
                Home
              </a>
              <a
                href="#quote"
                className="text-[#334155] dark:text-[#B2DFFC] hover:text-[#0066CC] dark:hover:text-[#64B5F6] font-inter"
              >
                Request Quote
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`fa-solid ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-[#334155] dark:text-[#B2DFFC]`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#0A192F]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 text-[#334155] dark:text-[#B2DFFC] font-inter"
              >
                Home
              </a>
              <a
                href="#quote"
                className="block px-3 py-2 text-[#334155] dark:text-[#B2DFFC] font-inter"
              >
                Request Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-[#0066CC] dark:bg-[#64B5F6] transform rotate-45"></div>
                <div className="absolute inset-2 bg-[#003366] dark:bg-[#1E88E5] transform rotate-45"></div>
                <div className="absolute inset-4 bg-[#0066CC] dark:bg-[#64B5F6] transform rotate-45 flex items-center justify-center">
                  <div className="w-8 h-[2px] bg-white"></div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0A192F] dark:text-white text-center mb-4 animate-fade-in">
                Our Services
              </h1>
              <p className="text-[#334155] dark:text-[#B2DFFC] text-center max-w-2xl">
                Get it delivered quickly - Professional logistics solutions for
                your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="border border-[#E3F2FD] dark:border-[#172A46] rounded-lg p-6 hover:shadow-lg transition-all bg-white dark:bg-[#112240] animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? null : service.id
                    )
                  }
                >
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <i
                        className={`${service.icon} text-[#0066CC] dark:text-[#64B5F6] text-3xl mr-4 animate-bounce-subtle`}
                      ></i>
                      <div className="absolute -inset-1 bg-[#0066CC] dark:bg-[#64B5F6] opacity-10 rounded-full blur animate-pulse"></div>
                    </div>
                    <h2 className="text-2xl font-bold font-inter text-[#0A192F] dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-[#334155] dark:text-[#B2DFFC] font-inter mb-4">
                    {service.description}
                  </p>
                  <div
                    className={`grid grid-cols-1 gap-2 transition-all duration-300 ${
                      activeService === service.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <i className="fa-solid fa-check text-[#0066CC] dark:text-[#64B5F6] mr-2"></i>
                        <span className="text-[#334155] dark:text-[#B2DFFC] font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="quote"
          className="py-20 px-4 bg-[#F8FAFC] dark:bg-[#112240] relative"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="animate-wave absolute bottom-0 left-0 right-0 h-64 opacity-5 dark:opacity-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230066CC' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat-x",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold font-inter text-[#0A192F] dark:text-white text-center mb-8 animate-fade-in">
              Request a Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div className="transform hover:scale-105 transition-transform">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-[#E3F2FD] dark:border-[#172A46] bg-white dark:bg-[#0A192F] text-[#334155] dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#0066CC] dark:focus:ring-[#1E88E5]"
                  required
                />
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-[#E3F2FD] dark:border-[#172A46] bg-white dark:bg-[#0A192F] text-[#334155] dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#0066CC] dark:focus:ring-[#1E88E5]"
                  required
                />
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-[#E3F2FD] dark:border-[#172A46] bg-white dark:bg-[#0A192F] text-[#334155] dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#0066CC] dark:focus:ring-[#1E88E5]"
                  required
                >
                  <option value="">Select a Service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <textarea
                  name="details"
                  placeholder="Additional Details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-md border border-[#E3F2FD] dark:border-[#172A46] bg-white dark:bg-[#0A192F] text-[#334155] dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#0066CC] dark:focus:ring-[#1E88E5]"
                  required
                ></textarea>
              </div>

              {submitStatus.error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
                  <p className="text-red-600 dark:text-red-400 font-inter text-center">
                    {submitStatus.error}
                  </p>
                </div>
              )}

              {submitStatus.success && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4">
                  <p className="text-green-600 dark:text-green-400 font-inter text-center">
                    Quote request submitted successfully! We'll contact you
                    soon.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus.loading}
                className="w-full bg-[#0066CC] dark:bg-[#1E88E5] text-white py-3 rounded-md font-inter hover:bg-[#0052A3] dark:hover:bg-[#1976D2] transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus.loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-[#0A192F] border-t border-[#E3F2FD] dark:border-[#172A46] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 mb-4">
              <div className="absolute inset-0 bg-[#0066CC] dark:bg-[#64B5F6] transform rotate-45"></div>
              <div className="absolute inset-1 bg-[#003366] dark:bg-[#1E88E5] transform rotate-45"></div>
              <div className="absolute inset-2 bg-[#0066CC] dark:bg-[#64B5F6] transform rotate-45 flex items-center justify-center">
                <div className="w-5 h-[1px] bg-white"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[#334155] dark:text-[#B2DFFC] font-inter">
                © 2025 Osmos Transport & Logistics. All rights reserved.
              </p>
              <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mt-1 font-inter">
                Established 2022 | Delivering Excellence in Global Logistics
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes wave {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out backwards;
        }

        .animate-slide-up {
          animation: slideIn 0.5s ease-out backwards;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 10s linear infinite;
        }

        .hover\:shadow-lg {
          transition: all 0.3s ease;
        }

        .hover\:shadow-lg:hover {
          transform: translateY(-2px);
        }

        .hover\:scale-105 {
          transition: transform 0.3s ease;
        }

        .hover\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;