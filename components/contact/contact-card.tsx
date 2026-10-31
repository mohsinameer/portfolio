import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

export function ContactCard(): ReactNode {
  return (
    <section className="relative mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10">
      <FadeIn>
        <div className="relative">
          {/* Outer Luminous Glow Aura */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-violet-500/20 opacity-70 blur-2xl dark:opacity-40"
          />

          <div className="relative w-full overflow-hidden rounded-[2.2rem] border border-foreground/10 bg-background/85 p-2 shadow-2xl backdrop-blur-2xl dark:border-white/12 dark:bg-[#090d16]/85">
            <div className="relative w-full overflow-hidden rounded-[1.8rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
                style={{
                  WebkitMaskImage: CARD_FADE_MASK,
                  maskImage: CARD_FADE_MASK,
                }}
              >
                <ShaderFlow scale={3} brightness={3} />
              </div>

              <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-9 md:grid-cols-[1.25fr_1fr] md:items-stretch md:gap-8 md:p-10">
                <div className="flex flex-col gap-5">
                  <span className="cyber-pill text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400 self-start">
                    Initiate Collaboration
                  </span>

                  <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                    <span>Let&rsquo;s build something </span>
                    <span className="bg-gradient-to-r from-foreground via-indigo-600 to-cyan-500 dark:from-white dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                      Extraordinary
                    </span>
                  </h2>

                  <p className="max-w-[34ch] text-[17px] leading-[1.5] tracking-tight text-foreground/70 sm:text-[19px] mb-4">
                    Open to discussing web development, e-commerce growth,
                    custom WordPress/PHP engineering, or technical roles. Just reach out!
                  </p>

                  <ContactCardCtas />
                </div>

                <div className="border border-foreground/10 flex flex-col items-center justify-center gap-6 rounded-2xl bg-background/70 p-6 sm:p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.02]">
                  {/* System Status Pill */}
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span>Direct Communication Line</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <SocialIcon
                      href="mailto:mohsinameer00@gmail.com"
                      label="Email Mohd Mohsin"
                      lucideIcon={Mail}
                    />
                    <SocialIcon
                      href="https://linkedin.com/in/mohd-mohsin0"
                      label="Mohd Mohsin LinkedIn Profile"
                      imageSrc="/linkedin.svg"
                    />
                    <SocialIcon
                      href="https://www.instagram.com/mohsin_ameer0/"
                      label="Mohd Mohsin Instagram @mohsin_ameer0"
                      lucideIcon={Instagram}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-[13px] font-medium tracking-tight text-foreground/80">
                      &copy; 2026 Mohd Mohsin. All rights reserved.
                    </p>
                    <p className="text-[12px] tracking-tight text-foreground/50">
                      High-Performance Web Developer &amp; E-commerce Specialist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  imageSrc,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="border border-foreground/10 hover:border-indigo-500/40 hover:bg-background hover:shadow-[0_0_18px_-3px_rgba(99,102,241,0.3)] focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background/80 text-foreground/75 transition-all duration-300 hover:text-foreground hover:-translate-y-0.5 active:translate-y-0 dark:border-white/10 dark:bg-white/[0.04]"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 dark:invert opacity-80 group-hover:opacity-100"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  );
}
