export const heroData = {
  badge: "Real-time revenue intelligence for modern subscription teams",
  title: "Turn every customer event into predictable revenue.",
  description:
    "PulseMetrics connects your product, billing, and marketing data into a single adaptive dashboard, so you can experiment faster, prevent churn, and grow recurring revenue with confidence.",
  ctaPrimary: "Start free trial",
  ctaSecondary: "Book a live demo",
  disclaimer: "No credit card required · 14-day full access",
  trustText: "Trusted by product, data, and revenue teams worldwide.",
};

export const dashboardData = {
  title: "Live revenue overview",
  subtitle: "Subscription performance",
  growth: "+18.4% MoM",
  metrics: [
    { label: "MRR", value: "$284.2k", change: "+12.1%" },
    { label: "Net revenue", value: "$1.9M", change: "+9.3%" },
    { label: "Churn", value: "2.4%", change: "-0.8%" },
  ],
  experimentsText: "Experiments in progress",
  experimentsPeriod: "Last 30 days",
  healthScore: 97,
  healthScoreText: "Revenue health score",
  alertsText: "Smart alerts enabled",
} as const;
