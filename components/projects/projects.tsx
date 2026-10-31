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
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="h-full"
    >
      <a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring block h-full"
      >
        <article className="project-card flex h-full flex-1 cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
          <header className="flex items-center gap-2.5 px-1 pt-2">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon
                className="h-3.5 w-3.5 text-foreground"
                aria-hidden="true"
              />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.category}
            </span>
          </header>

          <div
            className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
            style={{ aspectRatio: project.imageRatio }}
          >
            <div className="project-card__image-inner">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2.5 px-1 pb-1">
            <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
              {project.title}
            </h3>
            <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
              {project.description}
            </p>
          </div>

          <span className="border-foreground/10 bg-foreground text-background group mt-auto inline-flex items-center justify-center gap-2 self-start rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-lg motion-reduce:transition-none">
            Visit Website
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </span>
        </article>
      </a>
    </FadeIn>
  );
}
