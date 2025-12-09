// app/economics/market/page.tsx

import React from "react";
import Link from "next/link";
import { client } from "@/lib/sanity";

// 1. Fetch Data: Only get articles tagged "Economics"
async function getEconomicsArticles() {
  const query = `*[_type == "policyAnalysis" && pillar == "Economics"] | order(publishedAt desc) {
    _id,
    title,
    summary,
    publishedAt,
    slug,
    status,
    impactLevel
  }`;

  return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function MarketFinancePage() {
  const articles = await getEconomicsArticles();

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-card-economics uppercase tracking-wider mb-2 block">
          Market Intelligence
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Market & Finance
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-4xl">
          Deep dives into capital allocation, labor supply shocks, and the
          financial mechanics of healthcare.
        </p>
      </div>

      {/* Dynamic Article Grid */}
      <div className="grid gap-6">
        {articles.length === 0 && (
          <div className="p-10 text-center bg-surface-muted rounded-xl border border-ui-border">
            <p className="text-text-body mb-4">No analysis available yet.</p>
            <p className="text-sm text-text-body/60">
              Run the script with pillar: "Economics" to populate this list.
            </p>
          </div>
        )}

        {articles.map((article: any) => (
          <div
            key={article._id}
            className="group bg-surface border border-ui-border rounded-xl p-6 hover:shadow-md transition-all relative overflow-hidden"
          >
            {/* GREEN Hover Bar for Economics */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-card-economics opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-text-body/60 font-mono border border-ui-border px-2 py-1 rounded">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                  {article.status && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded uppercase">
                      {article.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-2">
                  {article.title}
                </h3>
                <p className="text-text-body max-w-4xl">{article.summary}</p>
              </div>

              <div className="flex-shrink-0 flex flex-col items-end justify-center gap-2">
                <Link
                  href={`/economics/analysis/${article.slug.current}`}
                  className="text-sm font-bold text-card-economics hover:underline mt-2 block"
                >
                  Read Analysis &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
