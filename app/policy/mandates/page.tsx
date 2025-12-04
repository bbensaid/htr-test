// app/policy/mandates/page.tsx

import React from "react";
import Link from "next/link";

const MandatesPage: React.FC = () => {
  const mandates = [
    {
      date: "Jan 1, 2025",
      title: "Interoperability & Prior Auth Final Rule",
      agency: "CMS",
      status: "Upcoming",
      summary:
        "Requires payers to implement FHIR APIs to streamline the prior authorization process, reducing decision times to 72 hours for urgent requests.",
      action: "Update API Infrastructure",
    },
    {
      date: "July 15, 2024",
      title: "Hospital Price Transparency Update",
      agency: "HHS",
      status: "Active",
      summary:
        "Stricter enforcement penalties for hospitals failing to post machine-readable standard charges. New requirement for 'consumer-friendly' displays.",
      action: "Audit Public Pricing Data",
    },
    {
      date: "Q4 2024",
      title: "Cybersecurity Incident Reporting",
      agency: "CISA",
      status: "Proposed",
      summary:
        "Mandates reporting of substantial cyber incidents within 72 hours and ransom payments within 24 hours for critical infrastructure entities (including hospitals).",
      action: "Review Incident Response Plan",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-card-policy uppercase tracking-wider mb-2 block">
          Compliance Tracker
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Public Health Mandates
        </h1>
        <p className="text-xl text-text-body max-w-3xl mx-auto">
          A timeline of critical federal and state mandates affecting
          operations, reimbursement, and data governance.
        </p>
      </div>

      {/* Timeline View */}
      <div className="relative border-l-4 border-ui-border ml-4 md:ml-10 space-y-12 mb-20">
        {mandates.map((item, i) => (
          <div key={i} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-card-policy border-4 border-white shadow-sm"></div>

            <div className="bg-surface border border-ui-border rounded-xl p-8 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <span className="text-sm font-bold text-card-policy uppercase tracking-widest block mb-1">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold text-text-heading">
                    {item.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-muted border border-ui-border text-xs font-bold text-text-body rounded uppercase">
                    {item.agency}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded uppercase ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <p className="text-text-body text-lg mb-6 leading-relaxed">
                {item.summary}
              </p>

              <div className="bg-surface-muted p-4 rounded-lg border-l-4 border-card-policy flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-text-body uppercase block">
                    Recommended Action
                  </span>
                  <span className="font-bold text-text-heading">
                    {item.action}
                  </span>
                </div>
                <Link
                  href="/advisory/contact"
                  className="text-sm font-bold text-card-policy hover:underline"
                >
                  Get Compliance Help &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MandatesPage;
