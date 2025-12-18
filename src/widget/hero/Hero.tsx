import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { heroVariant } from "../animations";
import { heroData, dashboardData } from "./constants";

export function Hero() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-12 lg:gap-16 py-16">
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
          {heroData.badge}
        </div>
        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.1rem]">
            {heroData.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {heroData.description}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex flex-1 flex-wrap items-center gap-3 sm:gap-4">
            <Button className="h-10 flex-1 bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 sm:h-11 sm:flex-none sm:px-6 sm:text-sm">
              {heroData.ctaPrimary}
            </Button>
            <Button
              variant="outline"
              className="h-10 flex-1 border-indigo-300/60 bg-white text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-slate-900 sm:h-11 sm:flex-none sm:px-6 sm:text-sm"
            >
              {heroData.ctaSecondary}
            </Button>
          </div>
          <p className="text-[0.7rem] text-slate-400 sm:text-xs">
            {heroData.disclaimer}
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
          <span>{heroData.trustText}</span>
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
                  {dashboardData.title}
                </p>
                <CardTitle className="mt-1 text-base text-slate-900">
                  {dashboardData.subtitle}
                </CardTitle>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-medium text-emerald-700 ring-1 ring-emerald-200">
                {dashboardData.growth}
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-5 pt-2">
            <div className="grid grid-cols-3 gap-3 text-[0.7rem] sm:text-xs">
              {dashboardData.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200"
                >
                  <p className="text-slate-500">{metric.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-emerald-600">{metric.change}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[0.7rem] text-slate-600 sm:text-xs">
                <span>{dashboardData.experimentsText}</span>
                <span className="text-slate-400">
                  {dashboardData.experimentsPeriod}
                </span>
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
                  {dashboardData.healthScore}
                </span>
                <span>{dashboardData.healthScoreText}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{dashboardData.alertsText}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
