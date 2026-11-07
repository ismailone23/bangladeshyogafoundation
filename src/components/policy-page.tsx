"use client";

import { useRef } from "react";
import { Ed } from "./edit";
import { useLang } from "./lang";
import { useReveal, wrap } from "./parts";

export default function PolicyPage({ k }: { k: "privacy" | "refund" }) {
  const { t } = useLang();
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const d = t[k];
  return (
    <main ref={root} className="bg-paper-2 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className={wrap}>
      <div className="max-w-3xl">
        <h1 data-reveal className="text-5xl leading-[1.08] md:text-6xl"><Ed k={`${k}.title`} text={d.title} /></h1>
        <p data-reveal className="mt-4 text-muted"><Ed k={`${k}.updated`} text={d.updated} /></p>
        <div className="mt-12 space-y-10">
          {d.sections.map((s, i) => (
            <section key={i} data-reveal>
              <h2 className="font-serif text-2xl md:text-3xl"><Ed k={`${k}.sections.${i}.h`} text={s.h} /></h2>
              <p className="mt-3 text-ink-2"><Ed k={`${k}.sections.${i}.p`} text={s.p} /></p>
            </section>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}
