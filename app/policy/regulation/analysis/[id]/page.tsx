// app/policy/regulation/analysis/[id]/page.tsx

import React from "react";
import { client } from "@/lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import CommentsSection from "@/components/CommentsSection";

// 1. STYLE MAP (The "Translator" from Sanity -> Tailwind)
const ptComponents: PortableTextComponents = {
  // ... (Keep your existing block and list settings) ...

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-text-heading">{children}</strong>
    ),

    // NEW: HANDLE THE COLORS
    "highlight-policy": ({ children }) => (
      <span className="text-card-policy font-bold">{children}</span>
    ),
    "highlight-economics": ({ children }) => (
      <span className="text-card-economics font-bold">{children}</span>
    ),
    "highlight-tech": ({ children }) => (
      <span className="text-card-tech font-bold">{children}</span>
    ),

    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-ui-primary underline hover:opacity-80 transition"
      >
        {children}
      </a>
    ),
  },
};

// 2. DATA FETCHING
async function getArticle(slug: string) {
  // We fetch the 'pillar' field to color-code the header badges
  const query = `*[_type == "policyAnalysis" && slug.current == $slug][0] {
    title,
    summary,
    publishedAt,
    body,
    pillar, 
    status,
    impactLevel
  }`;

  // No-cache ensures you see updates instantly
  return client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

// 3. PAGE COMPONENT
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-text-heading">
          Article not found
        </h1>
        <p className="text-text-body">
          The analysis could not be retrieved from the database.
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 border-b border-ui-border pb-12">
        <div className="flex justify-center gap-3 mb-6">
          <span className="px-3 py-1 bg-ui-bg-light text-ui-primary text-xs font-bold uppercase tracking-wider rounded-full">
            {article.pillar || "Analysis"}
          </span>
          <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-bold uppercase tracking-wider rounded-full border border-ui-border">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-6 leading-tight">
          {article.title}
        </h1>

        <p className="text-xl text-text-body leading-relaxed mb-8 max-w-3xl mx-auto">
          {article.summary}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 lg:col-start-3">
          <div className="prose prose-lg max-w-none">
            {/* CRITICAL: Passing the 'ptComponents' map here applies the styles */}
            <PortableText value={article.body} components={ptComponents} />
          </div>

          <hr className="my-12 border-ui-border" />
          <CommentsSection />
        </div>
      </div>
    </div>
  );
}
