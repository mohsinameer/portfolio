import { Award, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

type Certification = {
  name: string;
  provider: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    name: "Contentful Certified Professional",
    provider: "Contentful",
  },
  {
    name: "Full Stack Development",
    provider: "Great Learning Academy",
  },
  {
    name: "WordPress",
    provider: "Thinkific",
  },
  {
    name: "React.js",
    provider: "Udemy",
  },
  {
    name: "Git & GitHub",
    provider: "Geekster",
  },
  {
    name: "ChatGPT & AI Tools",
    provider: "Skill Nation",
  },
];

export function Certifications(): ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="cyber-pill text-[11px] font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400 self-start">
          Verified Credentials
        </span>
        <h3 className="text-foreground text-[20px] font-semibold tracking-tight sm:text-[22px]">
          Certifications
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CERTIFICATIONS.map((certification) => (
          <div
            key={`${certification.name}-${certification.provider}`}
            className="group relative flex items-center gap-3.5 rounded-2xl border border-foreground/10 bg-background/80 p-3.5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/35 hover:bg-background hover:shadow-[0_6px_20px_-4px_rgba(99,102,241,0.12)] dark:border-white/10 dark:bg-[#0c101a]/80"
          >
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/4 text-indigo-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-400"
              aria-hidden="true"
            >
              <Award className="h-5 w-5" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-foreground text-[15px] font-semibold tracking-tight truncate sm:text-[15.5px]">
                {certification.name}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span className="text-foreground/60 text-[12.5px] tracking-tight truncate">
                  {certification.provider}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
