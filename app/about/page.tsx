"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Eye,
  HeartHandshake,
  Lightbulb,
  Target,
  Users,
  Megaphone,
  Palette,
  Printer,
  MonitorPlay,
} from "lucide-react";

const stats = [
  { value: "3,945+", label: "Attendees Managed" },
  { value: "25+", label: "Events Supported" },
  { value: "6", label: "Core Service Areas" },
  { value: "End-to-End", label: "Integrated Delivery" },
];

const serviceHighlights = [
  {
    title: "Bulk SMS",
    desc: "Promotions, alerts, reminders, awareness campaigns, and customer notifications.",
    icon: Megaphone,
  },
  {
    title: "Event Attendee Management",
    desc: "Invitations, registrations, RSVP handling, QR scanning, ticket delivery, and analytics.",
    icon: Users,
  },
  {
    title: "Creative Design",
    desc: "Graphics, website design, motion graphics, brand identity, and 3D design services.",
    icon: Palette,
  },
  {
    title: "Multimedia Solutions",
    desc: "Live streaming, videography, photography, projection, digital marketing, and TV & LED rental.",
    icon: MonitorPlay,
  },
  {
    title: "Printing & Branding",
    desc: "Digital printing, offset printing, signage, office branding, and promotional products.",
    icon: Printer,
  },
];

const values = [
  {
    title: "Innovation",
    desc: "We combine creativity, technology, and strategy to deliver modern communication and marketing solutions.",
    icon: Lightbulb,
  },
  {
    title: "Reliability",
    desc: "We focus on dependable delivery, clear coordination, and practical execution that clients can trust.",
    icon: BadgeCheck,
  },
  {
    title: "Partnership",
    desc: "We do more than provide services. We build relationships that support long-term growth and brand success.",
    icon: HeartHandshake,
  },
  {
    title: "Results",
    desc: "We help brands and events connect, impress, engage, and grow through integrated solutions.",
    icon: Target,
  },
];

const differentiators = [
  "Integrated communication, branding, and event support",
  "Technology-driven workflows for messaging and attendee coordination",
  "Creative execution backed by practical delivery",
  "Reliable support for both corporate and social events",
];

const audiences = [
  "Corporate Organizations",
  "Events & Conferences",
  "NGOs & Development Programs",
  "Religious Institutions",
  "Educational Institutions",
  "Social & Private Events",
];

