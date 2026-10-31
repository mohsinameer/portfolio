import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/josh.webp";
const PORTRAIT_HOVER_SRC = "/josh_wave.webp";

const HERO_PILLS = [
  "4+ Years Experience",
  "WordPress & PHP",
  "Shopify & CMS",
  "SEO & Performance",
];

export function Hero(): ReactNode {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-120 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-violet-500/5 blur-3xl"
      />

      <div className="mx-auto w-full max-w-275 px-6 pt-36 pb-20 sm:px-10 sm:pt-48 sm:pb-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Left Column: Headline, Bio & CTAs */}
          <FadeIn className="flex flex-col gap-5 md:col-span-7">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3.5 py-1.5 text-[13px] font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-md self-start shadow-[0_0_15px_-3px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for Web &amp; E-Commerce Projects</span>
            </div>

            <div className="space-y-2">
              <p className="text-[17px] font-medium tracking-tight text-foreground/75 sm:text-[19px]">
                Hey{" "}
                <span aria-hidden="true" className="mx-0.5 inline-block">
                  👋
                </span>
                , I&rsquo;m Mohd Mohsin
              </p>

              <h1 className="text-[2.65rem] font-medium leading-[1.06] tracking-tight text-foreground sm:text-[3.25rem] md:text-[2.85rem] lg:text-[3.65rem]">
                <span className="block">Website Developer &amp;</span>
                <span className="block bg-gradient-to-r from-foreground via-indigo-500 to-cyan-500 dark:from-white dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Digital Specialist
                </span>
              </h1>
            </div>

            <p className="max-w-[38ch] text-[17px] leading-[1.5] tracking-tight text-foreground/70 sm:text-[19px]">
              E-commerce Website Manager and Web Developer with 4+ years of
              experience building responsive websites, optimizing CMS platforms,
              and delivering fast, secure web solutions across WordPress, PHP,
              and Shopify.
            </p>

            {/* Micro HUD Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              {HERO_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="cyber-pill text-xs text-foreground/75 shadow-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80 dark:bg-cyan-400/80" />
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <HeroCtas />
            </div>
          </FadeIn>

          {/* Right Column: Futuristic Portrait Framing */}
          <ScaleUnblur className="flex justify-center md:col-span-5 md:justify-end">
            <div className="group relative w-full max-w-95 md:max-w-105">
              {/* Outer Luminous Glow Aura */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-violet-500/25 opacity-70 blur-xl transition-opacity duration-700 group-hover:opacity-100 dark:opacity-40 dark:group-hover:opacity-75"
              />

              <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-foreground/10 dark:border-white/12 bg-background/80 p-2 shadow-xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                  <PortraitMorph
                    srcA={PORTRAIT_SRC}
                    srcB={PORTRAIT_HOVER_SRC}
                    alt="Mohd Mohsin portrait"
                  />
                </div>

                {/* Cyber HUD Floating Chip */}
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-foreground/10 bg-background/85 px-3.5 py-2 backdrop-blur-md shadow-lg dark:border-white/10 dark:bg-black/75">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                    </span>
                    <span className="text-[12px] font-medium tracking-tight text-foreground/85">
                      Full-Stack &amp; Web Specialist
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-foreground/50 tracking-wider uppercase">
                    4+ YRS EXP
                  </span>
                </div>
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
