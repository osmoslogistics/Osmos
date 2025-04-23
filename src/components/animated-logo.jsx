"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ size = "md", animated = true }) {
  const sizes = {
    sm: { container: "w-32", logo: "w-8", text: "text-sm" },
    md: { container: "w-48", logo: "w-12", text: "text-base" },
    lg: { container: "w-64", logo: "w-16", text: "text-lg" },
  };

  return (
    <div className={`relative ${sizes[size].container}`}>
      <div className="logo-container">
        <img
          src="https://ucarecdn.com/bac18d7b-bcc4-4fbb-af6c-54f1aa848010/-/format/auto/"
          alt="OSMOS Transport & Logistics"
          className="logo"
        />

        <div className="text-content">
          <div className="company-name">OSMOS</div>
          <div className="tagline">TRANSPORT & LOGISTICS</div>
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .logo {
          width: 100%;
          height: auto;
          opacity: ${animated ? "0" : "1"};
          transform: ${animated ? "scale(0.95)" : "scale(1)"};
          animation: ${animated ? "logoReveal 0.6s ease-out forwards" : "none"};
          will-change: transform, opacity;
        }

        .text-content {
          text-align: center;
          opacity: ${animated ? "0" : "1"};
          transform: ${animated ? "translateY(10px)" : "translateY(0)"};
          animation: ${animated ? "textReveal 0.6s ease-out forwards 0.3s" : "none"};
          will-change: transform, opacity;
        }

        .company-name {
          color: #4A90E2;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .tagline {
          color: #000;
          font-weight: 500;
          letter-spacing: 0.2em;
          font-size: 0.75em;
        }

        @keyframes logoReveal {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function StoryComponent() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Small Logo</h2>
        <MainComponent size="sm" />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Medium Logo (Default)</h2>
        <MainComponent />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Large Logo (Animated)</h2>
        <MainComponent size="lg" />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Static Logo (No Animation)</h2>
        <MainComponent animated={false} />
      </div>
    </div>
  );
});
}