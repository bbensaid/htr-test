// app/education/courses/page.tsx

import React from "react";
import Link from "next/link";

const CoursesPage: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-12 border-b border-ui-border pb-8">
        <span className="text-sm font-bold text-ui-primary uppercase tracking-wider mb-2 block">
          HTR Academy
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6">
          Executive Masterclasses
        </h1>
        <p className="text-xl text-text-body leading-relaxed max-w-3xl">
          Rigorous, certification-ready courses designed for healthcare leaders
          who need to master the mechanics of transformation.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col bg-surface border border-ui-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Course Thumbnail Placeholder */}
            <div className="h-48 bg-surface-muted flex items-center justify-center text-text-body/40 font-bold border-b border-ui-border">
              Course Preview {i}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-ui-primary bg-ui-bg-light px-2 py-1 rounded">
                  Level: Advanced
                </span>
                <span className="text-xs text-text-body">4 Weeks</span>
              </div>

              <h3 className="text-xl font-bold text-text-heading mb-2">
                AI Governance for CMOs
              </h3>
              <p className="text-text-body text-sm mb-6 flex-grow">
                A technical and ethical deep dive into deploying large language
                models in clinical settings without compromising safety.
              </p>

              {/* Button matching the semantic consistency of Header/Consulting */}
              <button className="w-full py-2 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition duration-150">
                View Syllabus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
