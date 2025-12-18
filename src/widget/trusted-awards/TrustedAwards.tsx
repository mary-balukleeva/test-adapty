import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "../animations";
import { trustedAwardsData } from "./constants";

export function TrustedAwards() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
            Trusted for usability and customer service
          </h2>
          <p className="text-slate-600">
            {trustedAwardsData.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {trustedAwardsData.awards.map((award, index) => (
            <motion.div
              key={award.title}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className={`w-3 h-3 rounded-full ${award.color} mr-2`}></div>
                    <span className="text-sm font-medium text-slate-900">G2 Award:</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{award.title}</h3>
                  <p className="text-sm text-slate-600">{award.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
