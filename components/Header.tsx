import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

// Using Layer 2 variables (ui-primary) via Tailwind classes
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

const staticNav = [
  { href: "/review", label: "HTR REVIEW" },
  { href: "/research", label: "RESEARCH ASSISTANCE" },
  { href: "/about", label: "ABOUT US" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto p-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavDropdown label="POLICY" items={policyItems} />
          <NavDropdown label="ECONOMICS" items={economicsItems} />
          <NavDropdown label="TECHNOLOGY" items={technologyItems} />

          {staticNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // Using ui-primary for hover states (CONSISTENCY)
              className="text-text-body hover:text-ui-primary transition duration-150 text-sm font-bold tracking-wider uppercase p-2"
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
              className="px-3 py-1 border border-ui-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ui-primary/50"
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
            // Using ui-primary for Button Background (CONSISTENCY)
            className="px-4 py-2 bg-ui-primary text-ui-text-on-primary text-sm font-semibold rounded-lg hover:opacity-90 transition duration-150"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
