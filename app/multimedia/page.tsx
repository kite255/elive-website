"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clapperboard,
  Megaphone,
  MonitorPlay,
  Tv,
  Video,
} from "lucide-react";

const services = [
  {
    title: "Live Streaming",
    desc: "Deliver real-time event coverage across digital platforms for conferences, corporate functions, worship gatherings, launches, and public events.",
    icon: Video,
  },
  {
    title: "Videography",
    desc: "Capture your event through professional video coverage, highlight reels, interviews, and polished post-event storytelling content.",
    icon: Clapperboard,
  },
  {
    title: "Photography",
    desc: "Preserve key moments, guest experiences, brand presence, and event atmosphere with high-quality professional photography.",
    icon: Camera,
  },
  {
    title: "TV & LED Displays",
    desc: "Improve audience visibility with screen solutions for presentations, announcements, branded visuals, and live event feeds.",
    icon: Tv,
  },
  {
    title: "Realtime Projection",
    desc: "Support large audiences with clear projection for presentations, stage visuals, live camera coverage, and multimedia content.",
    icon: MonitorPlay,
  },
  {
    title: "Digital Promotion",
    desc: "Extend event visibility through structured digital promotion, audience awareness campaigns, and online communication support.",
    icon: Megaphone,
  },
];

const solutions = [
  "Multi-platform live streaming support",
  "Event photography and videography coverage",
  "TV, LED display, and screen setup",
  "Realtime projection for large venues",
  "Audience-facing visual presentation support",
  "Digital marketing and event awareness support",
  "Coverage for corporate and institutional events",
  "Support for churches, weddings, and social functions",
];

const benefits = [
  {
    title: "Professional Execution",
    desc: "We manage multimedia delivery with planning, technical preparation, and attention to presentation quality.",
  },
  {
    title: "Audience Experience",
    desc: "Our solutions improve how audiences see, follow, and engage with the event environment.",
  },
  {
    title: "Reliable Setup",
    desc: "We support dependable streaming, display systems, projection, and coordinated on-site media coverage.",
  },
  {
    title: "Flexible Coverage",
    desc: "Our multimedia support adapts to corporate, social, faith-based, institutional, and public event settings.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Review",
    desc: "We assess the event type, venue, audience size, and media expectations before proposing the setup.",
  },
  {
    step: "02",
    title: "Media Planning",
    desc: "We organize equipment needs, camera positions, display requirements, and production priorities.",
  },
  {
    step: "03",
    title: "On-Site Execution",
    desc: "Our team handles live coverage, visual support, and technical coordination during the event.",
  },
  {
    step: "04",
    title: "Final Delivery",
    desc: "We provide recorded content, edited outputs, and supporting media assets for post-event use.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as any,
    },
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
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  titleClassName?: string;
};

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  titleClassName = "",
}: SectionIntroProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.22em] md:text-[15px] ${
          light
            ? "!text-[var(--color-elive-accent)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
            : "text-[var(--color-elive-accent)]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-3xl font-black leading-tight md:text-4xl lg:text-5xl ${
          light
            ? "!text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.30)]"
            : "text-[#143066]"
        } ${titleClassName}`}
      >
        {title}
      </h2>

      <div
        className={`mt-4 h-1.5 w-24 rounded-full bg-[var(--color-elive-accent)] ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {description ? (
        <p
          className={`mt-5 text-base leading-8 md:text-[17px] ${
            light
              ? "!text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
              : "text-slate-600"
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
      viewport={{ once: true, amount: 0.2 }}
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

export default function MultimediaPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-elive-primary)] shadow-[0_32px_90px_rgba(20,48,102,0.18)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="eLive multimedia solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07183D]/95 via-[#102B5A]/88 to-[#143066]/72" />
          </div>

          <div className="relative px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-elive-accent)]"
              >
                Multimedia Solutions
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-4xl font-black leading-tight md:text-5xl lg:text-[64px] lg:leading-[1.05]"
              >
                <span className="block text-white">
                  Professional Multimedia Support
                </span>
                <span className="block text-[var(--color-elive-accent)]">
                  for Events, Campaigns, and Live Experiences
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg"
              >
                eLive provides live streaming, videography, photography, screen
                display, projection, and digital promotion support to help
                organizations deliver stronger, clearer, and more engaging event
                experiences.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
               <Link
    href="/contact"
    className="group inline-flex items-center justify-center rounded-full bg-[var(--color-elive-accent)] px-7 py-3 text-sm font-semibold !text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)]"
  >
    Request Multimedia Support
    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
  </Link>

  {/* SECONDARY BUTTON */}
  <Link
    href="#multimedia-features"
    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold !text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
  >
    View Features
  </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Multimedia Overview"
              title="A Structured Way to Deliver Stronger Event Presentation"
              description="Our multimedia solutions help event organizers improve visibility, communication quality, audience engagement, and professional presentation."
            />
          </Reveal>
<Reveal>
  <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,35,76,0.06)] md:p-10">
    
    <h3 className="text-2xl font-black leading-tight text-[#143066] md:text-3xl">
      Built for live delivery, visual clarity, and audience engagement
    </h3>

    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-[17px]">
      Whether you are organizing a conference, church gathering,
      wedding, seminar, launch, or public function, eLive helps you
      present the event in a more polished and professional way.
    </p>

    <div className="mt-8 grid gap-4">
      {[
        "Professional live coverage and media support",
        "Better audience visibility and presentation flow",
        "Flexible setup for formal and social event environments",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl bg-[var(--color-elive-light)] px-5 py-4 transition-all duration-200 hover:bg-slate-100"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
          <p className="text-sm leading-7 text-[#143066] md:text-[15px]">
            {item}
          </p>
        </div>
      ))}
    </div>

  </div>
</Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="multimedia-features"
        className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Core Services"
              title="What the Multimedia Solution Supports"
              description="Designed to strengthen event presentation, audience communication, and live media coverage."
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
                  whileHover={{ y: -8 }}
                  className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(15,35,76,0.14)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/10 p-3 text-[#143066] transition-all duration-300 group-hover:bg-[#143066] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#143066]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>


      {/* BENEFITS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Why eLive Multimedia"
              title="A Better Experience for Organizers and Audiences"
              description="This solution improves how events are presented, experienced, and remembered."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="rounded-[1.6rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_10px_24px_rgba(15,35,76,0.05)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
              >
                <h3 className="text-lg font-black text-[#143066] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Process"
              title="How We Deliver Multimedia Support"
              description="We follow a practical process that helps ensure the setup is clear, coordinated, and professionally delivered."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <motion.div
                key={item.step}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
              >
                <div className="text-2xl font-black text-[var(--color-elive-accent)] md:text-3xl">
                  {item.step}
                </div>
                <h3 className="mt-3 text-lg font-black text-[#143066] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

    </main>
  );
}