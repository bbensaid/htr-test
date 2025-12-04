// app/policy/regulation/page.tsx

import React from "react";
import Link from "next/link";

const RegulationPage: React.FC = () => {
  const recentBills = [
    {
      code: "H.R. 8152",
      title: "American Data Privacy and Protection Act",
      status: "In Committee",
      impact: "High",
      summary:
        "Establishes a national framework for data privacy, significantly impacting how health tech companies handle non-HIPAA patient data.",
      date: "Oct 12, 2023",
    },
    {
      code: "CMS-2024-F",
      title: "Physician Fee Schedule Final Rule",
      status: "Finalized",
      impact: "Critical",
      summary:
        "Updates reimbursement rates for telehealth services and introduces new codes for AI-assisted diagnostics.",
      date: "Nov 01, 2023",
    },
    {
      code: "S. 3405",
      title: "Health AI Safety Act",
      status: "Proposed",
      impact: "Medium",
      summary:
        "Mandates transparency reports for algorithms used in clinical decision support systems.",
      date: "Sep 28, 2023",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. Header with Policy Branding */}
      <div className="mb-12 border-b border-ui-border pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-3xl">
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

        {/* Subscribe Widget for this specific topic */}
        <div className="bg-surface-muted p-5 rounded-xl border border-ui-border w-full md:w-auto">
          <p className="text-xs font-bold text-text-heading uppercase mb-2">
            Get Policy Alerts
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 text-sm border border-ui-border rounded-lg w-full focus:ring-2 focus:ring-card-policy/50 outline-none"
            />
            <button className="px-4 py-2 bg-card-policy text-ui-text-on-primary text-sm font-bold rounded-lg hover:opacity-90 transition">
              Track
            </button>
          </div>
        </div>
      </div>

      {/* 2. Legislative Tracker Table (Creative Component) */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-text-heading mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-card-policy rounded-full"></span>
          Legislative Monitor
        </h2>

        <div className="grid gap-6">
          {recentBills.map((bill, i) => (
            <div
              key={i}
              className="group bg-surface border border-ui-border rounded-xl p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Semantic Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-card-policy opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-surface-muted border border-ui-border text-xs font-mono font-bold text-text-body rounded">
                      {bill.code}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-bold rounded uppercase ${
                        bill.status === "Finalized"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {bill.status}
                    </span>
                    <span className="text-xs text-text-body/60">
                      {bill.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-2 group-hover:text-card-policy transition-colors">
                    {bill.title}
                  </h3>
                  <p className="text-text-body max-w-4xl">{bill.summary}</p>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end justify-center gap-2">
                  <div className="text-right">
                    <span className="block text-xs font-bold text-text-body uppercase">
                      Impact Score
                    </span>
                    <span className="text-lg font-black text-text-heading">
                      {bill.impact}
                    </span>
                  </div>
                  <Link
                    href={`/policy/regulation/analysis/${i}`}
                    className="text-sm font-semibold text-card-policy hover:underline mt-2"
                  >
                    Read Deep Dive &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Expert Insight Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface border border-ui-border rounded-xl p-8">
          <h3 className="text-xl font-bold text-text-heading mb-4">
            The Lobbying Landscape
          </h3>
          <p className="text-text-body mb-6">
            An analysis of spending by major Health Tech firms in Q3 2023
            reveals a shift toward AI deregulation efforts.
          </p>
          <button className="text-card-policy font-bold hover:underline">
            View the Data Visualization &rarr;
          </button>
        </div>
        <div className="bg-card-policy text-ui-text-on-primary rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Policy Feasibility Tool</h3>
          <p className="mb-6 opacity-90">
            Use our interactive model to predict the likelihood of the
            "Telehealth Expansion Act" passing the Senate.
          </p>
          <button className="px-6 py-3 bg-white text-card-policy font-bold rounded-lg hover:bg-gray-100 transition shadow-sm">
            Run Simulation
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegulationPage;
