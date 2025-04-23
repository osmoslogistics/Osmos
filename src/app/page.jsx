"use client";
import React from "react";
import OsmosChatbot from "../components/osmos-chatbot";
import AnimatedLogo from "../components/animated-logo";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <head>
        <title>
          OSMOS Transport & Logistics | Global Shipping & Freight Solutions
        </title>
        <meta
          name="description"
          content="OSMOS Logistics provides comprehensive shipping, air freight, and ground transport solutions. Get reliable logistics services with real-time tracking and worldwide delivery."
        />
        <meta
          name="keywords"
          content="logistics, shipping, freight, transport, cargo, warehousing, supply chain, Zimbabwe logistics, Africa logistics"
        />

        <meta
          property="og:title"
          content="OSMOS Transport & Logistics | Global Shipping Solutions"
        />
        <meta
          property="og:description"
          content="Comprehensive shipping, air freight, and ground transport solutions with real-time tracking and worldwide delivery."
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/bac18d7b-bcc4-4fbb-af6c-54f1aa848010/-/format/auto/"
        />
        <meta property="og:url" content="https://osmos-logistics.create.xyz" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OSMOS Transport & Logistics" />
        <meta
          name="twitter:description"
          content="Global shipping and logistics solutions with real-time tracking."
        />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/bac18d7b-bcc4-4fbb-af6c-54f1aa848010/-/format/auto/"
        />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="OSMOS Logistics" />

        <link rel="canonical" href="https://osmos-logistics.create.xyz" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OSMOS Transport & Logistics",
              "description": "Global logistics and shipping solutions provider",
              "url": "https://osmos-logistics.create.xyz",
              "logo": "https://ucarecdn.com/bac18d7b-bcc4-4fbb-af6c-54f1aa848010/-/format/auto/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "David Morgan Crescent, Avondale",
                "addressLocality": "Harare",
                "addressCountry": "Zimbabwe"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+263 773 258 788",
                "contactType": "customer service",
                "email": "osmostlogistics@gmail.com"
              },
              "sameAs": [
                "https://www.facebook.com/osmoslogistics",
                "https://www.twitter.com/osmoslogistics",
                "https://www.linkedin.com/company/osmoslogistics"
              ]
            }
          `}
        </script>
      </head>

      <nav className="fixed w-full bg-white dark:bg-gray-900 border-b border-[#E3F2FD] dark:border-[#172A46] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <AnimatedLogo size="sm" />
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-osmos-blue dark:text-osmos-light-blue hover:text-osmos-blue dark:hover:text-osmos-light-blue font-inter"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-osmos-blue dark:text-osmos-light-blue hover:text-osmos-blue dark:hover:text-osmos-light-blue font-inter"
              >
                Contact
              </a>
              <a
                href="/about"
                className="text-osmos-blue dark:text-osmos-light-blue hover:text-osmos-blue dark:hover:text-osmos-light-blue font-inter"
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
                } text-osmos-blue dark:text-osmos-light-blue`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#services"
                className="block px-3 py-2 text-osmos-blue dark:text-osmos-light-blue font-inter"
              >
                Services
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-osmos-blue dark:text-osmos-light-blue font-inter"
              >
                Contact
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-osmos-blue dark:text-osmos-light-blue font-inter"
              >
                About
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <div className="flex justify-center items-center pt-24 pb-12">
          <AnimatedLogo size="lg" />
        </div>

        <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="animate-float-slow absolute top-20 left-10 opacity-10 dark:opacity-20">
              <i className="fa-solid fa-plane text-6xl text-osmos-blue dark:text-osmos-light-blue transform -rotate-45"></i>
            </div>
            <div className="animate-float absolute top-40 right-20 opacity-10 dark:opacity-20">
              <i className="fa-solid fa-ship text-7xl text-osmos-blue dark:text-osmos-light-blue"></i>
            </div>
            <div className="animate-float-fast absolute bottom-20 left-1/4 opacity-10 dark:opacity-20">
              <i className="fa-solid fa-truck text-5xl text-osmos-blue dark:text-osmos-light-blue"></i>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold font-inter text-osmos-blue dark:text-white mb-6 animate-title">
                Global Logistics Solutions
              </h1>
              <p className="text-xl text-osmos-blue dark:text-osmos-light-blue font-inter mb-8 animate-fade-in">
                Streamline your supply chain with our comprehensive logistics
                services
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
                <button className="bg-osmos-blue dark:bg-osmos-light-blue text-white px-8 py-3 rounded-md font-inter hover:bg-osmos-blue dark:hover:bg-osmos-light-blue transition-all transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-osmos-blue dark:border-osmos-light-blue text-osmos-blue dark:text-osmos-light-blue px-8 py-3 rounded-md font-inter hover:bg-osmos-blue hover:text-white dark:hover:bg-osmos-light-blue dark:hover:text-white transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold font-inter text-osmos-blue dark:text-white text-center mb-12 animate-fade-in">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-[#E3F2FD] dark:border-[#172A46] rounded-lg hover:shadow-lg transition-all transform hover:scale-105 bg-white dark:bg-[#112240] animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <i
                    className={`${service.icon} text-osmos-blue dark:text-osmos-light-blue text-3xl mb-4 animate-bounce-subtle`}
                  ></i>
                  <div className="absolute -inset-1 bg-osmos-blue dark:bg-osmos-light-blue opacity-10 rounded-full blur animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold font-inter text-osmos-blue dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#334155] dark:text-[#B2DFFC] font-inter mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-[#334155] dark:text-[#B2DFFC] font-inter"
                    >
                      <i className="fa-solid fa-check text-osmos-blue dark:text-osmos-light-blue mr-2 text-sm"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-[#F8FAFC] dark:bg-[#112240]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-inter text-osmos-blue dark:text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#334155] dark:text-[#B2DFFC] font-inter mb-8">
              Contact us for immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/263773258788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-osmos-blue dark:bg-osmos-light-blue text-white px-8 py-3 rounded-md font-inter hover:bg-opacity-90 transition-opacity"
              >
                <i className="fab fa-whatsapp text-xl mr-2"></i>
                Chat on WhatsApp
              </a>
              <button
                onClick={() => setIsLiveChatOpen(true)}
                className="inline-flex items-center justify-center bg-osmos-blue dark:bg-osmos-light-blue text-white px-8 py-3 rounded-md font-inter hover:bg-osmos-blue dark:hover:bg-osmos-light-blue transition-colors"
              >
                <i className="fa-solid fa-comments text-xl mr-2"></i>
                Live Chat
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-[#E3F2FD] dark:border-[#172A46] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#334155] dark:text-[#B2DFFC] font-inter">
            © 2025 Osmos Logistics. All rights reserved.
          </p>
        </div>
      </footer>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 bg-osmos-blue dark:bg-osmos-light-blue text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <i className="fa-solid fa-comments text-2xl"></i>
      </button>

      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0A192F] rounded-lg shadow-xl w-full max-w-2xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-[#E3F2FD] dark:border-[#172A46]">
              <div className="flex items-center">
                <i className="fa-solid fa-robot text-osmos-blue dark:text-osmos-light-blue text-xl mr-2"></i>
                <h3 className="text-osmos-blue dark:text-white font-bold font-inter">
                  Chat with Osmos
                </h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-[#334155] dark:text-[#B2DFFC] hover:text-osmos-blue dark:hover:text-white"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <OsmosChatbot />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .text-osmos-blue {
          color: #0047AB;
        }

        .text-osmos-light-blue {
          color: #4A90E2;
        }

        .bg-osmos-blue {
          background-color: #0047AB;
        }

        .bg-osmos-light-blue {
          background-color: #4A90E2;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;