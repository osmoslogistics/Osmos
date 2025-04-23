"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    rating: 5,
    review: "",
    email: "",
  });

  const stats = [
    { number: "200+", label: "Happy Clients" },
    { number: "4.1", label: "Average Rating" },
    { number: "95%", label: "Client Retention" },
    { number: "15+", label: "Countries Served" },
  ];

  const serviceTypes = [
    { id: "all", label: "All Services" },
    { id: "global-shipping", label: "Global Shipping" },
    { id: "air-freight", label: "Air Freight" },
    { id: "ground-transport", label: "Ground Transport" },
    { id: "warehousing", label: "Warehousing" },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/testimonials/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service: activeFilter === "all" ? null : activeFilter,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();
        setTestimonials(data.data || []);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Unable to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [activeFilter]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/testimonials/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit testimonial");
      }

      setFormData({
        name: "",
        company: "",
        service: "",
        rating: 5,
        review: "",
        email: "",
      });

      const newFilter = activeFilter;
      setActiveFilter("all");
      setTimeout(() => setActiveFilter(newFilter), 0);
    } catch (err) {
      console.error("Error submitting testimonial:", err);
      alert("Failed to submit testimonial. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 })
      .fill(0)
      .map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        ></i>
      ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="fixed w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
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
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-[#0047AB] dark:hover:text-[#4A90E2] font-inter"
              >
                Contact
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
                href="/contact"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 font-inter"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-gray-900 dark:text-white text-center mb-12">
              Client Testimonials
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg"
                >
                  <div className="text-3xl font-bold text-[#0047AB] dark:text-[#4A90E2] font-inter mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-inter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={`px-6 py-2 rounded-full font-inter ${
                    activeFilter === type.id
                      ? "bg-[#0047AB] dark:bg-[#4A90E2] text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {error && (
              <div className="text-red-500 text-center mb-8">{error}</div>
            )}

            {loading ? (
              <div className="text-center mb-8">Loading testimonials...</div>
            ) : testimonials.length === 0 ? (
              <div className="text-center mb-8 text-gray-700 dark:text-gray-300">
                No testimonials yet. Be the first to share your experience!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div>
                        <h3 className="font-bold font-inter text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-inter">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-inter mb-4">
                      {testimonial.review}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-inter text-gray-900 dark:text-white text-center mb-8">
                Share Your Experience
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter"
                    required
                  >
                    <option value="">Select Service</option>
                    {serviceTypes.slice(1).map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter"
                    required
                  >
                    {[5, 4, 3, 2, 1].map((num) => (
                      <option key={num} value={num}>
                        {num} Stars
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="review"
                  placeholder="Your Review"
                  value={formData.review}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter"
                  required
                ></textarea>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-inter"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#0047AB] dark:bg-[#4A90E2] text-white py-3 rounded-md font-inter hover:opacity-90 transition-opacity"
                >
                  Submit Testimonial
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
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