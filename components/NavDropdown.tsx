// components/NavDropdown.tsx
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  colorClass?: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  items,
  colorClass = "text-text-heading",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TRIGGER BUTTON: Reduced padding from px-3 to px-1 to save horizontal space */}
      <button
        className={`flex items-center gap-0.5 px-1 py-2 text-sm font-extrabold uppercase tracking-wide transition-colors ${colorClass} hover:opacity-80`}
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute left-0 mt-0 w-56 bg-white border border-ui-border rounded-lg shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div
            className={`h-1 w-full ${colorClass.replace("text-", "bg-")}`}
          ></div>
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-text-body font-medium hover:bg-surface-muted hover:text-ui-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
