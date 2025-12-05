// components/Header.tsx (UPDATED WITH FACULTY LINK)

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

const advisoryItems = [
  { href: "/advisory/consulting", label: "Strategic Consulting" },
  { href: "/advisory/research", label: "Custom Research Projects" },
  { href: "/advisory/reports", label: "Annual Impact Reports" },
  { href: "/advisory/contact", label: "Hire an Expert" },
];

// UPDATED EDUCATION ITEMS
const educationItems = [
  { href: "/education/courses", label: "Executive Masterclasses" },
  { href: "/education/faculty", label: "Faculty & Experts" }, // <--- NEW LINK ADDED
  { href: "/education/webinars", label: "Live Webinars & Events" },
  { href: "/education/glossary", label: "Policy & Tech Glossary" },
  { href: "/education/case-studies", label: "Real-World Case Studies" },
];

const staticNav = [
  { href: "/about", label: "ABOUT US" },
  { href: "/faq", label: "FAQ" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto p-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden xl:flex items-center space-x-6">
          <NavDropdown label="POLICY" items={policyItems} />
          <NavDropdown label="ECONOMICS" items={economicsItems} />
          <NavDropdown label="TECHNOLOGY" items={technologyItems} />
          <NavDropdown label="ADVISORY" items={advisoryItems} />
          <NavDropdown label="EDUCATION" items={educationItems} />

          {/* Static Links */}
          {staticNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-body hover:text-ui-primary transition duration-150 text-sm font-bold tracking-wider uppercase p-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User Tools */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border border-ui-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ui-primary/50 w-32 focus:w-48 transition-all"
            />
          </div>

          <Link
            href="/login"
            className="text-sm font-semibold text-text-body hover:text-ui-primary hidden sm:inline"
          >
            Login
          </Link>

          <Link
            href="/subscribe"
            className="px-4 py-2 bg-ui-primary text-ui-text-on-primary text-sm font-semibold rounded-lg hover:opacity-90 transition duration-150 shadow-sm"
          >
            Join Community
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
