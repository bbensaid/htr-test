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
  const latestInsights = [
    { href: "/insights/featured", label: "Featured Research" },
    { href: "/insights/editors", label: "Editor's Choice" },
  ];
  const contentFormats = [
    { href: "/formats/articles", label: "Blog / Articles" },
    { href: "/formats/videos", label: "Video Library" },
  ];
  const trendingKeywords = [
    { href: "/tag/telehealth", label: "#Telehealth Adoption" },
    { href: "/tag/ai-ethics", label: "#AI Ethics" },
  ];

  return (
    <aside className="w-full lg:w-64">
      {/* MAPPED TO SIDEBAR VARIABLES */}
      <SidebarSection
        title="LATEST INSIGHTS"
        items={latestInsights}
        colorClass="text-sidebar-policy"
      />
      <SidebarSection
        title="CONTENT FORMATS"
        items={contentFormats}
        colorClass="text-sidebar-economics"
      />
      <SidebarSection
        title="TRENDING KEYWORDS"
        items={trendingKeywords}
        colorClass="text-sidebar-tech"
      />

      {/* CTA uses Global UI Consistency */}
      <div className="p-4 bg-ui-bg-light rounded-lg text-center">
        <h4 className="font-bold text-ui-primary mb-2">Drive Transformation</h4>
        <p className="text-sm text-text-body mb-3">
          Download Our Annual Report &rarr;
        </p>
        <Link
          href="/report"
          className="px-4 py-2 bg-ui-primary text-ui-text-on-primary text-sm font-semibold rounded-lg hover:opacity-90 transition duration-150"
        >
          Get the Report
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
