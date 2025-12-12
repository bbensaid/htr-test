// components/Header.tsx (FIXED WIDTH TO MATCH PAGE CONTENT)

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

// --- 1. INTELLIGENCE PILLARS (Left) ---
const policyItems = [
  { href: "/policy/regulation", label: "Regulation & Legislation" },
  { href: "/policy/mandates", label: "Public Health Mandates" },
  { href: "/policy/global", label: "Global & Comparative Policy" },
  { href: "/policy/feasibility", label: "Policy Feasibility Studies" },
];

const economicsItems = [
  { href: "/economics/value", label: "Value-Based Care Models" },
  { href: "/economics/market", label: "Market & Finance" },
  { href: "/economics/cea", label: "Cost-Effectiveness Analysis" },
  { href: "/economics/investment", label: "Healthcare Investment Trends" },
];

const technologyItems = [
  { href: "/technology/ai", label: "AI & Machine Learning" },
  { href: "/technology/digital", label: "Digital Health & Telemedicine" },
  { href: "/technology/security", label: "Data Security & Governance" },
  { href: "/technology/iot", label: "Wearables & IOT" },
];

const operationsItems = [
  { href: "/operations/workforce", label: "Workforce & Staffing" },
  { href: "/operations/workflow", label: "Clinical Workflow" },
  { href: "/operations/quality", label: "Quality & Safety" },
  { href: "/operations/sites", label: "Alternative Sites (ASC/Home)" },
];

const scienceItems = [
  { href: "/science/pharma", label: "Pharma & Biotech" },
  { href: "/science/trials", label: "Clinical Trials R&D" },
  { href: "/science/genomics", label: "Genomics & Precision Med" },
  { href: "/science/medtech", label: "MedTech Devices" },
];

// --- 2. SERVICES (Right) ---
const advisoryItems = [
  { href: "/advisory/consulting", label: "Strategic Consulting" },
  { href: "/advisory/research", label: "Custom Research Projects" },
  { href: "/advisory/reports", label: "Annual Impact Reports" },
  { href: "/advisory/contact", label: "Hire an Expert" },
];

const academyItems = [
  { href: "/education/courses", label: "Executive Masterclasses" },
  { href: "/education/faculty", label: "Faculty & Experts" },
  { href: "/education/webinars", label: "Webinars & Events" },
  { href: "/education/glossary", label: "Policy & Tech Glossary" },
  { href: "/education/case-studies", label: "Case Studies Library" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* CRITICAL FIX: Reverted 'w-full px-6' to 'container mx-auto p-4 md:px-8' 
         This ensures the header width aligns perfectly with your Sidebar/Content grid.
      */}
      <div className="container mx-auto p-4 md:px-8 flex flex-col xl:flex-row items-center justify-between gap-4">
        {/* LEFT GROUP: Logo + Pillars */}
        <div className="flex items-center gap-6 w-full xl:w-auto justify-between xl:justify-start">
          <Link href="/">
            <Logo />
          </Link>

          {/* Pillars: Hidden on small screens, flex on XL */}
          <nav className="hidden xl:flex items-center space-x-1">
            <NavDropdown label="POLICY" items={policyItems} />
            <NavDropdown label="ECONOMICS" items={economicsItems} />
            <NavDropdown label="TECHNOLOGY" items={technologyItems} />
            <NavDropdown label="OPERATIONS" items={operationsItems} />
            <NavDropdown label="SCIENCE" items={scienceItems} />
          </nav>
        </div>

        {/* CENTER GROUP: Search (Responsive Width) */}
        {/* Removed fixed margin, allowing it to flex naturally in the center space */}
        <div className="hidden md:flex flex-grow justify-center px-4 max-w-lg">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 border border-ui-border rounded-full text-sm bg-surface-muted focus:outline-none focus:ring-2 focus:ring-ui-primary focus:bg-white transition-all shadow-sm"
            />
            <svg
              className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT GROUP: Services + Auth */}
        <div className="flex items-center gap-6 w-full xl:w-auto justify-end">
          <nav className="hidden md:flex items-center space-x-2 border-r border-ui-border pr-6">
            <NavDropdown label="ACADEMY" items={academyItems} />
            <NavDropdown label="ADVISORY" items={advisoryItems} />
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-bold text-text-body hover:text-ui-primary whitespace-nowrap"
            >
              Login
            </Link>
            <Link
              href="/subscribe"
              className="px-5 py-2 bg-ui-primary text-ui-text-on-primary text-sm font-bold rounded-lg hover:opacity-90 transition shadow-sm whitespace-nowrap"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
