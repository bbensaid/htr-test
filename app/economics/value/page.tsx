// app/economics/value/page.tsx

import React from "react";
import Link from "next/link";

const ValueBasedCarePage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO: The Economic Thesis */}
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-economics uppercase tracking-wider mb-2 block">
          Financial Architecture
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Value-Based Care & Risk Contracting
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          Moving beyond the buzzwords to the actuarial reality. We deconstruct
          the mechanisms of risk transfer, from Total Cost of Care (TCOC)
          benchmarks to the operational realities of Hospital Global Budgets.
        </p>
      </div>

      {/* 2. DEEP DIVE: TOTAL COST OF CARE (TCOC) */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-card-economics text-ui-text-on-primary flex items-center justify-center font-bold text-xl">
            $
          </div>
          <h2 className="text-3xl font-bold text-text-heading">
            Total Cost of Care (TCOC)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="prose max-w-none text-text-body">
            <p className="mb-4">
              TCOC models shift the fundamental unit of reimbursement from the{" "}
              <em>service</em> to the <em>patient</em>. The economic theory
              relies on <strong>attribution logic</strong>—assigning a patient's
              total annual spend to a single entity (ACO or Primary Care).
            </p>
            <h4 className="text-lg font-bold text-text-heading mt-6 mb-2">
              The Actuarial Friction
            </h4>
            <p className="mb-4">
              The primary failure point in TCOC contracts isn't clinical; it's
              statistical.
              <span className="block p-4 my-4 bg-surface-muted border-l-4 border-card-economics italic font-medium">
                "When 'Reversion to the Mean' is mistaken for 'Savings', the
                economic model collapses."
              </span>
              Our analysis shows that 40% of early MSSP (Medicare Shared Savings
              Program) "savings" were actually artifacts of risk-adjustment
              coding rather than genuine utilization reduction.
            </p>
          </div>

          <div className="bg-surface border border-ui-border rounded-xl p-8 shadow-sm">
            <h4 className="text-sm font-bold text-text-heading uppercase mb-4">
              Risk Stratification Impact
            </h4>
            {/* Visual representation of risk tranches */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-text-body">
                    High Risk (Top 5%)
                  </span>
                  <span className="font-mono text-card-economics">
                    50% of Spend
                  </span>
                </div>
                <div className="w-full bg-surface-muted rounded-full h-2">
                  <div
                    className="bg-card-economics h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-text-body">
                    Rising Risk (Next 20%)
                  </span>
                  <span className="font-mono text-card-economics">
                    30% of Spend
                  </span>
                </div>
                <div className="w-full bg-surface-muted rounded-full h-2">
                  <div
                    className="bg-card-economics h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-text-body">
                    Healthy/Low Risk (Bottom 75%)
                  </span>
                  <span className="font-mono text-card-economics">
                    20% of Spend
                  </span>
                </div>
                <div className="w-full bg-surface-muted rounded-full h-2">
                  <div
                    className="bg-card-economics h-2 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-ui-border">
              <p className="text-xs text-text-body">
                <strong>Economic Implication:</strong> TCOC programs fail if
                they target the bottom 75%. Success requires dedicated capital
                allocation to the "Rising Risk" cohort before they graduate to
                "High Risk."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DEEP DIVE: HOSPITAL GLOBAL BUDGETS */}
      <div className="mb-20 bg-surface-muted rounded-2xl p-10 border border-ui-border">
        <h2 className="text-3xl font-bold text-text-heading mb-6">
          Hospital Global Budgets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-text-body text-lg mb-4">
              <strong>The Concept:</strong> Capitated payments for hospital
              services. Instead of FFS (Fee-For-Service), the hospital receives
              a fixed annual revenue stream regardless of volume.
            </p>
            <p className="text-text-body mb-4">
              <strong>The Maryland Model (Case Study):</strong> Maryland is the
              only U.S. state with an all-payer global budget model.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start text-text-body">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>
                  <strong>Incentive Flip:</strong> Admissions become a{" "}
                  <em>cost center</em>, not a profit center. Hospitals are
                  financially motivated to prevent ER visits.
                </span>
              </li>
              <li className="flex items-start text-text-body">
                <span className="text-red-600 font-bold mr-2">⚠</span>
                <span>
                  <strong>The Volume Trap:</strong> If patient volume drops too
                  low (e.g., during a pandemic), the per-unit cost skyrockets,
                  breaking the actuarial assumptions.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-surface p-6 rounded-lg border border-ui-border flex flex-col justify-center items-center text-center">
            <span className="text-5xl font-black text-card-economics mb-2">
              $368M
            </span>
            <span className="text-sm font-bold text-text-body uppercase">
              Savings to Medicare (Year 1)
            </span>
            <p className="text-xs text-text-body mt-2 px-4">
              Source: CMS Evaluation of Maryland All-Payer Model
            </p>
          </div>
        </div>
      </div>

      {/* 4. DEEP DIVE: REFERENCE PRICING */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold text-text-heading">
            Reference Pricing
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase rounded-full">
            High Impact
          </span>
        </div>
        <p className="text-xl text-text-body mb-8 max-w-4xl">
          The "Reverse Auction" of healthcare. Payers set a maximum contribution
          limit (the reference price) for "shoppable" services like joint
          replacements or colonoscopies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Price Variance",
              val: "300%",
              desc: "The spread in prices for identical procedures within the same geography.",
            },
            {
              title: "Patient Behavior",
              val: "Elastic",
              desc: "Demand becomes highly elastic when the patient pays 100% of the cost above the reference price.",
            },
            {
              title: "Market Response",
              val: "Convergence",
              desc: "High-price hospitals are forced to lower rates to the reference benchmark to retain volume.",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 border-t-4 border-card-economics bg-surface shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-lg font-bold text-text-heading mb-2">
                {stat.title}
              </h4>
              <span className="block text-4xl font-extrabold text-card-economics mb-3">
                {stat.val}
              </span>
              <p className="text-sm text-text-body">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CTA */}
      <div className="text-center pt-12 border-t border-ui-border">
        <h3 className="text-2xl font-bold text-text-heading mb-4">
          Model Your Risk
        </h3>
        <p className="text-text-body mb-8">
          Our actuarial team builds custom TCOC simulations for ACOs and
          Self-Insured Employers.
        </p>
        <Link
          href="/advisory/contact"
          className="px-8 py-3 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition"
        >
          Request Actuarial Review
        </Link>
      </div>
    </div>
  );
};

export default ValueBasedCarePage;
