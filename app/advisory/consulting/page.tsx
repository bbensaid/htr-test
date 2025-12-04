// app/advisory/consulting/page.tsx

import React from "react";
import Link from "next/link";

const ConsultingPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-ui-primary uppercase tracking-wider mb-2 block">
          Advisory Services
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Strategic Consulting
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-3xl">
          We partner with health systems, payers, and technology firms to
          navigate the complex intersection of policy compliance and market
          growth.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">
              Our Approach
            </h2>
            <p className="text-text-body mb-4">
              Unlike generalist firms, HTR Consulting focuses strictly on the
              tri-vergence of Policy, Economics, and Technology. We don't just
              advise on strategy; we stress-test it against upcoming regulatory
              changes and economic forecasting models.
            </p>
            <p className="text-text-body">
              Our team includes former CMS advisors, health economists, and
              digital transformation architects who understand the nuance of
              execution in a regulated environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">
              Key Capabilities
            </h2>
            <ul className="space-y-3">
              {[
                "Regulatory Risk Assessment & Mitigation",
                "Value-Based Care Model Design",
                "Digital Health Market Entry Strategy",
                "M&A Due Diligence (Policy & Tech Focus)",
                "Reimbursement Pathway Planning",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-text-body">
                  <span className="text-ui-primary mr-2">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: CTA Box */}
        <div className="lg:col-span-1">
          <div className="bg-surface-muted p-8 rounded-xl border border-ui-border sticky top-24">
            <h3 className="text-xl font-bold text-text-heading mb-2">
              Start a Conversation
            </h3>
            <p className="text-sm text-text-body mb-6">
              Discuss your strategic challenges with our principal consultants.
            </p>

            {/* CRITICAL FIX: 
               Updated classes to match Global UI consistency.
               - Uses 'bg-ui-primary' (Matches Header)
               - Uses 'text-ui-text-on-primary' (Matches Header)
               - Removed arbitrary shadows/margins that differed from the system.
            */}
            <Link
              href="/advisory/contact"
              className="block w-full py-3 px-4 bg-ui-primary text-ui-text-on-primary text-center text-sm font-semibold rounded-lg hover:opacity-90 transition duration-150 mb-4"
            >
              Book Consultation
            </Link>

            <p className="text-xs text-text-body text-center">
              Direct access to senior partners. <br /> No sales intermediaries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
