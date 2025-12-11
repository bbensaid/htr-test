// components/Header.tsx (CLEAN VERSION - NO TOGGLE)
"use client";

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

const staticNav = [
  { href: "/about", label: "ABOUT US" },
  { href: "/faq", label: "FAQ" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto p-4 md:px-8 flex flex-col xl:flex-row justify-between items-center gap-4">
        {/* LEFT: Brand & Intelligence Pillars */}
        <div className="flex items-center gap-8 w-full xl:w-auto justify-between xl:justify-start">
          <Link href="/">
            <Logo />
          </Link>

          {/* Pillars Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            <NavDropdown label="POLICY" items={policyItems} />
            <NavDropdown label="ECONOMICS" items={economicsItems} />
            <NavDropdown label="TECHNOLOGY" items={technologyItems} />
            <NavDropdown label="OPERATIONS" items={operationsItems} />
            <NavDropdown label="SCIENCE" items={scienceItems} />
          </nav>
        </div>

        {/* RIGHT: Utility & Services */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-2 border-r border-ui-border pr-6">
            <NavDropdown label="ACADEMY" items={academyItems} />
            <NavDropdown label="ADVISORY" items={advisoryItems} />
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

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 border border-ui-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ui-primary/50 w-32 focus:w-48 transition-all"
              />
            </div>

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
