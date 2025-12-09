// app/policy/regulation/page.tsx

import React from "react";
import Link from "next/link";
import { client } from "@/lib/sanity"; // Import the bridge we just built

// 1. The Data Fetching Function
async function getPolicies() {
  // This query asks for all documents of type "policyAnalysis"
  // It grabs the title, summary, and published date.
  const query = `*[_type == "policyAnalysis"] | order(publishedAt desc) {
    _id,
    title,
    summary,
    publishedAt,
    slug
  }`;

  return client.fetch(query);
}

// 2. The Page Component
export default async function RegulationPage() {
  // Fetch the real data
  const policies = await getPolicies();

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-policy uppercase tracking-wider mb-2 block">
          Policy Intelligence
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-4">
          Regulation & Legislation
        </h1>
        <p className="text-xl text-text-body leading-relaxed">
          Real-time analysis powered by HTR Intelligence.
        </p>
      </div>

      <div className="grid gap-6">
        {/* If no content is found */}
        {policies.length === 0 && (
          <div className="p-8 text-center bg-surface-muted rounded-xl">
            <p className="text-text-body">
              No policy analysis found. Add content in Sanity Studio.
            </p>
          </div>
        )}

        {/* Map through the REAL data from Sanity */}
        {policies.map((bill: any) => (
          <div
            key={bill._id}
            className="group bg-surface border border-ui-border rounded-xl p-6 hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-card-policy opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-text-body/60">
                    {new Date(bill.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-2">
                  {bill.title}
                </h3>
                <p className="text-text-body max-w-4xl">{bill.summary}</p>
              </div>

              <div className="flex-shrink-0 flex flex-col items-end justify-center gap-2">
                {/* We use the slug to link to the detail page */}
                <Link
                  href={`/policy/regulation/analysis/${bill.slug.current}`}
                  className="text-sm font-bold text-card-policy hover:underline mt-2 block"
                >
                  Read Deep Dive &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
