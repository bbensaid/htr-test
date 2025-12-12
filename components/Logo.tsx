// components/Logo.tsx

import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer select-none">
      {/* ICON: 'HTR' Symbol (White text on Dark Background) */}
      <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded">
        <svg
          className="w-full h-full"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontWeight="900"
            fontSize="14"
            fontFamily="sans-serif"
            className="tracking-tighter"
          >
            HTR
          </text>
        </svg>
      </div>

      {/* TEXT: Uniform Style for all 3 words */}
      <div className="flex flex-col font-sans uppercase leading-none gap-[1px]">
        <span className="text-[14px] font-black text-slate-900 tracking-tight">
          HEALTH
        </span>
        <span className="text-[14px] font-black text-slate-900 tracking-tight">
          TRANSFORMATION
        </span>
        <span className="text-[14px] font-black text-slate-900 tracking-tight">
          REVIEW
        </span>
      </div>
    </div>
  );
};

export default Logo;
