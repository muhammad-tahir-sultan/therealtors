"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import type { SiteConfig } from "../../types";
import { Container, Button, SectionHeading, Card } from "../ui";

export function HeroSection({ config }: { config: SiteConfig }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent)]/10" />
      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
              {config.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {config.hero.headline}
            </h1>
            <p className="mt-6 text-lg text-[var(--muted)] sm:text-xl">{config.hero.subheadline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={config.hero.primaryCta.href} size="lg">
                {config.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={config.hero.secondaryCta.href} variant="outline" size="lg">
                {config.hero.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {config.trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--primary)]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl"
            style={{ background: config.branding.heroGradient }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
                <p className="text-5xl font-bold text-white">{config.business.shortName}</p>
                <p className="mt-2 text-white/80">{config.niche} Demo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function ProblemsSection({ config }: { config: SiteConfig }) {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--muted-bg)] py-20">
      <Container>
        <SectionHeading
          badge="The Challenge"
          title="Sound Familiar?"
          description="Most businesses in your industry face these same online challenges."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card>
                <h3 className="font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionsSection({ config }: { config: SiteConfig }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading badge="The Solution" title="Built to Convert Visitors Into Clients" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {config.solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card hover className="h-full">
                <div className="mb-4 h-1 w-12 rounded-full bg-[var(--primary)]" />
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-[var(--muted)]">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServicesPreview({ config }: { config: SiteConfig }) {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--muted-bg)] py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading badge="Services" title="What We Offer" description="Comprehensive solutions tailored to your needs." />
          <Button href="/services" variant="outline">View All</Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.slice(0, 6).map((service, i) => (
            <motion.div key={service.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link href={`/services/${service.slug}`}>
                <Card hover className="h-full">
                  <h3 className="font-semibold text-[var(--foreground)]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">{service.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection({ config }: { config: SiteConfig }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading badge="Reviews" title="Trusted by Our Clients" className="mx-auto text-center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.testimonials.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full">
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-[var(--muted)]">&ldquo;{item.review}&rdquo;</p>
                <div className="mt-6 border-t border-[var(--border)] pt-4">
                  <p className="font-semibold text-[var(--foreground)]">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.detail}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CTASection({ config }: { config: SiteConfig }) {
  return (
    <section className="py-20">
      <Container>
        <div
          className="rounded-3xl px-8 py-16 text-center text-white sm:px-16"
          style={{ background: `linear-gradient(135deg, ${config.branding.primary}, ${config.branding.accent})` }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">{config.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{config.cta.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={config.cta.primaryCta.href} size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
              {config.cta.primaryCta.label}
            </Button>
            <Button href={config.cta.secondaryCta.href} variant="secondary" size="lg">
              {config.cta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PageHero({ title, description, badge }: { title: string; description?: string; badge?: string }) {
  return (
    <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--primary)]/5 to-transparent py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {badge && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">{badge}</p>}
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-lg text-[var(--muted)]">{description}</p>}
        </div>
      </Container>
    </section>
  );
}
