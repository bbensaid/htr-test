// components/ArticlePageTemplate.tsx

import React from "react";
import { client } from "@/lib/sanity";
import ArticleContent from "@/components/ArticleContent";
import CommentsSection from "@/components/CommentsSection";
import DefinitionToggle from "@/components/DefinitionToggle";

// 1. DATA FETCHING
// 1. DATA FETCHING (FIXED)
async function getArticle(slug: string) {
  const query = `*[_type == "policyAnalysis" && slug.current == $slug][0] {
    title, summary, publishedAt, body, pillar,
    body[]{
      ...,
      // FIX: Changed 'videoFile' to 'url' or 'file' depending on your schema (usually 'url' for youtube)
      _type == "video" => { ... }, 
      
      // FIX: Changed 'audioFile' to 'file' to match the actual schema field name
      _type == "audio" => { 
        ..., 
        file { 
          asset->{
            url
          } 
        } 
      },

      markDefs[]{
        ...,
        _type == "definition" => { ..., reference->{ term, description } }
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

  const getBadgeColor = (pillar: string) => {
    const p = pillar?.toLowerCase() || "";
    if (p === "policy") return "bg-orange-100 text-orange-800";
    if (p === "economics") return "bg-green-100 text-green-800";
    if (p === "technology") return "bg-indigo-100 text-indigo-800";
    if (p === "operations") return "bg-rose-100 text-rose-800";
    if (p === "science") return "bg-teal-100 text-teal-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto text-center mb-16 border-b border-ui-border pb-12 relative">
        {/* METADATA ROW (Split Layout) */}
        {/* 'relative' allows us to pin Left and Right items absolutely on Desktop */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center mb-8 min-h-[32px]">
          {/* LEFT: Pillar Badge */}
          <div className="mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
            <span
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${getBadgeColor(
                article.pillar
              )}`}
            >
              {article.pillar}
            </span>
          </div>

          {/* CENTER: Date (The Data) */}
          <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-bold uppercase tracking-wider rounded-full border border-ui-border">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>

          {/* RIGHT: Definition Toggle */}
          <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            <DefinitionToggle />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-text-body leading-relaxed mb-4 max-w-3xl mx-auto">
          {article.summary}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 lg:col-start-3">
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
