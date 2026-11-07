"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/content";
import { defaultSite, textsFor, type SiteContent } from "@/lib/site";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});
const SiteCtx = createContext<SiteContent>(defaultSite());

type Path = (string | number)[];
/** Owner edit mode: `site` is the draft, shared by every page, so edits show everywhere at once. */
const EditCtx = createContext<{ editing: boolean; setSite: (s: SiteContent) => void; setPath: (p: Path, v: string) => void }>({ editing: false, setSite: () => {}, setPath: () => {} });

export function LangProvider({
  site: initial,
  children,
}: {
  site: SiteContent;
  children: ReactNode;
}) {
  const [lang, set] = useState<Lang>("en");
  const [site, setSite] = useState(initial);
  const [editing, setEditing] = useState(false);
  const setPath = useCallback((p: Path, v: string) => {
    setSite((s) => {
      const n = structuredClone(s);
      let o = n as unknown as Record<string | number, unknown>;
      p.slice(0, -1).forEach((k) => (o = o[k] as Record<string | number, unknown>));
      o[p[p.length - 1]] = v;
      return n;
    });
  }, []);
  const setLang = useCallback((l: Lang) => {
    set(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const s = localStorage.getItem("lang");
      // restore after hydration, reading storage during render would mismatch the server HTML
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (s === "bn" || s === "en") setLang(s);
      if (sessionStorage.getItem("adminPw")) setEditing(true);
    } catch {}
  }, [setLang]);

  return (
    <SiteCtx.Provider value={site}>
      <LangCtx.Provider value={{ lang, setLang }}>
        <EditCtx.Provider value={{ editing, setSite, setPath }}>{children}</EditCtx.Provider>
      </LangCtx.Provider>
    </SiteCtx.Provider>
  );
}

export function useEdit() {
  return useContext(EditCtx);
}

export function useLang() {
  const { lang, setLang } = useContext(LangCtx);
  const site = useContext(SiteCtx);
  const t = useMemo(() => textsFor(site, lang), [site, lang]);
  return { lang, setLang, t, site };
}
