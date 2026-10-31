import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  category: string;
  title: string;
  description: string;
  website: string;
  imageRatio: number;
  image: string;
};

const PROJECTS: Project[] = [
  {
    id: "tli",
    icon: Sparkles,
    category: "E-commerce Brand",
    title: "TLI",
    description:
      "TLI brings together standout Indian designers and international makers across lighting, furniture, art, and décor. It helps designers and homeowners find thoughtful, lasting pieces for their spaces.",
    website: "https://thelivinginfluence.com/",
    imageRatio: 752 / 497,
    image:
      "https://res.cloudinary.com/do8ljuuo1/image/upload/v1793442706/Project1_c4bypx.webp",
  },
  {
    id: "handsy-market",
    icon: Compass,
    category: "E-commerce Brand",
    title: "Handsy Market",
    description:
      "Handsy Market connects customers with handmade wooden furniture and home décor from independent artisans. From a single accent piece to a wholesale order, each item is made with care.",
    website: "https://www.handsymarket.com/",
    imageRatio: 1024 / 768,
    image:
      "https://res.cloudinary.com/do8ljuuo1/image/upload/v1793442707/Project2_xg58mt.webp",
  },
  {
    id: "audulate",
    icon: LineChart,
    category: "SaaS Product",
    title: "Audulate",
    description:
      "After years of managing compliance through spreadsheets, consultants, and deadline pressure, the Audulate team built the tool they had wished for.",
    website: "https://audulate.com/",
    imageRatio: 1024 / 768,
    image:
      "https://res.cloudinary.com/do8ljuuo1/image/upload/v1793442707/Project3_twr54t.webp",
  },
  {
    id: "mamark",
    icon: Wand2,
    category: "E-commerce Brand",
    title: "Mamark",
    description:
      "M.A Mark makes custom leather jackets and bags to order in its Okhla, New Delhi workshop. Each piece is crafted from genuine leather and personalized from the first idea to the final stitch.",
    website: "https://www.mamark.in/",
    imageRatio: 1024 / 768,
    image:
      "https://res.cloudinary.com/do8ljuuo1/image/upload/v1793442707/Project4_rcdvw1.webp",
  },
  {
    id: "vedic-voyages",
    icon: Layers,
    category: "Travellers",
    title: "Vedic Voyages",
    description:
      "Vedic Voyages offers immersive journeys through India, from Varanasi and Mumbai to Kerala’s backwaters and the Thar Desert, with experiences that go beyond sightseeing.",
    website: "https://vedicvoyages.com/",
    imageRatio: 1024 / 768,
    image:
      "https://res.cloudinary.com/do8ljuuo1/image/upload/v1793442707/Project5_rmnwpf.webp",
  },
  {
    id: "quebooking",
    icon: Bot,
    category: "SaaS Product",
    title: "QueBooking",
    description:
      "QueBooking helps salons, clinics, and service providers manage customer flow, reduce waiting times, and give customers a smoother booking experience.",
    website: "https://quebooking.com/",
    imageRatio: 1024 / 768,
    image:
      "https://res.cloudinary.com/do8ljuuo1/image/upload/v1793442708/Project6_z8iate.webp",
  },
  {
    id: "convobot360",
    icon: Compass,
    category: "SaaS Product",
    title: "Convobot360",
    description:
      "Convobot360 brings online sales, inventory, customer handling, transactions, and shipping together in one business platform.",
    website: "https://www.convobot360.com/",
    imageRatio: 1024 / 768,
    image:
      "https://res.cloudinary.com/do8ljuuo1/image/upload/v1793442708/Project7_xucmga.webp",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-4 pt-10 pb-12 text-center sm:pt-16 sm:pb-16">
            <span className="cyber-pill text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400">
              Selected Showcase
            </span>
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              <span>Featured </span>
              <span className="bg-gradient-to-r from-foreground via-indigo-600 to-cyan-500 dark:from-white dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="max-w-[36ch] text-[17px] leading-[1.5] tracking-tight text-foreground/70 sm:text-[19px]">
              From custom e-commerce stores to scalable SaaS tools, a curated
              look at high-performance systems I&rsquo;ve helped build and ship.
            </p>
          </FadeIn>
        ) : null}

        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-14 flex justify-center sm:mt-18">
            <Link
              href="/projects"
              className="cyber-pill border-foreground/12 dark:border-white/12 focus-ring group inline-flex cursor-pointer items-center gap-2.5 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-background hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.25)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View All 7 Production Projects</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn delay={Math.min(index * 0.06, 0.3)} className="h-full">
      <a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring block h-full group"
      >
        <article className="project-card relative flex h-full flex-1 cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/10 bg-background/80 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-[#0b0f19]/80">
          {/* Subtle Ambient Glow inside Card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-indigo-500/8 via-transparent to-cyan-500/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <header className="relative flex items-center justify-between px-1 pt-1">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/4 text-foreground/80 dark:border-white/10 dark:text-foreground/90">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-[13px] font-semibold tracking-tight text-foreground/80">
                {project.category}
              </span>
            </div>
            <span className="font-mono text-[11px] font-medium tracking-widest text-foreground/45 tabular-nums">
              0{index + 1} // SHIP
            </span>
          </header>

          <div
            className="project-card__image relative w-full overflow-hidden rounded-2xl border border-foreground/8 bg-foreground/5 shadow-inner dark:border-white/8"
            style={{ aspectRatio: project.imageRatio }}
          >
            <div className="project-card__image-inner">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority={index < 2}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>

          <div className="relative flex flex-1 flex-col gap-2 px-1 pb-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[20px] font-semibold leading-[1.2] tracking-tight text-foreground sm:text-[22px] transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-cyan-300">
                {project.title}
              </h3>
              <ArrowUpRight
                className="h-4 w-4 text-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-500 dark:group-hover:text-cyan-400"
                aria-hidden="true"
              />
            </div>
            <p className="text-[14px] leading-relaxed tracking-tight text-foreground/70 sm:text-[15px]">
              {project.description}
            </p>
          </div>

          <div className="relative mt-auto pt-2">
            <span className="inline-flex items-center gap-2 rounded-xl border border-foreground/12 bg-foreground px-4 py-2 text-xs font-semibold tracking-wide text-background shadow-sm transition-all duration-300 group-hover:border-indigo-500/40 group-hover:bg-foreground/90 group-hover:shadow-[0_0_20px_-3px_rgba(99,102,241,0.3)]">
              <span>Visit Website</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </article>
      </a>
    </FadeIn>
  );
}
