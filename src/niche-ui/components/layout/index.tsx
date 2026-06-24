"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import type { SiteConfig } from "../../types";
import { cn } from "../../lib/utils";
import { Container, Button } from "../ui";

export function Header({ config }: { config: SiteConfig }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${config.branding.primary}, ${config.branding.accent})` }}
            >
              {config.business.shortName.slice(0, 2).toUpperCase()}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[var(--foreground)]">{config.business.name}</p>
              <p className="text-xs text-[var(--muted)]">{config.business.tagline}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {config.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[var(--primary)] bg-[var(--primary)]/10"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${config.business.phone.replace(/\D/g, "")}`}
              className="hidden items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] md:flex"
            >
              <Phone className="h-4 w-4 text-[var(--primary)]" />
              {config.business.phone}
            </a>
            <Button href={config.hero.primaryCta.href} size="sm" className="hidden sm:inline-flex">
              {config.hero.primaryCta.label}
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[var(--border)] py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {config.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    pathname === link.href ? "bg-[var(--primary)]/10 text-[var(--primary)]" : "text-[var(--muted)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={config.hero.primaryCta.href} className="mt-3 w-full">
                {config.hero.primaryCta.label}
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

export function Footer({ config }: { config: SiteConfig }) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted-bg)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-bold text-[var(--foreground)]">{config.business.name}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{config.business.tagline}</p>
            <p className="mt-4 text-sm text-[var(--muted)]">{config.business.address}</p>
            <p className="text-sm text-[var(--muted)]">{config.business.email}</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--foreground)]">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {config.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--muted)] hover:text-[var(--primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[var(--foreground)]">Contact</p>
            <p className="mt-4 text-sm text-[var(--muted)]">{config.business.phone}</p>
            {config.business.hours && (
              <p className="mt-2 text-sm text-[var(--muted)]">{config.business.hours}</p>
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {config.business.name}. All rights reserved.</p>
          <p className="text-xs">{config.demoBadge}</p>
        </div>
      </Container>
    </footer>
  );
}

export function DemoBanner({ config }: { config: SiteConfig }) {
  return (
    <div className="bg-[var(--foreground)] px-4 py-2 text-center text-xs text-white">
      {config.demoBadge} · Built by{" "}
      <Link href="https://digitalsolutions.com" className="underline underline-offset-2">
        Digital Solutions
      </Link>
    </div>
  );
}
