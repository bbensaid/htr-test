// app/education/faculty/page.tsx

import React from "react";
import Link from "next/link";

const FacultyPage: React.FC = () => {
  const experts = [
    {
      name: "Dr. Elena Rostova",
      title: "Former Senior Advisor, CMS",
      specialty: "Regulatory Strategy",
      bio: "Elena architected the initial framework for the 2024 Interoperability Final Rule. She specializes in helping health systems navigate the reimbursement cliff.",
      courses: ["Policy Feasibility 101", "The CMS Playbook"],
      badges: ["Ex-CMS", "PhD Economics"],
      imageColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "Marcus Thorne",
      title: "Chief Digital Officer, Apex Health",
      specialty: "AI & Data Governance",
      bio: "Marcus led the deployment of predictive sepsis models across a 40-hospital system. He teaches the operational reality of AI, moving beyond the hype.",
      courses: ["AI Governance for CMOs", "Data Security Architecture"],
      badges: ["Ex-Epic", "Tech Visionary"],
      imageColor: "bg-indigo-100 text-indigo-700",
    },
    {
      name: "Sarah Jenkins, MBA",
      title: "VP of Contracting, UnitedHealth (Former)",
      specialty: "Value-Based Economics",
      bio: "Sarah negotiated over $4B in risk-based contracts. She breaks down the math of shared savings and how to structure downside risk without going bankrupt.",
      courses: ["Mastering Capitation", "Negotiation Tactics"],
      badges: ["Payer Veteran", "Actuarial Expert"],
      imageColor: "bg-green-100 text-green-700",
    },
    {
      name: "David Chen, JD",
      title: "Partner, Health Law Group",
      specialty: "M&A and Antitrust",
      bio: "David has represented three of the largest hospital mergers in the last decade. He provides the legal scaffolding for consolidation and PE roll-ups.",
      courses: ["M&A Due Diligence", "Antitrust in 2025"],
      badges: ["Legal 500", "Top Dealmaker"],
      imageColor: "bg-gray-100 text-gray-700",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO SECTION */}
      <div className="text-center mb-16 border-b border-ui-border pb-12">
        <span className="text-sm font-bold text-ui-primary uppercase tracking-wider mb-2 block">
          World-Class Faculty
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-6 tracking-tight">
          Learn from the Architects
        </h1>
        <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
          Our courses aren't taught by observers. They are taught by the
          architects who wrote the policies, built the algorithms, and
          negotiated the contracts that define modern healthcare.
        </p>
      </div>

      {/* 2. TRUST BAR (Logos Placeholder) */}
      <div className="mb-20 text-center">
        <p className="text-sm font-bold text-text-body uppercase tracking-widest mb-6 opacity-60">
          Our experts hail from
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
          {/* Text placeholders for logos - replace with SVGs later */}
          <span className="text-2xl font-black text-text-heading">CMS.gov</span>
          <span className="text-2xl font-black text-text-heading">
            MAYO CLINIC
          </span>
          <span className="text-2xl font-black text-text-heading">Epic</span>
          <span className="text-2xl font-black text-text-heading">
            UnitedHealth
          </span>
          <span className="text-2xl font-black text-text-heading">FDA</span>
        </div>
      </div>

      {/* 3. FACULTY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {experts.map((expert, i) => (
          <div
            key={i}
            className="flex flex-col bg-surface border border-ui-border rounded-xl p-8 hover:shadow-lg transition duration-300 group"
          >
            <div className="flex items-start justify-between mb-6">
              {/* Avatar Placeholder */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${expert.imageColor}`}
              >
                {expert.name.charAt(0)}
              </div>
              {/* Badges */}
              <div className="flex flex-col items-end gap-2">
                {expert.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-1 bg-surface-muted border border-ui-border text-xs font-bold text-text-heading uppercase tracking-wide rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-text-heading mb-1">
              {expert.name}
            </h3>
            <p className="text-sm font-bold text-ui-primary mb-4">
              {expert.title}
            </p>

            <p className="text-text-body leading-relaxed mb-6 flex-grow">
              {expert.bio}
            </p>

            {/* Courses Taught Link */}
            <div className="border-t border-ui-border pt-6">
              <span className="text-xs font-bold text-text-body uppercase block mb-2">
                Teaches:
              </span>
              <div className="flex flex-wrap gap-2 mb-4">
                {expert.courses.map((course) => (
                  <span
                    key={course}
                    className="text-sm font-medium text-text-heading bg-surface-muted px-3 py-1 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
              <Link
                href="/education/courses"
                className="inline-flex items-center text-sm font-bold text-ui-primary hover:underline group-hover:translate-x-1 transition-transform"
              >
                View Their Courses &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 4. RECRUITMENT CTA */}
      <div className="bg-text-heading rounded-2xl p-12 text-center text-text-inverse relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Are you a Subject Matter Expert?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We are always looking for practitioners with deep experience in
            Policy, Economics, or Tech to lead our next Masterclass.
          </p>
          <Link
            href="/advisory/contact"
            className="px-8 py-4 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition shadow-lg"
          >
            Apply to Teach
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
