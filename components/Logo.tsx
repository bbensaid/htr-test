// components/Logo.tsx
import React from "react";

interface LogoProps {
  theme?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ theme = "light" }) => {
  // Theme-based styles
  const textColor = theme === "dark" ? "white" : "black";
  const boxBg = theme === "dark" ? "white" : "black";
  const htrColor = theme === "dark" ? "black" : "white";
  const taglineColor = theme === "dark" ? "gray-400" : "gray-500";

  return (
    <div className="cursor-pointer select-none group">
      <div className="flex items-center">
        {/* HTR Box */}
        <div
          className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg transition-all duration-300 ease-in-out group-hover:shadow-lg"
          style={{
            backgroundColor: boxBg,
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
          }}
        >
          <span className="text-xl font-bold" style={{ color: htrColor }}>
            HTR
          </span>
        </div>

        {/* Text Lines */}
        <div className="flex flex-col justify-center">
          <span
            className="text-sm font-extrabold tracking-tight uppercase"
            style={{ color: textColor }}
          >
            Health
          </span>
          <span
            className="text-sm font-extrabold tracking-tight uppercase"
            style={{ color: textColor }}
          >
            Transformation
          </span>
          <span
            className="text-sm font-extrabold tracking-tight uppercase"
            style={{ color: textColor }}
          >
            Review
          </span>

          {/* Line Separator */}
          <div className="w-full h-px mt-0.5 bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      {/* Tagline */}
      <p
        className={`text-xs tracking-tight uppercase font-bold mt-0.5`}
        style={{ color: taglineColor }}
      >
        Decoding the Value Transition
      </p>
    </div>
  );
};

export default Logo;
