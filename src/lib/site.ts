import { content, type Lang } from "./content";

/** Everything the owner can edit. Stored in src/data/site.json, so no server is needed. */
export type CourseText = {
  t: string;
  level: string;
  len: string;
  d: string;
  learn: string[];
  who: string;
  when: string;
};
export type LangText = {
  hero: { title: string; sub: string };
  about: { title: string; body: string };
};
export type Links = {
  email: string;
  phone: string;
  whatsapp: string;
  facebook: string;
  youtube: string;
  instagram: string;
};
export type SiteContent = {
  images: { hero: string; about: string };
  /** Free-text edits keyed "<lang>.<path into content>", and photo swaps keyed by the original src. */
  text: Record<string, string>;
  img: Record<string, string>;
  links: Links;
  en: LangText;
  bn: LangText;
  courses: { image: string; en: CourseText; bn: CourseText }[];
  gallery: { src: string; w?: number; h?: number; en: string; bn: string }[];
};

const COURSE_IMAGES = ["/img/park.jpg", "/img/forest.jpg", "/img/med.jpg"];
const GALLERY: [string, number, number][] = [
  ["/img/sound-yoga.png", 1080, 1350],
  ["/img/hero.jpg", 2000, 1125],
  ["/img/park.jpg", 2000, 1125],
  ["/img/shore.jpg", 2000, 1333],
  ["/img/med.jpg", 2000, 2325],
  ["/img/group.jpg", 2000, 3000],
  ["/img/sil.jpg", 2000, 1261],
  ["/img/forest.jpg", 2000, 2500],
];

// TODO(client): demo links, set the real ones in /admin (empty ones are hidden from the footer)
const DEFAULT_LINKS: Links = {
  email: "hello@example.com",
  phone: "",
  whatsapp: "https://wa.me/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
};

export function defaultSite(): SiteContent {
  const text = (l: Lang): LangText => ({
    hero: { title: content[l].hero.title, sub: content[l].hero.sub },
    about: { title: content[l].about.title, body: content[l].about.body },
  });
  const course = (l: Lang, i: number): CourseText => ({
    ...content[l].courses.items[i],
    ...content[l].coursesPage.items[i],
  });
  return {
    images: { hero: "/img/hero.jpg", about: "/img/shore.jpg" },
    text: {},
    img: {},
    links: DEFAULT_LINKS,
    en: text("en"),
    bn: text("bn"),
    courses: COURSE_IMAGES.map((image, i) => ({
      image,
      en: course("en", i),
      bn: course("bn", i),
    })),
    gallery: GALLERY.map(([src, w, h], i) => ({
      src,
      w,
      h,
      en: content.en.gallery.captions[i],
      bn: content.bn.gallery.captions[i],
    })),
  };
}

const rec = (v: unknown): Record<string, unknown> =>
  v && typeof v === "object" ? (v as Record<string, unknown>) : {};
const str = (v: unknown, fb: string, max = 2000) =>
  typeof v === "string" ? v.slice(0, max) : fb;
// Trust boundary: only http(s) URLs or site-relative paths, never javascript: or data:
const url = (v: unknown, fb: string) => {
  const s = typeof v === "string" ? v.trim() : "";
  return /^(https?:\/\/[^\s]+|\/(?!\/)[^\s]*)$/.test(s) ? s.slice(0, 1000) : fb;
};
const email = (v: unknown, fb: string) =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
    ? v.trim().slice(0, 200)
    : fb;
const phone = (v: unknown, fb: string) =>
  typeof v === "string" && /^[+0-9 ()-]{0,30}$/.test(v.trim()) ? v.trim() : fb;

