import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400 shadow-lg shadow-indigo-500/40">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            PulseMetrics
          </span>
        </div>
        <div className="hidden items-center gap-6 text-xs font-medium text-slate-500 sm:flex sm:text-sm">
          <button className="transition hover:text-slate-900">Product</button>
          <button className="transition hover:text-slate-900">Pricing</button>
          <button className="transition hover:text-slate-900">Resources</button>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-900 sm:inline-flex sm:text-sm"
          >
            Sign in
          </Button>
          <Button className="bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 sm:text-sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
