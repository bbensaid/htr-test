// app/economics/cea/page.tsx

import React from "react";
import Link from "next/link";

const CEAPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO */}
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-economics uppercase tracking-wider mb-2 block">
          Health Technology Assessment
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Cost-Effectiveness Analysis (CEA)
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          The rigorous economic calculus determining the value of medical
          intervention. We analyze the ICER thresholds and QALY metrics that
          drive coverage decisions.
        </p>
      </div>

      {/* 2. CORE METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-surface border border-ui-border rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-text-heading mb-4">
            The QALY Equation
          </h3>
          <p className="text-text-body mb-6">
            **Quality-Adjusted Life Year:** The gold standard for measuring
            disease burden. One QALY equates to one year in perfect health.
          </p>
          <div className="bg-surface-muted p-6 rounded-lg border-l-4 border-card-economics font-mono text-sm text-text-heading">
            Value = (Life Years Gained × Quality of Life Utility) - Cost of
            Intervention
          </div>
          <p className="text-text-body mt-6 text-sm">
            <strong>Controversy:</strong> Critics argue QALYs inherently
            undervalue treatments for elderly or disabled populations, leading
            to the rise of alternative metrics like evLYG (Equal Value of Life
            Years Gained).
          </p>
        </div>

        <div className="bg-surface border border-ui-border rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-text-heading mb-4">
            The ICER Threshold
          </h3>
          <p className="text-text-body mb-6">
            **Incremental Cost-Effectiveness Ratio:** The price payers are
            willing to pay for one additional QALY.
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-ui-border pb-2">
              <span className="text-text-body font-medium">
                Standard Benchmark (US)
              </span>
              <span className="font-bold text-text-heading">
                $100k - $150k / QALY
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-ui-border pb-2">
              <span className="text-text-body font-medium">
                Standard Benchmark (UK/NICE)
              </span>
              <span className="font-bold text-text-heading">
                £20k - £30k / QALY
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-text-body font-medium">Orphan Drugs</span>
              <span className="font-bold text-card-economics">
                $500k+ / QALY
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CASE STUDY: GLP-1 AGONISTS */}
      <div className="bg-surface-muted rounded-2xl p-10 mb-20 border border-ui-border">
        <span className="px-3 py-1 bg-card-economics text-ui-text-on-primary text-xs font-bold rounded uppercase mb-4 inline-block">
          Active Case Study
        </span>
        <h2 className="text-3xl font-bold text-text-heading mb-6">
          The Obesity Economy: GLP-1 Agonists
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 text-text-body">
            <p>
              New weight-loss drugs present a unique CEA challenge: High upfront
              costs ($12k+/year) vs. long-term avoidance of chronic disease
              (diabetes, CVD).
            </p>
            <p>
              <strong>The Budget Impact Problem:</strong> Even if the ICER is
              favorable, the sheer volume of eligible patients creates a "Budget
              Impact" that threatens payer solvency. Traditional CEA does not
              account for total affordability at scale.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg border border-ui-border">
            <h4 className="font-bold text-text-heading mb-2">Payer Response</h4>
            <ul className="space-y-2 text-sm text-text-body">
              <li>• Strict Prior Authorization</li>
              <li>• Lifestyle modification prerequisites</li>
              <li>• Discontinuation rules for non-responders</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. CTA */}
      <div className="text-center py-12 border-t border-ui-border">
        <h3 className="text-3xl font-bold text-text-heading mb-4">
          Validate Your Pricing
        </h3>
        <p className="text-lg text-text-body mb-8">
          We help pharma and device manufacturers build ICER-compliant economic
          dossiers for payer negotiations.
        </p>
        <Link
          href="/advisory/contact"
          className="inline-block px-8 py-4 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition-all"
        >
          Contact Our Health Economists
        </Link>
      </div>
    </div>
  );
};

export default CEAPage;
