// app/policy/regulation/page.tsx

import React from "react";
import Link from "next/link";

const RegulationPage: React.FC = () => {
  const recentBills = [
    {
      // THIS IS THE NEW FIRST ITEM
      code: "VT ACT 68",
      title: "The Vermont Hospital Sustainability Act (Act 167/68)",
      status: "Active",
      impact: "Critical",
      summary:
        "The roadmap for global budgets and reference-based pricing caps. This is the blueprint for the new 'correction' era in US healthcare.",
      date: "Dec 05, 2025",
      // DIRECT LINK TO YOUR NEW ARTICLE
      link: "/policy/regulation/analysis/vermont-act-167",
    },
    {
      code: "H.R. 8152",
      title: "American Data Privacy and Protection Act",
      status: "In Committee",
      impact: "High",
      summary:
        "Establishes a national framework for data privacy, significantly impacting how health tech companies handle non-HIPAA patient data.",
      date: "Oct 12, 2023",
      link: "#", // Placeholder
    },
    {
      code: "CMS-2024-F",
      title: "Physician Fee Schedule Final Rule",
      status: "Finalized",
      impact: "Medium",
      summary:
        "Updates reimbursement rates for telehealth services and introduces new codes for AI-assisted diagnostics.",
      date: "Nov 01, 2023",
      link: "#", // Placeholder
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-policy uppercase tracking-wider mb-2 block">
          Policy Intelligence
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-4">
          Regulation & Legislation
        </h1>
        <p className="text-xl text-text-body leading-relaxed">
          Real-time analysis of the bills, rules, and mandates reshaping the
          healthcare operating environment.
        </p>
      </div>

      {/* The Grid */}
      <div className="grid gap-6">
        {recentBills.map((bill, i) => (
          <div
            key={i}
            className="group bg-surface border border-ui-border rounded-xl p-6 hover:shadow-md transition-all relative overflow-hidden"
          >
            {/* Orange Hover Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-card-policy opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Content Side */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 bg-surface-muted border border-ui-border text-xs font-mono font-bold text-text-body rounded">
                    {bill.code}
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded uppercase">
                    {bill.status}
                  </span>
                  <span className="text-xs text-text-body/60">{bill.date}</span>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-2">
                  {bill.title}
                </h3>
                <p className="text-text-body max-w-4xl">{bill.summary}</p>
              </div>

              {/* Action Side */}
              <div className="flex-shrink-0 flex flex-col items-end justify-center gap-2">
                <div className="text-right">
                  <span className="block text-xs font-bold text-text-body uppercase">
                    Impact Score
                  </span>
                  <span className="text-lg font-black text-text-heading">
                    {bill.impact}
                  </span>
                </div>

                {/* DYNAMIC LINK */}
                <Link
                  href={bill.link}
                  className="text-sm font-bold text-card-policy hover:underline mt-2 block"
                >
                  Read Deep Dive &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegulationPage;
