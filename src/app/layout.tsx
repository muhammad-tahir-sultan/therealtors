import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SiteShell } from "@/niche-ui";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={
        {
          "--primary": siteConfig.branding.primary,
          "--accent": siteConfig.branding.accent,
        } as React.CSSProperties
      }
    >
      <body className="min-h-screen antialiased">
        <SiteShell config={siteConfig}>{children}</SiteShell>
      </body>
    </html>
  );
}
