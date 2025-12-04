// app/technology/iot/page.tsx

import React from "react";
import Link from "next/link";

const IOTPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO */}
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-tech uppercase tracking-wider mb-2 block">
          Connected Health
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Wearables & IoMT
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          From passive sensors to active drug delivery. We evaluate the clinical
          validity, interoperability standards, and "Data Tsunami" challenges of
          the Internet of Medical Things.
        </p>
      </div>

      {/* 2. DEVICE CLASSES */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface border border-ui-border rounded-xl p-8">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded uppercase mb-4 inline-block">
              Consumer Grade
            </span>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              Wellness Trackers
            </h3>
            <p className="text-text-body mb-6 text-sm">
              (Apple Watch, Fitbit, Oura)
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-text-body text-sm">
                <span className="text-green-500 font-bold mr-2">+</span> High
                Adoption / Engagement
              </li>
              <li className="flex items-center text-text-body text-sm">
                <span className="text-red-500 font-bold mr-2">-</span> Noisy
                Data / Low Specificity
              </li>
              <li className="flex items-center text-text-body text-sm">
                <span className="text-red-500 font-bold mr-2">-</span> Data
                Silos (Proprietary Clouds)
              </li>
            </ul>
            <div className="bg-surface-muted p-4 rounded text-xs text-text-body italic">
              "Great for trends, dangerous for diagnosis."
            </div>
          </div>

          <div className="bg-surface border-2 border-card-tech rounded-xl p-8 shadow-md">
            <span className="px-3 py-1 bg-card-tech text-ui-text-on-primary text-xs font-bold rounded uppercase mb-4 inline-block">
              Clinical Grade
            </span>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              Remote Monitoring
            </h3>
            <p className="text-text-body mb-6 text-sm">
              (Dexcom CGM, Cardiac Telemetry, Pulse Ox)
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-text-body text-sm">
                <span className="text-green-500 font-bold mr-2">+</span> FDA
                Cleared / Reimbursement Eligible
              </li>
              <li className="flex items-center text-text-body text-sm">
                <span className="text-green-500 font-bold mr-2">+</span> Direct
                EHR Integration (HL7/FHIR)
              </li>
              <li className="flex items-center text-text-body text-sm">
                <span className="text-red-500 font-bold mr-2">-</span> High Cost
                / Logistics Heavylift
              </li>
            </ul>
            <div className="bg-card-tech/10 p-4 rounded text-xs text-card-tech font-bold">
              "The engine of Hospital-at-Home."
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE INTEGRATION CHALLENGE */}
      <section className="mb-20 bg-surface-muted rounded-2xl p-10 border border-ui-border">
        <h2 className="text-3xl font-bold text-text-heading mb-6">
          The "Data Tsunami" Problem
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 text-text-body leading-relaxed">
            <p className="mb-4">
              A single continuous glucose monitor generates{" "}
              <strong>288 data points per day</strong>. Multiplied by thousands
              of patients, this creates a signal-to-noise ratio that overwhelms
              clinicians.
            </p>
            <p>
              <strong>The Solution: "Intelligence at the Edge."</strong> The
              next generation of IoMT must process data locally (on the device
              or phone) and only transmit *anomalies* or *summaries* to the EHR,
              rather than raw streams.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-center gap-4">
            <div className="bg-surface p-4 rounded-lg border border-ui-border">
              <span className="block font-bold text-text-heading">
                Raw Data
              </span>
              <span className="text-xs text-text-body">
                10 GB / Month / Patient
              </span>
            </div>
            <div className="flex justify-center text-card-tech font-bold">
              ↓ AI Filter ↓
            </div>
            <div className="bg-surface p-4 rounded-lg border border-ui-border">
              <span className="block font-bold text-text-heading">
                Actionable Alerts
              </span>
              <span className="text-xs text-text-body">3 Alerts / Month</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <div className="text-center pt-12 border-t border-ui-border">
        <h3 className="text-2xl font-bold text-text-heading mb-4">
          Evaluate Your Tech Stack
        </h3>
        <p className="text-text-body mb-8">
          We help health systems select interoperable, secure, and scalable IoMT
          platforms.
        </p>
        <Link
          href="/advisory/contact"
          className="px-8 py-3 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition"
        >
          Start Evaluation
        </Link>
      </div>
    </div>
  );
};

export default IOTPage;
