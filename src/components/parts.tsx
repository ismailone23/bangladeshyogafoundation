"use client";

import { useRef, useState, type RefObject } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Lang } from "@/lib/content";
import { useEdit, useLang } from "./lang";
import { Ed } from "./edit";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** The half-sun from the logo. Rays draw in on scroll. It marks each section label. */
export function Sun({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".ray", {
          strokeDashoffset: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        });
      });
    },
    { scope: ref },
  );
  const rays = [-60, -30, 0, 30, 60];
  return (
    <svg
      ref={ref}
      viewBox="-24 -24 48 26"
      className={`h-5 w-9 text-sun ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M-10 0a10 10 0 0 1 20 0" />
      {rays.map((a) => (
        <line
          key={a}
          className="ray"
          pathLength={1}
          strokeDasharray={1}
          x1="0"
          y1="-15"
          x2="0"
          y2="-22"
          transform={`rotate(${a})`}
        />
      ))}
    </svg>
  );
}

/** Headline split into words that rise out of a mask (GSAP animates [data-hero-word]). */
export function Words({
  text,
  animate = true,
}: {
  text: string;
  animate?: boolean;
}) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pt-[0.2em] pb-[0.2em] my-[-0.2em] align-top"
        >
          <span
            {...(animate ? { "data-hero-word": "" } : {})}
            className="inline-block"
          >
            {w}
            {" "}
          </span>
        </span>
      ))}
    </>
  );
}

/** Tabs with a sliding underline (layoutId), in the style of 21st.dev animated tabs. */
export function Tabs({
  tabs,
  value,
  onChange,
}: {
  tabs: string[];
  value: number;
  onChange: (i: number) => void;
}) {
  return (
    <div role="tablist" className="flex gap-6 border-b border-line">
      {tabs.map((t, i) => (
        <button
          key={t}
          role="tab"
          aria-selected={value === i}
          onClick={() => onChange(i)}
          className={`relative pb-3 text-base transition-colors ${value === i ? "text-ink" : "text-muted hover:text-ink"}`}
        >
          {t}
          {value === i && (
            <motion.span
              layoutId="tab-line"
              className="absolute inset-x-0 -bottom-px h-0.5 bg-green"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

/** Accordion with animated height, in the style of 21st.dev accordions. */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const { editing } = useEdit();
  const Head = editing ? "div" : "button";
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => (
        <div key={it.q}>
          <Head
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 py-5 text-left font-serif text-xl md:text-2xl"
          >
            {editing ? <Ed k={`faq.items.${i}.q`} text={it.q} /> : it.q}
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-2xl leading-none text-green"
              aria-hidden
            >
              +
            </motion.span>
          </Head>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-2xl pb-6 text-ink-2"><Ed k={`faq.items.${i}.a`} text={it.a} /></p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/** EN | বাং switch with a sliding pill. */
export function LangSwitch({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
}) {
  const opts: { k: Lang; label: string; name: string }[] = [
    { k: "en", label: "EN", name: "English" },
    { k: "bn", label: "বাং", name: "বাংলা" },
  ];
  return (
    <div className="relative flex items-center rounded-full border border-current/25 p-0.5 text-sm">
      {opts.map((o) => (
        <button
          key={o.k}
          lang={o.k}
          aria-label={o.name}
          aria-pressed={lang === o.k}
          onClick={() => onChange(o.k)}
          className={`relative z-10 grid h-7 w-12 place-items-center rounded-full leading-none transition-colors ${lang === o.k ? "text-paper group-data-[dark=true]:text-ink" : ""}`}
        >
          {lang === o.k && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-ink group-data-[dark=true]:bg-white"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
          {o.label}
        </button>
      ))}
    </div>
  );
}

export const wrap = "mx-auto w-full max-w-[1920px] px-6 md:px-10 xl:px-16 2xl:px-24";
export const btn =
  "inline-flex h-12 items-center rounded-full px-6 text-base transition-colors";

export function Label({ children, k }: { children: string; k?: string }) {
  return (
    <div data-reveal className="mb-6 flex items-center gap-3 text-ink-2">
      <Sun />
      <span>{k ? <Ed k={k} text={children} /> : children}</span>
    </div>
  );
}

/** Edit-mode button on a photo: uploads a new image and swaps it in everywhere that photo is used. */
function ChangePhoto({ from }: { from: string }) {
  const { setPath } = useEdit();
  const [busy, setBusy] = useState(false);
  const pick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    const form = new FormData();
    form.set("password", sessionStorage.getItem("adminPw") ?? "");
    form.set("file", file);
    const r = await fetch("/api/admin/upload", { method: "POST", body: form }).catch(() => null);
    const j = await r?.json().catch(() => null);
    setBusy(false);
    if (r?.ok) setPath(["img", from], j.path);
    else alert(j?.error ?? "Upload failed");
  };
  return (
    <label className="absolute top-1/2 right-3 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white px-3 py-1.5 text-sm text-ink shadow" onClick={(e) => e.stopPropagation()}>
      {busy ? "Uploading…" : "Change photo"}
      <input type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={pick} />
    </label>
  );
}

export function Photo({ src, alt, sizes, className = "", eager, fixed }: { src: string; alt: string; sizes: string; className?: string; eager?: boolean; fixed?: boolean }) {
  const { site } = useLang();
  const { editing } = useEdit();
  if (!src) return <div className="absolute inset-0 bg-paper-2" />;
  const shown = site.img[src] || src;
  // owner-supplied URLs can point anywhere and uploads are served by our API, so those skip Next's image optimiser
  const plain = shown.startsWith("http") || shown.startsWith("/api/") || shown.startsWith("/uploads/");
  return (
    <>
      <Image src={shown} alt={alt} fill sizes={sizes} unoptimized={plain} loading={eager ? "eager" : undefined} className={`object-cover ${className}`} />
      {editing && !fixed && <ChangePhoto from={src} />}
    </>
  );
}

/** Fade-and-rise [data-reveal] elements that start below the fold as they scroll into view.
 *  Anything already on screen is never touched, so a failure here can't blank the page.
 *  Uses IntersectionObserver (no cached positions, so layout shifts and navigation can't strand an element)
 *  and re-runs on language change because list rows are keyed by text and remount. */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  const { lang } = useLang();
  const io = useRef<IntersectionObserver | null>(null);
  useGSAP(
    () => {
      io.current?.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const limit = window.innerHeight * 0.92;
      const obs = new IntersectionObserver(
        (entries) => {
          const els = entries
            .filter((e) => e.isIntersecting)
            .map((e) => e.target);
          if (!els.length) return;
          els.forEach((e) => obs.unobserve(e));
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true,
          });
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      io.current = obs;
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((e) => {
        if (e.style.opacity === "1") return; // already revealed
        if (e.style.opacity === "") {
          if (e.getBoundingClientRect().top < limit) return; // on screen: leave visible
          gsap.set(e, { opacity: 0, y: 24 });
        }
        obs.observe(e);
      });
      return () => obs.disconnect();
    },
    { scope, dependencies: [lang] },
  );
}
