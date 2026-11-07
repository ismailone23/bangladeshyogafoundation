"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "./lang";
import { LangSwitch, btn, wrap } from "./parts";

// TODO(client): add the foundation's real photographer-credit list if photos change
const CREDITS =
  "Vitaly Gariev, Amauri Mejía, Jared Rice, Kaylee Garrett, Yannic Läderach, kike vega";

const pageLinks = (t: ReturnType<typeof useLang>["t"]) => [
  ["/#about", t.nav.about],
  ["/courses", t.nav.courses],
  ["/#sessions", t.nav.sessions],
  ["/#events", t.nav.events],
  ["/gallery", t.nav.gallery],
  ["/contact", t.nav.contact],
];

export function Header() {
  const { lang, setLang, t } = useLang();
  const path = usePathname();
  const home = path === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = pageLinks(t);
  // over the hero photo the bar is transparent; everywhere else it is solid
  const dark = home && !scrolled && !menu;

  return (
    <header
      data-dark={dark}
      className={`group fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${dark ? "text-white" : "bg-paper/85 text-ink shadow-[0_1px_0_var(--line)] backdrop-blur-md"}`}
    >
      <div className={`${wrap} flex ${scrolled || !home ? "h-16" : "h-20"} items-center justify-between gap-4 transition-[height] duration-300`}>
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Bangladesh Yoga Foundation"
        >
          {/* crop the emblem out of the full logo */}
          <span className="relative block size-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/10">
            <Image
              src="/logo.jpg"
              alt=""
              width={62}
              loading="eager"
              height={62}
              className="absolute max-w-none"
              style={{ left: -11, top: -4 }}
            />
          </span>
          <span className="font-serif text-lg leading-tight max-sm:hidden">
            Bangladesh Yoga Foundation
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] lg:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
              className={`relative py-1 transition-opacity after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-sun after:transition-transform after:duration-300 hover:opacity-100 hover:after:scale-x-100 ${path === href ? "opacity-100" : "opacity-80 after:scale-x-0"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} onChange={setLang} />
          <Link
            href="/contact"
            className={`${btn} h-10 px-5 text-[15px] max-md:hidden ${dark ? "bg-white text-ink hover:bg-paper-2" : "bg-green text-white hover:bg-ink"}`}
          >
            {t.nav.join}
          </Link>
          <button
            aria-label="Menu"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
            className="grid size-10 place-items-center lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 h-px bg-current transition-transform ${menu ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute inset-x-0 h-px bg-current transition-transform ${menu ? "top-1.5 -rotate-45" : "bottom-0"}`}
              />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <div className={`${wrap} flex flex-col py-2`}>
              {links.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenu(false)}
                  className="border-b border-line py-4 font-serif text-2xl"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenu(false)}
                className={`${btn} my-5 justify-center bg-green text-white md:hidden`}
              >
                {t.nav.join}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const { t, site } = useLang();
  const k = site.links;
  const phoneHref = k.phone ? `tel:${k.phone.replace(/[^+\d]/g, "")}` : "";
  const contact = [
    k.email && { label: k.email, href: `mailto:${k.email}` },
    k.phone && { label: k.phone, href: phoneHref },
    k.whatsapp && { label: "WhatsApp", href: k.whatsapp },
  ].filter(Boolean) as { label: string; href: string }[];
  const social = [
    k.facebook && { label: "Facebook", href: k.facebook },
    k.youtube && { label: "YouTube", href: k.youtube },
    k.instagram && { label: "Instagram", href: k.instagram },
  ].filter(Boolean) as { label: string; href: string }[];
  const column = (title: string, links: { label: string; href: string }[]) =>
    links.length > 0 && (
      <div>
        <h2 className="font-serif text-xl">{title}</h2>
        <ul className="mt-3 space-y-2 text-white/75">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="underline-offset-4 transition-colors hover:text-sun hover:underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <footer className="bg-ink py-14 text-white">
      <div className={`${wrap} grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]`}>
        <div className="flex items-center gap-5">
          <Image
            src="/logo.jpg"
            alt="Bangladesh Yoga Foundation"
            width={112}
            height={112}
            className="rounded-2xl bg-white p-1.5"
          />
          <p className="max-w-[14rem] font-serif text-xl">{t.footer.tag}</p>
        </div>
        {column(t.footer.contact, contact)}
        {column(t.footer.follow, social)}
      </div>
      <p className={`${wrap} mt-10 flex gap-6 border-t border-white/15 pt-6 text-sm text-white/75`}>
        <Link href="/privacy" className="underline-offset-4 hover:underline">{t.footer.privacy}</Link>
        <Link href="/refund" className="underline-offset-4 hover:underline">{t.footer.refund}</Link>
      </p>
      <p className={`${wrap} mt-4 text-sm text-white/55`}>
        {t.footer.credit} {CREDITS}
      </p>
    </footer>
  );
}
