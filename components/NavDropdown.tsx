"use client";

// components/NavDropdown.tsx

import React, { useState } from "react";
import Link from "next/link";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Note: Using mouse events for hover-based dropdown behavior
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Link/Label */}
      <Link
        href={items[0].href}
        className="text-gray-700 hover:text-blue-700 transition duration-150 text-sm font-bold tracking-wider uppercase p-2"
        onClick={() => setIsOpen(!isOpen)} // Toggle on click for mobile/accessibility
      >
        {label}
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition duration-150"
              onClick={() => setIsOpen(false)} // Close menu after clicking a link
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
