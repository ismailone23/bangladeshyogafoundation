import type { Metadata } from "next";
import { Newsreader, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/lang";
import { Footer, Header } from "@/components/chrome";
import { EditBar } from "@/components/edit";
import { getSite } from "@/lib/store";
import { DESCRIPTION, NAME, SITE_URL } from "@/lib/seo";


const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const body = Hind_Siliguri({
  variable: "--font-body",
  subsets: ["latin", "bengali"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: NAME, template: `%s | ${NAME}` },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
};

async function Shell({ children }: { children: React.ReactNode }) {
  const site = await getSite();
  const k = site.links;
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    description: DESCRIPTION,
    alternateName: ["Yoga Foundation Bangladesh", "BYF"],
    knowsAbout: ["Yoga", "Pranayama", "Meditation"],
    areaServed: { "@type": "Country", name: "Bangladesh" },
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    ...(k.email && { email: k.email }),
    ...(k.phone && { telephone: k.phone }),
    sameAs: [k.facebook, k.youtube, k.instagram].filter((u) => u && !/^https:\/\/(www\.)?\w+\.com\/?$/.test(u)),
  };
  return (
    <LangProvider site={site}>
      {/* "<" is escaped so owner-edited values can never close the script tag */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, "\\u003c") }} />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <EditBar />
    </LangProvider>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
