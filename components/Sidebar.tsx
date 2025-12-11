// components/Sidebar.tsx

import React from "react";
import Link from "next/link";

interface SidebarSectionProps {
  title: string;
  items: { href: string; label: string }[];
  colorClass?: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  colorClass = "text-sidebar-default",
}) => (
  <div className="mb-8 p-4 bg-white border border-ui-border rounded-lg shadow-sm">
    {/* Dynamic Color Title */}
    <h3
      className={`text-lg font-bold ${colorClass} mb-3 border-b border-ui-border pb-2`}
    >
      {title}
    </h3>
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-text-body hover:text-text-heading transition duration-150"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar: React.FC = () => {
  // Data for the sidebar sections
  const latestInsights = [
    { href: "/policy/regulation", label: "Legislative Tracker" },
    { href: "/economics/market", label: "M&A Watchlist" },
  ];

  const operationalTrends = [
    { href: "/operations/workforce", label: "Staffing Ratios" },
    { href: "/operations/workflow", label: "Throughput Optimization" },
  ];

  const scienceWatch = [
    { href: "/science/pharma", label: "FDA Approval Pipeline" },
    { href: "/science/genomics", label: "CRISPR Market Data" },
  ];

  return (
    <aside className="w-full lg:w-64">
      {/* 1. Standard Insights (Policy Orange) */}
      <SidebarSection
        title="LATEST BRIEFINGS"
        items={latestInsights}
        colorClass="text-sidebar-policy"
      />

      {/* 2. Operations (Rose/Red) - DEMONSTRATING NEW PILLAR */}
      <SidebarSection
        title="OPERATIONAL EFFICIENCY"
        items={operationalTrends}
        colorClass="text-sidebar-operations"
      />

      {/* 3. Science (Teal/Cyan) - DEMONSTRATING NEW PILLAR */}
      <SidebarSection
        title="CLINICAL INNOVATION"
        items={scienceWatch}
        colorClass="text-sidebar-science"
      />

      {/* CTA Box */}
      <div className="p-4 bg-ui-bg-light rounded-lg text-center mt-6">
        <h4 className="font-bold text-ui-primary mb-2">HTR Academy</h4>
        <p className="text-sm text-text-body mb-3">
          Get certified in Health Strategy.
        </p>
        <Link
          href="/education/courses"
          className="block px-4 py-2 bg-ui-primary text-ui-text-on-primary text-sm font-semibold rounded-lg hover:opacity-90 transition"
        >
          View Courses
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
