// components/Header.tsx

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

// Define the content for the dropdowns
const policyItems = [
  { href: "/policy/regulation", label: "Regulation & Legislation" },
  { href: "/policy/mandates", label: "Public Health Mandates" },
  { href: "/policy/global", label: "Global & Comparative Policy" },
  { href: "/policy/feasibility", label: "Policy Feasibility Studies" },
];

const economicsItems = [
  { href: "/economics/value", label: "Value-Based Care Models" },
  { href: "/economics/market", label: "Market & Finance" },
  { href: "/economics/cea", label: "Cost-Effectiveness Analysis (CEA)" },
  { href: "/economics/investment", label: "Healthcare Investment Trends" },
];

const technologyItems = [
  { href: "/technology/ai", label: "AI & Machine Learning" },
  { href: "/technology/digital", label: "Digital Health & Telemedicine" },
  { href: "/technology/security", label: "Data Security & Governance" },
  { href: "/technology/iot", label: "Wearables & IOT" },
];

// Define the static links
const staticNav = [
  { href: "/review", label: "HTR REVIEW" },
  { href: "/about", label: "ABOUT US" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto p-4 md:px-8 flex justify-between items-center">
        {/* Logo and Main Title */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Primary Navigation Menu (Desktop) */}
        <nav className="hidden md:flex items-center space-x-4">
          {/* Policy Dropdown */}
          <NavDropdown label="POLICY" items={policyItems} />

          {/* Economics Dropdown */}
          <NavDropdown label="ECONOMICS" items={economicsItems} />

          {/* Technology Dropdown */}
          <NavDropdown label="TECHNOLOGY" items={technologyItems} />

          {/* Static Links */}
          {staticNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-700 transition duration-150 text-sm font-bold tracking-wider uppercase p-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auxiliary Gadgets (Search, Login, Subscribe) */}
        <div className="flex items-center space-x-4">
          {/* Search Bar Placeholder */}
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search HTR..."
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Login/Subscribe */}
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 hidden sm:inline"
          >
            Login
          </Link>
          <Link
            href="/subscribe"
            className="px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition duration-150"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
