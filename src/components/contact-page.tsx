"use client";

import { useRef } from "react";
import { useLang } from "./lang";
import { Ed } from "./edit";
import { Label, btn, useReveal, wrap } from "./parts";

const field =
  "mt-2 w-full rounded-xl border border-line bg-paper-2 px-4 py-3 text-base outline-none transition-colors focus:border-green focus:bg-white";

export default function ContactPage() {
  const { t, site } = useLang();
  const EMAIL = site.links.email;
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const c = t.contact;
  const options = [
    ...t.courses.items.map((x) => x.t),
    ...t.sessions.tabs.map((x) => x.k),
  ];

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL) return;
    const f = new FormData(e.currentTarget);
    const text =
      `${c.msg} ${f.get("interest")}\n$<Ed k="contact.name" text={c.name} />: ${f.get("name")}\n$<Ed k="contact.phone" text={c.phone} />: ${f.get("phone")}\n${f.get("message") ?? ""}`.trim();
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${c.subject}: ${f.get("interest")}`)}&body=${encodeURIComponent(text)}`;
  };

  return (
    <main ref={root} className="bg-paper-2 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className={`${wrap} grid gap-14 md:grid-cols-12 md:gap-16`}>
        <div className="md:col-span-5">
          <Label k="contact.title">{c.title}</Label>
          <h1 data-reveal className="text-5xl leading-[1.08] md:text-6xl">
            <Ed k="contact.title" text={c.title} />
          </h1>
          <p data-reveal className="mt-6 max-w-md text-lg text-ink-2">
            <Ed k="contact.intro" text={c.intro} />
          </p>
          <div data-reveal className="mt-12 rounded-2xl border-l-4 border-green bg-white p-6">
            <h2 className="font-serif text-2xl"><Ed k="contact.where" text={c.where} /></h2>
            <p className="mt-2 text-ink-2"><Ed k="contact.whereBody" text={c.whereBody} /></p>
          </div>
        </div>
        <form data-reveal onSubmit={send} className="rounded-3xl bg-white p-6 md:col-span-7 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <Ed k="contact.name" text={c.name} />
              <input
                name="name"
                required
                autoComplete="name"
                className={field}
              />
            </label>
            <label className="block">
              <Ed k="contact.phone" text={c.phone} />
              <input
                name="phone"
                required
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                className={field}
              />
            </label>
          </div>
          <label className="mt-6 block">
            <Ed k="contact.interest" text={c.interest} />
            <select name="interest" className={field}>
              {options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="mt-6 block">
            <Ed k="contact.message" text={c.message} />
            <textarea name="message" rows={4} className={field} />
          </label>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={!EMAIL}
              className={`${btn} bg-green text-white hover:bg-ink disabled:opacity-50`}
            >
              {c.send}
            </button>
            <p className="text-sm text-muted"><Ed k="contact.note" text={c.note} /></p>
          </div>
        </form>
      </div>
    </main>
  );
}
