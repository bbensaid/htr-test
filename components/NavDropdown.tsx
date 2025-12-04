// components/NavDropdown.tsx
"use client";

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

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Link */}
      <Link
        href={items[0].href}
        className="text-text-body hover:text-ui-primary transition duration-150 text-sm font-bold tracking-wider uppercase p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        // CRITICAL FIX: Changed 'bg-surface' to 'bg-white' to ensure solid background
        <div className="absolute left-0 mt-2 w-60 bg-white border border-ui-border rounded-md shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-text-body hover:bg-ui-bg-light hover:text-ui-primary transition duration-150"
              onClick={() => setIsOpen(false)}
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
