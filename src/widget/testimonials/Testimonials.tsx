import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUp } from "../animations";
import { testimonialsData } from "./constants";

export function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-500">
          {testimonialsData.badge}
        </p>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {testimonialsData.title}
          </h2>
          <p className="max-w-md text-sm text-slate-600">
            {testimonialsData.subtitle}
          </p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonialsData.testimonials.map((item, index) => (
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
  );
}
