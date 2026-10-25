import type { ReactNode } from "react";

const SKILL_CATEGORIES = [
  {
    category: "E-commerce & Shopify",
    skills: [
      "Shopify Store Management",
      "Product Uploads",
      "Product Catalogue Management",
      "Collections",
      "Pages",
      "Navigation",
      "Content Updates",
      "Store Maintenance",
    ],
  },
  {
    category: "SEO & Website Growth",
    skills: [
      "On-Page SEO Fundamentals",
      "Technical SEO Support",
      "Keyword Research",
      "Content Optimization",
      "Metadata",
      "Organic Search Optimization",
    ],
  },
  {
    category: "Frontend & UX/UI",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Mobile Optimization",
      "UI/UX",
      "React.js and Next.js (AI-assisted projects)",
    ],
  },
  {
    category: "Performance & Quality",
    skills: [
      "Website Speed Optimization",
      "Bug Troubleshooting",
      "Cross-Browser Compatibility",
      "Accessibility Fundamentals",
      "Website Maintenance",
    ],
  },
  {
    category: "CMS & Tools",
    skills: [
      "Shopify",
      "Adobe Experience Manager (AEM)",
      "Contentful",
      "WordPress",
      "Git",
      "GitHub",
      "Jira",
      "Figma",
    ],
  },
  {
    category: "AI & Productivity",
    skills: [
      "AI-Assisted Coding",
      "Debugging",
      "Code Readability",
      "Workflow Automation",
      "Repetitive Task Optimization",
    ],
  },
];

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        What I do
      </h3>
      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {SKILL_CATEGORIES.flatMap(({ category, skills }) => [
            category,
            ...skills,
          ]).map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