const processSteps = [
  {
    step: "01",
    title: "Plan & Setup",
    desc: "We define your communication or event objectives and build the right workflow around your goals.",
  },
  {
    step: "02",
    title: "Design & Customize",
    desc: "We prepare branded assets, invitations, messaging content, and audience touchpoints with clarity and consistency.",
  },
  {
    step: "03",
    title: "Engage & Deliver",
    desc: "We execute messaging, attendee coordination, creative support, and event communication through the right channels.",
  },
  {
    step: "04",
    title: "Track & Improve",
    desc: "We review attendance, delivery performance, engagement, and outcomes to improve future execution.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
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
            ? "text-[var(--color-elive-accent)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
            : "text-[var(--color-elive-accent)]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
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

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-elive-primary)] shadow-[0_32px_90px_rgba(20,48,102,0.2)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="eLive communication and event solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07183D]/95 via-[#102B5A]/88 to-[#143066]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(243,154,31,0.10),transparent_26%)]" />
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
                About eLive
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[64px]"
              >
                <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
                  Innovative Communication & Marketing Solutions
                </span>
                <span className="mt-2 block text-[var(--color-elive-accent)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
                  for Events and Businesses
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] md:text-lg"
              >
                We help organizations communicate clearly, engage audiences
                effectively, and deliver professional experiences through
                integrated messaging, branding, media, and technology-driven
                event support.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-base font-semibold text-[#143066] shadow-[0_14px_34px_rgba(243,154,31,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)] hover:text-white"
                >
                  Talk to Us
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/8 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/14"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* QUICK SERVICE SNAPSHOT */}
        <div className="mx-auto mt-8 max-w-7xl">
          <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {serviceHighlights.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(15,35,76,0.14)]"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-elive-accent)] to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="inline-flex rounded-2xl bg-[#143066]/10 p-3 text-[#143066] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#143066] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#143066]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-4 pb-16 pt-20 md:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.46fr,1fr] lg:items-start lg:gap-12">
            <Reveal>
              <SectionIntro
                eyebrow="Who We Are"
                title="A Trusted Partner for Communication, Branding, and Event Execution"
                description="eLive is a technology-driven communication and event solutions company focused on helping organizations deliver structured, engaging, and professional experiences."
                titleClassName="lg:text-[52px]"
              />
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#143066] via-[#214A92] to-[#2957A4] p-7 text-white shadow-[0_24px_55px_rgba(20,48,102,0.16)] md:p-10 lg:mt-12 lg:p-12">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-white blur-3xl" />
                  <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-[var(--color-elive-accent)] blur-3xl" />
                </div>

                <div className="relative">
                  <div className="grid gap-5">
                    <p className="text-base leading-8 text-white/90 md:text-[17px]">
                      We combine messaging technology, creative execution, and
                      operational support to simplify how brands communicate,
                      manage events, and build strong audience connections.
                    </p>

                    <p className="text-base leading-8 text-white/90 md:text-[17px]">
                      Our service ecosystem includes Bulk SMS, Event Attendee
                      Management, Printing, Branding, Creative Design, and
                      Multimedia Solutions, giving clients one reliable partner
                      for both communication and delivery.
                    </p>

                    <p className="text-base leading-8 text-white/90 md:text-[17px]">
                      By blending creativity, technology, and strategy, we help
                      organizations manage invitations, audience messaging,
                      event coordination, visual identity, and brand presentation
                      with greater clarity and consistency.
                    </p>

                    <p className="text-base leading-8 text-white/90 md:text-[17px]">
                      We do more than offer services. We build practical
                      partnerships that support visibility, performance, and
                      stronger audience experiences.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-elive-accent)]">
                        Our Position
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/95 md:text-[15px]">
                        More than a service provider, eLive operates as an
                        integrated communication and event solutions partner.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-elive-accent)]">
                        Our Approach
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/95 md:text-[15px]">
                        We combine creativity, technology, and execution to help
                        clients communicate with confidence and operate more
                        smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY ELIVE */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-start">
            <Reveal>
              <SectionIntro
                eyebrow="Why eLive"
                title="Built Around Clarity, Coordination, and Real Delivery"
                description="We combine communication tools, creative support, and operational execution in one connected model."
              />

              <div className="mt-8 grid gap-4">
                {differentiators.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-slate-200 bg-[var(--color-elive-light)] px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                    <p className="text-sm leading-7 text-slate-700 md:text-[15px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] bg-gradient-to-br from-[#143066] via-[#214A92] to-[#2957A4] p-8 text-white shadow-[0_22px_50px_rgba(20,48,102,0.18)] md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Users
                      size={24}
                      className="text-[var(--color-elive-accent)]"
                    />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    Our Delivery Focus
                  </h3>
                </div>

                <p className="mt-6 max-w-4xl text-base leading-8 text-white/85 md:text-lg">
                  We support organizations and event teams with practical
                  systems that improve audience communication, operational flow,
                  brand visibility, and overall experience quality.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-sm transition duration-300 hover:bg-white/15">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-elive-accent)]">
                      Communication
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/90 md:text-[15px]">
                      Messaging, invitations, reminders, alerts, and audience
                      updates.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-sm transition duration-300 hover:bg-white/15">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-elive-accent)]">
                      Execution
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/90 md:text-[15px]">
                      Event coordination, creative support, branding, print, and
                      media delivery.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[var(--color-elive-light)] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Impact"
              title="Experience That Builds Confidence"
              description="Our work reflects practical delivery across real campaigns, brands, and event environments."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group rounded-[1.6rem] border border-slate-200 bg-white p-7 text-center shadow-[0_10px_24px_rgba(15,35,76,0.05)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(15,35,76,0.12)]"
              >
                <div className="text-4xl font-bold text-[#143066] transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--color-elive-accent)] md:text-5xl">
                  {item.value}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600 md:text-[15px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Mission & Vision"
              title="Guided by Purpose, Built for Long-Term Impact"
              description="Our direction is shaped by a clear commitment to quality delivery, client growth, and innovation."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              variants={scaleIn}
              className="rounded-[1.8rem] bg-gradient-to-br from-[#143066] via-[#214A92] to-[#2957A4] p-8 text-white shadow-[0_22px_50px_rgba(20,48,102,0.18)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Target
                    size={24}
                    className="text-[var(--color-elive-accent)]"
                  />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Our Mission
                </h3>
              </div>

              <p className="mt-6 text-base leading-8 text-white/90">
                To deliver creative, reliable, and technology-driven solutions
                that help clients communicate effectively, enhance brand
                visibility, and achieve lasting success.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-white/90 md:text-[15px]">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                  <span>Seamless digital and print communication services</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                  <span>Customized marketing and branding solutions</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                  <span>Continuous innovation for evolving client needs</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                  <span>
                    Lasting relationships through excellence and integrity
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-[0_16px_36px_rgba(15,35,76,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#143066]/8 p-3 text-[#143066]">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#143066] md:text-3xl">
                  Our Vision
                </h3>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700">
                To be a leading provider of innovative communication and
                marketing solutions that empower businesses and events to
                connect, engage, and grow in the digital age.
              </p>

              <div className="mt-8 rounded-[1.4rem] border border-slate-200 bg-[var(--color-elive-light)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-elive-accent)]">
                  Our Direction
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600 md:text-[15px]">
                  We aim to be known for reliable delivery, strong presentation,
                  and smart communication systems that support both businesses
                  and events.
                </p>
              </div>
            </motion.div>
          </StaggerGroup>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Values"
              title="How We Approach Every Engagement"
              description="Our values shape how we serve clients, manage projects, and deliver quality experiences."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="rounded-[1.6rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/8 p-3 text-[#143066]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#143066] md:text-xl">
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

      {/* HOW WE WORK */}
      <section className="bg-[var(--color-elive-light)] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="How We Work"
              title="Simple Process. Strong Delivery."
              description="Our workflow is designed to simplify communication, event execution, and audience engagement from start to finish."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <motion.div
                key={item.step}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
              >
                <div className="text-2xl font-bold text-[var(--color-elive-accent)] md:text-3xl">
                  {item.step}
                </div>
                <div className="mt-4 h-[2px] w-10 rounded-full bg-[var(--color-elive-accent)]" />
                <h3 className="mt-3 text-lg font-bold text-[#143066] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Who We Work With"
              title="Trusted by Diverse Clients and Organizations"
              description="We support a wide range of audiences, institutions, and event organizers with tailored communication and brand solutions."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {audiences.map((item) => (
              <motion.div
                key={item}
                variants={scaleIn}
                className="rounded-full border border-slate-200 bg-[var(--color-elive-light)] px-5 py-3 text-sm font-semibold text-[#143066] shadow-[0_8px_18px_rgba(15,35,76,0.04)] md:text-base"
              >
                {item}
              </motion.div>
            ))}
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
                eyebrow="Let’s Work Together"
                title="Ready to Build Better Communication and Event Experiences?"
                description="From messaging and attendee management to branding, multimedia, and print execution, eLive is ready to support your next project."
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
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-sm font-semibold text-[#143066] shadow-[0_14px_30px_rgba(243,154,31,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)] hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/16"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}