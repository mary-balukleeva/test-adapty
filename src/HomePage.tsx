import { motion } from "framer-motion";
import {
  BarChart3,
  Clock3,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.12),_transparent_55%)]" />
      <header className="border-b border-slate-200/80 bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400 shadow-lg shadow-indigo-500/40">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
              PulseMetrics
            </span>
          </div>
          <div className="hidden items-center gap-6 text-xs font-medium text-slate-500 sm:flex sm:text-sm">
            <button className="transition hover:text-slate-900">Product</button>
            <button className="transition hover:text-slate-900">Pricing</button>
            <button className="transition hover:text-slate-900">
              Resources
            </button>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="hidden text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-900 sm:inline-flex sm:text-sm"
            >
              Sign in
            </Button>
            <Button className="bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 sm:text-sm">
              Get started
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 sm:gap-24 sm:px-6 sm:pb-20 sm:pt-16 lg:gap-28 lg:px-8 lg:pb-28 lg:pt-20">
        <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-12 lg:gap-16">
          <motion.div
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm shadow-indigo-200 sm:px-4 sm:text-[0.75rem]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/80 text-[0.6rem] text-white">
                ●
              </span>
              Real-time revenue intelligence for modern subscription teams
            </div>
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.1rem]">
                Turn every customer event into predictable revenue.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                PulseMetrics connects your product, billing, and marketing data
                into a single adaptive dashboard, so you can experiment faster,
                prevent churn, and grow recurring revenue with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex flex-1 flex-wrap items-center gap-3 sm:gap-4">
                <Button className="h-10 flex-1 bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 sm:h-11 sm:flex-none sm:px-6 sm:text-sm">
                  Start free trial
                </Button>
                <Button
                  variant="outline"
                  className="h-10 flex-1 border-indigo-300/60 bg-white text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-slate-900 sm:h-11 sm:flex-none sm:px-6 sm:text-sm"
                >
                  Book a live demo
                </Button>
              </div>
              <p className="text-[0.7rem] text-slate-400 sm:text-xs">
                No credit card required · 14-day full access
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-slate-500 sm:text-xs">
              <div className="flex -space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-gradient-to-tr from-indigo-500 to-violet-500 text-[0.65rem] font-semibold text-white shadow-sm shadow-indigo-500/40">
                  PM
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-gradient-to-tr from-sky-400 to-indigo-500 text-[0.65rem] font-semibold text-white shadow-sm shadow-sky-500/40">
                  DS
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-[0.65rem] font-semibold text-white shadow-sm shadow-violet-500/40">
                  Rev
                </div>
              </div>
              <span>
                Trusted by product, data, and revenue teams worldwide.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          >
            <Card className="relative overflow-hidden border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-xl shadow-indigo-100">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.35),_transparent_55%)] opacity-80" />
              <CardHeader className="relative pb-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-indigo-500/80">
                      Live revenue overview
                    </p>
                    <CardTitle className="mt-1 text-base text-slate-900">
                      Subscription performance
                    </CardTitle>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-medium text-emerald-700 ring-1 ring-emerald-200">
                    +18.4% MoM
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-5 pt-2">
                <div className="grid grid-cols-3 gap-3 text-[0.7rem] sm:text-xs">
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
                    <p className="text-slate-500">MRR</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                      $284.2k
                    </p>
                    <p className="mt-1 text-emerald-600">+12.1%</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
                    <p className="text-slate-500">Net revenue</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                      $1.9M
                    </p>
                    <p className="mt-1 text-emerald-600">+9.3%</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
                    <p className="text-slate-500">Churn</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                      2.4%
                    </p>
                    <p className="mt-1 text-emerald-600">-0.8%</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[0.7rem] text-slate-600 sm:text-xs">
                    <span>Experiments in progress</span>
                    <span className="text-slate-400">Last 30 days</span>
                  </div>
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-indigo-100 via-violet-100 to-sky-100 p-3 ring-1 ring-indigo-200/70">
                    <div className="flex h-full items-end justify-between gap-1">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-full bg-indigo-400/80"
                          style={{
                            height: `${40 + (index % 5) * 10}%`,
                            opacity: 0.5 + (index % 3) * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-[0.7rem] text-slate-600 sm:text-xs">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[0.65rem] font-semibold text-white">
                      97
                    </span>
                    <span>Revenue health score</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Smart alerts enabled</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="space-y-7">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-slate-500">
              Trusted by 10,000+ teams worldwide
            </p>
            <p className="text-[0.7rem] text-slate-500 sm:text-xs">
              From early-stage founders to global product teams.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80 grayscale">
            {[
              "LinearGrid",
              "OrbitFlow",
              "Northwind",
              "StencilLabs",
              "BrightPath",
            ].map((name) => (
              <div
                key={name}
                className="text-xs font-semibold tracking-wide text-slate-500 sm:text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-500">
              FEATURES
            </p>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Everything you need to understand and grow recurring revenue.
              </h2>
              <p className="max-w-md text-sm text-slate-600">
                Replace spreadsheets and static reports with a single adaptive
                workspace that updates as fast as your product does.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <Card className="h-full border-slate-200 bg-white/80 backdrop-blur-sm transition hover:-translate-y-1 hover:border-indigo-300/70 hover:bg-indigo-50/60 hover:shadow-xl hover:shadow-indigo-100">
                  <CardHeader className="pb-4">
                    <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500 ring-1 ring-indigo-200">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-sm font-semibold text-slate-900 sm:text-base">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-xs text-slate-600 sm:text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start md:gap-14">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-500">
              HOW IT WORKS
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              From raw events to decisions in days, not quarters.
            </h2>
            <p className="max-w-lg text-sm text-slate-600">
              PulseMetrics fits into your stack in three simple steps, so you
              can move from implementation to impact without a six‑month BI
              project.
            </p>
            <div className="mt-4 space-y-5">
              {[
                {
                  title: "Connect your sources",
                  description:
                    "Plug in billing, product analytics, and CRM in a guided workspace with instant schema previews.",
                },
                {
                  title: "Model your revenue story",
                  description:
                    "Define plans, trials, upgrades, and custom events once. We keep them in sync as your product evolves.",
                },
                {
                  title: "Share living dashboards",
                  description:
                    "Ship tailored views for product, finance, and GTM teams with alerting baked in.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  className="flex gap-4"
                >
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-200">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <Card className="border-slate-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-900 sm:text-base">
                Implementation snapshot
              </CardTitle>
              <CardDescription className="text-xs text-slate-600 sm:text-sm">
                Typical teams see their first live dashboards in under one week.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-1">
              <div className="space-y-3 text-xs text-slate-700 sm:text-sm">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5">
                  <div className="space-y-0.5">
                    <p className="font-medium text-slate-900">
                      Core integrations
                    </p>
                    <p className="text-[0.7rem] text-slate-500">
                      Stripe · Chargebee · Segment · HubSpot
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[0.7rem] font-medium text-emerald-700 ring-1 ring-emerald-200">
                    ~2 days
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5">
                  <div className="space-y-0.5">
                    <p className="font-medium text-slate-900">
                      Revenue modeling
                    </p>
                    <p className="text-[0.7rem] text-slate-500">
                      Plans, trials, upgrades, downgrades
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-[0.7rem] font-medium text-indigo-700 ring-1 ring-indigo-200">
                    ~3 days
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5">
                  <div className="space-y-0.5">
                    <p className="font-medium text-slate-900">Team roll‑out</p>
                    <p className="text-[0.7rem] text-slate-500">
                      Dashboards, alerts, and experiments
                    </p>
                  </div>
                  <span className="rounded-full bg-violet-50 px-2 py-1 text-[0.7rem] font-medium text-violet-700 ring-1 ring-violet-200">
                    ~2 days
                  </span>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50 px-3 py-2.5 text-[0.7rem] text-indigo-700 sm:text-xs">
                Live implementation support is included in every plan. We stay
                with your team until dashboards match your source of truth.
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.28),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.35),_transparent_60%)] opacity-90" />
          <div className="relative grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-600/80">
                ADAPTIVE ANALYTICS
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                A living dashboard that evolves with every experiment.
              </h2>
              <p className="max-w-md text-sm text-slate-700">
                PulseMetrics continuously learns from your historical
                performance to highlight the experiments, plans, and segments
                that have the biggest impact on long‑term revenue.
              </p>
              <div className="mt-4 grid gap-4 text-xs text-slate-700 sm:grid-cols-2 sm:text-sm">
                <div className="space-y-1">
                  <p className="font-medium text-slate-900">
                    Scenario modeling
                  </p>
                  <p className="text-slate-700">
                    Forecast subscription revenue under different pricing and
                    packaging scenarios before you launch.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-slate-900">
                    Anomaly detection
                  </p>
                  <p className="text-slate-700">
                    Automatically flag unusual churn patterns, payment failures,
                    or spikes in demand.
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card className="overflow-hidden border-slate-200 bg-white/90 shadow-2xl shadow-violet-100">
                <CardHeader className="flex flex-row items-center justify-between gap-4 pb-3">
                  <div>
                    <CardTitle className="text-sm font-semibold text-slate-900 sm:text-base">
                      Revenue experiment board
                    </CardTitle>
                    <CardDescription className="text-[0.7rem] text-slate-600 sm:text-xs">
                      Live experiments across pricing, onboarding, and
                      retention.
                    </CardDescription>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-700 ring-1 ring-emerald-200">
                    7 running
                  </span>
                </CardHeader>
                <CardContent className="space-y-4 pt-1">
                  <div className="space-y-2 text-[0.7rem] text-slate-700 sm:text-xs">
                    {[
                      {
                        label: "Onboarding paywall",
                        impact: "+11.8% trial→paid",
                        color: "from-emerald-400 to-emerald-500",
                      },
                      {
                        label: "Annual discount",
                        impact: "+7.3% expansion",
                        color: "from-sky-400 to-sky-500",
                      },
                      {
                        label: "Usage‑based add‑on",
                        impact: "+4.2% net revenue",
                        color: "from-violet-400 to-violet-500",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5"
                      >
                        <div className="space-y-0.5">
                          <p className="font-medium text-slate-900">
                            {item.label}
                          </p>
                          <p className="text-[0.7rem] text-slate-500">
                            Experiment · 28 days
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-[0.7rem] font-semibold text-emerald-700">
                            {item.impact}
                          </span>
                          <span
                            className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-28 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200 sm:h-32">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between text-[0.7rem] text-slate-600 sm:text-xs">
                        <span>Cohort performance</span>
                        <span className="text-slate-400">
                          MRR by signup month
                        </span>
                      </div>
                      <div className="mt-2 flex flex-1 items-end justify-between gap-1">
                        {Array.from({ length: 8 }).map((_, index) => (
                          <div
                            key={index}
                            className="relative flex-1 rounded-full bg-gradient-to-t from-slate-200 to-indigo-400/80"
                            style={{
                              height: `${30 + ((index + 2) % 6) * 10}%`,
                              opacity: 0.6 + (index % 3) * 0.15,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-500">
              TESTIMONIALS
            </p>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Teams ship better pricing and retention strategies with
                PulseMetrics.
              </h2>
              <p className="max-w-md text-sm text-slate-600">
                Hear how product‑led companies replaced static dashboards and
                manual exports with a single adaptive revenue workspace.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                initials: "AL",
                name: "Amira Lewis",
                role: "VP Product · GrowthOS",
                quote:
                  "We went from arguing about what MRR actually was to shipping pricing experiments every month.",
              },
              {
                initials: "JT",
                name: "Jonas Thorne",
                role: "Head of RevOps · Northwind",
                quote:
                  "PulseMetrics finally gave finance and GTM a shared source of truth for expansion and churn.",
              },
              {
                initials: "RC",
                name: "Riya Chand",
                role: "Co‑founder · Capsule Labs",
                quote:
                  "The implementation felt like adding another dashboard, but the impact was a full revenue strategy.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Card className="h-full border-slate-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center gap-3 pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-[0.7rem] font-semibold text-white shadow-sm shadow-indigo-500/40">
                      {item.initials}
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-[0.7rem] text-slate-500 sm:text-xs">
                        {item.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-1">
                    <p className="text-sm leading-relaxed text-slate-700">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 px-6 py-7 text-slate-50 shadow-xl shadow-indigo-200 sm:px-8 sm:py-9 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="space-y-3">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to see your revenue story in one place?
              </h2>
              <p className="max-w-xl text-sm text-indigo-50/90">
                Start a 14‑day free trial and connect your first data source in
                minutes. No setup fees, no long‑term contracts.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <Button className="h-11 w-full bg-slate-950/90 text-sm font-semibold text-slate-50 shadow-lg shadow-slate-900/40 hover:bg-slate-900 sm:w-auto sm:px-6">
                Start free trial
              </Button>
              <p className="text-[0.7rem] text-indigo-100/90 sm:text-xs">
                Talk to our team if you&apos;re migrating from an existing
                analytics stack.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-sm text-slate-600 sm:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.7fr))]">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400 text-white shadow-md shadow-indigo-300">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold tracking-tight text-slate-900">
                  PulseMetrics
                </span>
              </div>
              <p className="max-w-xs text-xs text-slate-500">
                Adaptive revenue analytics for SaaS teams that want fewer
                dashboards and more confident decisions.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Product
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>Overview</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Company
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Resources
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>Docs</li>
                <li>Guides</li>
                <li>Blog</li>
                <li>API status</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-4 text-[0.7rem] text-slate-500 sm:flex-row sm:items-center sm:text-xs">
            <p>
              © {new Date().getFullYear()} PulseMetrics, Inc. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookie settings</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
