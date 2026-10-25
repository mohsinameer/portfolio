"use client";

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
      "Managed website content and supported Shopify store maintenance, including product listings, catalogue updates, collections, pages, navigation, and content accuracy.",
      "Developed responsive web pages using HTML5, CSS3, JavaScript, Tailwind CSS, and Bootstrap, contributing to a reported 25% improvement in user engagement.",
      "Built landing pages and reusable UI components for React.js and Next.js projects using AI-assisted development, refining generated code for readability and maintainability.",
      "Supported SEO and website performance improvements through metadata optimization, content updates, frontend enhancements, and technical troubleshooting.",
      "Worked with designers, developers, and marketing stakeholders to maintain mobile-friendly UX/UI, consistent branding, and timely website updates.",
      "Used AI tools to debug issues, improve code quality, automate repetitive tasks, and streamline workflows; project work contributed to reported improvements in page load time and SEO performance.",
    ],
  },
  {
    company: "Digitup Sol Pvt. Ltd. (Unilever)",
    role: "Junior Software Developer",
    location: "Gurugram",
    period: "October 2021 – March 2024",
    responsibilities: [
      "Maintained responsive website interfaces, campaign pages, and landing pages using HTML5, CSS3, and JavaScript.",
      "Authored, edited, published, and maintained digital content using Adobe Experience Manager (AEM) and Contentful.",
      "Managed digital assets, metadata, content updates, and publishing workflows to maintain accuracy and brand consistency.",
      "Supported SEO improvements, responsive UX/UI, cross-browser compatibility, website maintenance, and frontend performance optimization.",
      "Collaborated with content, design, development, and marketing teams to deliver digital campaigns and website updates aligned with business requirements.",
      "Applied AI-assisted research and debugging to troubleshoot issues, refine code, automate repetitive work, and improve productivity.",
    ],
  },
];

const ROW_HEIGHT = 64;

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <motion.div
          className="relative"
          initial={false}
          animate={{ height: "auto" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="flex flex-col gap-2">
            {ENTRIES.map((entry) => (
              <li
                key={`${entry.company}-${entry.period}`}
                className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
                style={{ minHeight: ROW_HEIGHT }}
              >
                <CompanyLogo entry={entry} />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.company}
                  </span>
                  <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                    {entry.role}
                    <span className="text-foreground/30 mx-2">•</span>
                    <span className="text-foreground/55">{entry.location}</span>
                    <span className="text-foreground/30 mx-2">•</span>
                    <span className="text-foreground/55">{entry.period}</span>
                  </span>
                  <ul className="text-foreground/65 mt-2 list-disc space-y-1 pl-5 text-[14px] leading-relaxed tracking-tight sm:text-[15px]">
                    {entry.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
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
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center bg-white ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{
        borderRadius: 14,
        ...(entry.slug ? {} : entry.brand ? { backgroundColor: entry.brand } : {}),
      }}
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
        <span
          className={`text-[18px] font-semibold tracking-tight ${
            entry.brand ? "text-white" : "text-foreground/60"
          }`}
        >
          {initials}
        </span>
      )}
    </span>
  );
}
