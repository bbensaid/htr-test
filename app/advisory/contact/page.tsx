// app/advisory/contact/page.tsx
"use client";

import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Strategic Consulting",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted. (This is a demo action)");
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-ui-primary uppercase tracking-wider mb-2 block">
          Get in Touch
        </span>
        <h1 className="text-4xl font-extrabold text-text-heading mb-4">
          Engage with HTR Experts
        </h1>
        <p className="text-xl text-text-body">
          Whether you need a strategic audit, a keynote speaker, or a custom
          policy briefing, start the conversation here.
        </p>
      </div>

      <div className="bg-surface border border-ui-border rounded-xl shadow-sm p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-text-heading mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ui-primary/50"
                placeholder="Dr. Jane Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-text-heading mb-2">
                Work Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ui-primary/50"
                placeholder="jane@hospital.org"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-text-heading mb-2">
              Organization
            </label>
            <input
              type="text"
              className="w-full p-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ui-primary/50"
              placeholder="Health System / Tech Co / Payer"
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text-heading mb-2">
              Area of Interest
            </label>
            <select
              className="w-full p-3 border border-ui-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-ui-primary/50"
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
            >
              <option>Strategic Consulting</option>
              <option>Custom Research Project</option>
              <option>Expert Witness / Testimony</option>
              <option>Speaking Engagement</option>
              <option>Partnership Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-text-heading mb-2">
              Briefing
            </label>
            <textarea
              rows={4}
              className="w-full p-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ui-primary/50"
              placeholder="Tell us about your challenge or timeline..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-ui-primary text-ui-text-on-primary font-bold rounded-lg hover:opacity-90 transition shadow-md"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
