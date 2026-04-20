"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Smartphone,
  Ticket,
  Video,
  CheckCircle2,
  Zap,
  Users,
  MonitorPlay,
} from "lucide-react";

const solutions = [
  {
    title: "eLive SMS",
    href: "/solutions/sms",
    icon: MessageSquare,
    desc: "Run high-impact campaigns with promotions, reminders, alerts, and transactional messaging through a fast and reliable bulk SMS platform.",
  },
  {
    title: "eLive Card",
    href: "/solutions/card",
    icon: Ticket,
    desc: "Manage invitations and attendees seamlessly with RSVP tracking, QR-based verification, and smart ticket distribution.",
  },
  {
    title: "WhatsApp Communication",
    href: "/solutions/whatsapp",
    icon: Smartphone,
    desc: "Engage your audience instantly with event updates, customer support, and personalized messaging via WhatsApp.",
  },
  {
    title: "Live Media Support",
    href: "/solutions/media",
    icon: Video,
    desc: "Deliver immersive event experiences with live streaming, videography, photography, LED screens, and real-time projection.",
  },
];

const solutionBenefits = [
  {
    title: "Better Communication",
    desc: "Reach audiences quickly through structured digital channels that support updates, reminders, and engagement.",
    icon: Zap,
  },
  {
    title: "Stronger Coordination",
    desc: "Improve attendee management, response tracking, and event workflows through connected digital tools.",
    icon: Users,
  },
  {
    title: "Professional Delivery",
    desc: "Present your event or brand more effectively using solutions designed for clarity, control, and impact.",
    icon: MonitorPlay,
  },
];

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any },
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

export default function SolutionsPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-elive-primary)] shadow-[0_32px_90px_rgba(20,48,102,0.18)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="eLive solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07183D]/95 via-[#102B5A]/88 to-[#143066]/72" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(243,154,31,0.08),transparent_26%)]" />
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
                Our Solutions
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-4xl font-black leading-[1.05] md:text-5xl lg:text-[64px]"
              >
                <span className="block text-white">Smart Digital Solutions</span>
                <span className="mt-2 block text-[var(--color-elive-accent)]">
                  for Communication and Events
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg"
              >
                We design and deliver integrated digital tools that simplify
                communication, enhance engagement, and support successful events
                and business operations with greater efficiency and measurable
                impact.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(243,154,31,0.26)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)]"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent px-8 py-4 text-base font-semibold !text-white transition duration-300 hover:border-white hover:bg-white/12"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO / VALUE */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr,1.22fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Why Our Solutions"
              title="Built to Improve Communication, Coordination, and Audience Experience"
              description="Our solutions help businesses and event organizers operate more effectively through connected tools designed for visibility, engagement, and control."
            />
          </Reveal>

          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-[#143066] via-[#214A92] to-[#2957A4] p-8 text-white shadow-[0_24px_55px_rgba(20,48,102,0.16)] md:p-10 lg:p-12">
              <p className="text-base leading-8 text-white/95 md:text-[17px]">
                At eLive, we go beyond traditional services by building
                intelligent solutions that help organizations operate more
                efficiently. From messaging platforms to event technologies, our
                systems are designed to strengthen communication, improve
                coordination, and deliver professional audience experiences.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {solutionBenefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-sm"
                    >
                      <div className="inline-flex rounded-2xl bg-white/10 p-3 text-[var(--color-elive-accent)]">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-4 text-base font-black text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/85">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="bg-[#143066] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="What We Offer"
              title="Integrated Solutions for Modern Communication and Events"
              description="Explore our core solutions designed to help businesses, brands, and event organizers communicate better, operate smarter, and create stronger audience engagement."
              light
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                >
                  <Link href={solution.href} className="block h-full">
                    <div className="group h-full rounded-[1.8rem] border border-white/10 bg-white/5 p-8 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                      <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-4 transition duration-300 group-hover:bg-white/14">
                        <Icon size={24} className="text-[var(--color-elive-accent)]" />
                      </div>

                      <h3 className="text-2xl font-black leading-tight text-white">
                        {solution.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/85 md:text-[15px]">
                        {solution.desc}
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <span className="h-1 w-12 rounded-full bg-[var(--color-elive-accent)] transition-all duration-300 group-hover:w-20" />
                        <span className="text-sm font-semibold text-white/85">
                          Explore Solution
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-gradient-to-r from-[#102A5C] via-[#143066] to-[#2957A4] px-6 py-12 text-white shadow-[0_24px_55px_rgba(20,48,102,0.22)] md:px-10 lg:px-14">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeUp}>
              <SectionIntro
                eyebrow="Let’s Build Together"
                title="Need the Right Solution for Your Brand or Event?"
                description="From messaging and invitations to attendee workflows and media support, eLive helps you choose and deploy solutions that fit your goals."
                light
                titleClassName="!text-white max-w-3xl"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 lg:justify-end"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(243,154,31,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)]"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/8 px-7 py-3.5 text-sm font-semibold !text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/16"
              >
                About eLive
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}