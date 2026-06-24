import type { SiteConfig } from "./types";
import { DemoBanner, Header, Footer } from "./components/layout";
import {
  HeroSection,
  ProblemsSection,
  SolutionsSection,
  ServicesPreview,
  TestimonialsSection,
  CTASection,
} from "./components/sections";

export function HomePage({ config }: { config: SiteConfig }) {
  return (
    <>
      <HeroSection config={config} />
      <ProblemsSection config={config} />
      <SolutionsSection config={config} />
      <ServicesPreview config={config} />
      <TestimonialsSection config={config} />
      <CTASection config={config} />
    </>
  );
}

export function SiteShell({
  config,
  children,
}: {
  config: SiteConfig;
  children: React.ReactNode;
}) {
  return (
    <>
      <DemoBanner config={config} />
      <Header config={config} />
      <main>{children}</main>
      <Footer config={config} />
    </>
  );
}
