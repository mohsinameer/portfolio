"use client";

import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, Check, CircleCheck, Copy, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/lib/motion";

const EMAIL = "mohsinameer00@gmail.com";
const EASE = [0.22, 1, 0.36, 1] as const;
type NotificationStatus = "success" | "error";

export function ContactButton(): ReactNode {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState<NotificationStatus | null>(
    null
  );
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    if (!notification) return;

    const timeout = window.setTimeout(() => setNotification(null), 3200);
    return () => window.clearTimeout(timeout);
  }, [notification]);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setNotification("success");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      try {
        document.body.appendChild(ta);
        ta.select();
        if (document.execCommand("copy")) {
          setCopied(true);
          setNotification("success");
        } else {
          setCopied(false);
          setNotification("error");
        }
      } catch {
        setCopied(false);
        setNotification("error");
      } finally {
        if (ta.parentNode) ta.parentNode.removeChild(ta);
      }
    }
  };

  return (
    <>
      <motion.button
        type="button"
        layout
        onClick={handleCopy}
        onHoverStart={() => setOpen(true)}
        onHoverEnd={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label={
          copied ? "Email copied" : open ? `Copy ${EMAIL}` : "Show email"
        }
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        style={{ borderRadius: 12 }}
        className="focus-ring group relative inline-flex h-11 cursor-pointer items-center justify-center bg-foreground px-5 text-sm font-medium text-background shadow-[0_4px_16px_-4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_0_25px_-3px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 active:translate-y-0"
      >
        <motion.span
          layout="position"
          className="relative inline-flex items-center"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {open ? (
              <motion.span
                key="email"
                layout="position"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: EASE }}
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
                  <AnimatePresence initial={false} mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="inline-flex"
                      >
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="inline-flex"
                      >
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <span className="tabular-nums">{EMAIL}</span>
              </motion.span>
            ) : (
              <motion.span
                key="contact"
                layout="position"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: EASE }}
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Contact</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification}
            role={notification === "success" ? "status" : "alert"}
            aria-live={notification === "success" ? "polite" : "assertive"}
            aria-atomic="true"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 8, scale: 0.98 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.28,
              ease: EASE,
            }}
            className="fixed inset-x-4 bottom-4 z-[10000] flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/95 p-4 text-foreground shadow-xl backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-96"
          >
            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                notification === "success"
                  ? "bg-foreground/5 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
              }`}
              aria-hidden="true"
            >
              {notification === "success" ? (
                <CircleCheck className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
            </span>
            <span className="min-w-0 flex-1 text-sm font-medium tracking-tight">
              {notification === "success"
                ? "Email copied to clipboard!"
                : "Couldn’t copy the email. Please try again or copy it manually."}
            </span>
            <button
              type="button"
              onClick={() => setNotification(null)}
              aria-label="Dismiss notification"
              className="focus-ring inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-foreground/55 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
