import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { fadeInUp } from "../animations";
import { integrationData } from "./constants";
import { useState } from "react";

export function Integration() {
  const [activePlatform, setActivePlatform] = useState(0);

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-400">
              {integrationData.badge}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {integrationData.title}
            </h2>
          </div>

          {/* Subtitle */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed">
              {integrationData.subtitle}
            </p>
          </div>

          {/* Quote */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <span className="text-lg font-semibold">M</span>
              </div>
              <div className="flex-1">
                <blockquote className="text-xl text-white leading-relaxed mb-4">
                  "{integrationData.quote.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-white">
                    {integrationData.quote.author}
                  </p>
                  <p className="text-slate-400">{integrationData.quote.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Platform tabs */}
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3">
              {integrationData.platforms.map((platform, index) => (
                <Button
                  key={platform.name}
                  variant="ghost"
                  onClick={() => setActivePlatform(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activePlatform === index
                      ? "bg-indigo-500 text-white"
                      : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{platform.icon}</span>
                  <span className="font-medium">{platform.name}</span>
                </Button>
              ))}
            </div>

            {/* Code display */}
            <Card className="border-slate-700 bg-slate-800 text-slate-100">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-md bg-slate-700 px-3 py-1 text-sm font-medium text-slate-200">
                      {integrationData.platforms[activePlatform].name}
                    </span>
                    <span className="text-sm text-slate-400">SDK</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-slate-200"
                    onClick={() =>
                      window.open(
                        integrationData.platforms[activePlatform].githubUrl,
                        "_blank"
                      )
                    }
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <pre className="overflow-x-auto text-sm leading-relaxed">
                  <code>{integrationData.platforms[activePlatform].code}</code>
                </pre>
              </CardContent>
            </Card>
          </div>

          {/* Get the SDK for your platform */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Get the SDK for your platform
              </h3>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {integrationData.sdkPlatforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 min-w-[120px]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-2xl">
                      {platform.icon}
                    </div>
                    <span className="text-sm text-slate-300 text-center font-medium">
                      {platform.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
