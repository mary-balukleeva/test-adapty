import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { fadeInUp } from "../animations";
import { enterprisePlatformData } from "./constants";

export function EnterprisePlatform() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {enterprisePlatformData.title}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {enterprisePlatformData.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
