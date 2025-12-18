import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "../animations";
import { customerCasesData } from "./constants";

export function CustomerCases() {
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
            {customerCasesData.title}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {customerCasesData.cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{caseItem.logo}</div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wide">
                        {caseItem.category}
                      </p>
                      <h3 className="font-semibold text-slate-900">{caseItem.title}</h3>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-lg font-bold text-green-600 mb-1">
                      {caseItem.metric}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>

                  <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 p-0 h-auto font-medium">
                    {caseItem.linkText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
            Read all cases
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
