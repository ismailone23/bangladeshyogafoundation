import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";
import { cacheTag } from "next/cache";
import { clean, type SiteContent } from "./site";

// With DATABASE_URL (a Neon/Postgres database) content and photos live there, so it works on serverless hosts.
// Without it, content goes to src/data/site.json and photos to public/uploads, which needs a writable disk (dev or self-hosted).
const FILE = path.join(process.cwd(), "src/data/site.json");
const sql = () => neon(process.env.DATABASE_URL!);
export const hasDb = () => !!process.env.DATABASE_URL;

async function ensure() {
  const q = sql();
  await q`create table if not exists kv (k text primary key, v jsonb not null)`;
  await q`create table if not exists images (id text primary key, mime text not null, data text not null)`;
  return q;
}

export async function loadSite(): Promise<SiteContent> {
  if (hasDb()) {
    const rows = await (await ensure())`select v from kv where k = 'site'`;
    return clean(rows[0]?.v);
  }
  return clean(JSON.parse(await readFile(FILE, "utf8").catch(() => "{}")));
}

export async function saveSite(site: SiteContent) {
  if (hasDb()) {
    await (await ensure())`insert into kv (k, v) values ('site', ${JSON.stringify(site)}::jsonb) on conflict (k) do update set v = excluded.v`;
  } else {
    await writeFile(FILE, JSON.stringify(site, null, 2) + "\n");
  }
}

/** Cached until a save calls revalidateTag("site"), so pages stay static but update at once, with no rebuild. */
export async function getSite() {
  "use cache";
  cacheTag("site");
  return loadSite();
}

export async function saveImage(id: string, mime: string, bytes: Buffer) {
  await (await ensure())`insert into images (id, mime, data) values (${id}, ${mime}, ${bytes.toString("base64")})`;
}

export async function readImage(id: string) {
  const rows =
    await (await ensure())`select mime, data from images where id = ${id}`;
  return rows[0]
    ? {
        mime: rows[0].mime as string,
        bytes: Buffer.from(rows[0].data as string, "base64"),
      }
    : null;
}
