// components/Header.tsx

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

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

const advisoryItems = [
  { href: "/research", label: "Custom Research Projects" },
  { href: "/reports", label: "Annual Transformation Report" },
  { href: "/methodology", label: "Methodology & Credibility" },
  { href: "/contact", label: "Contact Our Experts" },
];

const staticNav = [{ href: "/about", label: "ABOUT US" }];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-surface shadow-md">
      <div className="container mx-auto p-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavDropdown label="POLICY" items={policyItems} />
          <NavDropdown label="ECONOMICS" items={economicsItems} />
          <NavDropdown label="TECHNOLOGY" items={technologyItems} />
          <NavDropdown label="ADVISORY" items={advisoryItems} />

          {/* Static Links: Text Body -> Primary Hover */}
          {staticNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-body hover:text-primary transition duration-150 text-sm font-bold tracking-wider uppercase p-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search HTR..."
              className="px-3 py-1 border border-border-subtle rounded-lg text-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <Link
            href="/login"
            className="text-sm font-semibold text-text-body hover:text-primary hidden sm:inline"
          >
            Login
          </Link>
          {/* CTA Button: Uses Primary BG and Inverse Text */}
          <Link
            href="/subscribe"
            className="px-4 py-2 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:opacity-90 transition duration-150"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
