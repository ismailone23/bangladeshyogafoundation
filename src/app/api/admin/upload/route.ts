import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { denied } from "@/lib/auth";
import { hasDb, saveImage } from "@/lib/store";

const TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const no = denied(form?.get("password"));
  if (no) return no;
  const file = form?.get("file");
  if (!(file instanceof File) || !TYPES[file.type])
    return Response.json(
      { error: "Upload a JPG, PNG or WebP image" },
      { status: 400 },
    );
  if (file.size > 5_000_000)
    return Response.json({ error: "Image is over 5 MB" }, { status: 400 });
  const bytes = Buffer.from(await file.arrayBuffer());
  const id = randomUUID();
  if (hasDb()) {
    await saveImage(id, file.type, bytes);
    return Response.json({ path: `/api/img/${id}` });
  }
  const name = `${id}.${TYPES[file.type]}`;
  await mkdir(path.join(process.cwd(), "public/uploads"), { recursive: true });
  await writeFile(path.join(process.cwd(), "public/uploads", name), bytes);
  return Response.json({ path: `/uploads/${name}` });
}
