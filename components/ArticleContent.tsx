// components/ArticleContent.tsx
"use client";

import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";

interface ArticleContentProps {
  body: any;
  pillar: string; // "Policy", "Economics", or "Technology"
}

// --- HELPERS: Get Colors based on Pillar ---
const getThemeColors = (pillar: string) => {
  const normalized = pillar?.toLowerCase() || "";
  if (normalized === "policy")
    return { border: "border-card-policy", text: "text-card-policy" };
  if (normalized === "economics")
    return { border: "border-card-economics", text: "text-card-economics" };
  if (normalized === "technology")
    return { border: "border-card-tech", text: "text-card-tech" };
  return { border: "border-ui-primary", text: "text-ui-primary" }; // Default
};

const ArticleContent: React.FC<ArticleContentProps> = ({ body, pillar }) => {
  const theme = getThemeColors(pillar);

  // --- 1. RENDERERS ---

  const TableRenderer = ({ value }: any) => {
    try {
      const data = JSON.parse(value.code);
      if (Array.isArray(data) && data.length > 0) {
        const headers = Object.keys(data[0]);
        return (
          <div className="my-10 overflow-hidden rounded-xl border border-ui-border shadow-sm overflow-x-auto">
            {/* Dynamic Top Border Color */}
            <div
              className={`h-1 w-full`}
              style={{
                backgroundColor: `var(--color-${
                  pillar.toLowerCase() === "technology"
                    ? "card-tech"
                    : "card-" + pillar.toLowerCase()
                })`,
              }}
            ></div>
            <table className="min-w-full divide-y divide-ui-border">
              <thead className="bg-surface-muted">
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="px-6 py-4 text-left text-xs font-bold text-text-heading uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-surface divide-y divide-ui-border">
                {data.map((row: any, idx: number) => (
                  <tr
                    key={idx}
                    className="hover:bg-surface-muted/50 transition"
                  >
                    {headers.map((header) => (
                      <td
                        key={header}
                        className="px-6 py-4 text-sm text-text-body leading-relaxed align-top"
                      >
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      return (
        <pre className="bg-surface-muted p-4 rounded border border-ui-border overflow-x-auto text-sm">
          {value.code}
        </pre>
      );
    } catch (e) {
      return (
        <pre className="bg-surface-muted p-4 rounded border border-ui-border overflow-x-auto text-sm">
          {value.code}
        </pre>
      );
    }
  };

  const ImageRenderer = ({ value }: any) => {
    const imageUrl = value.asset ? urlFor(value).url() : null;
    return (
      <figure className="my-12">
        {imageUrl ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <img
              src={imageUrl}
              alt={value.alt || "Article Image"}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-surface-muted border-2 border-dashed border-ui-border rounded-xl flex flex-col items-center justify-center text-center p-6">
            <span className="text-4xl mb-2">📷</span>
            <p className="text-sm font-bold text-text-body uppercase">
              Image Placeholder
            </p>
            <p className="text-xs text-text-body mt-1 italic max-w-md">
              {value.caption}
            </p>
          </div>
        )}
        {value.caption && (
          <figcaption className="text-center text-sm text-text-body mt-3 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  // --- 2. COMPONENTS CONFIGURATION ---
  const ptComponents: PortableTextComponents = {
    types: {
      video: VideoPlayer,
      image: ImageRenderer,
      code: TableRenderer,
    },
    block: {
      normal: ({ children }) => (
        <p className="text-text-body text-lg leading-relaxed mb-6">
          {children}
        </p>
      ),
      h2: ({ children }) => (
        <h2
          className={`text-3xl font-bold text-text-heading mt-12 mb-6 border-l-4 ${theme.border} pl-4`}
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold text-text-heading mt-8 mb-4">
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <div
          className={`bg-surface-muted p-8 rounded-xl border-l-4 ${theme.border} my-8 shadow-sm`}
        >
          <p className="text-xl italic font-medium text-text-heading">
            {children}
          </p>
        </div>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 space-y-3 mb-6 text-text-body text-lg">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-text-body text-lg">
          {children}
        </ol>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold text-text-heading">{children}</strong>
      ),
      link: ({ value, children }) => (
        <a
          href={value?.href}
          className={`${theme.text} underline hover:opacity-80 transition font-semibold`}
        >
          {children}
        </a>
      ),
      "highlight-policy": ({ children }) => (
        <span className="text-card-policy font-bold">{children}</span>
      ),
      "highlight-economics": ({ children }) => (
        <span className="text-card-economics font-bold">{children}</span>
      ),
      "highlight-tech": ({ children }) => (
        <span className="text-card-tech font-bold">{children}</span>
      ),
    },
  };

  return <PortableText value={body} components={ptComponents} />;
};

export default ArticleContent;
