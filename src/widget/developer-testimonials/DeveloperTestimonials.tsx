import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { developerTestimonialsData } from "./constants";
import { useState } from "react";

export function DeveloperTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = developerTestimonialsData.testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-500">
          {developerTestimonialsData.badge}
        </p>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {developerTestimonialsData.title}
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
                <Card className="mx-auto max-w-4xl border-slate-200 bg-white/80 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                      <div className="flex flex-col items-center gap-4 md:flex-shrink-0 md:items-start">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-lg font-semibold text-white shadow-lg shadow-indigo-500/40">
                          {testimonial.avatar}
                        </div>
                        <div className="text-center md:text-left">
                          <CardTitle className="text-lg font-semibold text-slate-900">
                            {testimonial.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-slate-500">
                            {testimonial.role}
                          </CardDescription>
                          <p className="mt-1 text-sm font-medium text-indigo-600">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Quote className="mb-4 h-8 w-8 text-indigo-200" />
                        <blockquote className="text-lg leading-relaxed text-slate-700">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-10 w-10 rounded-full border-slate-300 hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-indigo-500"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-10 w-10 rounded-full border-slate-300 hover:bg-slate-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
