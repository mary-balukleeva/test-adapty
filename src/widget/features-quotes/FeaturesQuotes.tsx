import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "../animations";
import { featuresQuotesData } from "./constants";

export function FeaturesQuotes() {
  return (
    <section className="brxe-container s2col__container flex-vertical features-quotes__wrap features-quotes-adaptive">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {featuresQuotesData.map((quote, index) => (
            <motion.div
              key={quote.author}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-slate-200 bg-white shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-slate-700 mb-4 leading-relaxed">
                    "{quote.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white font-semibold text-sm">
                      {quote.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{quote.author}</p>
                      <p className="text-sm text-slate-500">{quote.role}</p>
                      <p className="text-sm font-medium text-indigo-600">{quote.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
