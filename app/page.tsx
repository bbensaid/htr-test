// app/page.tsx

import Sidebar from "@/components/Sidebar";
import PillarCard from "@/components/PillarCard";
import type { ThemeName } from "@/components/themes";

interface Pillar {
  title: string;
  description: string;
  href: string;
  color: ThemeName;
}

const HomePage: React.FC = () => {
  const threePillars: Pillar[] = [
    {
      title: "POLICY",
      description:
        "Navigate the rules. Understand the legislative impacts shaping care delivery.",
      href: "/policy",
      color: "blue",
    },
    {
      title: "ECONOMICS",
      description:
        "Master the value. Analyze market shifts, investment trends, and cost-effectiveness.",
      href: "/economics",
      color: "green",
    },
    {
      title: "TECHNOLOGY",
      description:
        "Accelerate innovation. Review the cutting-edge tech redefining patient outcomes.",
      href: "/technology",
      color: "indigo",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-6">
      {/* Sidebar (Left on Desktop, Top on Mobile) */}
      <div className="order-2 lg:order-1 lg:w-1/4">
        <Sidebar />
      </div>

      {/* Main Content Area (Right on Desktop, Bottom on Mobile) */}
      <div className="order-1 lg:order-2 lg:w-3/4">
        {/* A. Homepage Headline & Sub-Headline */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
            Defining Health's Next Chapter
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Rethinking Healthcare Strategy at the Convergence of Policy,
            Economics, and Technology.
          </p>
        </div>

        {/* B. Introductory Summary (The Hook) */}
        <div className="mb-12 border-l-4 border-blue-700 pl-4">
          <p className="text-lg text-gray-700 italic">
            "The healthcare landscape is undergoing an irreversible
            transformation, yet critical decisions are often made in isolation.
            <strong className="text-gray-900">
              Health Transformation Review (HTR)
            </strong>{" "}
            is the essential intelligence platform built to bridge this gap. We
            provide rigorous, cross-disciplinary analysis to equip leaders—from
            policymakers and investors to technology innovators—with the
            synthesized insights required to move beyond incremental change and
            drive sustainable, systemic progress."
          </p>
        </div>

        {/* C. Call to Action (Driving Engagement) - The Three Pillars */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Explore the Review
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threePillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              href={pillar.href}
              color={pillar.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
