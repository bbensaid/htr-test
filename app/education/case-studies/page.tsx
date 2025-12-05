// app/education/case-studies/page.tsx

import React from "react";
import Link from "next/link";

const CaseStudiesPage: React.FC = () => {
  const cases = [
    {
      id: 1,
      category: "Policy Implementation",
      title: "Navigating the 'No Surprises Act'",
      organization: "Multi-State Health System (Revenue: $4B)",
      challenge:
        "Impending federal legislation threatened 15% of out-of-network revenue streams and required a total overhaul of patient billing workflows.",
      solution:
        "Implemented the HTR 'Price Transparency Framework', automated good-faith estimates using AI, and renegotiated payer contracts ahead of the deadline.",
      result: "0% Compliance Penalties, 12% Increase in Patient Collections.",
      color: "text-card-policy",
      borderColor: "border-card-policy",
    },
    {
      id: 2,
      category: "Economic Strategy",
      title: "The ACO REACH Pivot",
      organization: "Regional Primary Care Network",
      challenge:
        "Transitioning from Fee-for-Service to Capitation. The network was bleeding cash on high-utilizer patients without proper risk-adjustment coding.",
      solution:
        "Deployed the HTR 'Risk-Stratification Model'. Retrained 200+ providers on HCC coding and deployed remote monitoring for the top 5% risk cohort.",
      result: "Shared Savings Bonus of $8.2M in Year 1.",
      color: "text-card-economics",
      borderColor: "border-card-economics",
    },
    {
      id: 3,
      category: "Technology Adoption",
      title: "AI in the ICU: Reducing Sepsis",
      organization: "Academic Medical Center",
      challenge:
        "High sepsis mortality rates and alert fatigue from legacy clinical decision support tools.",
      solution:
        "Integrated a predictive ML algorithm with a 'Human-in-the-Loop' governance structure developed in our AI Masterclass.",
      result: "18% Reduction in Mortality, 40% Reduction in False Alerts.",
      color: "text-card-tech",
      borderColor: "border-card-tech",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO SECTION */}
      <div className="text-center mb-16 border-b border-ui-border pb-12">
        <span className="text-sm font-bold text-ui-primary uppercase tracking-wider mb-2 block">
          Evidence of Impact
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-6 tracking-tight">
          Transformation in Action
        </h1>
        <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
          Theory is useless without execution. Explore how leaders are applying
          the <span className="font-bold text-text-heading">HTR Framework</span>{" "}
          to solve billion-dollar problems at the intersection of policy, money,
          and code.
        </p>
      </div>

      {/* 2. FEATURED CASE STUDY (Hero Card) */}
      <div className="bg-text-heading rounded-2xl p-10 md:p-14 text-text-inverse mb-20 shadow-2xl relative overflow-hidden">
        {/* Abstract decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-ui-primary opacity-10 rounded-bl-full -mr-10 -mt-10"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-ui-primary text-text-inverse text-xs font-bold uppercase rounded">
              Featured Case
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Digital Transformation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Project Velocity": How a 100-Year-Old Insurer Built a Digital Front
            Door
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t border-gray-700 pt-8">
            <div>
              <h4 className="text-gray-400 text-sm uppercase font-bold mb-2">
                The Challenge
              </h4>
              <p className="text-sm leading-relaxed text-gray-300">
                Losing market share to digital-first startups (Oscar, Lemonade).
                Legacy mainframe tech stack prevented rapid product iteration.
              </p>
            </div>
            <div>
              <h4 className="text-gray-400 text-sm uppercase font-bold mb-2">
                The HTR Method
              </h4>
              <p className="text-sm leading-relaxed text-gray-300">
                Adopted our "Composable Care Architecture." Decoupled the user
                experience from the claims engine using FHIR APIs.
              </p>
            </div>
            <div>
              <h4 className="text-gray-400 text-sm uppercase font-bold mb-2">
                The Outcome
              </h4>
              <p className="text-2xl font-bold text-green-400">300% Increase</p>
              <p className="text-sm text-gray-300">
                In member engagement via mobile app.
              </p>
            </div>
          </div>
          <Link
            href="/education/courses"
            className="inline-block px-8 py-3 bg-white text-text-heading font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Learn the Method (Executive Course) &rarr;
          </Link>
        </div>
      </div>

      {/* 3. CASE STUDY LIBRARY */}
      <div className="grid grid-cols-1 gap-12 mb-20">
        {cases.map((study) => (
          <div
            key={study.id}
            className={`flex flex-col md:flex-row bg-surface border-l-8 ${study.borderColor} border border-ui-border rounded-r-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden`}
          >
            {/* Sidebar / Meta */}
            <div className="md:w-1/4 bg-surface-muted p-8 flex flex-col justify-center border-r border-ui-border">
              <span
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${study.color}`}
              >
                {study.category}
              </span>
              <h3 className="text-xl font-bold text-text-heading mb-4">
                {study.organization}
              </h3>
              <div className="mt-auto">
                <button className="text-sm font-bold text-text-body hover:text-ui-primary flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full border border-ui-border flex items-center justify-center bg-white">
                    ⬇
                  </span>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/4 p-8">
              <h3 className="text-2xl font-bold text-text-heading mb-6">
                {study.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-text-body uppercase mb-2">
                    The Challenge
                  </h4>
                  <p className="text-text-body text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-body uppercase mb-2">
                    The Solution
                  </h4>
                  <p className="text-text-body text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-ui-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-text-body uppercase mr-2">
                    Result:
                  </span>
                  <span className="font-bold text-text-heading">
                    {study.result}
                  </span>
                </div>
                <Link
                  href="/education/courses"
                  className={`text-sm font-bold ${study.color} hover:underline`}
                >
                  View Related Certification &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. CERTIFICATION CTA */}
      <div className="text-center py-12 border-t border-ui-border">
        <h3 className="text-3xl font-bold text-text-heading mb-4">
          Master the Framework
        </h3>
        <p className="text-lg text-text-body mb-8 max-w-2xl mx-auto">
          These results aren't accidental. They are the product of the{" "}
          <strong>HTR Certified Health Strategist (CHS)</strong> curriculum.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/education/courses"
            className="px-8 py-3 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition shadow-md"
          >
            Get Certified
          </Link>
          <Link
            href="/advisory/contact"
            className="px-8 py-3 bg-surface border border-ui-border text-text-heading font-bold rounded-lg hover:bg-surface-muted transition"
          >
            Train Your Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
