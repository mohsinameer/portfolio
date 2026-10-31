import { GraduationCap } from "lucide-react";
import type { ReactNode } from "react";

type Entry = {
  school: string;
  degree: string;
  period: string;
  slug?: string;
};

const ENTRIES: Entry[] = [
  {
    school: "Sharda University",
    degree:
      "Bachelor of Technology (B.Tech) + Master of Technology (M.Tech) in Computer Science & Engineering",
    period: "July 2016 – May 2021",
  },
  {
    school: "LRS Academy CBSE",
    degree: "Secondary High School",
    period: "2015 – 2016",
  },
];

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="cyber-pill text-[11px] font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400 self-start">
          Academic Foundations
        </span>
        <h3 className="text-foreground text-[20px] font-semibold tracking-tight sm:text-[22px]">
          Education
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {ENTRIES.map((entry) => (
          <div
            key={`${entry.school}-${entry.period}`}
            className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-foreground/10 bg-background/80 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/35 hover:bg-background hover:shadow-[0_8px_20px_-5px_rgba(99,102,241,0.12)] dark:border-white/10 dark:bg-[#0c101a]/80"
          >
            <div className="flex items-center gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/4 text-indigo-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-400">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-foreground text-[16px] font-semibold tracking-tight sm:text-[17px]">
                  {entry.school}
                </span>
                <span className="text-foreground/70 text-[13px] tracking-tight sm:text-[14px]">
                  {entry.degree}
                </span>
              </div>
            </div>

            <span className="font-mono text-xs font-medium text-foreground/55 self-start sm:self-center rounded-full border border-foreground/8 bg-foreground/2 px-3 py-1 dark:border-white/8 dark:bg-white/[0.03]">
              {entry.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
