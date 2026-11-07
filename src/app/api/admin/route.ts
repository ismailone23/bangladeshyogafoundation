import { revalidateTag } from "next/cache";
import { denied } from "@/lib/auth";
import { clean } from "@/lib/site";
import { saveSite } from "@/lib/store";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const no = denied(body?.password);
  if (no) return no;
  if (!body.site) return Response.json({ ok: true }); // login check only
  await saveSite(clean(body.site));
  revalidateTag("site", { expire: 0 }); // every page serves the new content on the next request
  return Response.json({ ok: true });
}
