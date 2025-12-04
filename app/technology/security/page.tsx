// app/technology/security/page.tsx

import React from "react";
import Link from "next/link";

const SecurityPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO */}
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-tech uppercase tracking-wider mb-2 block">
          Cyber Resilience
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Data Security & Governance
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          Healthcare is the #1 target for cyberattacks. We analyze the economics
          of ransomware, the implementation of Zero Trust architectures, and the
          evolving ethics of patient data sovereignty.
        </p>
      </div>

      {/* 2. THE THREAT LANDSCAPE */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-text-heading mb-8">
          The Ransomware Economy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-text-body">
            <p>
              Hospitals are high-value targets because they cannot tolerate
              downtime. Attackers know that <strong>Time = Life</strong>,
              forcing rapid payouts.
            </p>
            <div className="p-6 bg-surface border border-l-4 border-red-600 rounded-r-xl shadow-sm">
              <h4 className="font-bold text-text-heading mb-2">
                The "Double Extortion" Tactic
              </h4>
              <p className="text-sm">
                Modern attacks don't just encrypt data; they exfiltrate it. Even
                if a hospital restores from backup, attackers threaten to leak
                sensitive patient records unless paid.
              </p>
            </div>
            <p>
              <strong>Policy Impact:</strong> New CISA guidelines are moving
              toward mandatory reporting windows (72 hours) and potential bans
              on ransom payments for critical infrastructure.
            </p>
          </div>

          <div className="bg-surface-muted p-8 rounded-2xl border border-ui-border">
            <h3 className="text-xl font-bold text-text-heading mb-6 text-center">
              Cost of a Breach
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-1 font-bold">
                  <span>Healthcare (Highest Industry)</span>
                  <span className="text-card-tech">$10.9M Avg Cost</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 border border-ui-border">
                  <div
                    className="bg-card-tech h-full rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 font-bold">
                  <span>Financial Services</span>
                  <span className="text-text-body">$5.9M Avg Cost</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 border border-ui-border">
                  <div
                    className="bg-gray-400 h-full rounded-full"
                    style={{ width: "54%" }}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-text-body mt-4 text-center">
                Source: IBM Security Cost of a Data Breach Report
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURE: ZERO TRUST */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-text-heading mb-6">
          Moving to "Zero Trust"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface border-t-4 border-card-tech rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-text-heading mb-2">
              Identity (IAM)
            </h3>
            <p className="text-text-body text-sm">
              "Never trust, always verify." Moving from perimeter defense to
              continuous multi-factor authentication (MFA) for every user,
              inside or outside the network.
            </p>
          </div>
          <div className="p-6 bg-surface border-t-4 border-card-tech rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-text-heading mb-2">
              Micro-Segmentation
            </h3>
            <p className="text-text-body text-sm">
              Isolating medical devices (IOT) from the main EHR network. If an
              MRI machine is hacked, the attacker cannot pivot to the patient
              database.
            </p>
          </div>
          <div className="p-6 bg-surface border-t-4 border-card-tech rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-text-heading mb-2">
              Data Governance
            </h3>
            <p className="text-text-body text-sm">
              Knowing exactly where PHI lives. Unstructured data (emails, PDFs)
              is the biggest blind spot in hospital compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <div className="text-center pt-12 border-t border-ui-border">
        <h3 className="text-2xl font-bold text-text-heading mb-4">
          Secure Your Infrastructure
        </h3>
        <p className="text-text-body mb-8">
          We offer CISO-level advisory for health systems migrating to Zero
          Trust environments.
        </p>
        <Link
          href="/advisory/contact"
          className="px-8 py-3 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition"
        >
          Request Security Audit
        </Link>
      </div>
    </div>
  );
};

export default SecurityPage;
