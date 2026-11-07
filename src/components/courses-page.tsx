"use client";

import { useRef } from "react";
import { useLang } from "./lang";
import { Ed } from "./edit";
import { Label, Photo, btn, useReveal, wrap } from "./parts";

export default function CoursesPage() {
  const { t } = useLang();
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const d = t.coursesPage;

  return (
    <main ref={root} className="bg-paper-2 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className={wrap}>
        <Label k="coursesPage.title">{d.title}</Label>
        <h1
          data-reveal
          className="max-w-3xl text-5xl leading-[1.08] md:text-6xl"
        >
          <Ed k="coursesPage.title" text={d.title} />
        </h1>
        <p data-reveal className="mt-6 max-w-xl text-lg text-ink-2">
          <Ed k="coursesPage.intro" text={d.intro} />
        </p>

        <div className="mt-20 space-y-24 md:space-y-32">
          {t.courses.items.map((c, i) => (
            <article
              key={c.t}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div
                data-reveal
                className="relative aspect-4/3 overflow-hidden rounded-2xl"
              >
                <Photo
                  eager={i === 0}
                  src={c.image}
                  alt=""
                  sizes="(min-width:768px) 50vw, 100vw"
                />
              </div>
              <div>
                <p data-reveal className="text-sm text-muted">
                  <Ed p={["courses", i, "$", "level"]} text={c.level} /> · <Ed p={["courses", i, "$", "len"]} text={c.len} />
                </p>
                <h2
                  data-reveal
                  className="mt-1 text-4xl leading-tight md:text-5xl"
                >
                  <Ed p={["courses", i, "$", "t"]} text={c.t} />
                </h2>
                <p data-reveal className="mt-4 text-ink-2">
                  <Ed p={["courses", i, "$", "d"]} text={c.d} />
                </p>
                <dl className="mt-8 divide-y divide-line border-y border-line">
                  <div
                    data-reveal
                    className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
                  >
                    <dt className="text-muted"><Ed k="coursesPage.learn" text={d.learn} /></dt>
                    <dd>
                      <ul className="space-y-1">
                        {d.items[i].learn.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div
                    data-reveal
                    className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
                  >
                    <dt className="text-muted"><Ed k="coursesPage.who" text={d.who} /></dt>
                    <dd><Ed p={["courses", i, "$", "who"]} text={d.items[i].who} /></dd>
                  </div>
                  <div
                    data-reveal
                    className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
                  >
                    <dt className="text-muted"><Ed k="coursesPage.when" text={d.when} /></dt>
                    <dd><Ed p={["courses", i, "$", "when"]} text={d.items[i].when} /></dd>
                  </div>
                </dl>
                <a
                  data-reveal
                  href="/contact"
                  className={`${btn} mt-8 bg-green text-white hover:bg-ink`}
                >
                  <Ed k="coursesPage.cta" text={d.cta} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
