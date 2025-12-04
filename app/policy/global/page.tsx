// app/policy/global/page.tsx

import React from "react";
import Link from "next/link";

const GlobalPolicyPage: React.FC = () => {
  const regions = [
    {
      name: "European Union",
      focus: "AI Act & GDPR",
      status: "Strict Enforcement",
      summary:
        "The EU leads in comprehensive AI regulation. New mandates require 'high-risk' medical AI to undergo conformity assessments before market entry.",
    },
    {
      name: "United States",
      focus: "Patchwork State Laws",
      status: "Evolving",
      summary:
        "Federal inaction has led to a fragmented landscape. States like California and Colorado are setting de facto national standards for health data privacy.",
    },
    {
      name: "Asia Pacific",
      focus: "Digital Health Incentives",
      status: "Growth Oriented",
      summary:
        "Singapore and South Korea are relaxing telemedicine borders to address aging populations, creating a sandbox for rapid policy experimentation.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. Header */}
      <div className="text-center mb-16">
        <span className="px-3 py-1 bg-card-policy/10 text-card-policy text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
          International Intelligence
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-6">
          Global Policy Frameworks
        </h1>
        <p className="text-xl text-text-body max-w-3xl mx-auto">
          Healthcare is local, but technology is global. Understand how
          international regulatory divergence impacts your scalability.
        </p>
      </div>

      {/* 2. Comparative Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {regions.map((region) => (
          <div
            key={region.name}
            className="flex flex-col bg-surface border-t-4 border-card-policy shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-b-xl p-8"
          >
            <h3 className="text-2xl font-bold text-text-heading mb-2">
              {region.name}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-card-policy"></span>
              <span className="text-xs font-bold text-text-body uppercase">
                {region.focus}
              </span>
            </div>
            <p className="text-text-body mb-6 flex-grow leading-relaxed">
              {region.summary}
            </p>
            <div className="pt-6 border-t border-ui-border">
              <span className="text-xs font-bold text-text-heading block mb-1">
                Regulatory Climate:
              </span>
              <span className="text-sm text-card-policy font-semibold">
                {region.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Deep Dive Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center border-t border-ui-border pt-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-text-heading mb-4">
            Cross-Border Telehealth Guide
          </h2>
          <p className="text-text-body mb-6 text-lg">
            Our latest whitepaper breaks down the licensing, reimbursement, and
            data sovereignty requirements for operating in the G7 nations.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-text-body">
              <span className="text-green-500 mr-2">✓</span> Data Residency
              Requirements
            </li>
            <li className="flex items-center text-text-body">
              <span className="text-green-500 mr-2">✓</span> Physician
              Credentialing Maps
            </li>
            <li className="flex items-center text-text-body">
              <span className="text-green-500 mr-2">✓</span> VAT/Tax
              Implications
            </li>
          </ul>
          <Link
            href="/advisory/contact"
            className="px-8 py-3 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition"
          >
            Download Global Guide
          </Link>
        </div>

        {/* Abstract Map Graphic Placeholder */}
        <div className="md:w-1/2 w-full h-80 bg-surface-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-ui-border">
          <span className="text-text-body/40 font-bold text-lg">
            Interactive World Map Module
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalPolicyPage;
