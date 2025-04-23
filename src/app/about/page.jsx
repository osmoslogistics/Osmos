"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      number: "15+",
      label: "African Countries Served",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
    },
    {
      number: "1000+",
      label: "Successful Deliveries",
    },
    {
      number: "24/7",
      label: "Customer Support",
    },
  ];

  const values = [
    {
      icon: "fa-solid fa-handshake",
      title: "Integrity",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Innovation",
    },
    {
      icon: "fa-solid fa-users",
      title: "Collaboration",
    },
    {
      icon: "fa-solid fa-star",
      title: "Excellence",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A192F]">
      <head>
        <title>
          About OSMOS Logistics | Leading African Transport & Logistics Company
        </title>
        <meta
          name="description"
          content="Learn about OSMOS Logistics, a leading African logistics company founded in 2022. Discover our story, values, and commitment to transforming supply chain solutions across Africa."
        />
        <meta
          name="keywords"
          content="OSMOS Logistics, African logistics, supply chain, Zimbabwe logistics, logistics company history, transport company"
        />
        <meta
          property="og:title"
          content="About OSMOS Logistics | African Transport & Logistics Leader"
        />
        <meta
          property="og:description"
          content="Founded in 2022, OSMOS Logistics is transforming African supply chains with innovative solutions and excellence in service delivery."
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/bac18d7b-bcc4-4fbb-af6c-54f1aa848010/-/format/auto/"
        />
        <meta
          property="og:url"
          content="https://osmos-logistics.create.xyz/about"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://osmos-logistics.create.xyz/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "OSMOS Logistics",
                "foundingDate": "2022",
                "founder": {
                  "@type": "Person",
                  "name": "Cosmas Kafesu"
                },
                "description": "African logistics company specializing in supply chain solutions",
                "areaServed": "Africa",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "10-50"
                },
                "award": [
                  "99% Client Satisfaction Rate",
                  "Serving 15+ African Countries"
                ]
              }
            }
          `}
        </script>
      </head>

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
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-gray-900 dark:text-white text-center mb-8">
                Our Story
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 font-inter text-center mb-12 max-w-3xl mx-auto">
                Founded by Cosmas Kafesu in 2022, Osmos Logistics has been
                transforming the African supply chain industry with innovative
                solutions and unwavering commitment to excellence. We specialize
                in connecting African businesses to global markets with
                reliable, efficient logistics services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 border border-[#E3F2FD] dark:border-[#172A46] rounded-lg transform hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl font-bold text-[#0066CC] dark:text-[#64B5F6] font-inter mb-2 animate-float">
                    {stat.number}
                  </div>
                  <div className="text-[#334155] dark:text-[#B2DFFC] font-inter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold font-inter text-[#0A192F] dark:text-white text-center mb-12">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center p-6 border border-[#E3F2FD] dark:border-[#172A46] rounded-lg transform hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                  >
                    <i
                      className={`${value.icon} text-[#0066CC] dark:text-[#64B5F6] text-3xl mb-4 animate-bounce-gentle`}
                    ></i>
                    <h3 className="text-xl font-bold font-inter text-[#0A192F] dark:text-white mb-2">
                      {value.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-inter text-[#0A192F] dark:text-white mb-8">
                Our Vision
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 font-inter mb-12">
                We envision a future where global trade is seamless,
                sustainable, and accessible to businesses of all sizes. Through
                continuous innovation and strategic partnerships, we're building
                tomorrow's logistics solutions today.
              </p>
              <div className="flex justify-center">
                <a
                  href="/services"
                  className="bg-[#0066CC] dark:bg-[#1E88E5] text-white px-8 py-3 rounded-md font-inter hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-[#0A192F] border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-300 font-inter">
            © 2025 Osmos Logistics. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-inter">
            Established 2022 | Delivering Excellence in African Logistics
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .hover\\:scale-105 {
          transition: all 0.3s ease;
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:translate-y-\\[-10px\\]:hover {
          transform: translateY(-10px);
        }

        .hover\\:translate-y-\\[-5px\\]:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;