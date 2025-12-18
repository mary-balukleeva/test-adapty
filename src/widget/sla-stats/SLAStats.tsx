import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "../animations";
import { slaStatsData } from "./constants";

export function SLAStats() {
  return (
    <section className="space-y-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="max-w-3xl mx-auto text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {slaStatsData.title}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {slaStatsData.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-slate-200 bg-gradient-to-br from-white to-slate-50/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-2xl shadow-lg shadow-indigo-500/30">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
