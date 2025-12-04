// app/technology/digital/page.tsx

import React from "react";
import Link from "next/link";

const DigitalHealthPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO */}
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-tech uppercase tracking-wider mb-2 block">
          Virtual Care Ecosystem
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Digital Health & Telemedicine
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          The pandemic proved feasibility; now we must prove sustainability. We
          analyze the economics of Remote Patient Monitoring (RPM), the
          logistics of Hospital-at-Home, and the rise of Asynchronous care.
        </p>
      </div>

      {/* 2. THE THREE MODALITIES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Synchronous",
            desc: "Real-time video/audio. The standard 'virtual visit'.",
            status: "Commoditized",
            note: "Margins are compressing as this becomes a standard utility.",
            color: "border-gray-300",
          },
          {
            title: "Asynchronous",
            desc: "Store-and-forward (text/images). Highly efficient for derm, psych refill, and triage.",
            status: "High Growth",
            note: "The only modality that actually expands physician capacity.",
            color: "border-card-tech",
          },
          {
            title: "Remote Monitoring",
            desc: "Continuous data streams (BP, Glucose) fed to care teams.",
            status: "Integration Hell",
            note: "High potential, but drowning providers in un-actionable data noise.",
            color: "border-gray-300",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`p-8 bg-surface border-t-4 ${item.color} border-x border-b border-ui-border rounded-xl shadow-sm`}
          >
            <h3 className="text-xl font-bold text-text-heading mb-2">
              {item.title}
            </h3>
            <span className="text-xs font-bold text-card-tech uppercase tracking-wide block mb-4">
              Status: {item.status}
            </span>
            <p className="text-text-body text-sm mb-4">{item.desc}</p>
            <p className="text-xs text-text-body italic border-t border-ui-border pt-4">
              "{item.note}"
            </p>
          </div>
        ))}
      </div>

      {/* 3. HOSPITAL AT HOME */}
      <section className="mb-20">
        <div className="bg-surface-muted rounded-2xl p-10 border border-ui-border">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-text-heading mb-4">
                Hospital at Home (HaH)
              </h2>
              <p className="text-text-body mb-4">
                <strong>The Logistics Challenge:</strong> Treating acute
                patients (pneumonia, CHF) in their living rooms. It requires a
                complex orchestration of supply chain, roaming paramedics, and
                remote biometrics.
              </p>
              <p className="text-text-body">
                <strong>The Economic Case:</strong> HaH reduces length of stay
                and readmissions, but the fixed costs of logistics are high. It
                only works at scale or with high-margin DRGs.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col justify-center gap-4">
              <div className="bg-surface p-4 rounded-lg border border-ui-border">
                <span className="block text-2xl font-bold text-text-heading">
                  Lower Cost
                </span>
                <span className="text-sm text-text-body">
                  ~20% reduction vs Inpatient
                </span>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-ui-border">
                <span className="block text-2xl font-bold text-text-heading">
                  Better Outcomes
                </span>
                <span className="text-sm text-text-body">
                  Reduced delirium & infection rates
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORM FATIGUE */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-text-heading mb-6">
          The "Point Solution" Correction
        </h2>
        <p className="text-text-body leading-relaxed mb-6">
          Employers and Payers are overwhelmed by point solutions (one app for
          diabetes, one for sleep, one for MSK). The market is aggressively
          consolidating into **Comprehensive Virtual Care Platforms**.
        </p>
        <div className="p-6 bg-card-tech/5 border border-card-tech rounded-lg">
          <p className="text-card-tech font-bold">
            Prediction: By 2026, 40% of standalone digital health point
            solutions will be acquired or shut down.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalHealthPage;
