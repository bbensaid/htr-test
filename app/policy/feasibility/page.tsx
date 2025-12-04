// app/policy/feasibility/page.tsx

import React from "react";
import Link from "next/link";

const FeasibilityPage: React.FC = () => {
  const studies = [
    {
      proposal: "Universal Telehealth Licensure",
      likelihood: "Low (15%)",
      barrier: "State Medical Board Sovereignty",
      analysis:
        "While economically efficient, the political capital required to override state licensing boards remains insufficient in the current Congress.",
      color: "text-red-600",
    },
    {
      proposal: "AI Liability Shield for Providers",
      likelihood: "Medium (45%)",
      barrier: "Trial Lawyer Lobby / Patient Advocacy",
      analysis:
        "There is growing bipartisan support for a 'safe harbor' for physicians using FDA-approved AI, but defining 'proper use' remains the legislative sticking point.",
      color: "text-yellow-600",
    },
    {
      proposal: "Value-Based Drug Pricing Models",
      likelihood: "High (80%)",
      barrier: "Data Infrastructure",
      analysis:
        "CMS is aggressively pushing for outcome-based pricing. The policy barrier is low; the remaining friction is purely technological implementation.",
      color: "text-green-600",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-card-policy uppercase tracking-wider mb-2 block">
          Predictive Analysis
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Policy Feasibility Studies
        </h1>
        <p className="text-xl text-text-body max-w-3xl mx-auto">
          We don't just read the bills; we calculate their odds. Our models
          assess political capital, economic incentives, and technical reality.
        </p>
      </div>

      {/* Analysis Grid */}
      <div className="grid gap-8 mb-16">
        {studies.map((study, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-surface border border-ui-border rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Probability Score Panel */}
            <div className="md:w-1/4 bg-surface-muted flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-ui-border text-center">
              <span className="text-xs font-bold text-text-body uppercase mb-2">
                Passage Probability
              </span>
              <span className={`text-3xl font-black ${study.color} mb-1`}>
                {study.likelihood}
              </span>
            </div>

            {/* Content Panel */}
            <div className="p-8 md:w-3/4">
              <h3 className="text-2xl font-bold text-text-heading mb-3">
                {study.proposal}
              </h3>

              <div className="mb-4">
                <span className="text-xs font-bold text-card-policy uppercase tracking-wide">
                  Primary Barrier:
                </span>
                <span className="ml-2 font-medium text-text-heading">
                  {study.barrier}
                </span>
              </div>

              <p className="text-text-body leading-relaxed mb-6">
                {study.analysis}
              </p>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 border border-ui-border rounded-lg text-sm font-bold text-text-body hover:bg-surface-muted transition">
                  View Data Model
                </button>
                <Link
                  href="/advisory/contact"
                  className="text-sm font-bold text-card-policy hover:underline"
                >
                  Request Custom Simulation &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeasibilityPage;
