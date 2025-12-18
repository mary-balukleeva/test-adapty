import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "../animations";
import { helpSectionData } from "./constants";

export function HelpSection() {
  return (
    <section className="space-y-12">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {helpSectionData.title}
          </h2>
          <p className="text-lg font-medium text-pink-500">
            {helpSectionData.subtitle}
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {helpSectionData.cards.map((card, index) => (
          <motion.div
            key={card.title}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden border-slate-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4">
                <ArrowRight className="h-5 w-5 text-pink-500" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg">
                    <span className="text-lg">{card.icon}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
