import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const HomePage: React.FC = () => {
  // Now we use the semantic names defined in globals.css
  const threePillars = [
    {
      title: "POLICY",
      description:
        "Navigate the rules. Understand the legislative impacts shaping care delivery.",
      href: "/policy",
      // Tailwind v4 automatically generates these classes from the @theme block
      titleColor: "text-policy",
      borderColor: "border-policy",
    },
    {
      title: "ECONOMICS",
      description:
        "Master the value. Analyze market shifts, investment trends, and cost-effectiveness.",
      href: "/economics",
      titleColor: "text-economics",
      borderColor: "border-economics",
    },
    {
      title: "TECHNOLOGY",
      description:
        "Accelerate innovation. Review the cutting-edge tech redefining patient outcomes.",
      href: "/technology",
      titleColor: "text-technology",
      borderColor: "border-technology",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-6">
      {/* Sidebar */}
      <div className="order-2 lg:order-1 lg:w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="order-1 lg:order-2 lg:w-3/4">
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
            Defining Health's Next Chapter
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Rethinking Healthcare Strategy at the Convergence of Policy,
            Economics, and Technology.
          </p>
        </div>

        <div className="mb-12 border-l-4 border-blue-700 pl-4">
          <p className="text-lg text-gray-700 italic">
            "The healthcare landscape is undergoing an irreversible
            transformation, yet critical decisions are often made in isolation.
            <strong className="text-gray-900">
              Health Transformation Review (HTR)
            </strong>{" "}
            is the essential intelligence platform built to bridge this gap."
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Explore the Review
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {threePillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className={`block p-6 bg-white border-t-4 ${pillar.borderColor} rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
            >
              <h3
                className={`text-xl font-extrabold ${pillar.titleColor} mb-2`}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{pillar.description}</p>
              <span
                className={`text-sm font-semibold ${pillar.titleColor} hover:underline`}
              >
                View Insights &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
