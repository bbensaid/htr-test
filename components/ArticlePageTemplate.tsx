// components/ArticlePageTemplate.tsx

import React from "react";
import { client } from "@/lib/sanity";
import ArticleContent from "@/components/ArticleContent";
import CommentsSection from "@/components/CommentsSection";

// 1. DATA FETCHING (Centralized)
async function getArticle(slug: string) {
  // GROQ Query: Fetches content and "expands" video/audio assets to get their URLs
  const query = `*[_type == "policyAnalysis" && slug.current == $slug][0] {
    title, summary, publishedAt, body, pillar,
    body[]{
      ..., 
      _type == "video" => {
        ...,
        videoFile {
          asset->{url}
        }
      },
      _type == "audio" => {
        ..., 
        audioFile {
          asset->{url}
        }
      }
    }
  }`;
  return client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

// 2. THE MASTER LAYOUT
export default async function ArticlePageTemplate({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article)
    return <div className="p-20 text-center">Article not found.</div>;

  // Helper for Badge Colors
  const getBadgeColor = (pillar: string) => {
    const p = pillar?.toLowerCase() || "";
    if (p === "policy") return "bg-orange-100 text-orange-800";
    if (p === "economics") return "bg-green-100 text-green-800";
    if (p === "technology") return "bg-indigo-100 text-indigo-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Shared Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 border-b border-ui-border pb-12">
        <div className="flex justify-center gap-3 mb-6">
          <span
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${getBadgeColor(
              article.pillar
            )}`}
          >
            {article.pillar}
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

      {/* Shared Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 lg:col-start-3">
          {/* Content Rendering (Handled by ArticleContent) */}
          <div className="prose prose-lg max-w-none">
            <ArticleContent body={article.body} pillar={article.pillar} />
          </div>

          <hr className="my-12 border-ui-border" />
          <CommentsSection />
        </div>
      </div>
    </div>
  );
}
