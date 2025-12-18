import { Button } from "@/components/ui/button";
import { ctaData } from "./constants";

export function CTA() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {ctaData.title}
            </h2>
            <p className="text-xl text-slate-300">
              {ctaData.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold">
              {ctaData.primaryButton}
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg font-semibold"
            >
              {ctaData.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
