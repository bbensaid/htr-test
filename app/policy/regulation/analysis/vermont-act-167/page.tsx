// app/policy/regulation/analysis/vermont-act-167/page.tsx

import React from "react";
import Link from "next/link";
import CommentsSection from "@/components/CommentsSection";

export default function VermontCaseStudyPage() {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 border-b border-ui-border pb-12">
        <div className="flex justify-center gap-3 mb-6">
          <span className="px-3 py-1 bg-ui-bg-light text-ui-primary text-xs font-bold uppercase tracking-wider rounded-full">
            Strategic Review
          </span>
          <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-bold uppercase tracking-wider rounded-full border border-ui-border">
            15 Min Read
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-6 leading-tight">
          The Vermont Experiment: Act 167 & The End of "Growth"
        </h1>
        <p className="text-xl text-text-body leading-relaxed mb-8">
          How a small state's radical shift to Global Budgets and
          Reference-Based Pricing became the blueprint for the inevitable market
          correction of US Healthcare.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-text-body font-medium">
          <span>Dec 2025</span>
          <span>•</span>
          <span>Intelligence Level: Enterprise</span>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT SIDEBAR: Table of Contents (Sticky) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-4 border-l-2 border-ui-border pl-4">
            <span className="text-xs font-bold text-text-heading uppercase tracking-widest block mb-4">
              Contents
            </span>
            <a
              href="#executive-summary"
              className="block text-sm text-text-heading hover:text-ui-primary font-bold"
            >
              Executive Summary
            </a>
            <a
              href="#policy-pillar"
              className="block text-sm text-text-body hover:text-card-policy transition"
            >
              1. Policy: The Hammer
            </a>
            <a
              href="#economics-pillar"
              className="block text-sm text-text-body hover:text-card-economics transition"
            >
              2. Economics: Winners/Losers
            </a>
            <a
              href="#tech-pillar"
              className="block text-sm text-text-body hover:text-card-tech transition"
            >
              3. Technology: Data Gap
            </a>
            <a
              href="#recommendation"
              className="block text-sm text-text-body hover:text-ui-primary transition"
            >
              Strategic Verdict
            </a>
          </div>
        </div>

        {/* CENTER: The Article Content */}
        <div className="lg:col-span-9">
          {/* Executive Summary Box */}
          <div
            id="executive-summary"
            className="bg-surface-muted p-8 rounded-xl border border-ui-border mb-12"
          >
            <h3 className="text-lg font-bold text-text-heading mb-3 uppercase tracking-wide">
              Executive Briefing
            </h3>
            <p className="text-text-body leading-relaxed">
              Vermont Act 167 (2022) and its successor Act 68 (2025) represent a
              shift from "Sustainability" to "Correction." By enforcing
              Reference-Based Pricing caps on hospitals while establishing
              payment floors for primary care, the state has inverted the
              traditional power dynamic. <strong>Key Takeaway:</strong> Large
              hospital systems face a solvency cliff, while independent primary
              care enters a golden era of margin expansion.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-text-body space-y-12">
            {/* SECTION 1: POLICY */}
            <section id="policy-pillar">
              <h2 className="text-3xl font-bold text-text-heading mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-card-policy rounded-full"></span>
                1. Policy Pillar: The Legislative Hammer
              </h2>
              <p>
                Our analysis reveals that <strong>Act 167</strong> was merely
                the Trojan Horse for the aggressive intervention of{" "}
                <strong>Act 68 (2025)</strong>. The Green Mountain Care Board
                (GMCB) has utilized its authority to declare the "Cost Shift"
                model—where commercial rates subsidize Medicaid—mathematically
                insolvent.
              </p>
              <div className="my-6 p-6 border-l-4 border-card-policy bg-surface shadow-sm">
                <h4 className="font-bold text-card-policy mb-2">
                  The Reference Pricing Cap
                </h4>
                <p className="text-sm">
                  By capping hospital reimbursements at a fixed percentage of
                  Medicare (est. 140-160%), the state effectively removed the
                  "pricing power" of large monopolies like UVM Health Network.
                  This converts "Growth" strategy into a "Right-Sizing" mandate.
                </p>
              </div>
              <p className="text-sm italic">
                Reference:{" "}
                <a href="#" className="text-ui-primary underline">
                  Act 167 Legislative Text & Summary (Vermont Legislature)
                </a>
              </p>
            </section>

            {/* SECTION 2: ECONOMICS */}
            <section id="economics-pillar">
              <h2 className="text-3xl font-bold text-text-heading mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-card-economics rounded-full"></span>
                2. Economics Pillar: The Inversion Hypothesis
              </h2>
              <p>
                We project a massive transfer of value over the next 36 months.
                The historical "losers" (independent primary care) are
                positioned to become the new "winners."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Loser Card */}
                <div className="p-6 bg-surface border border-ui-border rounded-xl">
                  <span className="text-xs font-bold text-red-600 uppercase block mb-2">
                    The Loser
                  </span>
                  <h4 className="font-bold text-text-heading mb-2">
                    Hospital "Fortress" Model
                  </h4>
                  <p className="text-sm text-text-body">
                    Facing a solvency cliff. In 2024, 9 of 14 hospitals operated
                    at a loss. Under Global Budgets, they cannot "code" their
                    way out of a deficit; volume becomes a cost center.
                  </p>
                </div>
                {/* Winner Card */}
                <div className="p-6 bg-surface border-2 border-card-economics rounded-xl shadow-md">
                  <span className="text-xs font-bold text-card-economics uppercase block mb-2">
                    The Winner
                  </span>
                  <h4 className="font-bold text-text-heading mb-2">
                    Independent Primary Care
                  </h4>
                  <p className="text-sm text-text-body">
                    Protected by new "Payment Floors." As hospitals shed
                    outpatient volume to protect budgets, that revenue flows to
                    lower-cost nodes. Expect{" "}
                    <strong>20-30% margin expansion</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: TECHNOLOGY */}
            <section id="tech-pillar">
              <h2 className="text-3xl font-bold text-text-heading mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-card-tech rounded-full"></span>
                3. Technology Pillar: The Infrastructure Gap
              </h2>
              <p>
                The policy mandate is impossible to execute on current rails.
                Vermont operates two fragmented data universes:{" "}
                <strong>VHCURES</strong> (Claims Data) and <strong>VHIE</strong>{" "}
                (Clinical Data).
              </p>
              <ul className="space-y-4 my-6 list-disc pl-5">
                <li>
                  <strong className="text-text-heading">The Bottleneck:</strong>{" "}
                  Global Budgets require precise risk adjustment. You cannot pay
                  a flat fee without knowing if patients are getting sicker.
                </li>
                <li>
                  <strong className="text-text-heading">
                    The Tech Mandate:
                  </strong>{" "}
                  An urgent RFP cycle for "Identity Resolution" middleware to
                  merge claims and clinical charts in real-time.
                </li>
                <li>
                  <strong className="text-text-heading">
                    Vendor Opportunity:
                  </strong>{" "}
                  Legacy state infrastructure cannot handle this. Vendors like{" "}
                  <em>Health Catalyst</em> or <em>Innovaccer</em> are positioned
                  to displace incumbents.
                </li>
              </ul>
            </section>

            <hr className="border-ui-border my-12" />

            {/* STRATEGIC RECOMMENDATION */}
            <section
              id="recommendation"
              className="bg-text-heading text-text-inverse p-10 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                Strategic Recommendation
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-bold text-card-economics">
                    Investors:
                  </span>
                  <p className="text-gray-300">
                    Short regional hospital bonds. Long independent primary care
                    aggregators (MSO models) entering the VT market.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-card-tech">
                    Tech Vendors:
                  </span>
                  <p className="text-gray-300">
                    Pitch "Data Interoperability" directly to VITL and GMCB. The
                    state is now the buyer of record.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 3. ENGAGEMENT SECTION */}
          <CommentsSection />
        </div>
      </div>
    </div>
  );
}
