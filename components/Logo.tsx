// components/Logo.tsx
import React from "react";

interface LogoProps {
  theme?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ theme = "light" }) => {
  // Styles based on theme
  const textColor = theme === "dark" ? "text-white" : "text-slate-900";
  // Sharpness Fix: Darker slate (600) for better contrast on white background
  const taglineColor = theme === "dark" ? "text-slate-400" : "text-slate-600";
  const boxBg = theme === "dark" ? "bg-white" : "bg-slate-900";
  const htrColor = theme === "dark" ? "fill-slate-900" : "fill-white";

  return (
    <div className="flex items-center gap-3 cursor-pointer select-none group">
      {/* ICON: 'HTR' Symbol */}
      <div
        className={`w-11 h-11 ${boxBg} flex items-center justify-center rounded-sm shadow-sm transition-transform group-hover:scale-105`}
      >
        <svg
          className="w-full h-full p-1"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={`${htrColor} tracking-tighter`}
            fontWeight="900"
            fontSize="14"
            fontFamily="sans-serif"
          >
            HTR
          </text>
        </svg>
      </div>

      {/* TEXT STACK */}
      <div className="flex flex-col justify-center">
        {/* Main Title */}
        <div
          className={`flex flex-col font-sans uppercase leading-[0.9] ${textColor}`}
        >
          <span className="text-[15px] font-black tracking-tight">HEALTH</span>
          <span className="text-[15px] font-black tracking-tight">
            TRANSFORMATION
          </span>
          <span className="text-[15px] font-black tracking-tight">REVIEW</span>
        </div>

        {/* The Tagline - SHARPNESS FIX */}
        <div
          className={`mt-1.5 border-t border-slate-300/40 pt-0.5 ${taglineColor}`}
        >
          {/* Increased size to 9px, adjusted tracking, kept bold for legibility */}
          <span className="text-[9px] font-bold uppercase tracking-widest block leading-none antialiased">
            Decoding the Value Transition
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
