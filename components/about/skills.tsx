import type { ComponentType, ReactNode } from "react";
import {
  Code2,
  Gauge,
  Layers,
  ShoppingBag,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type SkillCategory = {
  category: string;
  icon: ComponentType<{ className?: string }>;
  skills: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend & Web Development",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "Responsive Design",
      "Mobile Optimization",
      "UI/UX",
      "React.js and Next.js (AI-assisted projects)",
    ],
  },
  {
    category: "E-commerce & Shopify",
    icon: ShoppingBag,
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
    category: "CMS & Architecture",
    icon: Layers,
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
    category: "Performance & Quality",
    icon: Gauge,
    skills: [
      "Website Speed Optimization",
      "Bug Troubleshooting",
      "Cross-Browser Compatibility",
      "Accessibility Fundamentals",
      "Website Maintenance",
    ],
  },
  {
    category: "SEO & Website Growth",
    icon: TrendingUp,
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
    category: "AI & Productivity",
    icon: Sparkles,
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="cyber-pill text-[11px] font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400 self-start">
          Technical Stack
        </span>
        <h3 className="text-foreground text-[20px] font-semibold tracking-tight sm:text-[22px]">
          Skills &amp; Architecture
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SKILL_CATEGORIES.map(({ category, icon: Icon, skills }) => (
          <div
            key={category}
            className="group relative flex flex-col gap-3 rounded-3xl border border-foreground/10 bg-background/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/35 hover:bg-background hover:shadow-[0_10px_25px_-5px_rgba(99,102,241,0.15)] dark:border-white/10 dark:bg-[#0c101a]/80"
          >
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/4 text-foreground/80 dark:border-white/10 dark:text-foreground/90">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h4 className="text-[15px] font-semibold tracking-tight text-foreground/90">
                {category}
              </h4>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-foreground/8 bg-foreground/3 px-3 py-1 text-[13px] tracking-tight text-foreground/80 transition-all duration-200 hover:border-indigo-500/40 hover:bg-background hover:text-foreground dark:border-white/8 dark:bg-white/[0.03]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
