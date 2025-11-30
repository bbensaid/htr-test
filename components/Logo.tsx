// components/Logo.tsx

import React from "react";

const Logo: React.FC = () => {
  // Placeholder for the finalized logo graphic and typography.
  // Replace this SVG with your actual HTR logo file (e.g., an Image component).
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      {/* Placeholder Graphic: Use your final HTR image here */}
      <svg
        className="w-8 h-8 text-blue-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <div className="flex flex-col leading-none">
        {/* Main Acronym - Replace with your designed HTR Acronym */}
        <span className="text-xl font-extrabold text-gray-900 uppercase tracking-tight">
          HTR
        </span>
        {/* Full Name - Will be the larger, professional font size */}
        <span className="text-xs font-semibold text-gray-600 uppercase">
          Health Transformation Review
        </span>
      </div>
    </div>
  );
};

export default Logo;
