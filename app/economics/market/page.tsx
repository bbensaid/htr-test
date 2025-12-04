// app/economics/market/page.tsx

import React from "react";
import Link from "next/link";

const MarketFinancePage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-economics uppercase tracking-wider mb-2 block">
          Macro-Economics
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Labor, Supply & Demand
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          Analyzing the fundamental disconnects in the healthcare market: Why
          supply constraints in labor are driving wage inflation, and how
          consolidation is distorting price discovery.
        </p>
      </div>

      {/* 1. DEEP DIVE: THE LABOR SUPPLY CRISIS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-text-heading mb-8">
          The Labor Supply Shock
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6 text-text-body">
            <p>
              Healthcare is currently experiencing a classic{" "}
              <strong>inelastic supply shock</strong>. The supply of clinical
              labor (Physicians, RNs) cannot expand quickly enough to meet the
              demand driven by an aging demographic.
            </p>
            <div className="p-6 bg-surface border-l-4 border-red-500 rounded-r-xl">
              <h4 className="font-bold text-text-heading mb-2">
                The "Burnout" Multiplier
              </h4>
              <p className="text-sm">
                Burnout isn't just a morale issue; it's an economic variable. It
                reduces the <em>effective</em> supply of FTEs (Full Time
                Equivalents) as clinicians move to part-time work or exit the
                workforce entirely, shifting the supply curve further left.
              </p>
            </div>
            <p>
              <strong>Wage Spiral:</strong> Hospitals are forced to rely on
              locum tenens and travel nursing agencies, paying 3x-4x premiums.
              This shifts the cost structure permanently, eroding operating
              margins.
            </p>
          </div>

          <div className="lg:w-1/2 bg-surface-muted rounded-xl p-8 border border-ui-border">
            <h4 className="font-bold text-text-heading mb-4 text-center">
              Projected Physician Shortage (2034)
            </h4>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-1 font-bold">
                  <span>Primary Care</span>
                  <span className="text-red-600">-48,000 FTEs</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 border border-ui-border overflow-hidden">
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1 font-bold">
                  <span>Surgical Specialties</span>
                  <span className="text-red-600">-30,200 FTEs</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 border border-ui-border overflow-hidden">
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1 font-bold">
                  <span>Medical Specialties</span>
                  <span className="text-red-600">-13,000 FTEs</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 border border-ui-border overflow-hidden">
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-text-body mt-6 text-center italic">
              Data Source: AAMC Complexities of Physician Supply and Demand
            </p>
          </div>
        </div>
      </section>

      {/* 2. SUPPLY & DEMAND DYNAMICS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-text-heading mb-6">
          Market Distortion: Supply & Demand
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface border border-ui-border rounded-xl">
            <h3 className="text-xl font-bold text-card-economics mb-3">
              Inelastic Demand
            </h3>
            <p className="text-text-body text-sm">
              Patients do not shop for emergency heart surgery based on price.
              In acute care, demand is perfectly inelastic, which breaks
              traditional market pricing mechanisms.
            </p>
          </div>
          <div className="p-6 bg-surface border border-ui-border rounded-xl">
            <h3 className="text-xl font-bold text-card-economics mb-3">
              Induced Demand
            </h3>
            <p className="text-text-body text-sm">
              "Roemer's Law": In healthcare, a built bed is a filled bed. Supply
              can generate its own demand, particularly in fee-for-service
              environments where volume is incentivized.
            </p>
          </div>
          <div className="p-6 bg-surface border border-ui-border rounded-xl">
            <h3 className="text-xl font-bold text-card-economics mb-3">
              Information Asymmetry
            </h3>
            <p className="text-text-body text-sm">
              The buyer (patient) relies entirely on the seller (doctor) to
              determine necessity. This imbalance prevents the "Rational
              Consumer" model from functioning.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CONSOLIDATION & FINANCE */}
      <section className="bg-card-economics text-ui-text-on-primary rounded-2xl p-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              The Consolidation Premium
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Vertical integration (Insurers buying Providers) and Horizontal
              integration (Hospital Mergers) creates pricing leverage.
            </p>
            <p className="mt-4 font-bold text-2xl">
              Post-merger prices increase by an average of 6-12%.
            </p>
          </div>
          <div>
            <Link
              href="/advisory/reports"
              className="inline-block px-8 py-4 bg-white text-card-economics font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Read the M&A Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketFinancePage;
