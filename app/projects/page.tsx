import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Selected work and case studies across e-commerce, SaaS, and web platforms.",
  path: "/projects",
});

const BRANDS = ["Lipton", "Unilever", "Knorr", "Elephant Tea", "Many More"];

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-36 pb-14 sm:px-10 sm:pt-48 sm:pb-18">
        <FadeIn className="flex flex-col items-center gap-4 text-center">
          <span className="cyber-pill text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400">
            Portfolio &amp; Case Studies
          </span>
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            <span>Engineered for </span>
            <span className="bg-gradient-to-r from-foreground via-indigo-600 to-cyan-500 dark:from-white dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Impact
            </span>
          </h1>
          <p className="max-w-[36ch] text-[18px] leading-[1.5] tracking-tight text-foreground/70 sm:text-[20px]">
            Real-world websites, e-commerce storefronts, and digital applications
            built with modern performance, security, and responsive architecture.
          </p>
        </FadeIn>
      </section>

      <Projects />

      <section
        aria-labelledby="brands-heading"
        className="mx-auto mt-20 mb-10 w-full max-w-275 px-6 sm:mt-28 sm:px-10"
      >
        <div className="rounded-3xl border border-foreground/10 bg-foreground/2 p-8 sm:p-12 dark:border-white/10 dark:bg-foreground/3 backdrop-blur-xl">
          <FadeIn className="mb-8 flex flex-col gap-2 sm:mb-10 text-center sm:text-left">
            <span className="cyber-pill text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400 self-center sm:self-start">
              Enterprise Experience
            </span>
            <h2
              id="brands-heading"
              className="font-serif text-[2rem] font-medium leading-tight tracking-tight text-foreground sm:text-[2.5rem]"
            >
              Global Brands I&rsquo;ve Worked With
            </h2>
            <p className="text-sm text-foreground/60 max-w-[50ch]">
              Supporting high-traffic digital marketing campaigns, AEM and Contentful asset workflows, and international consumer brand portals.
            </p>
          </FadeIn>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {BRANDS.map((brand, index) => (
              <li
                key={brand}
                className="group relative flex min-h-24 flex-col justify-between rounded-2xl border border-foreground/8 bg-background/60 p-4 transition-all duration-300 hover:border-indigo-500/40 hover:bg-background hover:shadow-[0_0_20px_-3px_rgba(99,102,241,0.2)] hover:-translate-y-1 sm:min-h-28 dark:border-white/8 dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
              >
                <span className="font-mono text-[11px] font-medium tracking-widest text-foreground/40 tabular-nums">
                  0{index + 1}
                </span>
                <span className="font-serif text-[1.25rem] font-medium tracking-tight text-foreground/80 transition-colors duration-300 group-hover:text-foreground sm:text-[1.45rem]">
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
