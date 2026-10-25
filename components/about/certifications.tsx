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
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Certifications
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {CERTIFICATIONS.map((certification) => (
            <li
              key={`${certification.name}-${certification.provider}`}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: 64 }}
            >
              <span
                className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center border"
                aria-hidden="true"
                style={{ borderRadius: 14 }}
              >
                <span className="text-foreground/60 text-[18px] font-semibold tracking-tight">
                  {certification.provider.charAt(0)}
                </span>
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {certification.name}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {certification.provider}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
