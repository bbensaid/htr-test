// app/page.tsx (Science Removed)

import Sidebar from "@/components/Sidebar";
import NewsTicker from "@/components/NewsTicker";
import Link from "next/link";

const HomePage: React.FC = () => {
  // The 4 Strategic Pillars (Science Removed)
  const pillars = [
    {
      title: "POLICY",
      icon: "🏛️",
      description: "Regulation, Mandates & Global Frameworks.",
      href: "/policy",
      titleColor: "text-card-policy",
      borderColor: "border-card-policy",
    },
    {
      title: "ECONOMICS",
      icon: "📈",
      description: "Finance, Markets & Value-Based Care.",
      href: "/economics",
      titleColor: "text-card-economics",
      borderColor: "border-card-economics",
    },
    {
      title: "TECHNOLOGY",
      icon: "⚡",
      description: "AI, Digital Health & Cyber Infrastructure.",
      href: "/technology",
      titleColor: "text-card-tech",
      borderColor: "border-card-tech",
    },
    {
      title: "OPERATIONS",
      icon: "🏥",
      description: "Workforce, Workflow & Care Delivery.",
      href: "/operations",
      titleColor: "text-card-operations",
      borderColor: "border-card-operations",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-6">
      {/* Sidebar (25% Width) */}
      <div className="order-2 lg:order-1 lg:w-1/4">
        <Sidebar />
      </div>

      {/* Main Content (75% Width) */}
      <div className="order-1 lg:order-2 lg:w-3/4">
        {/* 1. NEWS TICKER */}
        <NewsTicker />

        {/* 2. HERO HEADLINES */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading tracking-tight leading-tight mb-4">
            Intelligence for the Health Economy
          </h1>
          <p className="text-xl text-text-body font-medium max-w-2xl">
            Deconstructing the convergence of Policy, Capital, and Operations to
            drive systemic transformation.
          </p>
        </div>

        {/* 3. CHART OF THE DAY */}
        <div className="mb-12 bg-surface border border-ui-border rounded-xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-ui-primary uppercase tracking-widest">
              Chart of the Day
            </h3>
            <span className="text-xs text-text-body bg-surface-muted px-2 py-1 rounded">
              Source: HTR Market Index
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Visual Placeholder for Graph */}
            <div className="w-full md:w-2/3 h-64 bg-surface-muted rounded-lg border-2 border-dashed border-ui-border flex flex-col items-center justify-center text-center p-4">
              <span className="text-4xl mb-2">📊</span>
              <p className="font-bold text-text-heading">
                Hospital Operating Margins (2020-2025)
              </p>
              <p className="text-xs text-text-body mt-2">
                Divergence between Academic Centers vs. Rural Independents
              </p>
            </div>

            {/* Analysis Side */}
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-bold text-text-heading mb-2">
                The Bifurcation
              </h4>
              <p className="text-sm text-text-body mb-4">
                While academic centers have rebounded to 3% margins, rural
                independents remain underwater (-2%). The gap is driven by payer
                mix and labor costs.
              </p>
              <Link
                href="/economics/market"
                className="text-sm font-bold text-card-economics hover:underline"
              >
                Read Full Analysis &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 4. THE 4-PILLAR GRID */}
        <h2 className="text-2xl font-bold text-text-heading mb-6 border-b border-ui-border pb-2">
          Explore by Pillar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className={`group block p-6 bg-surface border-t-4 ${pillar.borderColor} rounded-lg shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-xl font-extrabold ${pillar.titleColor}`}>
                  {pillar.title}
                </h3>
                <span className="text-2xl grayscale group-hover:grayscale-0 transition opacity-50 group-hover:opacity-100">
                  {pillar.icon}
                </span>
              </div>
              <p className="text-text-body text-sm mb-4 min-h-[40px]">
                {pillar.description}
              </p>
              <span
                className={`text-xs font-bold uppercase tracking-wide ${pillar.titleColor} group-hover:underline`}
              >
                View Channel &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
