"use client";

import { useLang } from "./lang";
import { Ed } from "./edit";
import { Label, Photo, btn, wrap } from "./parts";

/** `preview` renders the section static (no entrance animation, shorter hero) for the admin editor. */
export function HeroSection({ preview }: { preview?: boolean }) {
  const { t, site } = useLang();
  const fade = preview ? {} : { "data-hero-fade": "" };
  const shift = preview ? "" : "translate-y-4";
  return (
    <section
      id={preview ? undefined : "top"}
      className={`relative flex ${preview ? "min-h-150" : "min-h-svh"} items-center overflow-hidden bg-ink text-white`}
    >
      <div
        {...(preview ? {} : { "data-hero-img": "" })}
        className="absolute inset-x-0 top-[-8%] h-[116%]"
      >
        <Photo
          eager={!preview}
          src={site.images.hero}
          alt=""
          sizes="100vw"
          className="object-[60%_50%]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(10_24_20/0.78),rgb(10_24_20/0.35)_55%,transparent)]" />
      <div className={`${wrap} relative pt-24 pb-32`}>
        <h1 className="max-w-3xl text-[clamp(2.5rem,6.4vw,5.5rem)] leading-[1.04]">
          <Ed p={["$", "hero", "title"]} text={t.hero.title} words={!preview} />
        </h1>
        <p
          {...fade}
          className={`mt-6 max-w-xl ${shift} text-lg text-white/85 md:text-xl`}
        >
          <Ed p={["$", "hero", "sub"]} text={t.hero.sub} />
        </p>
        <div {...fade} className={`mt-10 flex ${shift} flex-wrap gap-3`}>
          <a
            href="/contact"
            className={`${btn} bg-white text-ink hover:bg-paper-2`}
          >
            {t.hero.cta}
          </a>
          <a
            href="/courses"
            className={`${btn} border border-white/40 text-white hover:bg-white/10`}
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { t, site } = useLang();
  return (
    <section id="about" className="py-24 md:py-32">
      <div
        className={`${wrap} grid items-center gap-12 md:grid-cols-12 md:gap-16`}
      >
        <div className="md:col-span-7">
          <Label k="about.label">{t.about.label}</Label>
          <h2 data-reveal className="text-4xl leading-[1.1] md:text-5xl">
            <Ed p={["$", "about", "title"]} text={t.about.title} />
          </h2>
          <p data-reveal className="mt-6 max-w-xl text-ink-2">
            <Ed p={["$", "about", "body"]} text={t.about.body} />
          </p>
          <dl className="mt-12 divide-y divide-line border-y border-line">
            {t.about.pillars.map((p, i) => (
              <div
                key={i}
                data-reveal
                className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="font-serif text-2xl"><Ed k={`about.pillars.${i}.t`} text={p.t} /></dt>
                <dd className="text-ink-2"><Ed k={`about.pillars.${i}.d`} text={p.d} /></dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          data-reveal
          className="relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-5"
        >
          <div data-parallax className="absolute inset-x-0 -top-[6%] h-[112%]">
            <Photo
              src={site.images.about}
              alt=""
              sizes="(min-width:768px) 40vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoursesSection() {
  const { t } = useLang();
  return (
    <section id="courses" className="py-24 md:py-32">
      <div className={wrap}>
        <Label k="courses.label">{t.courses.label}</Label>
        <h2
          data-reveal
          className="max-w-2xl text-4xl leading-[1.1] md:text-5xl"
        >
          <Ed k="courses.title" text={t.courses.title} />
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.courses.items.map((c, i) => (
            <article
              key={c.t}
              data-reveal
              className={`group/card flex flex-col ${i === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Photo
                  src={c.image}
                  alt=""
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="transition-transform duration-700 ease-[var(--ease)] group-hover/card:scale-[1.04]"
                />
              </div>
              <p className="mt-5 text-sm text-muted">
                <Ed p={["courses", i, "$", "level"]} text={c.level} /> ·{" "}
                <Ed p={["courses", i, "$", "len"]} text={c.len} />
              </p>
              <h3 className="mt-1 font-serif text-3xl">
                <Ed p={["courses", i, "$", "t"]} text={c.t} />
              </h3>
              <p className="mt-3 flex-1 text-ink-2">
                <Ed p={["courses", i, "$", "d"]} text={c.d} />
              </p>
              <a
                href="/contact"
                className="mt-5 text-green underline-offset-4 hover:underline"
              >
                <Ed k="courses.cta" text={t.courses.cta} /> →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
