// components/Logo.tsx
import React from "react";

interface LogoProps {
  theme?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ theme = "light" }) => {
  // Styles based on theme
  const textColor = theme === "dark" ? "text-white" : "text-slate-900";
  const taglineColor = theme === "dark" ? "text-slate-400" : "text-slate-600";
  const boxBg = theme === "dark" ? "bg-white" : "bg-slate-900";
  const htrColor = theme === "dark" ? "fill-slate-900" : "fill-white";

  return (
    <div className="flex flex-col w-max cursor-pointer select-none group">
      {/* ROW 1: Icon + Main Text (Top Aligned) */}
      <div className="flex items-start gap-2">
        {/* ICON: 'HTR' Symbol */}
        {/* CHANGED: w-10 -> w-14 (Wider Box), h-10 (Same Height) */}
        <div
          className={`w-14 h-10 ${boxBg} flex items-center justify-center rounded-sm shadow-sm transition-transform group-hover:scale-105 mt-[1px] flex-shrink-0`}
        >
          {/* UPDATED viewBox to match the 56x40 aspect ratio */}
          <svg
            className="w-full h-full"
            viewBox="0 0 56 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              className={`${htrColor} tracking-tighter`}
              fontWeight="900"
              fontSize="18"
              fontFamily="sans-serif"
            >
              HTR
            </text>
          </svg>
        </div>

        {/* TEXT STACK */}
        <div
          className={`flex flex-col font-sans uppercase leading-[0.9] ${textColor}`}
        >
          <span className="text-[15px] font-black tracking-tight">HEALTH</span>
          <span className="text-[15px] font-black tracking-tight">
            TRANSFORMATION
          </span>
          <span className="text-[15px] font-black tracking-tight">REVIEW</span>
        </div>
      </div>

      {/* ROW 2: The Tagline */}
      <div
        className={`mt-[2px] w-full ${taglineColor} border-t border-slate-300/40 pt-[2px]`}
      >
        <span className="text-[10.5px] font-bold uppercase tracking-widest antialiased leading-none whitespace-nowrap block">
          Decoding the Value Transition
        </span>
      </div>
    </div>
  );
};

export default Logo;
