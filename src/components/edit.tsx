"use client";

import { useState, type ElementType } from "react";
import type { Links } from "@/lib/site";
import { useEdit, useLang } from "./lang";
import { Words } from "./parts";

/** Text that the owner edits in place: click it in edit mode, type, click away. Outside edit mode it is plain text. */
export function Ed({
  p,
  k,
  text,
  words,
}: {
  p?: (string | number)[];
  k?: string;
  text: string;
  words?: boolean;
}) {
  const { lang } = useLang();
  const { editing, setPath } = useEdit();
  if (!editing) return words ? <Words text={text} /> : <>{text}</>;
  const Tag: ElementType = "span";
  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      title="Click to edit"
      onClick={(e: React.MouseEvent) => e.preventDefault()} // text inside links or labels must not navigate while editing
      onKeyDown={(e: React.KeyboardEvent<HTMLElement>) =>
        e.key === "Enter" && (e.preventDefault(), e.currentTarget.blur())
      }
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        const v = e.currentTarget.innerText.trim();
        if (v !== text)
          setPath(
            k
              ? ["text", `${lang}.${k}`]
              : p!.map((x) => (x === "$" ? lang : x)),
            v,
          );
      }}
      className="cursor-text rounded-sm outline-2 outline-dashed outline-sun hover:bg-sun/15 focus:bg-sun/20"
    >
      {text}
    </Tag>
  );
}

/** Floating owner toolbar: contact links, images, save, exit. Only renders in edit mode. */
export function EditBar() {
  const { editing } = useEdit();
  const { site } = useLang();
  const { setSite } = useEdit();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  if (!editing) return null;

  const exit = () => {
    sessionStorage.removeItem("adminPw");
    window.location.reload();
  };
  const save = async () => {
    setStatus("Saving…");
    const r = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({
        password: sessionStorage.getItem("adminPw"),
        site,
      }),
    }).catch(() => null);
    const j = await r?.json().catch(() => null);
    setStatus(
      r?.ok ? "Saved. The site is updated." : (j?.error ?? "Save failed"),
    );
  };
  const input = "w-full rounded border border-line bg-white px-2 py-1";

  return (
    <div className="fixed inset-x-0 bottom-0 z-70 border-t border-line bg-white text-sm text-ink shadow-[0_-4px_20px_rgb(0_0_0/0.1)]">
      {open && (
        <div className="mx-auto grid max-h-[50vh] max-w-[1920px] gap-3 overflow-auto p-4 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(site.links) as (keyof Links)[]).map((k) => (
            <label key={k}>
              {k} {k === "email" || k === "phone" ? "" : "(link)"}
              <input
                className={input}
                value={site.links[k]}
                onChange={(e) =>
                  setSite({
                    ...site,
                    links: { ...site.links, [k]: e.target.value },
                  })
                }
              />
            </label>
          ))}
          <p className="text-muted sm:col-span-2 lg:col-span-3">
            Leave a link empty to hide it from the footer.
          </p>
        </div>
      )}
      <div className="mx-auto flex max-w-[1920px] flex-wrap items-center gap-3 px-4 py-3">
        <strong>Edit mode</strong>
        <span className="text-muted max-sm:hidden">
          Click any dashed text to change it, or Change photo on a picture.
        </span>
        <span role="status" className="text-green">
          {status}
        </span>
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-line px-4 py-1.5"
          >
            {open ? "Hide" : "Contact links"}
          </button>
          <button
            onClick={save}
            className="rounded-full bg-green px-4 py-1.5 text-white"
          >
            Save
          </button>
          <button
            onClick={exit}
            className="rounded-full border border-line px-4 py-1.5"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
