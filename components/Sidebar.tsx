// components/Sidebar.tsx

import React from "react";
import Link from "next/link";

interface SidebarSectionProps {
  title: string;
  items: { href: string; label: string }[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => (
  <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
    <h3 className="text-lg font-bold text-blue-700 mb-3 border-b pb-2">
      {title}
    </h3>
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-gray-600 hover:text-gray-900 transition duration-150"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar: React.FC = () => {
  const latestInsights = [
    { href: "/insights/featured", label: "Featured Research" },
    { href: "/insights/editors", label: "Editor's Choice" },
    { href: "/insights/policy-changes", label: "Recent Policy Changes" },
  ];

  const contentFormats = [
    { href: "/formats/articles", label: "Blog / Articles" },
    { href: "/formats/videos", label: "Video Library" },
    { href: "/formats/webinars", label: "Webinars & Events" },
  ];

  const trendingKeywords = [
    { href: "/tag/telehealth", label: "#Telehealth Adoption" },
    { href: "/tag/ai-ethics", label: "#AI Ethics" },
    { href: "/tag/vbc", label: "#Value-Based Models" },
  ];

  return (
    <aside className="w-full lg:w-64">
      {/* Sidebar Sections */}
      <SidebarSection title="LATEST INSIGHTS" items={latestInsights} />
      <SidebarSection title="CONTENT FORMATS" items={contentFormats} />
      <SidebarSection title="TRENDING KEYWORDS" items={trendingKeywords} />

      {/* Call to Action */}
      <div className="p-4 bg-blue-100 rounded-lg text-center">
        <h4 className="font-bold text-blue-800 mb-2">Drive Transformation</h4>
        <p className="text-sm text-blue-700 mb-3">
          Download Our Annual Report &rarr;
        </p>
        <Link
          href="/report"
          className="px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition duration-150"
        >
          Get the Report
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
