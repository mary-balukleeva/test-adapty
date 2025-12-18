import { motion } from "framer-motion";
import { socialProofData } from "./constants";

export function SocialProof() {
  return (
    <section className="space-y-12 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {socialProofData.title}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {socialProofData.companies.map((company, index) => (
          <motion.div
            key={company}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="flex h-12 w-auto items-center justify-center rounded-lg bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200/50 transition-all duration-200 hover:shadow-md hover:ring-slate-300/50">
              <span className="text-sm font-semibold text-slate-700">
                {company}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
