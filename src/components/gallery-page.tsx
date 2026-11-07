"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "./lang";
import { Ed } from "./edit";
import { Label, useReveal, wrap } from "./parts";

type Item = { src: string; w?: number; h?: number };

function Pic({
  it,
  alt,
  sizes,
  className,
  eager,
}: {
  it: Item;
  alt: string;
  sizes: string;
  className: string;
  eager?: boolean;
}) {
  // Owner-supplied URLs have unknown dimensions, so those use a plain <img>; bundled photos keep next/image
  if (it.w && it.h && !it.src.startsWith("http"))
    return (
      <Image
        src={it.src}
        alt={alt}
        width={it.w}
        height={it.h}
        sizes={sizes}
        loading={eager ? "eager" : undefined}
        className={className}
      />
    );
  /* eslint-disable @next/next/no-img-element -- external owner-supplied URLs have unknown dimensions */
  return (
    <img
      src={it.src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={className}
    />
  );
  /* eslint-enable @next/next/no-img-element */
}

export default function GalleryPage() {
  const { t, site } = useLang();
  const PHOTOS = site.gallery;
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  useReveal(root);
  const g = t.gallery;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <main ref={root} className="bg-paper-2 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className={wrap}>
        <Label k="gallery.title">{g.title}</Label>
        <h1
          data-reveal
          className="max-w-3xl text-5xl leading-[1.08] md:text-6xl"
        >
          <Ed k="gallery.intro" text={g.intro} />
        </h1>
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PHOTOS.map((it, i) => (
            <button
              key={`${it.src}-${i}`}
              data-reveal
              onClick={() => setOpen(i)}
              className="group/ph mb-4 block w-full overflow-hidden rounded-xl text-left"
              aria-label={g.captions[i]}
            >
              <Pic
                it={it}
                alt={g.captions[i]}
                eager={i < 4}
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-700 ease-(--ease) group-hover/ph:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open !== null && PHOTOS[open] && (
          <motion.div
            role="dialog"
            aria-modal
            aria-label={g.captions[open]}
            className="fixed inset-0 z-60 grid place-items-center bg-ink/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              initial={{ scale: 0.97, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Pic
                it={PHOTOS[open]}
                alt={g.captions[open]}
                sizes="100vw"
                className="max-h-[80vh] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-3 text-center text-white/80">
                {g.captions[open]}
              </figcaption>
            </motion.figure>
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-ink"
            >
              {g.close}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
