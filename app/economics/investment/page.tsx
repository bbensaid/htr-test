// app/economics/investment/page.tsx

import React from "react";
import Link from "next/link";

const InvestmentPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO */}
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-economics uppercase tracking-wider mb-2 block">
          Capital Markets
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Healthcare Investment Trends
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          Tracking the flow of capital from Venture, Private Equity, and Public
          Markets. We analyze valuation corrections, M&A consolidation
          strategies, and the shift from "Growth at all costs" to "Unit
          Economics."
        </p>
      </div>

      {/* 2. PRIVATE EQUITY ROLL-UPS */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-text-heading mb-4">
              The PE Provider Playbook
            </h2>
            <p className="text-text-body mb-6 leading-relaxed">
              Private Equity has moved aggressively into physician practice
              management (PPM). The strategy is classic arbitrage: Acquire
              fragmented independent practices at 4-6x EBITDA, consolidate
              back-office functions, and sell the platform at 12-14x EBITDA.
            </p>
            <div className="bg-surface-muted p-4 rounded-lg border-l-4 border-card-economics">
              <span className="block font-bold text-text-heading mb-1">
                Hot Sectors:
              </span>
              <span className="text-text-body">
                Dermatology, Ophthalmology, Gastroenterology, and increasingly,
                Cardiology.
              </span>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            {/* Visual representation of consolidation */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface border border-ui-border rounded-xl text-center">
                <span className="block text-3xl font-black text-card-economics mb-1">
                  40%
                </span>
                <span className="text-xs font-bold text-text-body uppercase">
                  ER Staffing PE Owned
                </span>
              </div>
              <div className="p-6 bg-surface border border-ui-border rounded-xl text-center">
                <span className="block text-3xl font-black text-card-economics mb-1">
                  200+
                </span>
                <span className="text-xs font-bold text-text-body uppercase">
                  Acquisitions in 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL HEALTH CORRECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-text-heading mb-8">
          The Digital Health Correction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-surface border border-ui-border rounded-xl">
            <h3 className="text-xl font-bold text-text-heading mb-3">
              2021: The Peak
            </h3>
            <p className="text-text-body text-sm">
              Record funding ($29B) driven by pandemic necessity. Valuations
              decoupled from revenue; growth was the only metric.
            </p>
          </div>
          <div className="p-8 bg-surface border border-ui-border rounded-xl">
            <h3 className="text-xl font-bold text-text-heading mb-3">
              2023-24: The Reality
            </h3>
            <p className="text-text-body text-sm">
              "Platform" companies are winning. Point solutions are dying or
              being acquired for parts. Investors now demand clear clinical ROI
              and integration.
            </p>
          </div>
          <div className="p-8 bg-surface-muted border border-ui-border rounded-xl">
            <h3 className="text-xl font-bold text-text-heading mb-3">
              The Exit Problem
            </h3>
            <p className="text-text-body text-sm">
              The IPO window is shut. M&A is the primary exit route, but large
              buyers (CVS, Amazon, UnitedHealth) are being selective on price.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INVESTOR RESOURCES */}
      <div className="bg-card-economics rounded-2xl p-10 text-ui-text-on-primary">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Deal Flow Intelligence</h2>
            <p className="opacity-90">
              Get our quarterly breakdown of health tech valuations, multiples,
              and active acquirers.
            </p>
          </div>
          <Link
            href="/advisory/reports"
            className="px-8 py-3 bg-surface text-card-economics font-bold rounded-lg hover:bg-gray-100 transition shadow-lg whitespace-nowrap"
          >
            Access Market Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPage;
