"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  location: string;
  period: string;
  slug?: string;
  responsibilities: string[];
  brand?: string;
};

const ENTRIES: Entry[] = [
  {
    company: "TechNBoost",
    role: "Front-End Developer",
    location: "Noida",
    period: "September 2024 – October 2026",
    responsibilities: [
      "Developed and maintained responsive websites, landing pages, and e-commerce stores using WordPress, PHP, HTML5, CSS3, JavaScript, Tailwind CSS, and Bootstrap.",
      "Customized WordPress themes and PHP templates, implementing custom layouts, styling, navigation, and feature updates aligned with brand standards.",
      "Applied backend fundamentals including PHP server-side scripting, form handling, input validation, and REST API integration to connect frontend interfaces with web services.",
      "Managed website content and maintained CMS platforms (WordPress and Shopify), overseeing product listings, catalogue updates, and digital asset accuracy.",
      "Diagnosed and resolved technical issues through systematic troubleshooting, addressing plugin conflicts, broken scripts, and responsive layout bugs using browser developer tools.",
      "Implemented website security best practices, including regular WordPress/CMS updates, plugin management, input sanitization, and secure form processing.",
      "Optimized website performance and Core Web Vitals through asset minification, image compression, and caching strategies to enhance page load speeds.",
      "Built reusable UI components for React.js and Next.js projects with AI-assisted workflows, collaborating with cross-functional teams to streamline delivery.",
    ],
  },
  {
    company: "Digitup Sol Pvt. Ltd. (Unilever)",
    role: "Junior Software Developer",
    location: "Gurugram",
    period: "October 2021 – March 2024",
    responsibilities: [
      "Built and maintained responsive website interfaces, campaign landing pages, and web components using HTML5, CSS3, and JavaScript across global brand sites.",
      "Authored, edited, and published digital content and structured assets using Adobe Experience Manager (AEM) and Contentful.",
      "Assisted with technical troubleshooting and debugging to resolve UI bugs, broken links, and cross-browser rendering discrepancies across desktop and mobile devices.",
      "Adhered to enterprise website security standards, access control protocols, and data protection practices across digital publishing workflows.",
      "Supported frontend performance optimization, asset compression, and on-page SEO improvements to enhance user experience and page speed.",
      "Collaborated with design, content, and engineering teams while utilizing debugging tools to streamline workflows and maintain site reliability.",
    ],
  },
];

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="cyber-pill text-[11px] font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400 self-start">
          Career Timeline
        </span>
        <h3 className="text-foreground text-[20px] font-semibold tracking-tight sm:text-[22px]">
          Work Experience
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {ENTRIES.map((entry) => (
          <motion.div
            key={`${entry.company}-${entry.period}`}
            initial={false}
            className="group relative flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-background/80 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/35 hover:bg-background hover:shadow-[0_12px_30px_-5px_rgba(99,102,241,0.15)] dark:border-white/10 dark:bg-[#0c101a]/80"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-foreground/8 pb-4 dark:border-white/8">
              <div className="flex items-center gap-3.5">
                <CompanyLogo entry={entry} />
                <div>
                  <h4 className="text-foreground text-[18px] font-semibold tracking-tight sm:text-[19px]">
                    {entry.company}
                  </h4>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-lg bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-600 dark:text-cyan-300">
                      {entry.role}
                    </span>
                    <span className="text-foreground/35 text-xs">•</span>
                    <span className="text-foreground/60 text-xs font-medium">
                      {entry.location}
                    </span>
                  </div>
                </div>
              </div>

              <span className="font-mono text-xs font-medium text-foreground/55 rounded-full border border-foreground/8 bg-foreground/2 px-3 py-1 dark:border-white/8 dark:bg-white/[0.03]">
                {entry.period}
              </span>
            </div>

            {/* Responsibilities list with custom indicators */}
            <ul className="flex flex-col gap-2.5 pt-1">
              {entry.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex items-start gap-2.5 text-[14px] leading-relaxed tracking-tight text-foreground/75 sm:text-[15px]"
                >
                  <ChevronRight
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-indigo-500 dark:text-cyan-400"
                    aria-hidden="true"
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CompanyLogo({
  entry,
}: {
  entry: Pick<Entry, "company" | "slug" | "brand">;
}): ReactNode {
  const initials = entry.company.charAt(0);
  return (
    <span
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-background shadow-xs ring-1 ring-foreground/5 dark:border-white/10 dark:bg-white/[0.04]"
      aria-hidden="true"
    >
      {entry.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${entry.slug}`}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
          draggable={false}
        />
      ) : (
        <span className="text-[18px] font-bold tracking-tight text-indigo-600 dark:text-cyan-400">
          {initials}
        </span>
      )}
    </span>
  );
}
