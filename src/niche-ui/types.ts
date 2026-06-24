export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  benefits?: string[];
  faqs?: { question: string; answer: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  detail: string;
  rating: number;
  review: string;
}

export interface SolutionItem {
  title: string;
  description: string;
}

export interface SiteConfig {
  niche: string;
  demoBadge: string;
  business: {
    name: string;
    shortName: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    hours?: string;
  };
  branding: {
    primary: string;
    accent: string;
    heroGradient: string;
  };
  nav: NavLink[];
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  trust: string[];
  problems: { title: string; description: string }[];
  solutions: SolutionItem[];
  services: ServiceItem[];
  team: TeamMember[];
  testimonials: Testimonial[];
  about: {
    mission: string;
    vision: string;
    story: string;
    values: { title: string; description: string }[];
    whyChooseUs: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  contact: {
    headline: string;
    subheadline: string;
    formFields: string[];
  };
  seo: {
    title: string;
    description: string;
  };
  extraPage?: {
    slug: string;
    navLabel: string;
    title: string;
    sections: { title: string; content: string | string[] }[];
  };
}
