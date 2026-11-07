import { timingSafeEqual } from "node:crypto";

/** Returns an error Response when the owner password is missing or wrong, otherwise null. */
export function denied(password: unknown) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return Response.json({ error: "ADMIN_PASSWORD is not set on the server" }, { status: 503 });
  const given = Buffer.from(String(password ?? ""));
  const want = Buffer.from(expected);
  return given.length === want.length && timingSafeEqual(given, want) ? null : Response.json({ error: "Wrong password" }, { status: 401 });
}
