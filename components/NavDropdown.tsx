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
      className="relative h-full flex items-center" // Ensure full height alignment
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Link */}
      <Link
        href={items[0].href}
        className="text-text-body hover:text-ui-primary transition duration-150 text-sm font-bold tracking-wider uppercase px-2 py-4" // Increased padding for easier target
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </Link>

      {/* Dropdown Container */}
      {isOpen && (
        // CRITICAL FIX: Added 'pt-2' (padding top) to create an invisible bridge.
        // The menu styling is now on the inner div, so the gap is "filled" by this invisible padding.
        <div className="absolute top-full left-0 pt-2 w-60 z-50">
          <div className="bg-white border border-ui-border rounded-md shadow-lg py-2">
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
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
