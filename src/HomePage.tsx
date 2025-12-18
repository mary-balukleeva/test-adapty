import { Header } from "./widget/header/Header";
import { Hero } from "./widget/hero/Hero";
import { SocialProof } from "./widget/social-proof/SocialProof";
import { HelpSection } from "./widget/help-section/HelpSection";
import { SLAStats } from "./widget/sla-stats/SLAStats";
import { Integration } from "./widget/integration/Integration";
import { FeaturesQuotes } from "./widget/features-quotes/FeaturesQuotes";
import { DeveloperTestimonials } from "./widget/developer-testimonials/DeveloperTestimonials";
import { EnterprisePlatform } from "./widget/enterprise-platform/EnterprisePlatform";
import { TrustedAwards } from "./widget/trusted-awards/TrustedAwards";
import { CustomerCases } from "./widget/customer-cases/CustomerCases";
import { CTA } from "./widget/cta/CTA";
import { Footer } from "./widget/footer/Footer";

function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.12),_transparent_55%)]" />
      <Header />

      <div className="bg-[#f8f4f2] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <SocialProof />
        </div>
      </div>

      <section className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 sm:gap-24 sm:px-6 sm:pb-20 sm:pt-16 lg:gap-28 lg:px-8 lg:pb-28 lg:pt-20">
        <HelpSection />
        <SLAStats />
      </section>

      <Integration />

      <section className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 sm:gap-24 sm:px-6 sm:pb-20 sm:pt-16 lg:gap-28 lg:px-8 lg:pb-28 lg:pt-20">
        <FeaturesQuotes />

        <DeveloperTestimonials />
      </section>

      <EnterprisePlatform />

      <TrustedAwards />

      <CustomerCases />

      <CTA />
      <Footer />
    </main>
  );
}

export default HomePage;
