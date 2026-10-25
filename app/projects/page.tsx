import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Selected work and case studies.",
  path: "/projects",
});

const BRANDS = ["Lipton", "Unilever", "Knorr", "Elephant Tea", "Many More"];

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-100 sm:pb-20">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            My recent work
          </h1>
          <p className="max-w-[33ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            Experiments, collaborations, and projects I&rsquo;m especially proud to have shipped.
          </p>
        </FadeIn>
      </section>
      <Projects />
      <section
        aria-labelledby="brands-heading"
        className="mx-auto mt-20 mb-8 w-full max-w-275 px-6 sm:mt-28 sm:px-10"
      >
        <div className="border-y border-foreground/8 py-10 sm:py-14">
          <FadeIn className="mb-8 flex flex-col gap-3 sm:mb-10">
            <p className="text-xs font-medium tracking-[0.2em] text-foreground/45 uppercase">
              Across digital experiences
            </p>
            <h2
              id="brands-heading"
              className="font-serif text-[2rem] font-medium leading-tight tracking-tight text-foreground sm:text-[2.5rem]"
            >
              Global Brands I&rsquo;ve Worked With
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 sm:gap-x-8 md:grid-cols-5">
            {BRANDS.map((brand, index) => (
              <li
                key={brand}
                className="group flex min-h-24 flex-col justify-between border-b border-foreground/10 pb-4 transition-colors duration-300 hover:border-foreground/35 motion-reduce:transition-none sm:min-h-28"
              >
                <span className="text-[11px] font-medium tracking-[0.16em] text-foreground/40 tabular-nums">
                  0{index + 1}
                </span>
                <span className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground/75 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-foreground motion-reduce:transition-none sm:text-[1.6rem]">
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
