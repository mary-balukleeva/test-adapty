import {
  BarChart3,
  Clock3,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const featuresData = {
  badge: "FEATURES",
  title: "Everything you need to understand and grow recurring revenue.",
  subtitle:
    "Replace spreadsheets and static reports with a single adaptive workspace that updates as fast as your product does.",
  features: [
    {
      icon: BarChart3,
      title: "Unified revenue analytics",
      description:
        "Bring billing, product, and marketing signals into one real-time view of your funnel.",
    },
    {
      icon: Users,
      title: "Customer journeys",
      description:
        "Slice cohorts by plan, behavior, and region to uncover which segments actually expand.",
    },
    {
      icon: ShieldCheck,
      title: "Churn prevention",
      description:
        "Surface risk signals early and trigger workflows before customers silently downgrade.",
    },
    {
      icon: Clock3,
      title: "Experiment tracking",
      description:
        "Measure pricing, packaging, and onboarding tests with consistent revenue metrics.",
    },
    {
      icon: Globe2,
      title: "Global-ready billing",
      description:
        "Understand performance across currencies, regions, and tax setups in seconds.",
    },
    {
      icon: Sparkles,
      title: "Adaptive insights",
      description:
        "Our models learn from your historical data to highlight the next best growth move.",
    },
  ],
} as const;
