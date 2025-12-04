// app/advisory/reports/page.tsx

import React from "react";
import Link from "next/link";

const ReportsPage: React.FC = () => {
  const reports = [
    {
      year: "2025",
      title: "The State of Health Transformation",
      summary:
        "Our flagship forecast analyzing the collision of the AI Act, Price Transparency rules, and Hospital Insolvency trends.",
      tags: ["Macro Trends", "Policy", "AI"],
      price: "$2,500",
    },
    {
      year: "2024",
      title: "Telehealth: The Post-Pandemic Reality",
      summary:
        "A deep dive into utilization rates, reimbursement cliff effects, and the consolidation of virtual care providers.",
      tags: ["Digital Health", "Economics"],
      price: "$1,200",
    },
    {
      year: "2024",
      title: "The Genomics Data Economy",
      summary:
        "Evaluating the commercial models and privacy frameworks emerging around direct-to-consumer genetic testing.",
      tags: ["Tech", "Ethics", "Market"],
      price: "$1,800",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-ui-border pb-6">
        <div>
          <span className="text-sm font-bold text-ui-primary uppercase tracking-wider mb-2 block">
            Intelligence
          </span>
          <h1 className="text-4xl font-extrabold text-text-heading">
            Annual Impact Reports
          </h1>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="px-6 py-2 border border-ui-border rounded-lg text-text-body hover:bg-surface-muted transition font-semibold">
            Filter by Year
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {reports.map((report, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-surface border border-ui-border rounded-xl overflow-hidden hover:shadow-md transition"
          >
            {/* Visual Placeholder */}
            <div className="md:w-1/4 bg-ui-primary/10 flex flex-col items-center justify-center p-8 border-r border-ui-border">
              <span className="text-4xl font-black text-ui-primary/40">
                {report.year}
              </span>
              <span className="text-xs font-bold text-text-body mt-2 uppercase tracking-widest">
                Report
              </span>
            </div>

            <div className="p-8 md:w-3/4 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-3">
                  {report.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold bg-surface-muted text-text-body px-2 py-1 rounded border border-ui-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-text-heading mb-3">
                  {report.title}
                </h3>
                <p className="text-text-body mb-6">{report.summary}</p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-text-heading">
                  {report.price}{" "}
                  <span className="text-sm font-normal text-text-body">
                    / Enterprise License
                  </span>
                </span>
                <Link
                  href="/advisory/contact"
                  className="px-6 py-2 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition"
                >
                  Purchase Access
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