/** Turn anything (the JSON file, an imported file, the editor draft) into a valid SiteContent. */
export function clean(input: unknown): SiteContent {
  const d = defaultSite();
  const i = rec(input);
  const text = (l: Lang): LangText => {
    const x = rec(i[l]);
    const h = rec(x.hero);
    const a = rec(x.about);
    return {
      hero: {
        title: str(h.title, d[l].hero.title, 200),
        sub: str(h.sub, d[l].hero.sub, 500),
      },
      about: {
        title: str(a.title, d[l].about.title, 300),
        body: str(a.body, d[l].about.body, 1500),
      },
    };
  };
  const ct = (v: unknown): CourseText => {
    const x = rec(v);
    return {
      t: str(x.t, "", 120),
      level: str(x.level, "", 60),
      len: str(x.len, "", 60),
      d: str(x.d, "", 600),
      learn: Array.isArray(x.learn)
        ? x.learn
            .slice(0, 8)
            .map((s) => str(s, "", 200))
            .filter(Boolean)
        : [],
      who: str(x.who, "", 300),
      when: str(x.when, "", 200),
    };
  };
  const courses = Array.isArray(i.courses)
    ? i.courses
        .slice(0, 12)
        .map((c) => ({
          image: url(rec(c).image, ""),
          en: ct(rec(c).en),
          bn: ct(rec(c).bn),
        }))
        .filter((c) => c.en.t || c.bn.t)
    : [];
  const gallery = Array.isArray(i.gallery)
    ? i.gallery
        .slice(0, 40)
        .map((g) => {
          const r = rec(g);
          const w = Number(r.w),
            h = Number(r.h);
          return {
            src: url(r.src, ""),
            ...(w > 0 && h > 0 ? { w, h } : {}),
            en: str(r.en, "", 200),
            bn: str(r.bn, "", 200),
          };
        })
        .filter((g) => g.src)
    : [];
  const im = rec(i.images);
  const lk = rec(i.links);
  return {
    images: {
      hero: url(im.hero, d.images.hero),
      about: url(im.about, d.images.about),
    },
    text: Object.fromEntries(
      Object.entries(rec(i.text))
        .slice(0, 500)
        .filter(([k, v]) => /^(en|bn)\.[\w.]+$/.test(k) && typeof v === "string")
        .map(([k, v]) => [k, (v as string).slice(0, 3000)]),
    ),
    img: Object.fromEntries(
      Object.entries(rec(i.img))
        .slice(0, 100)
        .map(([k, v]) => [k.slice(0, 1000), url(v, "")])
        .filter(([, v]) => v),
    ),
    links: {
      email: "email" in lk ? email(lk.email, "") : d.links.email,
      phone: phone(lk.phone, d.links.phone),
      whatsapp: "whatsapp" in lk ? url(lk.whatsapp, "") : d.links.whatsapp,
      facebook: "facebook" in lk ? url(lk.facebook, "") : d.links.facebook,
      youtube: "youtube" in lk ? url(lk.youtube, "") : d.links.youtube,
      instagram: "instagram" in lk ? url(lk.instagram, "") : d.links.instagram,
    },
    en: text("en"),
    bn: text("bn"),
    courses: courses.length ? courses : d.courses,
    gallery: "gallery" in i ? gallery : d.gallery,
  };
}

/** The page texts in one language, with the owner's edits applied. A blank Bangla field falls back to English. */
export function textsFor(site: SiteContent, lang: Lang) {
  const base = content[lang];
  const pick = (a: string, b: string) => a || b;
  const s = site[lang];
  const e = site.en;
  const out = {
    ...base,
    hero: {
      ...base.hero,
      title: pick(s.hero.title, e.hero.title),
      sub: pick(s.hero.sub, e.hero.sub),
    },
    about: {
      ...base.about,
      title: pick(s.about.title, e.about.title),
      body: pick(s.about.body, e.about.body),
    },
    courses: {
      ...base.courses,
      items: site.courses.map((c) => ({
        t: pick(c[lang].t, c.en.t),
        level: pick(c[lang].level, c.en.level),
        len: pick(c[lang].len, c.en.len),
        d: pick(c[lang].d, c.en.d),
        image: c.image,
      })),
    },
    coursesPage: {
      ...base.coursesPage,
      items: site.courses.map((c) => ({
        learn: c[lang].learn.length ? c[lang].learn : c.en.learn,
        who: pick(c[lang].who, c.en.who),
        when: pick(c[lang].when, c.en.when),
      })),
    },
    gallery: {
      ...base.gallery,
      captions: site.gallery.map((g) => pick(g[lang], g.en)),
    },
  };
  const own = Object.entries(site.text).filter(([k]) => k.startsWith(`${lang}.`));
  if (!own.length) return out;
  // clone first: `out` shares nested arrays with the module-level content
  const copy = structuredClone(out);
  for (const [k, v] of own) {
    const keys = k.slice(lang.length + 1).split(".");
    let o: unknown = copy;
    for (const key of keys.slice(0, -1)) o = (o as Record<string, unknown> | undefined)?.[key];
    const last = keys[keys.length - 1];
    // only replace an existing string, so an owner edit can never change the page structure
    if (o && typeof (o as Record<string, unknown>)[last] === "string") (o as Record<string, unknown>)[last] = v;
  }
  return copy;
}
