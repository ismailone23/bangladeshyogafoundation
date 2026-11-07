"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { wrap } from "./parts";

export default function Login() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const go = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = await fetch("/api/admin", { method: "POST", body: JSON.stringify({ password: pw }) }).catch(() => null);
    if (!r?.ok) return setErr((await r?.json().catch(() => null))?.error ?? "Login failed");
    sessionStorage.setItem("adminPw", pw);
    router.push("/");
  };
  return (
    <main className={`${wrap} py-40`}>
      <form onSubmit={go} className="max-w-sm space-y-4">
        <h1 className="text-3xl">Owner login</h1>
        <input type="password" autoFocus aria-label="Password" value={pw} onChange={(e) => setPw(e.target.value)} className="w-full rounded border border-line bg-white px-3 py-2" />
        <button className="rounded-full bg-green px-6 py-2 text-white">Edit the website</button>
        {err && <p role="alert" className="text-red-700">{err}</p>}
      </form>
    </main>
  );
}
