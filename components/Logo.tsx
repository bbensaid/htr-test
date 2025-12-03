// components/Logo.tsx

import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      {/* Graphic uses Primary Brand Color */}
      <svg
        className="w-8 h-8 text-primary"
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
        {/* Acronym uses Heading Color */}
        <span className="text-xl font-extrabold text-text-heading uppercase tracking-tight">
          HTR
        </span>
        {/* Full Name uses Body Color */}
        <span className="text-xs font-semibold text-text-body uppercase">
          Health Transformation Review
        </span>
      </div>
    </div>
  );
};

export default Logo;
