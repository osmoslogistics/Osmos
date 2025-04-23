"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const locations = [
    {
      city: "Harare",
      address: "David Morgan Crescent, Avondale, Harare, Zimbabwe",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      phone: "+263 773 258 788",
      email: "osmostlogistics@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: "fa-linkedin", url: "https://linkedin.com" },
    { icon: "fa-twitter", url: "https://twitter.com" },
    { icon: "fa-facebook", url: "https://facebook.com" },
    { icon: "fa-instagram", url: "https://instagram.com" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="fixed w-full bg-white dark:bg-gray-900 border-b border-[#E3F2FD] dark:border-[#172A46] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <></>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-osmos-blue dark:text-osmos-light-blue hover:text-osmos-blue dark:hover:text-osmos-light-blue font-inter"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-osmos-blue dark:text-osmos-light-blue hover:text-osmos-blue dark:hover:text-osmos-light-blue font-inter"
              >
                Services
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
                href="/"
                className="block px-3 py-2 text-osmos-blue dark:text-osmos-light-blue font-inter"
              >
                Home
              </a>
              <a
                href="/services"
                className="block px-3 py-2 text-osmos-blue dark:text-osmos-light-blue font-inter"
              >
                Services
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

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-gray-900 dark:text-white text-center mb-12 animate-fade-in">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="relative">
              <div className="absolute -z-10 opacity-10 dark:opacity-5">
                <i className="fas fa-truck text-6xl absolute -top-8 -left-4 animate-float-slow"></i>
                <i className="fas fa-ship text-7xl absolute top-40 -right-8 animate-float-slower"></i>
                <i className="fas fa-plane text-5xl absolute bottom-20 -left-12 animate-float"></i>
                <i className="fas fa-warehouse text-6xl absolute -bottom-8 right-0 animate-float-slow"></i>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 transform-gpu">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter transition-all duration-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent hover:border-[#0047AB] dark:hover:border-[#4A90E2] transform hover:scale-[1.02]"
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter transition-all duration-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent hover:border-[#0047AB] dark:hover:border-[#4A90E2] transform hover:scale-[1.02]"
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter transition-all duration-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent hover:border-[#0047AB] dark:hover:border-[#4A90E2] transform hover:scale-[1.02]"
                    required
                  />
                </div>
                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter transition-all duration-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent hover:border-[#0047AB] dark:hover:border-[#4A90E2] transform hover:scale-[1.02]"
                    required
                  ></textarea>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <a
                    href="tel:+263773258788"
                    className="group flex items-center justify-center bg-[#0047AB] text-white px-6 py-3 rounded-md font-inter transition-all duration-300 hover:bg-[#003380] transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <i className="fas fa-phone text-xl mr-2 group-hover:animate-wiggle"></i>
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/263773258788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-md font-inter transition-all duration-300 hover:bg-[#1ea952] transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <i className="fab fa-whatsapp text-xl mr-2 group-hover:animate-wiggle"></i>
                    Chat on WhatsApp
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="group w-full bg-[#0047AB] dark:bg-[#4A90E2] text-white py-3 rounded-md font-inter transition-all duration-300 hover:bg-[#003380] dark:hover:bg-[#357abd] transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <span className="relative flex items-center justify-center">
                    {submitStatus === "sending" ? (
                      <>
                        <i className="fas fa-circle-notch animate-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2 group-hover:animate-float"></i>
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-600 dark:text-green-400 text-center font-inter animate-fade-in flex items-center justify-center">
                    <i className="fas fa-check-circle mr-2 animate-bounce"></i>
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 dark:text-red-400 text-center font-inter animate-fade-in flex items-center justify-center">
                    <i className="fas fa-exclamation-circle mr-2 animate-pulse"></i>
                    Error sending message. Please try again.
                  </p>
                )}
              </form>

              <div className="mt-8 flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0047AB] dark:text-[#4A90E2] hover:opacity-80 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                  >
                    <i className={`fab ${social.icon} text-2xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.6!2d31.0340558!3d-17.8019143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ4JzA2LjkiUyAzMcKwMDInMDIuNiJF!5e0!3m2!1sen!2s!4v1645648755068!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300 hover:shadow-xl hover:border-[#0047AB] dark:hover:border-[#4A90E2] transform hover:scale-105 hover:-rotate-1 bg-white dark:bg-gray-900"
                  >
                    <h3 className="text-2xl font-bold font-inter text-gray-900 dark:text-white mb-3">
                      {location.city} Office
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-inter mb-3">
                      {location.address}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-inter mb-3">
                      {location.hours}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-inter mb-3 group">
                      <i className="fas fa-phone mr-2 group-hover:animate-wiggle"></i>
                      {location.phone}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-inter group">
                      <i className="fas fa-envelope mr-2 group-hover:animate-wiggle"></i>
                      {location.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-300 font-inter">
            © 2025 Osmos Logistics. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 5s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 1s ease-in-out; }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        
        .group:hover .group-hover\\:animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }
        
        .group:hover .group-hover\\:animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;