// app/policy/regulation/analysis/[id]/page.tsx

import React from "react";
import Link from "next/link";
import CommentsSection from "@/components/CommentsSection"; // Import the interactive component

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. ARTICLE HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 border-b border-ui-border pb-12">
        <div className="flex justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-ui-bg-light text-ui-primary text-xs font-bold uppercase tracking-wider rounded-full">
            Policy Analysis
          </span>
          <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-bold uppercase tracking-wider rounded-full border border-ui-border">
            12 Min Read
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-6 leading-tight">
          The Hidden Economics of the 2024 Data Privacy Act
        </h1>
        <p className="text-xl text-text-body leading-relaxed mb-8">
          Why the new federal framework might accidentally bankrupt small rural
          health networks while entrenching the dominance of major EHR vendors.
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-card-policy rounded-full flex items-center justify-center text-white font-bold text-xl">
            ER
          </div>
          <div className="text-left">
            <span className="block font-bold text-text-heading">
              Dr. Elena Rostova
            </span>
            <span className="text-sm text-text-body">
              Senior Regulatory Analyst • Oct 14, 2023
            </span>
          </div>
        </div>
      </div>

      {/* 2. CONTENT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Sidebar: Table of Contents (Sticky) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-4 border-l-2 border-ui-border pl-4">
            <span className="text-xs font-bold text-text-heading uppercase tracking-widest block mb-4">
              Contents
            </span>
            <a
              href="#compliance-cost"
              className="block text-sm text-ui-primary font-bold hover:underline"
            >
              1. The Compliance Cost Spike
            </a>
            <a
              href="#rural-impact"
              className="block text-sm text-text-body hover:text-ui-primary transition"
            >
              2. Rural Network Vulnerability
            </a>
            <a
              href="#vendor-consolidation"
              className="block text-sm text-text-body hover:text-ui-primary transition"
            >
              3. Vendor Consolidation Risks
            </a>
            <a
              href="#strategic-outlook"
              className="block text-sm text-text-body hover:text-ui-primary transition"
            >
              4. Strategic Outlook
            </a>
          </div>
        </div>

        {/* Main Article Body */}
        <div className="lg:col-span-6">
          <div className="prose prose-lg max-w-none text-text-body">
            <p className="lead text-2xl text-text-heading font-medium mb-8">
              The road to hell is paved with good legislative intentions. The
              new H.R. 8152 aims to protect patient data, but its
              "one-size-fits-all" audit requirements act as a regressive tax on
              smaller providers.
            </p>

            <h2
              id="compliance-cost"
              className="text-3xl font-bold text-text-heading mt-12 mb-6"
            >
              1. The Compliance Cost Spike
            </h2>
            <p className="mb-6">
              Our economic modeling suggests that the requirement for
              "Continuous Algorithmic Auditing" will raise IT operating costs by
              an average of <strong>14%</strong> for Tier 1 health systems.
              However, for Tier 3 (Rural/Critical Access) hospitals, this figure
              jumps to <strong>28%</strong>.
            </p>
            <div className="bg-surface-muted p-8 rounded-xl border border-ui-border my-8">
              <h4 className="font-bold text-text-heading mb-2">
                Key Statistic
              </h4>
              <p className="text-lg italic">
                "For every $1.00 spent on actual data security, rural hospitals
                will now spend $0.45 on compliance reporting alone."
              </p>
            </div>

            <h2
              id="rural-impact"
              className="text-3xl font-bold text-text-heading mt-12 mb-6"
            >
              2. Rural Network Vulnerability
            </h2>
            <p className="mb-6">
              Most rural networks rely on legacy on-premise servers that are
              fundamentally incompatible with the Act's "Real-time
              Interoperability" mandate. The capital expenditure (CapEx)
              required to upgrade is currently non-reimbursable.
            </p>

            <h2
              id="vendor-consolidation"
              className="text-3xl font-bold text-text-heading mt-12 mb-6"
            >
              3. Vendor Consolidation Risks
            </h2>
            <p className="mb-6">
              Because small hospitals cannot build these compliance tools
              in-house, they will be forced to migrate to the two dominant EHR
              vendors (Epic/Oracle) who offer "Compliance-as-a-Service." This
              accelerates vertical consolidation and reduces pricing power for
              providers.
            </p>

            <hr className="my-12 border-ui-border" />

            <div className="bg-ui-bg-light p-8 rounded-xl">
              <h3 className="text-xl font-bold text-ui-primary mb-2">
                Executive Summary
              </h3>
              <p className="text-sm">
                We recommend that independent health systems immediately lobby
                for a "Safe Harbor" amendment for facilities under 100 beds, or
                prepare for a forced merger/acquisition event within 24 months
                of the bill's passage.
              </p>
            </div>
          </div>

          {/* INTEGRATED COMMENTS SECTION */}
          <CommentsSection />
        </div>

        {/* Right Sidebar: Related & Share */}
        <div className="lg:col-span-3 space-y-8">
          {/* Share Tools */}
          <div className="bg-surface border border-ui-border p-6 rounded-xl shadow-sm">
            <h4 className="text-xs font-bold text-text-heading uppercase tracking-widest mb-4">
              Share this Analysis
            </h4>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-blue-600 text-white rounded text-sm font-bold hover:opacity-90">
                LinkedIn
              </button>
              <button className="flex-1 py-2 bg-black text-white rounded text-sm font-bold hover:opacity-90">
                X
              </button>
            </div>
          </div>

          {/* Related Content */}
          <div>
            <h4 className="text-xs font-bold text-text-heading uppercase tracking-widest mb-4">
              Related Intelligence
            </h4>
            <div className="space-y-4">
              <Link href="/economics/market" className="block group">
                <span className="text-xs font-bold text-card-economics">
                  ECONOMICS
                </span>
                <h5 className="font-bold text-text-heading group-hover:text-ui-primary transition">
                  The M&A Forecast for 2025
                </h5>
              </Link>
              <Link href="/technology/security" className="block group">
                <span className="text-xs font-bold text-card-tech">
                  TECHNOLOGY
                </span>
                <h5 className="font-bold text-text-heading group-hover:text-ui-primary transition">
                  Zero Trust Architecture Guide
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
