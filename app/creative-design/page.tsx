"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Globe,
  LayoutTemplate,
  Megaphone,
  MonitorSmartphone,
  Palette,
  PenTool,
  Sparkles,
  CheckCircle2,
  Layers3,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const services = [
  {
    title: "Brand Identity Design",
    description:
      "We develop logos, color systems, typography, and visual assets that build a strong, consistent, and memorable brand presence.",
    icon: Palette,
  },
  {
    title: "Marketing & Campaign Design",
    description:
      "We design brochures, flyers, banners, promotional creatives, and campaign materials that communicate clearly and professionally.",
    icon: Megaphone,
  },
  {
    title: "Website & UI Design",
    description:
      "We create responsive website layouts and digital interfaces that improve presentation, usability, and online credibility.",
    icon: Globe,
  },
  {
    title: "Motion Graphics",
    description:
      "We produce animated visual content for promotions, presentations, event screens, and digital storytelling.",
    icon: Sparkles,
  },
  {
    title: "3D Design & Visualization",
    description:
      "We create realistic 3D concepts and visualizations for products, events, and presentations that add depth and impact.",
    icon: Boxes,
  },
  {
    title: "Print & Layout Design",
    description:
      "We prepare polished layouts for company profiles, catalogues, brochures, invitations, and branded communication materials.",
    icon: LayoutTemplate,
  },
];

const creativeCapabilities = [
  "Logo design and visual identity systems",
  "Campaign visuals for print and digital media",
  "Company profiles, brochures, and pitch materials",
  "Website page design and landing page concepts",
  "Social media design kits and branded templates",
  "Event visual communication assets",
  "Motion-based promotional content",
  "3D concepts for products and presentations",
];

const highlights = [
  {
    title: "Brand-Focused Thinking",
    text: "Every design direction is aligned with your communication goals, audience, and overall brand identity.",
    icon: PenTool,
  },
  {
    title: "Premium Presentation",
    text: "We create polished visual outputs that improve how businesses, institutions, and events are perceived.",
    icon: BadgeCheck,
  },
  {
    title: "Digital & Print Ready",
    text: "Our final deliverables are prepared professionally for campaigns, websites, presentations, and production.",
    icon: MonitorSmartphone,
  },
  {
    title: "Consistent Visual Systems",
    text: "We help ensure consistency across touchpoints so your brand appears clear, modern, and trustworthy.",
    icon: Layers3,
  },
];

const workflow = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business, objectives, audience, and the type of creative assets required.",
  },
  {
    step: "02",
    title: "Creative Direction",
    description:
      "We define the visual approach, layout structure, messaging direction, and design tone for the project.",
  },
  {
    step: "03",
    title: "Design Development",
    description:
      "We create and refine the visual materials while maintaining quality, clarity, and brand alignment.",
  },
  {
    step: "04",
    title: "Final Delivery",
    description:
      "We prepare the final files for print, digital publishing, presentations, campaigns, or platform use.",
  },
];

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-elive-accent)]">
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-3xl font-black leading-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#143066]"
        }`}
      >
        {title}
      </h2>

      <div
        className={`mt-4 h-1.5 w-24 rounded-full bg-[var(--color-elive-accent)] ${
          centered ? "mx-auto" : ""
        }`}
      />

      {description ? (
        <p
          className={`mt-5 text-base leading-8 md:text-[17px] ${
            light ? "text-white/90" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}

export default function CreativeDesignPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#143066] shadow-[0_18px_45px_rgba(15,35,76,0.12)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="Creative design services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f49]/92 via-[#143066]/82 to-[#143066]/68" />
          </div>

          <div className="relative px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-elive-accent)]"
              >
                Creative Design
              </motion.p>
<motion.h1
  variants={fadeUp}
  className="mt-5 text-4xl font-black leading-tight md:text-5xl lg:text-[60px] lg:leading-[1.08]"
>
  <span className="block text-white">
    Design Solutions That Strengthen Brands
  </span>
  <span className="block text-[var(--color-elive-accent)]">
    and Visual Communication
  </span>
</motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg"
              >
                We create brand identities, marketing materials, website
                visuals, motion graphics, and design systems that help
                businesses, institutions, and events present themselves with
                clarity, consistency, and impact.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
<motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
  <Link
    href="/contact"
    className="group inline-flex items-center justify-center rounded-full bg-[var(--color-elive-accent)] px-8 py-3.5 text-sm font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)]"
  >
    Request Cards & Tickets
    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
  </Link>

  <Link
    href="#event-features"
    className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 py-3.5 text-sm font-bold !text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15"
  >
    View Features
  </Link>
</motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr,1.05fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Overview"
              title="Professional Creative Support Across Print, Digital, and Brand Touchpoints"
              description="Our creative design team helps transform ideas into refined visual assets that support communication, promotion, and brand growth."
            />
          </Reveal>

          <Reveal>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,35,76,0.08)] md:p-10">
              <h3 className="text-2xl font-black leading-tight text-[#143066] md:text-3xl">
                Design that looks strong and works strategically
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We combine visual creativity with structure, consistency, and
                business focus to produce design outputs that are attractive,
                usable, and aligned with your goals.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Brand identity and visual direction",
                  "Marketing and campaign design support",
                  "Digital and print-ready creative execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Services"
              title="Creative Services Designed for Modern Brands"
              description="A refined set of design services tailored for business communication, promotion, and brand presentation."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ y: -6 }}
                  className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_12px_30px_rgba(15,35,76,0.06)] transition-all duration-300 hover:shadow-[0_18px_36px_rgba(15,35,76,0.1)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/10 p-3 text-[#143066] transition-all duration-300 group-hover:bg-[#143066] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#143066]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

 

      {/* HIGHLIGHTS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Why Choose eLive"
              title="A Creative Approach Built on Quality, Clarity, and Consistency"
              description="We focus on visual quality while keeping design practical, brand-aligned, and ready for real business use."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  className="rounded-[1.6rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_12px_28px_rgba(15,35,76,0.05)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/10 p-3 text-[#143066]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-[#143066]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Trusted By"
              title="Organizations and Brands We Have Designed For"
              description="Our creative design work has supported businesses, institutions, and event brands across different industries through professional branding, visual communication, and campaign design."
              align="center"
            />
          </Reveal>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,35,76,0.08)]">
              <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12">
                <div className="relative h-[220px] w-full md:h-[300px] lg:h-[360px]">
                  <Image
                    src="/design.png"
                    alt="Brands and organizations eLive has designed for"
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Process"
              title="A Structured Workflow from Brief to Final Delivery"
              description="A clear creative process helps us deliver design work that is polished, aligned, and ready for use."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <motion.div
                key={item.step}
                variants={scaleIn}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_28px_rgba(15,35,76,0.06)]"
              >
                <div className="inline-flex rounded-full bg-[#143066] px-4 py-2 text-sm font-black tracking-[0.18em] text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-black text-[#143066]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>


    </main>
  );
}