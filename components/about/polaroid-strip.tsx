"use client";

import {
  Boxes,
  Code2,
  FileCode2,
  Gauge,
  Globe,
  Layout,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ComponentType, type ReactNode } from "react";

type RoleCard = {
  id: string;
  role: string;
  subtitle: string;
  tag: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  glowColor: string;
  rotate: number;
};

const ROLES: RoleCard[] = [
  {
    id: "web-dev",
    role: "Web Developer",
    subtitle: "Architecture & Logic",
    tag: "PHP • WordPress • JS",
    icon: Code2,
    accentColor: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.35)",
    rotate: -5,
  },
  {
    id: "ui-dev",
    role: "UI Developer",
    subtitle: "Modern Interfaces",
    tag: "Tailwind • Responsive",
    icon: Layout,
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.35)",
    rotate: 4,
  },
  {
    id: "html-dev",
    role: "HTML Developer",
    subtitle: "Semantic & Standards",
    tag: "HTML5 • Accessibility",
    icon: FileCode2,
    accentColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.35)",
    rotate: -4,
  },
  {
    id: "ecom-mgr",
    role: "Ecommerce Manager",
    subtitle: "Store Management",
    tag: "CRO • Operations",
    icon: ShoppingBag,
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    rotate: 5,
  },
  {
    id: "aem-author",
    role: "AEM Content Author",
    subtitle: "Enterprise Publishing",
    tag: "Adobe AEM • Contentful",
    icon: Boxes,
    accentColor: "#f43f5e",
    glowColor: "rgba(244, 63, 94, 0.35)",
    rotate: -3,
  },
  {
    id: "webmaster",
    role: "Webmaster",
    subtitle: "Security & Domains",
    tag: "Health • Core Vitals",
    icon: Globe,
    accentColor: "#0ea5e9",
    glowColor: "rgba(14, 165, 233, 0.35)",
    rotate: 6,
  },
  {
    id: "site-mgr",
    role: "Website Manager",
    subtitle: "Performance & QA",
    tag: "Maintenance • SEO",
    icon: Gauge,
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.35)",
    rotate: -5,
  },
  {
    id: "ecom-ops",
    role: "Ecommerce Operations",
    subtitle: "Catalogues & Flows",
    tag: "Products • Fulfillment",
    icon: TrendingUp,
    accentColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.35)",
    rotate: 4,
  },
  {
    id: "shopify-mgr",
    role: "Shopify Manager",
    subtitle: "Storefront Strategy",
    tag: "Collections • Navigation",
    icon: ShoppingCart,
    accentColor: "#14b8a6",
    glowColor: "rgba(20, 184, 166, 0.35)",
    rotate: -4,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function RoleBadgeCard({
  role,
  index,
}: {
  role: RoleCard;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 15;
    const k = 0.2;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  const Icon = role.icon;

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -100, filter: "blur(14px)", rotate: role.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: role.rotate }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        zIndex: 35,
        y: -6,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      transition={{
        duration: 0.85,
        delay: 0.04 + index * 0.05,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
      }}
      className="group relative flex flex-col justify-between aspect-[3/4.3] w-[clamp(7.5rem,10.2vw,9.5rem)] shrink-0 cursor-default select-none rounded-2xl border border-foreground/10 bg-background/85 p-3 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0c101c]/85"
    >
      {/* Top Lanyard Clip Notch */}
      <div
        aria-hidden="true"
        className="h-1 w-6 rounded-full bg-foreground/15 dark:bg-white/15 mx-auto"
      />

      {/* Card Header: Index & Status */}
      <div className="flex items-center justify-between px-0.5 pt-1">
        <span className="font-mono text-[9px] font-semibold text-foreground/45 tracking-wider uppercase tabular-nums">
          0{index + 1}
        </span>
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: role.accentColor,
            boxShadow: `0 0 8px ${role.accentColor}`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Icon */}
      <div className="relative mx-auto my-1 flex h-13 w-13 items-center justify-center rounded-2xl border border-foreground/8 bg-foreground/3 shadow-xs transition-transform duration-300 group-hover:scale-110 dark:border-white/8 dark:bg-white/[0.04]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-45"
          style={{ backgroundColor: role.accentColor }}
        />
        <Icon
          className="h-6 w-6 transition-colors duration-300"
          style={{ color: role.accentColor }}
        />
      </div>

      {/* Role Title & Subtitle */}
      <div className="flex flex-col items-center text-center px-0.5">
        <h4 className="font-semibold text-[13px] leading-tight tracking-tight text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-cyan-300">
          {role.role}
        </h4>
        <p className="text-[10px] text-foreground/55 tracking-tight mt-0.5 line-clamp-1">
          {role.subtitle}
        </p>
      </div>

      {/* Bottom Skill Badge */}
      <div className="pt-1.5 text-center">
        <span className="inline-block rounded-md border border-foreground/8 bg-foreground/2 px-1.5 py-0.5 text-[9px] font-mono font-medium text-foreground/60 tracking-tight dark:border-white/8 dark:bg-white/[0.03]">
          {role.tag}
        </span>
      </div>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(10rem,16vw,14rem)] w-full" />;
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <span className="cyber-pill text-[11px] font-semibold tracking-wider uppercase text-indigo-600 dark:text-cyan-400 shadow-xs">
        Core Professional Hats &amp; Expertise
      </span>

      <div className="flex flex-wrap w-full items-center justify-center gap-2.5 sm:gap-3.5 px-3 sm:px-8">
        {ROLES.map((role, i) => (
          <RoleBadgeCard key={role.id} role={role} index={i} />
        ))}
      </div>
    </div>
  );
}
