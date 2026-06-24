import type { SiteConfig } from "../../types";
import { Container, Card } from "../ui";
import { PageHero, CTASection } from "../sections";

export function AboutPageContent({ config }: { config: SiteConfig }) {
  return (
    <>
      <PageHero badge="About" title={`About ${config.business.name}`} description={config.business.tagline} />
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <h2 className="text-xl font-bold text-[var(--foreground)]">Our Mission</h2>
              <p className="mt-4 text-[var(--muted)]">{config.about.mission}</p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-[var(--foreground)]">Our Vision</h2>
              <p className="mt-4 text-[var(--muted)]">{config.about.vision}</p>
            </Card>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Our Story</h2>
            <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">{config.about.story}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.about.values.map((v) => (
              <Card key={v.title} className="text-center">
                <h3 className="font-semibold text-[var(--foreground)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{v.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CTASection config={config} />
    </>
  );
}

export function TeamPageContent({ config }: { config: SiteConfig }) {
  return (
    <>
      <PageHero badge="Team" title="Meet Our Team" description="Experienced professionals dedicated to your success." />
      <section className="py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {config.team.map((member) => (
              <Card key={member.name} hover>
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-white"
                  style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))` }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{member.name}</h3>
                <p className="text-sm font-medium text-[var(--primary)]">{member.role}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{member.credentials}</p>
                <p className="mt-4 text-sm text-[var(--muted)]">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CTASection config={config} />
    </>
  );
}

export function ServicesPageContent({ config }: { config: SiteConfig }) {
  return (
    <>
      <PageHero badge="Services" title="Our Services" description="Expert solutions designed for your needs." />
      <section className="py-20">
        <Container>
          <div className="space-y-8">
            {config.services.map((service, i) => (
              <Card key={service.slug} id={service.slug}>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-sm font-bold text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[var(--foreground)]">{service.title}</h2>
                    <p className="mt-2 text-[var(--muted)]">{service.description}</p>
                    {service.benefits && (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CTASection config={config} />
    </>
  );
}

export function TestimonialsPageContent({ config }: { config: SiteConfig }) {
  return (
    <>
      <PageHero badge="Reviews" title="Client Testimonials" description="See what our clients say about us." />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.testimonials.map((item) => (
              <Card key={item.name}>
                <p className="text-[var(--muted)]">&ldquo;{item.review}&rdquo;</p>
                <p className="mt-4 font-semibold text-[var(--foreground)]">{item.name}</p>
                <p className="text-sm text-[var(--muted)]">{item.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CTASection config={config} />
    </>
  );
}

export function ExtraPageContent({ config }: { config: SiteConfig }) {
  if (!config.extraPage) return null;
  const page = config.extraPage;

  return (
    <>
      <PageHero badge={page.navLabel} title={page.title} />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {page.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[var(--foreground)]">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="mt-4 space-y-2">
                    {section.content.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[var(--muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-[var(--muted)]">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
