// app/technology/ai/page.tsx

import React from "react";
import Link from "next/link";

const AIPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 1. HERO */}
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-tech uppercase tracking-wider mb-2 block">
          Algorithmic Medicine
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          AI & Machine Learning
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          From Large Language Models (LLMs) automating documentation to
          predictive models flagging sepsis. We evaluate the clinical efficacy,
          safety guardrails, and liability frameworks of the AI revolution.
        </p>
      </div>

      {/* 2. THE BLACK BOX PROBLEM */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-text-heading mb-6">
              The "Black Box" Dilemma
            </h2>
            <p className="text-text-body mb-4 leading-relaxed">
              <strong>Explainability vs. Accuracy:</strong> Deep learning models
              often achieve higher diagnostic accuracy than traditional
              regression models, but their decision-making process is opaque.
            </p>
            <p className="text-text-body mb-6 leading-relaxed">
              This creates a conflict with{" "}
              <strong>"Right to Explanation"</strong> laws (like GDPR) and
              physician liability. If an AI misses a diagnosis and the doctor
              cannot explain why, who is liable?
            </p>
            <div className="p-6 bg-surface-muted border-l-4 border-card-tech rounded-r-xl">
              <h4 className="font-bold text-text-heading mb-2">HTR Stance</h4>
              <p className="text-sm text-text-body">
                We advocate for "Human-in-the-Loop" (HITL) verification systems
                until "Explainable AI" (XAI) matures enough to satisfy FDA
                auditing standards.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            <div className="p-6 bg-surface border border-ui-border rounded-xl hover:shadow-md transition">
              <h3 className="text-lg font-bold text-text-heading mb-2">
                Generative AI (LLMs)
              </h3>
              <p className="text-sm text-text-body">
                <strong>Use Case:</strong> Automated scribing and prior
                authorization appeals.
                <br />
                <strong>Risk:</strong> "Hallucinations" inserting false clinical
                data into EHRs.
              </p>
            </div>
            <div className="p-6 bg-surface border border-ui-border rounded-xl hover:shadow-md transition">
              <h3 className="text-lg font-bold text-text-heading mb-2">
                Computer Vision
              </h3>
              <p className="text-sm text-text-body">
                <strong>Use Case:</strong> Radiology read-assist and dermatology
                screening.
                <br />
                <strong>Risk:</strong> Training data bias leading to lower
                accuracy in diverse populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALGORITHMIC BIAS */}
      <section className="mb-20 bg-surface border border-ui-border rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-text-heading mb-6">
          Algorithmic Bias & Equity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-text-body text-lg mb-4">
              AI models trained on historical data inherit historical
              inequities. A famous algorithm used for population health
              management prioritized white patients over sicker black patients
              because it used "healthcare spending" as a proxy for "health
              need."
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start text-text-body">
                <span className="text-card-tech font-bold mr-2">➜</span>
                <span>
                  <strong>Data Representative:</strong> Training sets often
                  under-sample minority groups.
                </span>
              </li>
              <li className="flex items-start text-text-body">
                <span className="text-card-tech font-bold mr-2">➜</span>
                <span>
                  <strong>Outcome Drift:</strong> Models degrade over time as
                  patient demographics shift.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-surface-muted p-6 rounded-lg">
            <span className="text-5xl font-black text-text-heading mb-2">
              FDA
            </span>
            <span className="text-sm font-bold text-text-body uppercase">
              Total AI/ML Approvals
            </span>
            <span className="text-2xl font-bold text-card-tech mt-2">690+</span>
            <p className="text-xs text-text-body mt-2">
              Mostly Radiology (77%)
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <div className="text-center pt-12 border-t border-ui-border">
        <h3 className="text-2xl font-bold text-text-heading mb-4">
          Audit Your Algorithms
        </h3>
        <p className="text-text-body mb-8">
          Our technical advisory team performs bias audits and validation
          studies for health AI deployments.
        </p>
        <Link
          href="/advisory/contact"
          className="px-8 py-3 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition"
        >
          Schedule Tech Review
        </Link>
      </div>
    </div>
  );
};

export default AIPage;
