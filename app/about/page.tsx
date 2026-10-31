import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Certifications } from "@/components/about/certifications";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About Mohd Mohsin, professional experience, web engineering skills, and background.",
  path: "/about",
});

const HIGHLIGHT_TAGS = [
  "Shopify Website Management",
  "E-commerce Operations",
  "Product Catalogue Management",
  "SEO Optimization",
  "Website Performance",
  "Mobile UX/UI",
  "Content Management",
  "Cross-Functional Collaboration",
  "AI-Assisted Productivity",
];

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-36 sm:pt-48">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-180 px-6 pt-16 pb-14 sm:px-10 sm:pt-20 sm:pb-20">
        <FadeIn delay={0.2}>
          <div className="relative">
            {/* Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/15 via-cyan-500/10 to-violet-500/15 opacity-70 blur-2xl dark:opacity-40"
            />

            <div className="relative flex flex-col gap-6 rounded-3xl border border-foreground/10 bg-background/85 p-7 sm:p-11 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-[#0c101a]/85">
              <div className="flex flex-col gap-2">
                <span className="cyber-pill text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400 self-start">
                  Professional Profile
                </span>
                <h1 className="font-serif text-[2rem] font-medium tracking-tight text-foreground sm:text-[2.35rem]">
                  Hello! I&rsquo;m{" "}
                  <span className="bg-gradient-to-r from-foreground via-indigo-600 to-cyan-500 dark:from-white dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                    Mohd Mohsin
                  </span>
                  .
                </h1>
                <p className="font-mono text-xs font-medium tracking-wider text-indigo-600 dark:text-cyan-400 uppercase">
                  Web Developer &amp; E-commerce Operations • 4+ Years Experience
                </p>
              </div>

              <div className="space-y-4 text-[16px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[17px]">
                <p>
                  E-commerce Website Manager and Web Developer with 4+ years of
                  experience in website maintenance, CMS content management,
                  digital publishing, SEO support, and frontend optimization.
                  Experienced in Shopify website content management, product
                  uploads, collections, pages, navigation, and catalogue accuracy.
                  Skilled in HTML5, CSS3, JavaScript, PHP, responsive UX/UI,
                  technical SEO fundamentals, and website performance optimization.
                  Familiar with AI-assisted development, debugging, code
                  improvement, and workflow automation. Effective at collaborating
                  with design, content, development, and marketing teams to maintain
                  high-quality digital experiences.
                </p>
              </div>

              {/* Competency Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-foreground/8 dark:border-white/8">
                {HIGHLIGHT_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="cyber-pill text-xs text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80 dark:bg-cyan-400/80" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[42rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12 sm:gap-14">
            <Experience />
            <Education />
            <Certifications />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
