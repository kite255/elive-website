"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Eye,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Client-Centered Delivery",
    desc: "We tailor every solution to the goals, audience, and operational needs of each client.",
    icon: Users,
  },
  {
    title: "Innovation with Purpose",
    desc: "We combine creativity and technology to deliver solutions that are practical, modern, and effective.",
    icon: Lightbulb,
  },
  {
    title: "Reliable Execution",
    desc: "We focus on consistency, professionalism, and detail at every stage of delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Partnership",
    desc: "We aim to build trusted relationships by supporting our clients beyond a single project or event.",
    icon: BadgeCheck,
  },
];

const strengths = [
  "Integrated communication and event support",
  "Bulk SMS and audience engagement solutions",
  "RSVP, QR verification, and attendee coordination",
  "Branding, printing, and corporate visibility support",
  "Live streaming, media, and digital campaign execution",
  "Professional delivery tailored to each client’s needs",
];

const milestones = [
  {
    value: 6895,
    suffix: "+",
    label: "Attendees Successfully Managed",
  },
  {
    value: 46,
    suffix: "+",
    label: "Events Delivered",
  },
  {
    value: 4,
    suffix: "+",
    label: "Core Service Solutions",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment to Client Success",
  },
];

const teamHighlights = [
  {
    title: "Communication Solutions",
    desc: "We help organizations communicate clearly through messaging, updates, invitations, and campaign support.",
  },
  {
    title: "Event Operations",
    desc: "We structure attendee workflows, check-ins, coordination, and on-ground support for better event execution.",
  },
  {
    title: "Brand Visibility",
    desc: "We strengthen brand presence through design, printing, signage, and promotional materials.",
  },
  {
    title: "Media Support",
    desc: "We enhance experiences with photography, videography, live streaming, and event media production.",
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
            : "text-[#161943]"
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
        <div className="relative mx-auto min-h-[520px] max-w-7xl overflow-hidden rounded-[2rem] bg-[#161943] shadow-[0_24px_70px_rgba(15,35,76,0.16)] md:min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="/corporate-event.jpg"
              alt="eLive business and event solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#11183b]/72" />
          </div>

          <div className="relative flex min-h-[520px] items-center px-6 py-16 md:min-h-[600px] md:px-10 lg:px-14">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                  About eLive
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-[2.5rem] font-medium leading-[1.06] tracking-[-0.03em] md:text-[3.35rem] lg:text-[3.7rem]"
              >
                <span className="block text-white">
                  Technology, Communication & Creative Solutions
                </span>
                <span className="mt-2 block text-[var(--color-elive-accent)]">
                  Built Around Your Business
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg"
              >
                eLive helps businesses, institutions, and event organizers communicate better through messaging, event technology, branding, creative design, and professional media support.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-elive-accent)] px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[var(--color-elive-accent-dark)]"
                >
                  <span className="text-white">Work With Us</span>
                  <ArrowRight size={18} className="text-white" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/35 bg-white/10 px-7 py-4 text-base font-medium !text-white backdrop-blur-sm transition duration-300 hover:border-white/60 hover:bg-white/15"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--color-elive-accent)]" />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Mission & Vision"
              title="What Guides Our Work"
              description="Our focus is not only on delivering services, but on helping clients communicate better, operate more effectively, and grow with confidence."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="rounded-[1.8rem] border border-slate-200 bg-[var(--color-elive-light)] p-7 shadow-[0_12px_28px_rgba(15,35,76,0.05)] md:p-8"
            >
              <div className="inline-flex rounded-2xl bg-[#161943]/8 p-3 text-[#161943]">
                <Target size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#161943]">
                Our Mission
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-600 md:text-base">
                To deliver creative, reliable, and technology-driven solutions
                that help our clients communicate effectively, strengthen brand
                visibility, and achieve lasting impact.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="rounded-[1.8rem] border border-slate-200 bg-[var(--color-elive-light)] p-7 shadow-[0_12px_28px_rgba(15,35,76,0.05)] md:p-8"
            >
              <div className="inline-flex rounded-2xl bg-[#161943]/8 p-3 text-[#161943]">
                <Eye size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#161943]">
                Our Vision
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-600 md:text-base">
                To be a leading provider of innovative communication and
                marketing solutions that empower businesses and events to
                connect, engage, and grow in the digital age.
              </p>
            </motion.div>
          </StaggerGroup>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[var(--color-elive-light)] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Values"
              title="Principles That Shape Our Delivery"
              description="Our work is guided by clarity, professionalism, innovation, and a strong commitment to client success."
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
                  whileHover={{ y: -6 }}
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#161943]/8 p-3 text-[#161943]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#161943] md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Our Strengths"
              title="What Clients Can Rely On"
              description="We bring together the essential tools and support businesses and events need to communicate and execute with confidence."
            />
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <motion.div
                key={item}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[var(--color-elive-light)] px-5 py-4 text-[15px] font-medium text-[#161943] shadow-[0_10px_24px_rgba(15,35,76,0.05)] transition-all duration-300 hover:shadow-[0_16px_30px_rgba(15,35,76,0.1)] md:text-base"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                <span>{item}</span>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="relative overflow-hidden bg-[#161943] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-0 h-72 w-72 rounded-full bg-[var(--color-elive-accent)]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Progress"
              title="Growing Through Delivery and Trust"
              description="Our track record reflects practical experience, real project support, and a growing ability to serve brands and events with confidence."
              align="center"
              light
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="rounded-[1.6rem] border border-white/15 bg-white/10 p-7 text-center shadow-[0_12px_28px_rgba(0,0,0,0.14)] backdrop-blur-md transition duration-300 hover:bg-white/14"
              >
                <div className="text-4xl font-black text-white md:text-5xl">
                  <AnimatedNumber value={item.value} suffix={item.suffix} />
                </div>

                <p className="mt-2 text-sm font-medium text-white/80 md:text-[15px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHAT WE BRING */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="What We Bring"
              title="A Team Focused on Results, Coordination, and Presentation"
              description="Our capabilities are built around helping clients engage audiences, manage experiences, and present their brand professionally."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamHighlights.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="rounded-[1.6rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
              >
                <div className="inline-flex rounded-2xl bg-[#161943]/8 p-3 text-[#161943]">
                  <Building2 size={22} />
                </div>

                <h3 className="mt-4 text-lg font-black text-[#161943] md:text-xl">
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
    </main>
  );
}

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const duration = 1200;
        const frameRate = 20;
        const increment = value / (duration / frameRate);

        const timer = setInterval(() => {
          start += increment;

          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, frameRate);

        setHasAnimated(true);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}