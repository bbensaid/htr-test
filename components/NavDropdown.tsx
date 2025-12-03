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
      {/* Main Link: Uses text-body, hovers to text-primary */}
      <Link
        href={items[0].href}
        className="text-text-body hover:text-primary transition duration-150 text-sm font-bold tracking-wider uppercase p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </Link>

      {/* Dropdown Menu: Uses surface, border-subtle */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-60 bg-surface border border-border-subtle rounded-md shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-text-body hover:bg-surface-muted hover:text-primary transition duration-150"
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
