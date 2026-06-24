"use client";

import { useState } from "react";
import type { SiteConfig } from "../../types";
import { Container, Button, Card } from "../ui";
import { PageHero } from "../sections";
import { Input } from "../forms/ContactForm";

export function ContactPageContent({ config }: { config: SiteConfig }) {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero title={config.contact.headline} description={config.contact.subheadline} badge="Contact" />
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <Card className="lg:col-span-3">
              {sent ? (
                <div className="py-12 text-center">
                  <p className="text-xl font-semibold text-[var(--foreground)]">Message Sent!</p>
                  <p className="mt-2 text-[var(--muted)]">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Name" name="name" required />
                    <Input label="Email" name="email" type="email" required />
                  </div>
                  <Input label="Phone" name="phone" type="tel" required />
                  <Input label="Message" name="message" required />
                  <Button type="submit">{config.hero.primaryCta.label}</Button>
                </form>
              )}
            </Card>
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <h3 className="font-semibold text-[var(--foreground)]">Visit Us</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{config.business.address}</p>
              </Card>
              <Card>
                <h3 className="font-semibold text-[var(--foreground)]">Call Us</h3>
                <a href={`tel:${config.business.phone.replace(/\D/g, "")}`} className="mt-3 block text-lg font-semibold text-[var(--primary)]">
                  {config.business.phone}
                </a>
              </Card>
              <Card>
                <h3 className="font-semibold text-[var(--foreground)]">Email</h3>
                <a href={`mailto:${config.business.email}`} className="mt-3 block text-sm text-[var(--muted)] hover:text-[var(--primary)]">
                  {config.business.email}
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
