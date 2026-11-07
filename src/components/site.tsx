"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLang } from "./lang";
import { Ed } from "./edit";
import { AboutSection, CoursesSection, HeroSection } from "./sections";
import { Accordion, Label, Photo, Tabs, btn, useReveal, wrap } from "./parts";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TAB_IMAGES = ["/img/group.jpg", "/img/med.jpg", "/img/sil.jpg"];

export default function Site() {
  const { lang, t } = useLang();
  const [tab, setTab] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.defaults({ ease: "power3.out" });
        gsap.fromTo(
          "[data-hero-word]",
          { yPercent: 110 },
          { yPercent: 0, opacity: 1, duration: 1, stagger: 0.07 },
        );
        gsap.to("[data-hero-fade]", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          stagger: 0.12,
        });
        gsap.to("[data-hero-img]", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) =>
          gsap.fromTo(
            el,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          ),
        );
      });
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <main>
        <HeroSection />

        <AboutSection />

        {/* What we do now */}
        <section className="bg-paper-2 py-24 md:py-32">
          <div className={wrap}>
            <Label k="now.label">{t.now.label}</Label>
            <h2
              data-reveal
              className="max-w-2xl text-4xl leading-[1.1] md:text-5xl"
            >
              <Ed k="now.title" text={t.now.title} />
            </h2>
            <ol className="mt-12 divide-y divide-line border-y border-line">
              {t.now.items.map((it, i) => (
                <li
                  key={i}
                  data-reveal
                  className="grid items-baseline gap-2 py-6 md:grid-cols-[4rem_1fr_1.2fr] md:gap-6"
                >
                  <span className="text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl"><Ed k={`now.items.${i}.t`} text={it.t} /></h3>
                  <p className="text-ink-2"><Ed k={`now.items.${i}.d`} text={it.d} /></p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CoursesSection />

        {/* Sessions and where we practise */}
        <section id="sessions" className="bg-paper-2 py-24 md:py-32">
          <div
            className={`${wrap} grid items-center gap-12 md:grid-cols-2 md:gap-16`}
          >
            <div
              data-reveal
              className="relative aspect-4/5 overflow-hidden rounded-2xl"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={tab}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Photo
                    src={TAB_IMAGES[tab]}
                    alt=""
                    sizes="(min-width:768px) 50vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div>
              <Label k="sessions.label">{t.sessions.label}</Label>
              <h2 data-reveal className="text-4xl leading-[1.1] md:text-5xl">
                <Ed k="sessions.title" text={t.sessions.title} />
              </h2>
              <div data-reveal className="mt-10">
                <Tabs
                  tabs={t.sessions.tabs.map((x) => x.k)}
                  value={tab}
                  onChange={setTab}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${lang}-${tab}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="pt-8"
                  >
                    <p className="font-serif text-2xl">
                      <Ed k={`sessions.tabs.${tab}.place`} text={t.sessions.tabs[tab].place} />
                    </p>
                    <ul className="mt-4 divide-y divide-line border-y border-line">
                      {t.sessions.tabs[tab].rows.map(([d, time, lvl], j) => (
                        <li
                          key={j}
                          className="grid grid-cols-[1fr_auto] gap-x-6 py-4 sm:grid-cols-[1fr_8rem_9rem]"
                        >
                          <span><Ed k={`sessions.tabs.${tab}.rows.${j}.0`} text={d} /></span>
                          <span className="tabular-nums text-ink-2 sm:text-left">
                            <Ed k={`sessions.tabs.${tab}.rows.${j}.1`} text={time} />
                          </span>
                          <span className="col-span-2 text-muted sm:col-span-1">
                            <Ed k={`sessions.tabs.${tab}.rows.${j}.2`} text={lvl} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Events (demo content) */}
        <section id="events" className="py-24 md:py-32">
          <div className={wrap}>
            <Label k="events.label">{t.events.label}</Label>
            <h2
              data-reveal
              className="max-w-2xl text-4xl leading-[1.1] md:text-5xl"
            >
              <Ed k="events.title" text={t.events.title} />
            </h2>
            <ul className="mt-12 divide-y divide-line border-y border-line">
              {t.events.items.map((e, i) => (
                <li
                  key={i}
                  data-reveal
                  className="grid items-center gap-4 py-7 md:grid-cols-[7rem_1.2fr_1fr_auto] md:gap-8"
                >
                  <div className="flex items-baseline gap-2 md:block">
                    <span className="font-serif text-5xl leading-none tabular-nums">
                      <Ed k={`events.items.${i}.day`} text={e.day} />
                    </span>
                    <span className="text-muted md:mt-1 md:block"><Ed k={`events.items.${i}.mon`} text={e.mon} /></span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl"><Ed k={`events.items.${i}.t`} text={e.t} /></h3>
                    <p className="mt-1 text-ink-2"><Ed k={`events.items.${i}.d`} text={e.d} /></p>
                  </div>
                  <p className="text-muted"><Ed k={`events.items.${i}.where`} text={e.where} /></p>
                  <a
                    href="/contact"
                    className="text-green underline-offset-4 hover:underline"
                  >
                    <Ed k="events.cta" text={t.events.cta} /> →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="py-24 md:py-32">
          <div
            className={`${wrap} grid items-start gap-12 md:grid-cols-12 md:gap-16`}
          >
            <div
              data-reveal
              className="relative aspect-3/4 overflow-hidden rounded-2xl md:col-span-4"
            >
              <Photo
                src="/img/founder.jpg"
                alt={t.founder.name}
                sizes="(min-width:768px) 32vw, 100vw"
              />
            </div>
            <div className="md:col-span-8 md:pt-6">
              <Label k="founder.label">{t.founder.label}</Label>
              <h2 data-reveal className="text-4xl leading-[1.1] md:text-5xl">
                <Ed k="founder.name" text={t.founder.name} />
              </h2>
              <p data-reveal className="mt-6 max-w-2xl text-ink-2">
                <Ed k="founder.body" text={t.founder.body} />
              </p>
              <ul className="mt-10 divide-y divide-line border-y border-line">
                {t.founder.creds.map((c, i) => (
                  <li
                    key={i}
                    data-reveal
                    className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6"
                  >
                    <span className="font-serif text-xl"><Ed k={`founder.creds.${i}.t`} text={c.t} /></span>
                    <span className="text-ink-2"><Ed k={`founder.creds.${i}.d`} text={c.d} /></span>
                  </li>
                ))}
              </ul>
              <a
                data-reveal
                href="/img/cert.jpg"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-4 text-green underline-offset-4 hover:underline"
              >
                <span className="relative block h-16 w-12 overflow-hidden rounded-md border border-line">
                  <Photo src="/img/cert.jpg" alt="" sizes="48px" />
                </span>
                <Ed k="founder.cert" text={t.founder.cert} /> →
              </a>
            </div>
          </div>
        </section>

        {/* Student voices (demo content) */}
        <section className="bg-paper-2 py-24 md:py-32">
          <div className={wrap}>
            <Label k="voices.label">{t.voices.label}</Label>
            <h2
              data-reveal
              className="max-w-2xl text-4xl leading-[1.1] md:text-5xl"
            >
              <Ed k="voices.title" text={t.voices.title} />
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {t.voices.items.map((v, i) => (
                <figure
                  key={i}
                  data-reveal
                  className="flex flex-col border-t border-ink pt-6"
                >
                  <blockquote className="flex-1 font-serif text-xl leading-snug md:text-2xl">
                    <Ed k={`voices.items.${i}.q`} text={v.q} />
                  </blockquote>
                  <figcaption className="mt-6 text-ink-2">
                    <Ed k={`voices.items.${i}.n`} text={v.n} /> <span className="text-muted">· <Ed k={`voices.items.${i}.r`} text={v.r} /></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 md:py-32">
          <div className={`${wrap} grid gap-12 md:grid-cols-12 md:gap-16`}>
            <div className="md:col-span-4">
              <Label k="faq.label">{t.faq.label}</Label>
              <h2 data-reveal className="text-4xl leading-[1.1] md:text-5xl">
                <Ed k="faq.title" text={t.faq.title} />
              </h2>
            </div>
            <div data-reveal className="md:col-span-8">
              <Accordion key={lang} items={t.faq.items} />
            </div>
          </div>
        </section>

        {/* Join */}
        <section
          id="join"
          className="relative overflow-hidden bg-ink py-28 text-white md:py-40"
        >
          <Photo
            src="/img/sil.jpg"
            alt=""
            sizes="100vw"
            className="opacity-40"
          />
          <div className={`${wrap} relative`}>
            <h2
              data-reveal
              className="max-w-2xl text-5xl leading-[1.08] md:text-6xl"
            >
              <Ed k="join.title" text={t.join.title} />
            </h2>
            <p data-reveal className="mt-5 max-w-md text-lg text-white/80">
              <Ed k="join.body" text={t.join.body} />
            </p>
            <a
              data-reveal
              href="/contact"
              className={`${btn} mt-10 bg-white text-ink hover:bg-paper-2`}
            >
              <Ed k="join.cta" text={t.join.cta} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
