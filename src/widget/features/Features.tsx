import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeInUp } from "../animations";
import { featuresData } from "./constants";

export function Features() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-500">
          {featuresData.badge}
        </p>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {featuresData.title}
          </h2>
          <p className="max-w-md text-sm text-slate-600">
            {featuresData.subtitle}
          </p>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.features.map((feature, index) => (
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
  );
}
