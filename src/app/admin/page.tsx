import type { Metadata } from "next";
import Login from "@/components/edit-login";

export const metadata: Metadata = { title: "Admin", robots: { index: false } };

export default function Admin() {
  return <Login />;
}
